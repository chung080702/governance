import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { DownloadCircleIcon, ExplorCircleIcon, TwitterCircleIcon } from 'src/icons';
import { useDetailProposalContext } from 'src/contexts/detail-proposal-context';
import { CustomContentStyle } from './CustomContentStyle';
import { TwitterShareButton } from 'react-share';


export default function ProposalInfor() {
  const { data } = useDetailProposalContext()
  const poll = data.proposalContent
  const matches = useMediaQuery('(max-width:1440px)');


  return (
    <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: '12px' }}>
      <Grid container sx={{ mt: -1, mb: 1, flexDirection: matches ? 'column-reverse' : 'row' }} rowSpacing={2}>
        <Grid item xs={12} xl={7} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h3" color="text.primary">
            {poll?.tittle || 'No title'}
          </Typography>
        </Grid>
        <Grid item xs={12} xl={5} sx={{ display: 'flex', justifyContent: 'end' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              maxWidth: '400px',
              width: '100%',
            }}
          >

          </div>
        </Grid>
      </Grid>

      <Typography color="text.disabled">
        <i>Author - {poll?.daoManager || ''}</i>
      </Typography>

      <Typography sx={{ mb: 3 }} color="text.disabled">
        <i>Public key - {poll?.publicKey || ''}</i>
      </Typography>

      <CustomContentStyle
        className="detail-news__content"
        dangerouslySetInnerHTML={{ __html: poll?.content || '' }}
      />

    </Box >
  )
}
