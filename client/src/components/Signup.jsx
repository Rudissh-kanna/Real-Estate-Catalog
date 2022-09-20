import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import '../css/Style.css'

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
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  
  const handleClose=()=>{
    setUserDetails({email: "",
    password: "",
    confirmPassword: "",})
  }
  
  const handleChange = e => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const data= await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    }).then(data => data.json());

    if (data.status === "sucess") {
        navigate("/login")
      } else {
        setError(data.message);
      }

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
      <TextField
        label="Confirm Password"
        variant="filled"
        type="password"
        name="confirmpassword"
        required
        onChange={handleChange}
      />
      <div>
      {error && <p className="error_msg">{error}</p>}
      <div style={{marginLeft:"60px"}}>
        <Button variant="contained" onClick={handleClose}>Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
        </div>
      </div>
    </form>
  );
};

export default Signup;
