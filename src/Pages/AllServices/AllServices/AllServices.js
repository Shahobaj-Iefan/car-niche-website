import { Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import ShowServices from "../ShowServices/ShowServices";
const services = [
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
];

const AllServices = () => {
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
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.map(service => (
          <Grid item xs={12} sm={4} md={4}>
            <ShowServices key={service.id} service={service}></ShowServices>
          </Grid>
        ))}
      </Grid>
      <Footer></Footer>
    </>
  );
};

export default AllServices;
