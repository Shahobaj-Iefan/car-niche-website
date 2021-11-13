import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
} from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const ShowServices = ({ service, setOrderSuccess }) => {
  const { name, description, img } = service;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBooingClose = () => setOpenBooking(false);
  return (
    <>
      <Container>
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

            <Button onClick={handleBookingOpen} variant='contained'>
              Buy Now
            </Button>
          </CardContent>
        </Card>
      </Container>
      <BookingModal
        handleBooingClose={handleBooingClose}
        openBooking={openBooking}
        service={service}
        setOrderSuccess={setOrderSuccess}
      ></BookingModal>
    </>
  );
};

export default ShowServices;
