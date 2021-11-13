import { Grid, Typography, Container, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Service from "../Home/Service/Service";

/* const services = [
  {
    id: 1,
    name: "Toyota",
    description: "dfkdsfsdfsdfjdsf",
    price: "3000",
    img: "https://i.ibb.co/zFYRWdv/service3.png",
  },
  {
    id: 2,
    name: "Toyota2",
    description: "dfkdsfsdfsdfjdsf",
    price: "3000",
    img: "https://i.ibb.co/zFYRWdv/service3.png",
  },
  {
    id: 3,
    name: "Toyota3",
    description: "dfkdsfsdfsdfjdsf",
    price: "3000",
    img: "https://i.ibb.co/zFYRWdv/service3.png",
  },
  {
    id: 4,
    name: "Toyota4",
    description: "dfkdsfsdfsdfjdsf",
    price: "3000",
    img: "https://i.ibb.co/zFYRWdv/service3.png",
  },
  {
    id: 5,
    name: "Toyota5",
    description: "dfkdsfsdfsdfjdsf",
    price: "3000",
    img: "https://i.ibb.co/zFYRWdv/service3.png",
  },
  {
    id: 6,
    name: "Toyota6",
    description: "dfkdsfsdfsdfjdsf",
    price: "3000",
    img: "https://i.ibb.co/zFYRWdv/service3.png",
  },
  {
    id: 7,
    name: "Toyota7",
    description: "dfkdsfsdfsdfjdsf",
    price: "3000",
    img: "https://i.ibb.co/zFYRWdv/service3.png",
  },
  {
    id: 8,
    name: "Toyota8",
    description: "dfkdsfsdfsdfjdsf",
    price: "3000",
    img: "https://i.ibb.co/zFYRWdv/service3.png",
  },
]; */

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/services`;
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
