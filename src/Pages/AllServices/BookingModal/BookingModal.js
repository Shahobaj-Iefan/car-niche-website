import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleBooingClose,
  service,
  setOrderSuccess,
}) => {
  const { img, name, description } = service;
  const { user } = useAuth();
  //initial user info
  const initialInfo = {
    customerName: user.displayName,
    email: user.email,
    phone: "",
  };
  //handle booking info
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };
  //booking submit
  const handleBookingSubmit = e => {
    //collect data
    const order = {
      ...bookingInfo,
      productName: name,
      productDescription: description,
    };

    // after collecting  data  send to the server
    console.log(order);
    fetch("https://fierce-cliffs-29526.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setOrderSuccess(true);
          handleBooingClose();
        }
        console.log(data);
      });

    e.preventDefault();
  };
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={openBooking}
      onClose={handleBooingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <CardMedia>
            <img src={img} alt='' />
          </CardMedia>
          <Typography id='transition-modal-title' variant='h6' component='h2'>
            {name}
          </Typography>
          <Typography id='transition-modal-description' sx={{ mt: 2 }}>
            {description}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              label='Name'
              sx={{ width: "90%", m: 1 }}
              id='outlined-size-small'
              name='customerName'
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size='small'
            />
            <TextField
              label='Email'
              sx={{ width: "90%", m: 1 }}
              id='outlined-size-small'
              name='email'
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size='small'
            />
            <TextField
              label='Phone'
              id='outlined-size-small'
              sx={{ width: "90%", m: 1 }}
              name='phone'
              onBlur={handleOnBlur}
              defaultValue='Your Phone'
              size='small'
            />

            <NavLink to='/payments'>
              <Button type='submit' variant='contained'>
                Payments
              </Button>
            </NavLink>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
