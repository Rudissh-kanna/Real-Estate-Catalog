
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    marginTop: "9%",

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "500px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Signin = () => {
  const classes = useStyles();
  const [userDetails, setUserDetails] = useState({});

  const handleChange = e => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
console.log(userDetails)
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(userDetails);
    const data = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    }).then(data => data.json());
    console.log(data);
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="filled"
        type="email"
        name="email"
        required
        onChange={handleChange}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        name="password"
        required
        onChange={handleChange}
      />
      <div>
        <Button variant="contained">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          SignIn
        </Button>
      </div>
    </form>
  );
};

export default Signin;