import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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

const Signin = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState("");

  const handleClose=()=>{
    navigate("/signup")
  }

  const handleChange = e => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
     await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    }).then(data => data.json()).then((res)=>{
        // console.log(res)
        localStorage.setItem("token", res.token)
        setError(res.message);
    });

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
        {error && <p className="error_msg">{error}</p>}
        <div style={{alignItem:"center"}}>
        <Button variant="contained" onClick={handleClose}>Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </div>

      <div className="right">
        <Link to="/signup" style={{fontSize:"25px"}}>
            Sign Up
        </Link>
      </div>
    </form>
  );
};

export default Signin;
