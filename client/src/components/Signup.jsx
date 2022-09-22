import React, { useState } from "react";
import { makeStyles, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate, Link } from "react-router-dom";
import "../css/Style.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    marginTop: "4%",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "500px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    boxShadow: "5px 5px 10px 5px #bdc3c7",
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

  const handleChange = e => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const data = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    }).then(data => data.json());

    if (data.status === "sucess") {
      navigate("/login");
    } else {
      setError(data.message);
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Card className={classes.card} variant="outlined">
        <h1 style={{ fontWeight: "bold", textShadow: "#7f8c8d 1px 0 5px" }}>
          User Registration Form
        </h1>
        <TextField
          label="Name"
          variant="filled"
          type="name"
          name="name"
          required
          onChange={handleChange}
        />
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
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </div>
      </Card>
      <div style={{ alignItem: "center", marginTop: "3%" }}>
        <span>Already have an Account ? </span>
        <Link to="/login" style={{ fontSize: "25px" }}>
          Login here!
        </Link>
      </div>
    </form>
  );
};

export default Signup;
