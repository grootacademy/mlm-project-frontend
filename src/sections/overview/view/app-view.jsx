
// eslint-disable-next-line perfectionist/sort-imports
import { useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line perfectionist/sort-imports
import { config } from 'src/config';
// eslint-disable-next-line import/no-unresolved
import { RestService } from 'src/services/RestService';

// eslint-disable-next-line import/order
import AppWidgetSummary from '../app-widget-summary';


export default function AppView() {
  // const [totalAmount, setTotalAmount] = useState("")
  // const [totalMembers, setTotalMembers] = useState("")
  // const [totalUser, setTotalUser] = useState("")

  // const navigate = useNavigate()

  const getTotalAmount = () => {
    try {
      RestService.getData(config.GET_TOTAL_AMOUNT).then(
        (response) => {
          // setTotalAmount(response)
        }
      );
    } catch (err) {
      console.log("Amount details failed. Error: ", err);
    }

  }

  const getTotalUserAmount = () => {
    try {
      RestService.getData(config.GET_TOTAL_USER).then(
        (response) => {
          // setTotalUser(response)
        }
      );
    } catch (err) {
      console.log("User details failed. Error: ", err);
    }
  }

  const getTotalMembers = () => {
    try {
      RestService.getData(config.GET_TOTAL_MEMBERSHIP).then(
        (response) => {
          // setTotalMembers(response)
        }
      );
    } catch (err) {
      console.log("Members details failed. Error: ", err);
    }
  }


  useEffect(() => {
    getTotalAmount();
    getTotalUserAmount();
    getTotalMembers();

  }, []);
  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="space-between" alignItems="center">

        <Typography paddingTop="50px" variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back 👋
        </Typography>

        {/* <Button variant="contained" onClick={handleLogout} color='error'>Logout</Button> */}
      </Grid>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Total Earned Amount"
            total="15,000"
            color="warning"
            icon={<img alt="icon" src="/assets/icons/icons8-rupee-96.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Total user connected"
            total="120"
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Total memberships"
            total="100"
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/icons8-id-verified-96.png" />}
          />
        </Grid>

      </Grid>
    </Container>
  );
}
