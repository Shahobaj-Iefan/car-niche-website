import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const Service = props => {
  const { name, description, img } = props.service;
  return (
    <Card sx={{ minWidth: 256, border: 2, boxShadow: 1, py: 1 }}>
      <CardMedia
        component='img'
        style={{ width: "auto", height: "80px", margin: "0 auto" }}
        image={img}
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description.slice(0, 100)}
        </Typography>
        <Button variant='contained'>Buy Now</Button>
      </CardContent>
    </Card>
  );
};

export default Service;
