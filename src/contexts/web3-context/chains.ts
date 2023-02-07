import { AddEthereumChainParameter } from '@web3-react/types';

const ETH: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Ethereum',
  symbol: 'ETH',
  decimals: 18,
};

const BNB: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'BNB',
  symbol: 'BNB',
  decimals: 18,
};

const FTM: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Fantom',
  symbol: 'FTM',
  decimals: 18,
};

const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Matic',
  symbol: 'MATIC',
  decimals: 18,
};

interface BasicChainInformation {
  urls: string[];
  name: string;
  isTestnet?: boolean;
}

export interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency'];
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls'];
}

function isExtendedChainInformation(
  chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
  return !!(chainInformation as ExtendedChainInformation).nativeCurrency;
}

function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
  const chainInformation = CHAINS[chainId];
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    };
  } else {
    return chainId;
  }
}

const CHAIN_IDS = {
  ETH_MAINNET: 1,
  BSC_MAINNET: 56,
  BSC_TESTNET: 97,
  FTM_MAINNET: 250,
  MATIC_MAINNET: 137,
  MATIC_TESTNET: 80001,
};

const CHAINS: { [chainId: number]: ExtendedChainInformation } = {
  [CHAIN_IDS.ETH_MAINNET]: {
    name: 'ETH Mainnet',
    blockExplorerUrls: ['https://etherscan.io'],
    nativeCurrency: ETH,
    urls: [
      process.env.INFURA_KEY ? `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}` : '',
      'https://cloudflare-eth.com',
    ].filter((url) => url !== ''),
  },
  [CHAIN_IDS.BSC_MAINNET]: {
    name: 'BSC Mainnet',
    blockExplorerUrls: ['https://bscscan.com'],
    nativeCurrency: BNB,
    urls: [
      'https://bsc-dataseed.binance.org/',
      'https://bsc-dataseed1.binance.org/',
      'https://bsc-dataseed1.defibit.io/',
      'https://bsc-dataseed2.defibit.io/',
      'https://bsc-dataseed1.ninicoin.io/',
      'https://bsc-dataseed2.ninicoin.io/',
    ],
  },
  [CHAIN_IDS.BSC_TESTNET]: {
    name: 'BSC Testnet',
    blockExplorerUrls: ['https://testnet.bscscan.com'],
    nativeCurrency: BNB,
    urls: [
      'https://data-seed-prebsc-1-s1.binance.org:8545/',
      // 'https://data-seed-prebsc-2-s1.binance.org:8545/',
      'https://data-seed-prebsc-1-s2.binance.org:8545/',
      'https://data-seed-prebsc-2-s2.binance.org:8545/',
      'https://data-seed-prebsc-1-s3.binance.org:8545/',
      'https://data-seed-prebsc-2-s3.binance.org:8545/',
    ],
    isTestnet: true,
  },
  [CHAIN_IDS.FTM_MAINNET]: {
    name: 'FTM Mainnet',
    blockExplorerUrls: ['https://ftmscan.com'],
    nativeCurrency: FTM,
    urls: ['https://rpc.ftm.tools/'],
  },
  [CHAIN_IDS.MATIC_MAINNET]: {
    name: 'Polygon',
    blockExplorerUrls: ['https://polygonscan.com/'],
    nativeCurrency: MATIC,
    urls: [
      'https://polygon-rpc.com/',
      'https://rpc-mainnet.matic.network',
      'https://rpc-mainnet.maticvigil.com',
      'https://matic-mainnet.chainstacklabs.com',
      'https://matic-mainnet-full-rpc.bwarelabs.com',
    ],
  },
  [CHAIN_IDS.MATIC_TESTNET]: {
    name: 'Mumbai Testnet',
    blockExplorerUrls: ['https://mumbai.polygonscan.com'],
    nativeCurrency: MATIC,
    urls: [
      'https://rpc-mumbai.matic.today',
      'https://matic-mumbai.chainstacklabs.com',
      'https://rpc-mumbai.maticvigil.com',
      'https://matic-testnet-archive-rpc.bwarelabs.com',
    ],
    isTestnet: true,
  },
};

export { CHAINS, CHAIN_IDS, getAddChainParameters };
