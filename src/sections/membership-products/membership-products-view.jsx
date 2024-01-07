/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */

// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import Swal from "sweetalert2"
// eslint-disable-next-line import/no-extraneous-dependencies
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { config } from "src/config";
import { BaseUrl } from "src/Base_url";
import Spinner from "src/pages/Spinner";
import { bgGradient } from 'src/theme/css';
// eslint-disable-next-line import/no-unresolved
import { RestService } from "src/services/RestService";

import AppWidgetSummary from '../overview/app-widget-summary';

// ----------------------------------------------------------------------

export default function MembershipProductsView() {
  const theme = useTheme();
  const [products, setproducts] = useState()
  const [showLoader, setshowLoader] = useState(false)

  const buyProduct = async (productId, buyData) => {

    const { value: refralCode } = await Swal.fire({
      text: `Send payment of ₹${buyData?.amount} to above QR code.`,
      input: "text",
      title: `UPI ID: ${buyData?.upiId || ""}`,
      inputLabel: "Enter refral code",
      inputPlaceholder: "Enter refral code of your friend"
    });

    const { value: enteredTransactionId } = await Swal.fire({
      input: "text",
      inputLabel: "Enter transaction id",
    });

    if (!enteredTransactionId) {
      return;
    }

    const membershipPayload = {
      product_id: productId,
      transactionId: enteredTransactionId,
      upiId: "",
    }

    if (refralCode) {
      membershipPayload.parentReferralCode = refralCode
    }

    try {

      await axios.post(`${BaseUrl}memberdhip/request`, membershipPayload, { withCredentials: true })
      toast.success("Membership Requested successfully")

      if (refralCode) {
        Swal.fire({
          title: refralCode,
          html: `Requested to admin for confirming payment with above refral code. With transection Id <b> ${enteredTransactionId} </b>`
        });
      }
    } catch (err) {

      if (err.response.data.errors.length > 0) {
        err.response.data.errors.forEach(k => {
          toast.error(k.msg)
        })
      } else {
        toast.error(err?.response?.data?.message)
      }
    }


  }

  const getProductData = () => {
    try {
      RestService.getData(config.GET_ALL_PRODUCTS).then(
        (response) => {
          setshowLoader(true)
          setproducts(response.products)
          setshowLoader(false)
        }
      );

    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    getProductData()
  }, [])



  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: "100vh",
      }}
    >
      <Container>
        <Typography variant="h4" paddingTop="50px" textAlign='center' sx={{ mb: 5 }}>
          Membership Plans
        </Typography>
        {!showLoader &&
          <Grid container spacing={3}>
            {products?.map((data, index) => (
              <Grid xs={12} sm={6} md={4} onClick={() => buyProduct(data._id, data)}>
                <AppWidgetSummary
                  title={`₹${data.amount}`}
                  total={data.name}
                  color="success"
                  icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
                />
              </Grid>
            ))}
            <div className="mt-4">
              <h1>Membership Completion Guide</h1>

              <p>This guide helps you understand when a memberhip can be completed based on certain conditions. </p>

              <p>
                Here's what it means for you:
              </p>

              <ul>
                <li>If your earned amount is between 25% and 50% of the total cost and it's been at least 21 days
                  since you started, you can complete the transaction.</li>
                <li>If your earned amount is between 50% and 75% of the total cost and it's been at least 14 days, you can
                  complete
                  the transaction.</li>
                <li>If your earned amount is between 75% and 100% of the total cost and it's been at least 7 days, you can
                  complete
                  the transaction.</li>
                <li>If your earned amount is equal to or greater than the total cost, you can complete the transaction.</li>
              </ul>
            </div>
          </Grid>

        }{
          showLoader &&
          <Spinner />
        }
      </Container>
    </Box >
  );
}
