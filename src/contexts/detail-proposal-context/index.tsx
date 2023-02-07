import { id } from 'ethers/lib/utils';
import { createContext, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE18, FetchingStatus } from 'src/constants';
import { BaseContextProps } from 'src/global';
import { useMulticall } from 'src/hooks/multicall';
import { useApi } from 'src/hooks/useApi';
import { useGovernorDelegateContract, useVotingContract, useVotingStrategyContract } from 'src/hooks/useContract';
import { BN } from 'src/utils';
import { useCacheContext, useCacheData } from '../cache-context';
import { useVoteContext } from '../vote-context';
import { Poll } from '../vote-context/types';
import { useWeb3Context } from '../web3-context';
import { ListVotingItem, ProposalContent, StatusProposal, UserVoteInfor, VotingResultDetail } from './types';

interface DetailProposalContextData {
  statusCallAPI: FetchingStatus;
  statusCallContract: FetchingStatus;
  data: {
    proposalContent: Poll;
    statusHistory: StatusProposal[];
    userInfor: UserVoteInfor;
    votingResult: VotingResultDetail;
    listVoting: ListVotingItem[];
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  fetch: (idProposal: string) => Promise<void>;
}
const addresses: any[3] = ['0x6d9175EE493c9f8730202Cf807b853F9Ce651B42', '0xfaeef5C774cE43ba29AB75b928194B9f3D2c5528', '0xfA2a706B4eA31F783dA3ed058078F1042aDD09AB'];

const DetailProposalContext = createContext({} as DetailProposalContextData);

export function DetailProposalProvider({ children }: BaseContextProps) {
  const { address, rpcProvider } = useWeb3Context();
  const [statusCallAPI, setStatusCallAPI] = useState<FetchingStatus>(FetchingStatus.IDLE);
  const [statusCallContract, setStatusCallContract] = useState<FetchingStatus>(FetchingStatus.IDLE);
  const [error, setError] = useState<Error | undefined>();
  const data = useCacheData('detailProposal', {});
  const multicall = useMulticall();
  const { push, clear } = useCacheContext();
  const votingContract = useVotingContract();
  const { dashboardClient } = useApi();
  const { data: dataList } = useVoteContext();

  async function fetchData(idProposal: string) {
    if (!votingContract) {
      throw ('failed connect')
    }
    if (statusCallAPI === FetchingStatus.IDLE || statusCallAPI === FetchingStatus.FAILED) {
      setStatusCallAPI(FetchingStatus.FETCHING);
    } else {
      setStatusCallAPI(FetchingStatus.UPDATING);
    }
    const data = await votingContract.polls(idProposal);
    const state = (await votingContract?.state(idProposal))

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


    const userInfo = await votingContract?.getReceipt(address || '', idProposal)
    const votePowers = await votingContract?.getVotingPower(idProposal, [], address || '')
    push('detailProposal.proposalContent', poll)
    push('detailProposal.userInfor', {
      hasVoted: userInfo?.hasVoted,
      encryptedVote: userInfo?.encryptedVote.toString().slice(0, 20) + '...',
      votePowers: userInfo?.hasVoted ? userInfo?.votePowers?.toString() : votePowers?.toString(),
      timeStamp: userInfo?.timeStamp || ''
    })
    const listVoting: ListVotingItem[] = await Promise.all(addresses.map(async (address: string) => {
      const info = await votingContract?.getReceipt(address || '', idProposal)
      return {
        address: address,
        hasVoted: info?.hasVoted,
        timestamp: info?.timeStamp,
        encyptedVote: info?.encryptedVote.toString()
      }
    }))
    push('detailProposal.listVoting', listVoting)
    console.log(listVoting)
    setStatusCallContract(FetchingStatus.SUCCESS);
    setStatusCallAPI(FetchingStatus.SUCCESS);
    console.log(statusCallContract)
    // const startBlock = BN(dataContractProposal?.startBlock._hex).toString();
    // if (currentblock && currentblock < Number(startBlock)) {
    //   getUserInforAndVotingResult(idProposal, currentblock.toString());
    // } else {
    //   getUserInforAndVotingResult(idProposal, startBlock);
    // }
  }


  return (
    <DetailProposalContext.Provider
      value={{
        statusCallAPI,
        statusCallContract,
        data,
        error,
        fetch: (idProposal) => fetchData(idProposal),
      }}
    >
      {children}
    </DetailProposalContext.Provider>
  );
}

export const useDetailProposalContext = () => useContext(DetailProposalContext);
