import { Alert, AlertTitle, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import ShowServices from "../ShowServices/ShowServices";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [orderSuccess, setOrderSuccess] = useState(false);
  useEffect(() => {
    const url = `https://fierce-cliffs-29526.herokuapp.com/services`;
    fetch(url)
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <Typography
        sx={{ fontWeight: 600, m: 2, color: "info.main" }}
        variant='h4'
        component='div'
      >
        Available Products
      </Typography>
      {orderSuccess && (
        <Alert severity='success'>
          <AlertTitle>Success</AlertTitle>
          Order Placed successfully — <strong>check it out!</strong>
        </Alert>
      )}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.map(service => (
          <Grid item xs={12} sm={4} md={4}>
            <ShowServices
              key={service.id}
              service={service}
              setOrderSuccess={setOrderSuccess}
            ></ShowServices>
          </Grid>
        ))}
      </Grid>
      <Footer></Footer>
    </>
  );
};

export default AllServices;
