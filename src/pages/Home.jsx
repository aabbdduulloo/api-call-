import React from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import AccordionDash from "../components/AccordionDash";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import "../Dash.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BarChart from "../Charts/BarChart";
import CountUp from "react-countup";

export default function Home() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />

        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div>
                        <CreditCardIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        $<CountUp delay={0.2} end={500} duration={0.3} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Order
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: "49%", height: 150 }}
                    className="gradientlight"
                  >
                    <CardContent>
                      <div>
                        <ShoppingBagIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        $<CountUp delay={0.2} end={900} duration={0.3} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345 }}>
                    <Stack spacing={2} direction="row" className="gradient">
                      <div className="iconstyle">
                        <StorefrontIcon />
                      </div>

                      <div className="pardingall">
                        <span className="pricetitle">$203K</span>
                        <br />
                        <span className="pricesubtitle">Total income </span>
                      </div>
                    </Stack>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <Stack
                      spacing={2}
                      direction="row"
                      className="gradientlight"
                    >
                      <div className="iconstyle">
                        <StorefrontIcon />
                      </div>

                      <div className="pardingall">
                        <span className="pricetitle">$203K</span>
                        <br />
                        <span className="pricesubtitle">Total income </span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: "60vh" }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: "60vh" }}>
                  <CardContent>
                    <div className="pardingall">
                      <span className="pricetitle">Popular Product</span>
                    </div>
                    Popular Product
                    <AccordionDash />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
