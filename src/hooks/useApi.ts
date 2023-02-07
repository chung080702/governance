import axios from 'axios';
import { useMemo } from 'react';
import { useWeb3Context } from 'src/contexts/web3-context';

export function useApi() {
  const { chain } = useWeb3Context();

  return useMemo(() => {
    const baseURL = chain?.isTestnet
      ? 'https://scoringapi.trava.finance/travadao_testnet'
      : 'https://scoringapi.trava.finance/travadao';
    return {
      dashboardClient: axios.create({ baseURL: `${baseURL}/v1/dashboard/` }),
      // dashboardClient: axios.create({ baseURL: 'https://scoringapi.trava.finance/travadao/v1/dashboard/' }),
      client: axios.create({ baseURL: baseURL }),
    };
  }, [chain]);
}
