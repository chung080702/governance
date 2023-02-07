import { Box, Grid, Tooltip, Typography } from '@mui/material';
import Empty from 'src/components/Empty';
import Loading from 'src/components/Loading';
import { useWeb3Context } from 'src/contexts/web3-context';
import { CanCelledCircleIcon, CaretDown, CaretUp, CheckCircleFillIcon, ExploreIcon } from 'src/icons';
import { compactNumber } from 'src/utils/format';
import { useTransactionHistory } from '../hooks/useTransactionHistory';

type Props = {
  address: string;
};

const resultImg: any = {
  BlueCirle: <CheckCircleFillIcon sx={{ mr: 1, fontSize: '14px' }} />,
  RedCirle: <CanCelledCircleIcon sx={{ mr: 1, fontSize: '14px' }} />,
  UpArrow: <CaretUp sx={{ mr: 1, fontSize: '14px' }} />,
  DownArrow: <CaretDown sx={{ mr: 1, fontSize: '14px' }} />,
};

export default function Transactions(props: Props) {
  const { data, loading } = useTransactionHistory(props.address);
  const { getAddressExplorerLink } = useWeb3Context();
  return (
    <Box>
      <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ mr: 1 }}>
          Transactions
        </Typography>
        <ExploreIcon
          sx={(theme) => ({
            color: theme.palette.mode == 'dark' ? 'primary.main' : 'text.secondary',
            fontSize: '16px',
            cursor: 'pointer',
          })}
          onClick={() => {
            window.open(getAddressExplorerLink(props.address), '_blank');
          }}
        />
      </Box>
      <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: '12px', height: '645px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4}>
            <Typography color="text.secondary">Action</Typography>
          </Grid>
          <Grid item xs={6} sm={5}>
            <Typography color="text.secondary">Age</Typography>
          </Grid>
          <Grid item xs={6} sm={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography color="text.secondary">Result</Typography>
          </Grid>
        </Grid>
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
                  return (
                    <Grid key={'Trax' + index} container sx={{ mt: '29px' }} columnSpacing={2}>
                      <Grid item xs={6} sm={4}>
                        <Typography color="text.primary">{item.action}</Typography>
                      </Grid>
                      <Grid item xs={6} sm={5}>
                        <Typography
                          color="text.primary"
                          sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
                        >
                          {item.age}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {resultImg[item.resultImage]}
                          <Tooltip title={Number(item.resultValue).toFixed(2)} arrow placement="left">
                            <Typography color="text.primary">
                              {compactNumber(Number(item.resultValue).toFixed(2))}
                            </Typography>
                          </Tooltip>
                        </Box>
                      </Grid>
                    </Grid>
                  );
                })}
              </>
            ) : (
              <Empty py={4} />
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
