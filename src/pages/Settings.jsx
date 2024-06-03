import React from "react";
import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Lists from "../settings/List";
import Typography from "@mui/material/Typography";

export default function Settings() {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Lists />
          <Typography variant="h1" gutterBottom></Typography>
          {/* Your settings content goes here */}
        </Box>
      </Box>
    </>
  );
}
