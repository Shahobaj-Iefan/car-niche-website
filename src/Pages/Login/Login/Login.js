import { Container, Grid, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  //state for email and password
  const [loginData, setLoginData] = useState({});

  //handle onchange field
  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  //handle submit form
  const handleLoginSubmit = e => {
    alert("Login success");
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant='h6' component='div' gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id='standard-basic'
              name='email'
              onChange={handleOnChange}
              label='Your Email'
              variant='standard'
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              name='password'
              onChange={handleOnChange}
              id='standard-basic'
              label='Your Password'
              type='password'
              variant='standard'
            />

            <NavLink to='/register'>
              <Button variant='text' gutterBottom>
                New user? Please Register
              </Button>
            </NavLink>
            <Button
              sx={{ width: "75%", m: 1 }}
              variant='contained'
              type='submit'
              gutterBottom
            >
              Login
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src='https://i.ibb.co/tY2nBdL/Login-banner-Flat-illustration-of-login-vector-banner-for-web.jpg'
            alt=''
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
