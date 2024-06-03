import React from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import GeoChart from "../Charts/GeoCharts";
import CountUp from "react-countup";
import { Padding } from "@mui/icons-material";
export default function Analytics() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Stack spacing={2} direction="row">
                  <Card sx={{ height: 19 + "vh" }} className="gradient">
                    <CardContent>
                      <Typography
                        getterBottom
                        variant="p"
                        component={div}
                        sx={{ color: "#ffffff", padding: "7px 0px" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        <CuntUp delay={0.2} end={22000} duration={0.3} />
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text-secondry"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ height: 19 + "vh", marginTop: "16px" }}
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
                        $900.00
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
            <Box height={16} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent></CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent></CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
