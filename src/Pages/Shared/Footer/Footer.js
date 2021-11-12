import { Container, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{ backgroundColor: "black", color: "white", mt: 3 }}
    >
      <Grid sx={{ py: 3 }} container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant='h4' gutterBottom component='div'>
            Showroom
          </Typography>
          <Typography variant='h6' gutterBottom component='div'>
            Address: Dhap, Rangpur <br />
            Phone: 017888888888
            <br />
            Email: car.vally@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant='h4' gutterBottom component='div'>
            Quick Links
          </Typography>

          <Link
            sx={{
              display: "block",
              textDecoration: "none",
              fontWeight: "600",
              color: "white",
            }}
            href='#'
          >
            Blog
          </Link>
          <Link
            sx={{
              display: "block",
              textDecoration: "none",
              fontWeight: "600",
              color: "white",
            }}
            href='#'
          >
            Payments
          </Link>
          <Link
            sx={{
              display: "block",
              textDecoration: "none",
              fontWeight: "600",
              color: "white",
            }}
            href='#'
          >
            Shipment
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant='h4' gutterBottom component='div'>
            Information
          </Typography>
          <Typography variant='h6' gutterBottom component='div'>
            Contact Us
          </Typography>
          <Typography variant='h6' gutterBottom component='div'>
            About Us
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
