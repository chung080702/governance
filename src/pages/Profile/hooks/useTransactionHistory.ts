import { useEffect, useState } from 'react';
import { FetchingStatus } from 'src/constants';
import { useApi } from 'src/hooks/useApi';
import { getAge } from 'src/utils/lockTime';
import { TransactionProfile } from './types';

export function useTransactionHistory(address: string) {
  const [error, setError] = useState<Error | undefined>();
  const [status, setStatus] = useState<FetchingStatus>(FetchingStatus.IDLE);
  const [data, setData] = useState<TransactionProfile[]>([]);

  const { dashboardClient } = useApi();

  async function fetchData() {
    try {
      if (status === FetchingStatus.IDLE || status === FetchingStatus.FAILED) {
        setStatus(FetchingStatus.FETCHING);
      } else if (status === FetchingStatus.SUCCESS) {
        setStatus(FetchingStatus.UPDATING);
      }
      const resApi = await dashboardClient.get('/profile/' + address + '?n_actions=12');

      // console.log(resApi.data);
      const listTxAction = resApi.data?.actions || [];

      const result: TransactionProfile[] = listTxAction.map((item: any) => {
        return {
          action: item.action || '---',
          age: getAge(item.created_at * 1000),
          resultValue: item.power,
          resultImage:
            item.action == 'Voted' ? (item.direct ? 'BlueCirle' : 'RedCirle') : item.direct ? 'UpArrow' : 'DownArrow',
        } as TransactionProfile;
      });

      setData(result);
      setStatus(FetchingStatus.SUCCESS);
    } catch (err) {
      // console.debug(error);
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
