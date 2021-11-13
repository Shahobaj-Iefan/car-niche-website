import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Service from "../Home/Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `https://fierce-cliffs-29526.herokuapp.com/services`;
    fetch(url)
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <Container>
      <Typography
        sx={{ fontWeight: 600, m: 2, color: "info.main" }}
        variant='h4'
        component='div'
      >
        Services We Provide
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.slice(0, 6).map(service => (
          <Grid item xs={2} sm={4} md={4}>
            <Service key={Service.name} service={service}></Service>
          </Grid>
        ))}
      </Grid>
      <Link to='/allservices'>
        <Button sx={{ my: 2 }} variant='contained'>
          Explore All Products
        </Button>
      </Link>
    </Container>
  );
};

export default Services;
