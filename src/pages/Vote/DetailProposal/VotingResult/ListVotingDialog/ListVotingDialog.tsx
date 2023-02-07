import { CloseOutlined } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDetailProposalContext } from 'src/contexts/detail-proposal-context';
import { compactNumber } from 'src/utils/format';

type Props = {
  open: boolean;
  closeModal: () => void;
};

export default function ListVotingDialog(props: Props) {
  const [optionView, setOptionView] = useState<'For' | 'Against'>('For');
  const { data } = useDetailProposalContext();
  const handleClose = () => {
    props.closeModal();
  };
  console.log(data.listVoting)
  return (
    <Dialog open={props.open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" color="primary.main">
          List voting
        </Typography>
        <CloseOutlined sx={{ fontSize: '25px', cursor: 'pointer', color: 'secondary.main' }} onClick={handleClose} />
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ButtonGroup
            sx={{ bgcolor: 'background.default', height: { xs: '26px', xsm: '36px!important' } }}
            disableElevation
          >
            <Button
              onClick={() => setOptionView('For')}
              variant={optionView == 'For' ? 'contained' : 'text'}
              sx={{ minWidth: { xs: '22px', xsm: '88px!important' } }}
              color={optionView == 'For' ? 'primary' : 'inherit'}
            >
              For
            </Button>
            <Button
              onClick={() => setOptionView('Against')}
              variant={optionView == 'Against' ? 'contained' : 'text'}
              sx={{ minWidth: { xs: '22px', xsm: '88px!important' } }}
              color={optionView == 'Against' ? 'primary' : 'inherit'}
            >
              Against
            </Button>
          </ButtonGroup>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              component="div"
              color="text.secondary"
              sx={(theme) => ({ [theme.breakpoints.down('xsm')]: { fontSize: 'smaller' } })}
            >
              Addresses
            </Typography>
            <Typography
              component="div"
              sx={{
                width: { xs: '30px', xsm: '50px!important' },
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'secondary.dark',
                borderRadius: '6px',
                fontWeight: 'bold',
                ml: 1,
              }}
            >
              {data.listVoting?.filter((item) => item.encyptedVote == optionView)?.length || 0}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography
                component={'span'}
                sx={(theme) => ({
                  fontWeight: 'bold',
                  display: 'inline-block',
                  minWidth: '42px',
                  [theme.breakpoints.down('xsm')]: { fontSize: 'smaller' },
                })}
              >
                No.
              </Typography>
              <Typography
                component={'span'}
                sx={(theme) => ({ fontWeight: 'bold', [theme.breakpoints.down('xsm')]: { fontSize: 'smaller' } })}
              >
                Wallet Address
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                sx={(theme) => ({
                  fontWeight: 'bold',
                  textAlign: 'right',
                  pr: 1,
                  whiteSpace: 'nowrap',
                  [theme.breakpoints.down('xsm')]: { fontSize: 'smaller' },
                })}
              >
                Encrypted Vote
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            mt: 1,
            maxHeight: '332px',
            overflow: 'auto',
            minHeight: '332px',
            '::-webkit-scrollbar': { width: '6px' },
            '::-webkit-scrollbar-track': { bgcolor: 'primary.light' },
            '::-webkit-scrollbar-thumb': { bgcolor: 'primary.dark', borderRadius: '5px' },
          }}
        >
          {data.listVoting
            ?.filter(item => item.hasVoted)
            ?.map((item, index) => {
              return (
                <Grid
                  container
                  sx={(theme) => ({ mt: 2, cursor: 'pointer', ':hover': { color: theme.palette.primary.main } })}
                  key={'listVoteRes' + item.address + index}
                >
                  <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography component={'span'} sx={{ display: 'inline-block', width: '42px' }}>
                      {('0' + (index + 1)).slice(-2)}.
                    </Typography>
                    <Link
                      to={'/profile/' + item.address}
                      style={{
                        color: 'unset',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        display: 'inline-block',
                        width: 'calc(100% - 42px)',
                        textDecoration: 'none',
                      }}
                    >
                      <Typography component={'span'} sx={{}}>
                        {item.address}
                      </Typography>

                    </Link>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography sx={{ textAlign: 'right', pr: 1 }}>{(item.encyptedVote.slice(0, 20) + '...')}</Typography>
                  </Grid>
                </Grid>
              );
            })}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
