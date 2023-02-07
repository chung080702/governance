import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircleFillIcon } from 'src/icons';
import ChipStatus from 'src/pages/Vote/ProposalList/ProposalItem/ChipStatus/ChipStatus';
import { compactNumber } from 'src/utils/format';
import { ProposalHisortyProfile } from '../../hooks/types';

type Props = {
  dataProposal: ProposalHisortyProfile;
};

const statusProposal: any = {
  pending: 0,
  active: 1,
  canceled: 2,
  defeated: 3,
  succeeded: 4,
  queued: 5,
  expired: 6,
  executed: 7,
  unknown: 8,
};
export default function ProposalItem(props: Props) {
  return (
    <Box sx={{ mb: 5, pr: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography
          color="text.primary"
          sx={{
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            pr: 1,
            opacity: '0.8',
          }}
        >
          <Link style={{ color: 'unset', textDecoration: 'none' }} to={'/vote/' + props.dataProposal.id}>
            {props.dataProposal.title || '---'}
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ mr: 1 }}>{props.dataProposal.choice}</Typography>
          <CheckCircleFillIcon />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ChipStatus status={statusProposal[props.dataProposal.status]} />
        <Typography color="text.secondary">{compactNumber(props.dataProposal.weight || 0)}</Typography>
      </Box>
    </Box>
  );
}
