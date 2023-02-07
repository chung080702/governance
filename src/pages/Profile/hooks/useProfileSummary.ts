import { useEffect, useState } from 'react';
import { FetchingStatus } from 'src/constants';
import { useApi } from 'src/hooks/useApi';
import { useVeContract } from 'src/hooks/useContract';
import { BN } from 'src/utils';
import { getAvgTime } from 'src/utils/lockTime';
import { ProfileSummaryData } from './types';

const initData: ProfileSummaryData = {
  rank: '---',
  veTravaNFT: '',
  avgTimeLock: '',
  votingPower: '',
};

export function useProfileSummary(address: string) {
  const [error, setError] = useState<Error | undefined>();
  const [status, setStatus] = useState<FetchingStatus>(FetchingStatus.IDLE);
  const [data, setData] = useState<ProfileSummaryData>(initData);
  const veTravaContract = useVeContract();
  const { dashboardClient } = useApi();

  async function fetchData() {
    try {
      if (status === FetchingStatus.IDLE || status === FetchingStatus.FAILED) {
        setStatus(FetchingStatus.FETCHING);
      } else if (status === FetchingStatus.SUCCESS) {
        setStatus(FetchingStatus.UPDATING);
      }
      const [resApi, veTravaNFT] = await Promise.all([
        dashboardClient.get('/histogram/voting-power'),
        veTravaContract?.balanceOf(address),
      ]);

      const total_wallets = resApi.data.total_wallets || 0;
      const top_wallets = resApi.data.top_wallets || [];

      const result: ProfileSummaryData = {
        rank: '---',
        veTravaNFT: BN(veTravaNFT?._hex).toString(),
        avgTimeLock: '',
        votingPower: '',
      };

      for (let i = 0; i < total_wallets; i++) {
        if (top_wallets[i].address == address) {
          result.rank = (i + 1).toString();
          result.avgTimeLock = getAvgTime(top_wallets[i].avg_time_lock).toString();
          result.votingPower = top_wallets[i].voting_power.toString();
          break;
        }
      }

      setData(result);
      setStatus(FetchingStatus.SUCCESS);
    } catch (err) {
      console.debug(error);
      setError(error as Error);
      setData(initData);
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
