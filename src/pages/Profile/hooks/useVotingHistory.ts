import { useEffect, useState } from 'react';
import { FetchingStatus } from 'src/constants';
import { useApi } from 'src/hooks/useApi';
import { ProposalHisortyProfile } from './types';

export function useVotingHistory(address: string) {
  const [error, setError] = useState<Error | undefined>();
  const [status, setStatus] = useState<FetchingStatus>(FetchingStatus.IDLE);
  const [data, setData] = useState<ProposalHisortyProfile[]>([]);

  const { dashboardClient } = useApi();

  async function fetchData() {
    try {
      if (status === FetchingStatus.IDLE || status === FetchingStatus.FAILED) {
        setStatus(FetchingStatus.FETCHING);
      } else if (status === FetchingStatus.SUCCESS) {
        setStatus(FetchingStatus.UPDATING);
      }
      const resApiVoteHistory = await dashboardClient.get('/proposals/user/' + address);

      const voteHistory = resApiVoteHistory.data.votes || [];

      const listDetailProprosal = await Promise.all(
        voteHistory.map((item: any) => {
          return dashboardClient.get('/proposals/' + item?.proposal_id || '').then((response) => response.data);
        })
      );
      // console.log(listDetailProprosal);

      const result: ProposalHisortyProfile[] = voteHistory.map((item: any, index: number) => {
        return {
          id: item?.proposal_id || '',
          title: listDetailProprosal[index]?.proposal_info?.content?.title || '',
          choice: item?.vote ? 'For' : 'Against',
          status:
            listDetailProprosal[index]?.proposal_info?.states[
              Object.keys(listDetailProprosal[index]?.proposal_info?.states).pop() || 0
            ].state,
          weight: item.weight || '',
        } as ProposalHisortyProfile;
      });
      // console.log(result);
      setData(result);
      setStatus(FetchingStatus.SUCCESS);
    } catch (err) {
      console.debug(error);
      setError(error as Error);
      setData([]);
      setStatus(FetchingStatus.FAILED);
    }
  }
  useEffect(() => {
    fetchData();
  }, [address]);

  return {
    status,
    data,
    error,
    loading: status === FetchingStatus.IDLE || status === FetchingStatus.FETCHING,
  };
}
