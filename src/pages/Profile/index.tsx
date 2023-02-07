import { Reply } from '@mui/icons-material';
import { Box, Button, Grid } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import ProfileSumary from './ProfileSumary/ProfileSumary';
import Transactions from './Transactions/Transactions';
import VotingHistory from './VotingHistory/VotingHistory';

type ParamsUrl = {
  address: string;
};

export default function Profile() {
  const params: ParamsUrl = useParams();
  const history = useHistory();
  return (
    <Box sx={{ maxWidth: { xs: '541px', lg: 'unset' }, margin: '0 auto' }}>
      <Box>
        <Button
          variant="contained"
          sx={{ bgcolor: 'secondary.dark', color: 'text.primary', ':hover': { bgcolor: 'primary.light' } }}
          onClick={() => history.goBack()}
        >
          <Reply sx={{ mr: 1, width: '21px' }} /> Back
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={5}>
            <ProfileSumary address={params.address} />
            <br />
            <br />
            <VotingHistory address={params.address} />
          </Grid>
          <Grid item xs={12} lg={7}>
            <Transactions address={params.address} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
