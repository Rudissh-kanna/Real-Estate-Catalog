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

const Signup = () => {
  const classes = useStyles();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const handleChange = e => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  // console.log(userDetails)
  const handleSubmit = async e => {
    e.preventDefault();
    // console.log(userDetails);

    const data = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    }).then(data => data.json());
    console.log("dataa", data);
    if (data.status === "sucess") {
      alert("Sucess !!!");
    } else {
      setError(data.message);
      // alert(data.message)
    }
  };
  console.log(error);
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="filled"
        type="email"
        name="email"
        // error={error}
        required
        onChange={handleChange}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        name="password"
        required
        // error={error}
        onChange={handleChange}
      />
      <TextField
        label="Confirm Password"
        variant="filled"
        type="password"
        name="confirmpassword"
        // error={error}
        required
        onChange={handleChange}
      />
      <div>
        <Button variant="contained">Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Signup;
