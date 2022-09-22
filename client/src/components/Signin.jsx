import React, { useState } from "react";
import { makeStyles, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/Style.css";

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
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    boxShadow: "5px 5px 10px 5px #bdc3c7",
  },
}));

const Signin = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState("");

  const handleClose = () => {
    navigate("/signup");
  };

  const handleChange = e => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  // useEffect(()=>{
  //   if(sucess){
      
  //   }
  // },[sucess])

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then(data => data.json())
      .then(res => {
        console.log(res.status);
        localStorage.setItem("token", res.token);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("id", res.data._id);
        setError(res.message);
        navigate("/");
      });
  };

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Card className={classes.card} variant="outlined">
          <h1 style={{ fontWeight: "bold", textShadow: "#7f8c8d 1px 0 5px" }}>
            User Login Form
          </h1>
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
          <div style={{ alignItem: "center" }}>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Sign In
            </Button>
          </div>
        </Card>
        <div className="right" style={{ marginTop: "3%" }}>
          <span>Don't have an account ? </span>
          <Link to="/signup" style={{ fontSize: "25px" }}>
            Sign Up!
          </Link>
        </div>
      </form>
    </>
  );
};

export default Signin;
