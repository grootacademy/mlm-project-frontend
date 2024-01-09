import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

// eslint-disable-next-line react/prop-types
export default function AppWidgetSummary({ title, total, icon, color = 'primary', description, sx, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        height: "100%",
        px: { xs: 1, sm: 2, md: 3 },
        py: { xs: 3, sm: 4, md: 5 },
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      <Grid container direction="row" spacing={2}>

        <Grid>
          {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}
        </Grid>
        <Grid>


          <Stack spacing={0.5}>
            <Typography sx={{ fontSize: { xs: "12px", sm: "23px" } }} variant="h4">{total}</Typography>

            <Typography sx={{ fontSize: { xs: "12px", sm: "16px" }, color: 'text.disabled' }} variant="subtitle2">
              {title}
            </Typography>
            <Typography variant="" fontSize={10}>{description}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
