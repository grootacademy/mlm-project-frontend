import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

// eslint-disable-next-line react/prop-types
export default function AppWidgetSummary({ title, total, icon, color = 'primary', description, sx, ...other }) {
  return (
    <div style={{ overflow: "auto", maxHeight: "100vh" }}>
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
          <Typography variant="h4">{total}</Typography>


          <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
            {title}
          </Typography>
          <Typography variant="" fontSize={10}>{description}</Typography>
        </Stack>
      </Card>
    </div>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
