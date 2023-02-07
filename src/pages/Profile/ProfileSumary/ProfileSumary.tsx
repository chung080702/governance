import { Box, Grid, Tooltip, Typography } from '@mui/material';
import { BalanceIcon, QuestionCircleIcon, UserCircleIcon } from 'src/icons';
import { compactNumber } from 'src/utils/format';
import { useProfileSummary } from '../hooks/useProfileSummary';
import CopyButton2 from './CopyButton';

type Params = {
  address: string;
};
export default function ProfileSumary(props: Params) {
  const { data } = useProfileSummary(props.address);

  return (
    <Box>
      <Typography sx={{ mb: 1 }} variant="h4">
        Profile
      </Typography>
      <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: '12px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <UserCircleIcon
            sx={(theme) => ({
              fontSize: '26px',
              color: theme.palette.mode == 'dark' ? 'primary.main' : 'text.secondary',
            })}
          />
          <Typography
            color={'text.secondary'}
            sx={{ pr: 2, pl: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
          >
            {props.address}
          </Typography>
          <CopyButton2
            text={props.address}
            IconProps={{
              sx: (theme) => ({
                color: theme.palette.mode == 'dark' ? 'primary.main' : 'text.secondary',
              }),
            }}
          />
        </Box>
        <Box sx={{ mt: 3 }}>
          <Grid container columnSpacing={{ xs: 1, md: 2 }} rowSpacing={2}>
            <Grid item xs={5} sm={5}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRight: '1px solid',
                  borderColor: 'secondary.main',
                  height: '100%',
                }}
              >
                <BalanceIcon
                  sx={(theme) => ({
                    fontSize: '26px',
                    color: theme.palette.mode == 'dark' ? 'primary.main' : 'text.secondary',
                  })}
                />
                <Box sx={{ pl: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography color="secondary.main" sx={{ mr: 1, fontSize: { xs: 'smaller', xsm: 'initial' } }}>
                      {data.avgTimeLock || '---'}
                    </Typography>
                    <Tooltip title={'Average lock time of user’s veTRAVA NFTs'} arrow placement="top">
                      <span style={{ cursor: 'pointer' }}>
                        <QuestionCircleIcon />
                      </span>
                    </Tooltip>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title={Number(data.votingPower).toFixed(2)} arrow placement="bottom">
                      <Typography
                        variant="h5"
                        sx={(theme) => ({ mr: 1, [theme.breakpoints.down('xsm')]: { fontSize: 'smaller' } })}
                      >
                        {compactNumber(data.votingPower || 0)}
                      </Typography>
                    </Tooltip>
                    <Tooltip title={'Current voting power of user'} arrow placement="top">
                      <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <QuestionCircleIcon />
                      </span>
                    </Tooltip>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Box sx={{ borderRight: '1px solid', borderColor: 'secondary.main', height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 1, xsm: 0 } }}>
                  <Typography color="secondary.main" sx={{ mr: 1, fontSize: { xs: 'smaller', xsm: 'initial' } }}>
                    veTRAVA
                  </Typography>
                  <Tooltip title={'Total number of veTRAVA lock owned of user'} arrow placement="top">
                    <span style={{ cursor: 'pointer' }}>
                      <QuestionCircleIcon />
                    </span>
                  </Tooltip>
                </Box>
                <Typography variant="h3" sx={(theme) => ({ [theme.breakpoints.down('xsm')]: { fontSize: 'smaller' } })}>
                  {data.veTravaNFT || '---'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3} sm={3}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 1, xsm: 0 }, whiteSpace: 'nowrap' }}>
                  <Typography color="secondary.main" sx={{ mr: 1, fontSize: { xs: 'smaller', xsm: 'initial' } }}>
                    Rank
                  </Typography>
                  <Tooltip title={'User’s rank based on their voting power'} arrow placement="top">
                    <span style={{ cursor: 'pointer' }}>
                      <QuestionCircleIcon />
                    </span>
                  </Tooltip>
                </Box>
                <Typography variant="h3" sx={(theme) => ({ [theme.breakpoints.down('xsm')]: { fontSize: 'smaller' } })}>
                  {data.rank}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
