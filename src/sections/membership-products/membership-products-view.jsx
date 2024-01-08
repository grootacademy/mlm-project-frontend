/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */

// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import Swal from "sweetalert2"
import Cookies from "js-cookie";
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

      await axios.post(`${BaseUrl}memberdhip/request`, membershipPayload, { headers: { 'Authorization': Cookies.get("token") } })
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

                  des={
                    data.amount === 10000
                      ? "If you refer 4 persons with diamond membership then you get instant 300% return So you will get 30000 rupees instantly.  If you refer 3 persons with diamond membership then you will get 175% return in 7 days.So you will get 17500 rupees in 7 days.If you refer 2 persons with diamond membership then you will get 150% return in 14 days.So you will get 15000 rupees in 14 days. If you refer 1 person with diamond membership then you will get 125% return in 21 days.So you will get 12500 rupees in 21 days. If you buy diamond membership and don't refer a person so you will get 150% return in 60 days.So, you will get 15000 rupees in 60 days.                      "
                      : data.amount === 5000
                        ? "If you refer 4 persons with gold membership then you get instant 300% return.So you will get 15000 rupees instantly.If you refer 3 persons with gold membership then you will get 175% return in 7 days. So you will get 8750 rupees in 7 days.f you refer 2 persons with gold membership then you will get 150% return in 14 days.So you will get 7500 rupees.If you refer 1 person with gold membership then you will get 125% return in 21 days.So you will get 6250 in 21 days. If you buy gold membership and don't refer a person so you will get 150% return in 60 days.So, you will get 7500 rupees in 60 days.If you buy gold membership and refer 2 persons with diamond membership then you get instant 300% return.So, you will get  15000 rupees instantly.If you buy gold membership and refer 1 person with diamond  membership then you get instant 150% return.So, you will get 7500 rupees  in 14 days."
                        : data.amount === 3000
                          ? "If you refer 4 persons with platinum membership then you get instant 300% return.So you will get 9000 rupees instantly.If you refer 3 persons with platinum membership then you will get 175% return in 7 days.So you will get 5250 rupees in 7 days.If you refer 2 persons with platinum membership then you will get 150% return in 14 days.So you will get 4500 rupees.If you refer 1 persons with platinum membership then you will get 125% return in 21 days.So you will get 3750 rupees. If you buy platinum membership and don't refer a person so you will get 150% return in 60 days.So, you will get 4500 rupees in 60 days.If you buy platinum membership and refer 3 person with gold membership then you get instant 325% return.So, you will get  9750 rupees instantly.If you buy platinum membership and refer 2 person with gold membership then you get instant 187% return.So, you will get  5500 rupees in 7 days.If you buy platinum membership and refer 2 person with diamond  membership then you get instant 366% return. So, you will get 11000 rupees  instantly.If you buy platinum membership and refer 1 person with diamond  membership then you get instant 187% return.So, you will get 5500 rupees  in 7 days."
                          : data.amount === 1000
                            ? "If you refer 4 persons with silver membership then you get instant 300% return.So you will get 3000 rupees instantly.If you refer 3 persons with silver membership then you will get 175% return in 7 days.So you will get 1750 rupees.If you refer 2 persons with silver membership then you will get 150% return in 14 days.So you will get 1500 rupees.If you refer 1 persons with silver membership then you will get 125% return in 21 days.So you will get 1250 rupees.If you buy silver and don't refer a person so you will get 150% return in 60 days. So, you will get 1500 rupees in 60 days.If you buy silver membership and refer 2 person with plantinum membership then you get instant 350% return.So, you will get 3500 rupees instantly.If you buy silver membership and refer 1 person with plantinum membership then you get instant 175% return.So, you will get 1750 rupees in 7 days.If you buy silver membership and refer 1 person with gold  membership then you get instant 325% return.So, you will get 3250 rupees in instantly."
                            : undefined // No default condition
                  }

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
