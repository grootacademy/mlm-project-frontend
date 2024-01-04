import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { formatDate } from 'src/utils/format-date';
// import { fShortenNumber } from 'src/utils/format-number';
// import { Grid } from '@mui/material/Unstable_Grid2';

// ----------------------------------------------------------------------

export default function AppMemberShipCard({ title, total, icon, status, color = 'primary', referralCode, addedMembers, approvalStatus, createdOn, sx, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}

      <Stack spacing={0.5}>

        <div style={{ display: 'flex', gap: "10px" }}>
          <Typography>Membership Amount:</Typography>
          <Typography variant="h6" display='inline'>₹1000</Typography>
        </div>
        {approvalStatus === "Approved" && <div style={{ display: 'flex', gap: "10px" }}>
          <Typography> Status:</Typography>
          <Typography variant="h6" color="#b2a429">{status}</Typography>
        </div>}
        <div style={{ display: 'flex', gap: "10px" }}>
          <Typography> Approval Status:</Typography>
          <Typography variant="h6" color="#b2a429">{approvalStatus}</Typography>
        </div>
        <div style={{ display: 'flex', gap: "10px" }}>
          <Typography>Total Added Persons:</Typography>
          <Typography variant="h6">{addedMembers}</Typography>
        </div>
        {/* <div style={{ display: 'flex', gap: "10px" }}>
          <Typography> Earned Amount:</Typography>
          <Typography variant="h6" color="#00e676">₹1500</Typography>
        </div> */}

        <div style={{ display: 'flex', gap: "10px" }}>
          <Typography> Refral Code</Typography>
          <Typography variant="h6" color="#00e676">{referralCode || "-"}</Typography>
        </div>

        <div style={{ display: 'flex', gap: "10px" }}>
          <Typography> Created On</Typography>
          <Typography variant="h6">{formatDate(createdOn)}</Typography>
        </div>

        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {title}
        </Typography>
      </Stack>
    </Card>
  );
}

AppMemberShipCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
  referralCode: PropTypes.string,
  addedMembers: PropTypes.number,
  status: PropTypes.string,
  approvalStatus: PropTypes.string,
  createdOn: PropTypes.string,
};
