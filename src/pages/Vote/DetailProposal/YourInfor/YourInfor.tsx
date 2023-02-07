import { useState } from 'react';
import { Box, Button, Grid, Tooltip, Typography } from '@mui/material';
import { AccountCircleOutlined, HelpOutlineRounded } from '@mui/icons-material';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import { useDetailProposalContext } from 'src/contexts/detail-proposal-context';
import { useWeb3Context } from 'src/contexts/web3-context';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import { compactNumber } from 'src/utils/format';
import { FetchingStatus } from 'src/constants';
import Loading from 'src/components/Loading';
import { getErrorMessage } from 'src/utils';
import Failed from 'src/components/Failed';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

type ModalProps = {
  open: boolean;
  data: 'For' | 'Against';
};

type YourInfoProps = {
  idProposal: string;
};

export default function YourInfor(props: YourInfoProps) {
  const { address, activating } = useWeb3Context();
  const [modal, setModal] = useState<ModalProps>({ open: false, data: 'For' });
  const { data, statusCallContract, error, fetch } = useDetailProposalContext();

  function openConfirmModal(choice: 'For' | 'Against') {
    setModal((prev) => {
      return { ...prev, open: true, data: choice };
    });
  }
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: '12px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" color="text.primary">
          Your Information
        </Typography>
        <Box sx={{ display: address ? 'flex' : 'none', alignItems: 'center', cursor: 'pointer' }}>
          <Link to={'/profile/' + address}>
            <Typography variant="h5" color="primary.main" sx={{ textDecoration: 'underline' }}>
              Profile
            </Typography>
          </Link>
          <AccountCircleOutlined color="primary" sx={{ ml: 1, fontSize: '23px' }} />
        </Box>
      </Box>
      {address ? (
        <>
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
            <Failed title="Failed to fetch data" detail={getErrorMessage(error)}>
              <Button variant="contained" color="primary" sx={{ px: 3 }} onClick={() => fetch(props.idProposal)}>
                Reload
              </Button>
            </Failed>
          )}
          {statusCallContract === FetchingStatus.SUCCESS && (
            <>
              {data.userInfor?.hasVoted ? (
                <>
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="secondary.light">Voting Power</Typography>
                    <Tooltip title={Number(data.userInfor?.votePowers).toFixed(2)} arrow placement="left">
                      <Typography color="text.secondary" component="span">
                        {compactNumber(Number(data.userInfor?.votePowers || 0), 2)}
                      </Typography>
                    </Tooltip>
                  </Box>
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="secondary.light">Encrypted Vote</Typography>
                    <Typography color="text.secondary" component="span">{data.userInfor?.encryptedVote}</Typography>
                  </Box>
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="secondary.light">Voted At</Typography>
                    <Typography color="text.secondary">
                      <Moment
                        date={new Date(Number(data.userInfor?.timeStamp + '000' || 0))}
                        format="MMMM D yyyy, hh:mm A"
                      />
                    </Typography>
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="secondary.light">Voting Power</Typography>
                    <Tooltip title={Number(data.userInfor?.votePowers).toFixed(2)} arrow placement="left">
                      <Typography color="text.secondary" component="span">
                        {compactNumber(Number(data.userInfor?.votePowers || 0), 2)}
                      </Typography>
                    </Tooltip>
                  </Box>
                  {/* <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="secondary.light">Weight</Typography>
                    <Typography color="text.secondary">
                      {compactNumber(Number(data.userInfor?.weight || 0), 2)}%
                    </Typography>
                  </Box> */}
                  <Grid container spacing={2} style={{ marginTop: '0px' }}>
                    <Grid item xs={6}>
                      <Button
                        disabled={Number(data.proposalContent?.status) != 1 || Number(data.userInfor?.votePowers) == 0}
                        variant="contained"
                        sx={{ bgcolor: 'success.main', width: '100%', ':hover': { bgcolor: 'success.dark' } }}
                        onClick={() => openConfirmModal('For')}
                      >
                        For
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        disabled={Number(data.proposalContent?.status) != 1 || Number(data.userInfor?.votePowers) == 0}
                        variant="contained"
                        sx={{ width: '100%', bgcolor: '#B39DDB', ':hover': { bgcolor: '#9378c3' } }}
                        onClick={() => openConfirmModal('Against')}
                      >
                        Against
                      </Button>
                    </Grid>
                  </Grid>
                </>
              )}

              <Typography
                color="text.secondary"
                sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <i>How to increase voting power?</i>
                <HelpOutlineRounded sx={{ marginLeft: 1 }} />
              </Typography>
              <ConfirmModal
                open={modal.open}
                data={modal.data}
                votingPower={data.userInfor?.votePowers}
                idPropsal={props.idProposal}
                pubKey={data.proposalContent?.publicKey}
                closeModal={() => {
                  setModal((prev) => {
                    return { ...prev, open: false };
                  });
                }}
              />
            </>
          )}
        </>
      ) : (
        <Box textAlign="center" py={3}>
          <CastConnectedIcon fontSize="large" color="secondary" />
          <Typography color="secondary">Please connect your wallet!</Typography>
        </Box>
      )}
    </Box>
  );
}
