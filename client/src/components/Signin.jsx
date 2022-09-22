import React, { useState } from "react";
import { makeStyles, Card, InputAdornment, IconButton} from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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

  const [isVisibility, setVisibility] = useState(false);

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

  function handleClickShowPassword() {
    setVisibility(!isVisibility);
  }



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
        console.log(window.location);
        setError(res.message);
        window.location.href = '/'
        // navigate("/");
      });
  };

  return (
    <div style = {{width: "100%", height: "100vh", backgroundColor: "#E1F9F4", position: "fixed"}}>
      <div style={{marginTop: "9%"}}>
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
            id="adornment-password"
            placeholder="Password"
            variant="filled"
            type={isVisibility ? 'text' : 'password'}
            name="password"
            onChange={handleChange}
            InputProps={{
              endAdornment:(
              <InputAdornment position="end" >
              <IconButton
                aria-label="Toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {isVisibility ? <VisibilityOff /> : <Visibility />}
              </IconButton>
              </InputAdornment>
              )
            }}
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
      </div>
    </div>
  );
};

export default Signin;
