import { Box, Typography } from '@mui/material';
import Empty from 'src/components/Empty';
import Loading from 'src/components/Loading';
import { useVotingHistory } from '../hooks/useVotingHistory';
import ProposalItem from './ProposalItem/ProposalItem';

type Props = {
  address: string;
};

export default function VotingHistory(props: Props) {
  const { data, loading } = useVotingHistory(props.address);
  return (
    <Box>
      <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4" color="text.primary">
          Voting History
        </Typography>
        <Typography variant="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
          Proposal <b style={{ marginLeft: '8px' }}>{data.length}</b>
        </Typography>
      </Box>
      <Box sx={{ bgcolor: 'background.paper', p: 3, pr: 2, borderRadius: '12px' }}>
        <Box
          sx={(theme) => ({
            height: '380px',
            overflow: 'auto',
            '::-webkit-scrollbar': { width: '6px' },
            '::-webkit-scrollbar-track': { bgcolor: 'primary.light' },
            '::-webkit-scrollbar-thumb': {
              bgcolor: theme.palette.mode == 'dark' ? 'primary.dark' : 'primary.main',
              borderRadius: '5px',
            },
          })}
        >
          {loading ? (
            <>
              <Box textAlign={'center'} py={4}>
                <Loading size={50} />
                <Typography color="text.secondary">Please wait a moment...</Typography>
              </Box>
            </>
          ) : (
            <>
              {data?.length ? (
                <>
                  {data.map((item, index) => {
                    return <ProposalItem key={'historyvote' + item.id + index} dataProposal={item} />;
                  })}
                </>
              ) : (
                <>
                  <Empty />
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
