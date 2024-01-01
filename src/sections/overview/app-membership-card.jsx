import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import { fShortenNumber } from 'src/utils/format-number';
// import { Grid } from '@mui/material/Unstable_Grid2';

// ----------------------------------------------------------------------

export default function AppMemberShipCard({ title, total, icon, color = 'primary', sx, ...other }) {
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
        <div style={{ display: 'flex', gap: "10px" }}>
          <Typography> Status:</Typography>
          <Typography variant="h6" color="#b2a429">Pending</Typography>
        </div>
        <div style={{ display: 'flex', gap: "10px" }}>
          <Typography>Total Added Persons:</Typography>
          <Typography variant="h6">12</Typography>
        </div>
        <div style={{ display: 'flex', gap: "10px" }}>
          <Typography> Earned Amount:</Typography>
          <Typography variant="h6" color="#00e676">₹1500</Typography>
        </div>

        <div style={{ display: 'flex', gap: "10px" }}>
          <Typography> Refral Code</Typography>
          <Typography variant="h6" color="#00e676">DNC798F</Typography>
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
};
