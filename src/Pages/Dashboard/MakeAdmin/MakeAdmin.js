import { TextField, Button, Alert, AlertTitle } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAdminSubmit = e => {
    const user = { email };
    fetch("https://fierce-cliffs-29526.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  const handleOnBlur = e => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h3>Make me admin</h3>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          id='standard-basic'
          label='Email'
          onBlur={handleOnBlur}
          variant='standard'
          type='email'
        />
        <Button type='submit' variant='contained'>
          Make Admin
        </Button>
      </form>
      {success && (
        <Alert severity='success'>
          <AlertTitle>Success</AlertTitle>
          Made Admin SuccessFully — <strong>check it out!</strong>
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
