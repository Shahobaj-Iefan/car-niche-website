import {
  Container,
  Grid,
  Typography,
  Button,
  CircularProgress,
  Alert,
  AlertTitle,
} from "@mui/material";
import TextField from "@mui/material/TextField";

import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  //state for email and password
  const [loginData, setLoginData] = useState({});
  const { user, isLoading, authError, loginUser, signInWithGoogle } = useAuth();
  // const location = useLocation();
  const location = useLocation();
  // const history = useHistory();
  const history = useHistory();

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
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  //here maintain history and location of google sign in module 72-1
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant='h6' component='div' gutterBottom>
            Login
          </Typography>
          {!isLoading && (
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
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity='success'>
              <AlertTitle>Success</AlertTitle>
              This user Login successfully ??? <strong>check it out!</strong>
            </Alert>
          )}
          {authError && (
            <Alert severity='error'>
              <AlertTitle>Error</AlertTitle>
              {authError} ??? <strong>check it out!</strong>
            </Alert>
          )}
          <Button onClick={handleGoogleSignIn} variant='contained' gutterBottom>
            Sign In with Google
          </Button>
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
