import BigNumber from 'bignumber.js';
import { createContext, useContext, useState } from 'react';
import { BASE18, FetchingStatus } from 'src/constants';
import { BaseContextProps } from 'src/global';
import { useMulticall } from 'src/hooks/multicall';
import { useApi } from 'src/hooks/useApi';
import { useGovernorDelegateContract, useVotingStrategyContract, useVotingContract } from 'src/hooks/useContract';
import { BN } from 'src/utils';
import { useCacheContext, useCacheData } from '../cache-context';
import { decodeProposalList } from './decode';
import { Proposal, Poll } from './types';

interface VoteContextData {
  status: FetchingStatus;
  data: {
    proposalList: Poll[];
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  fetch: () => Promise<void>;
}

const VoteContext = createContext({} as VoteContextData);

export function VoteProvider({ children }: BaseContextProps) {
  const [status, setStatus] = useState<FetchingStatus>(FetchingStatus.IDLE);
  const [error, setError] = useState<Error | undefined>();
  const data = useCacheData('vote', { proposalList: [] });
  const multicall = useMulticall();
  const { push, clear } = useCacheContext();

  const votingContract = useVotingContract()


  const fetchData = async () => {
    try {
      if (!votingContract) {
        throw new Error('Connection error');
      }
      if (status === FetchingStatus.IDLE || status === FetchingStatus.FAILED) {
        setStatus(FetchingStatus.FETCHING);
      } else {
        setStatus(FetchingStatus.UPDATING);
      }

      const pollCount = (await votingContract.pollCount()).toNumber();
      const polls: Poll[] = []

      for (let i: number = pollCount; i; i--) {
        const data = await votingContract.polls(i);
        const state = (await votingContract.state(i))

        const poll: Poll = {
          id: data.id.toNumber(),
          publicKey: data.publicKey.toString(),
          encryptedVote: data.encryptedVote.toString(),
          numberVote: data.numberVote.toNumber(),
          daoManager: data.daoManager.toString(),
          startTimeStamp: data.startTimeStamp,
          duration: data.duration,
          eta: data.eta,
          canceled: data.canceled,
          tittle: data.tittle,
          content: data.content,
          isTokenVote: data.isTokenVote,
          status: state
        }

        polls.push(poll);
      }

      push('vote.proposalList', polls);
      setStatus(FetchingStatus.SUCCESS);
      setError(undefined);
    } catch (error) {
      console.error('Failed to fetch vote data', error);
      setError(error as Error);
      setStatus(FetchingStatus.FAILED);
      clear('vote.proposalList');
    }
  };

  return (
    <VoteContext.Provider
      value={{
        status,
        data,
        error,
        fetch: fetchData,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
}

export const useVoteContext = () => useContext(VoteContext);
