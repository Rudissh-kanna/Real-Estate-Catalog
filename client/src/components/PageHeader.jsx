
import "../css/PageHeader.css";
import Button from "@material-ui/core/Button";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
const PageHeader = () => {


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name")
    localStorage.removeItem("id")
    window.location.href = "/login";
  };
//   const rand = Math.ceil(Math.random()) * 10;
//   const rand1 = Math.ceil(Math.random()) * 100;
//   const user_id = rand + "PPD" + rand1;
  const id = localStorage.getItem("id").slice(-8);
  //console.log(id);
  // var user = JSON.parse(localStorage.getItem(data));
  // console.log(user);
  // console.log(new URLSearchParams(window.location.search))
  return (
    <div className="header-main">
      <div className="header-Container">
        <div className="header-userID-container">
          <p>USER ID : {id}</p>
        </div>
        <div className="header-userName-container">
          <span className="header-userName-img">
            <img src="./Images/userName_img.png" alt="userNameImg"></img>
          </span>
          <span>{localStorage.getItem("name").toUpperCase()}</span>
          <span>
            <Button
              onClick={handleLogout}
              color="primary"
              size="large"
              endIcon={<ExitToAppRoundedIcon />}>
              Logout
            </Button>
          </span>
        </div>
      </div>
      {/* <div className="header-bottom-line"> */}
        <hr className="breakpoint"></hr>
        {/* <img
          src="./Images/headerBottomLineBar_img.png"
          alt="headerBottomLine"></img> */}
      {/* </div> */}
    </div>
  );
};

export default PageHeader;
