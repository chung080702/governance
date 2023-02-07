export interface ProposalContent {
  title: string;
  authors: string[];
  organizations: string[];
  description: string;
  discussions: string;
  shortDescription: string;
  preview: string;
  salt: string;
  created: string;
  ipfsCid: string;
}

export interface ListVotingItem {
  address: string;
  timestamp: number;
  hasVoted: boolean;
  encyptedVote: string;
}

export interface StatusProposal {
  status: number | string;
  tx: string;
  timestamp: string | number;
}

export interface UserVoteInfor {
  hasVoted: boolean;
  encryptedVote: string;
  votePowers: string;
  timeStamp: number;
}

export interface VotingResultDetail {
  forVotes: number | string;
  startBlock: string;
  forVotesPercentage: number | string;
  againstVotes: number | string;
  againstVotesPercentage: number | string;
  status: number | string;
  quorum: string;
  currentVotes: string;
  totalVotingPower: string;
  totalVote: string;
}
