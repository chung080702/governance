export interface Proposal {
  id: string;
  status: number;
  againstVotes: string;
  againstVotesPercentage: string;
  forVotes: string;
  forVotesPercentage: string;
  cancelled: boolean;
  duration: number;
  executed: boolean;
  eta: number;
  proposer: string;
  startBlock: string;
  quorum: string;
  title: string;
  createdAt: number | string;
  stateTimestamp: number | string;
  stateText: string;
}

export interface Poll {
  id: number,
  publicKey: string,
  encryptedVote: string,
  numberVote: number,
  daoManager: string,
  startTimeStamp: number,
  duration: number,
  eta: number,
  canceled: boolean,
  tittle: string,
  content: string,
  isTokenVote: boolean,
  status: number
}
// uint256 id;
//         uint256 publicKey;
//         uint256 encryptedVote;
//         int256 numberVote;
//         address daoManager;
//         uint32 startTimeStamp;
//         uint32 duration;
//         uint32 eta;
//         bool canceled;
//         string tittle;
//         string content;
//         bool isTokenVote;