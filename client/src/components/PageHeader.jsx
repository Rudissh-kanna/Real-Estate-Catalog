import { useState } from "react";
import "../css/PageHeader.css";
import { useNavigate } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
const PageHeader = () => {
    const navigate = useNavigate();
    // const [data, setData] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    const rand=Math.ceil(Math.random())*10;
    const rand1=Math.ceil(Math.random())*100;
    const user_id=rand+"PPD"+rand1;
    // var user = JSON.parse(localStorage.getItem(data));
    // console.log(user);
    return (
        <div>
            <div className="header-Container">
                <div className="header-userID-container">
                
                    <p>USER ID : {user_id}</p>
                </div>
                <div className="header-userName-container">
                    <span className="header-userName-img">
                        <img src="./Images/userName_img.png" alt="userNameImg"></img>
                    </span>
                    <span>User Name</span>
                    <span>
                        <Button onClick={handleLogout} color="primary" size="large" endIcon={<ExitToAppRoundedIcon />}>Logout</Button>
                    </span>
                </div>
            </div>
            <div className="header-bottom-line">
                <img src="./Images/headerBottomLineBar_img.png" alt="headerBottomLine"></img>
            </div>
        </div>
    )
}

export default PageHeader;