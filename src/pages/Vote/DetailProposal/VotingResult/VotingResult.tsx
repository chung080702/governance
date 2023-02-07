import { Box, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import Failed from 'src/components/Failed';
import Loading from 'src/components/Loading';
import { FetchingStatus } from 'src/constants';
import { useDetailProposalContext } from 'src/contexts/detail-proposal-context';
import { useWeb3Context } from 'src/contexts/web3-context';
import { CanCelledCircleIcon, CheckCircleFillIcon, ThreeDotOutLinedCircleIcon } from 'src/icons';
import { getErrorMessage } from 'src/utils';
import { compactNumber } from 'src/utils/format';
import RangeStick from '../../ProposalList/ProposalItem/RangeStick/RangeStick';
import ListVotingDialog from './ListVotingDialog/ListVotingDialog';
import { VotingResultRootStyle } from './VotingResultRootStyle';

const EnumStatus: string[] = [
  'pending',
  'active',
  'executed',
  'canceled',
  'queued',
];
export default function VotingResult() {
  const { data, statusCallContract, error } = useDetailProposalContext();
  const { activating } = useWeb3Context();
  const [listVotingDialog, setListVotingDialog] = useState({ open: false });

  function closeListVotingDialog() {
    setListVotingDialog({ open: false });
  }
  function openListVotingDialog() {
    setListVotingDialog({ open: true });
  }

  function getQuorumView(proposalStatus: number, forVotes: number, quorumValue: number) {
    if (proposalStatus == 0 || proposalStatus == 2) {
      return <div />;
    }
    if (proposalStatus == 1) {
      if (forVotes < quorumValue) {
        return (
          <div className="process">
            <span className="process_value" style={{ width: (forVotes / quorumValue) * 100 + '%' }} />
          </div>
        );
      } else {
        return (
          <span>
            <CheckCircleFillIcon sx={{ ml: 1 }} />
          </span>
        );
      }
    }
    if (proposalStatus == 3) {
      if (forVotes < quorumValue) {
        return (
          <span>
            <CanCelledCircleIcon sx={{ ml: 1 }} />
          </span>
        );
      } else {
        return (
          <span>
            <CheckCircleFillIcon sx={{ ml: 1 }} />
          </span>
        );
      }
    }
    if (proposalStatus == 4 || proposalStatus == 5 || proposalStatus == 6 || proposalStatus == 7) {
      return (
        <span>
          <CheckCircleFillIcon sx={{ ml: 1 }} />
        </span>
      );
    }
    return <div />;
  }

  return (
    <VotingResultRootStyle sx={{ bgcolor: 'background.paper', p: 2, borderRadius: '12px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" color="text.primary">
          Voting Result
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={openListVotingDialog}>
          <Typography variant="h5" color="primary.main" sx={{ textDecoration: 'underline' }}>
            Details
          </Typography>
          <ThreeDotOutLinedCircleIcon sx={{ ml: 1 }} />
        </Box>
      </Box>
      <br />
      {(statusCallContract === FetchingStatus.IDLE ||
        statusCallContract === FetchingStatus.FETCHING ||
        activating ||
        statusCallContract === FetchingStatus.UPDATING) && (
          <Box textAlign={'center'} py={4}>
            <Loading size={50} />
            <Typography color="text.secondary">Please wait a moment...</Typography>
          </Box>
        )}
      {statusCallContract === FetchingStatus.FAILED && (
        <Failed title="Failed to fetch data" detail={getErrorMessage(error)} />
      )}
      {statusCallContract === FetchingStatus.SUCCESS && (
        <>
          {
            data.proposalContent?.status == 2 && data.proposalContent?.numberVote >= 0 &&
            <RangeStick
              type="For"
              valuePercentage={Number(data.proposalContent.numberVote) / 100000}
              valueCount={Number(data.proposalContent.numberVote)}
              style={{ maxWidth: 'unset' }}
            />
          }
          {
            data.proposalContent?.status == 2 && data.proposalContent?.numberVote < 0 &&
            <RangeStick
              type="Against"
              valuePercentage={-Number(data.proposalContent.numberVote) / 100000}
              valueCount={-Number(data.proposalContent.numberVote)}
              style={{ maxWidth: 'unset' }}
            />
          }
          <br />
          <div className={'flex_justify_between'}>
            <Typography color="secondary.light">Status</Typography>
            <span className={`status_voting_result ${EnumStatus[Number(data.proposalContent?.status)]}`}>
              <span className="status_dot" /> {EnumStatus[Number(data.proposalContent?.status)] || 'Unknow'}
            </span>
          </div>
          <Box className={'flex_justify_between'} sx={{ mt: 2 }}>
            <Typography color="secondary.light">Encypted votes</Typography>
            <Tooltip title={Number(data.proposalContent?.encryptedVote).toFixed(2)} arrow placement="left">
              <span>{data.proposalContent?.encryptedVote.slice(0, 20) + '...'}</span>
            </Tooltip>
          </Box>

        </>
      )}
      <ListVotingDialog open={listVotingDialog.open} closeModal={closeListVotingDialog} />
    </VotingResultRootStyle>
  );
}
