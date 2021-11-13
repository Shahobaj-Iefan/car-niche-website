import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            <Typography sx={{ flexGrow: 1 }} variant='h6' component='div'>
              Car Velly
            </Typography>
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link
              style={{ color: "white", textDecoration: "none", pr: 1 }}
              to='/home'
            >
              Home
            </Link>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
              }}
              to='/allservices'
            >
              Services
            </Link>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
              }}
              to='/home'
            >
              Link
            </Link>
          </Typography>
          {user?.email ? (
            <Box>
              <NavLink to='/dashboard'>
                <Button
                  style={{ backgroundColor: "black", textDecoration: "none" }}
                  variant='contained'
                >
                  Dashboard
                </Button>
              </NavLink>

              <Button onClick={logOut} variant='contained'>
                Logout
              </Button>
            </Box>
          ) : (
            <NavLink to='/login'>
              <Button
                style={{ backgroundColor: "black", textDecoration: "none" }}
                variant='contained'
              >
                Login
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
