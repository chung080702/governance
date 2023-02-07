export interface ProposalHisortyProfile {
  id: string;
  title: string;
  status: number | string;
  choice: 'For' | 'Against';
  weight: string;
}

export interface TransactionProfile {
  action: string;
  age: string;
  resultValue: string;
  resultImage: 'BlueCirle' | 'RedCirle' | 'UpArrow' | 'DownArrow';
}

export interface ProfileData {
  veTravaNFT: string;
  rank: string;
  votingHistory: ProposalHisortyProfile[];
  transactionList: TransactionProfile[];
}

export interface ProfileSummaryData {
  veTravaNFT: string;
  rank: string;
  avgTimeLock: string;
  votingPower: string;
}
