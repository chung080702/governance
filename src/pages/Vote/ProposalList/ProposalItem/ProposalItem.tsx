import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { ProposalItemRootStyle } from './ProposalItemRootStyle';
import ChipStatus from './ChipStatus/ChipStatus';
import RangeStick from './RangeStick/RangeStick';
import { Link } from 'react-router-dom';
import { Poll } from 'src/contexts/vote-context/types';
import Quorum from './Quorum/Quorum';
import Moment from 'react-moment';
import { useRef } from 'react';

type Props = {
  data: Poll;
};

export default function ProposalItem(props: Props) {
  const matches = useMediaQuery('(max-width:1280px)');
  const matches1 = useMediaQuery('(max-width:600px)');
  const linkRef = useRef<HTMLAnchorElement>(null);
  function clickDb() {
    if (null !== linkRef.current) {
      linkRef.current.click();
    }
  }
  return (
    <ProposalItemRootStyle sx={{ bgcolor: 'background.paper' }} onDoubleClick={clickDb}>
      <Grid container rowSpacing={{ xs: 4, sm: 0 }}>
        <Grid item xs={12} md={8}>
          <Typography color="text.secondary" className="title_proposal" variant="h3">
            <Link ref={linkRef} to={'/vote/' + props.data.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              {props.data.tittle}
            </Link>
          </Typography>
          <Box sx={{ mt: { xs: 1, sm: 1 }, display: 'flex' }}>
            <Box sx={{ display: 'flex', width: '68%', flexWrap: 'wrap' }}>
              <Box sx={{ width: matches1 ? '99px' : '137px' }}>
                <ChipStatus status={props.data.status} />
              </Box>
              <Box
                sx={{
                  whiteSpace: 'nowrap',
                  //display: 'flex',
                  alignItems: 'center',
                  ml: 1,
                  width: matches ? '90px' : '235px',
                }}
              >

                <span className="status_time">
                  {' Open: '}
                  <Moment format="MMM D, yyyy" date={new Date(Number(props.data.startTimeStamp + '000'))} />
                </span>
                <br></br>
                <span className="status_time">
                  {' Close: '}
                  <Moment format="MMM D, yyyy" date={new Date(Number(props.data.startTimeStamp + '000') + Number(props.data.duration + '000'))} />
                </span>
              </Box>
            </Box>

          </Box>
        </Grid>


        <Grid item xs={12} md={4}>

          {
            props.data.status == 2 && props.data.numberVote >= 0 &&
            <RangeStick
              type="For"
              valuePercentage={Number(props.data.numberVote) / 100000}
              valueCount={Number(props.data.numberVote)}
            />
          }
          {
            props.data.status == 2 && props.data.numberVote < 0 &&
            <RangeStick
              type="Against"
              valuePercentage={-Number(props.data.numberVote) / 100000}
              valueCount={-Number(props.data.numberVote)}
            />
          }
        </Grid>


      </Grid>
    </ProposalItemRootStyle>
  );
}
