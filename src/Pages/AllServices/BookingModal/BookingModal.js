import React from "react";
import useAuth from "../../../hooks/useAuth";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

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

const BookingModal = ({ openBooking, handleBooingClose, service }) => {
  const { img, name, description } = service;
  const { user } = useAuth();
  const handleBookingSubmit = e => {
    alert("Submitting");
    //collect data from the form and send to the server

    handleBooingClose();
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
              defaultValue={user.displayName}
              size='small'
            />
            <TextField
              label='Email'
              sx={{ width: "90%", m: 1 }}
              id='outlined-size-small'
              defaultValue={user.email}
              size='small'
            />
            <TextField
              label='Phone'
              id='outlined-size-small'
              sx={{ width: "90%", m: 1 }}
              defaultValue='Your Phone'
              size='small'
            />
            <Button type='submit' variant='contained'>
              Payments
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
