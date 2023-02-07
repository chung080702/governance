import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { SnackbarKey, SnackbarProvider } from 'notistack';
import React from 'react';
import App from './App';
import ErrorNotifier from './components/ErrorNotifier';
import HighchartsGlobalConfig from './components/highcharts/HighchartsGlobalConfig';
import { isEnableTestnet } from './constants';
import { AppProvider } from './contexts/app-context';
import { CacheProvider } from './contexts/cache-context';
import { LockerProvider } from './contexts/locker-context';
import TokenPriceProvider from './contexts/token-price-context';
import { VoteProvider } from './contexts/vote-context';
import { Web3Provider } from './contexts/web3-context';
import { CHAIN_IDS } from './contexts/web3-context/chains';
import { DetailProposalProvider } from 'src/contexts/detail-proposal-context';

let allowedChainIds: number[] = [CHAIN_IDS.BSC_MAINNET];
if (isEnableTestnet) {
  allowedChainIds = allowedChainIds.concat([CHAIN_IDS.BSC_TESTNET]);
}

const notistackRef = React.createRef<SnackbarProvider>();
const onClickDismiss = (key: SnackbarKey) => () => {
  notistackRef?.current?.closeSnackbar(key);
};

function Root() {
  return (
    <Web3Provider allowedChainIds={allowedChainIds} defaultChainId={allowedChainIds[0]} autoSwitchNetwork>
      <CacheProvider>
        <AppProvider>
          <SnackbarProvider
            maxSnack={3}
            ref={notistackRef}
            preventDuplicate
            action={(key) => (
              <IconButton size="small" color="inherit" onClick={onClickDismiss(key)}>
                <CloseIcon style={{ cursor: 'pointer' }} />
              </IconButton>
            )}
          >
            <TokenPriceProvider>
              <LockerProvider>
                <VoteProvider>
                  <DetailProposalProvider>
                    <HighchartsGlobalConfig />
                    <App />
                    <ErrorNotifier />
                  </DetailProposalProvider>
                </VoteProvider>
              </LockerProvider>
            </TokenPriceProvider>
          </SnackbarProvider>
        </AppProvider>
      </CacheProvider>
    </Web3Provider>
  );
}

export default Root;
