import "../css/SideBar.css";
import HomeIcon from '@mui/icons-material/Home';
import { PropertyContext } from "../context";
import {useContext} from 'react';
import { useNavigate } from "react-router-dom";


const SideBar = () => {

  const {setFormData, setData} = useContext(PropertyContext);
  const navigate = useNavigate()

  function handleClick () {
    setFormData({});
    setData(0);
    navigate('/');
  }

  return (
    <div className="sideBar-Container">
      <div className="sideBar-LogoContainer" onClick={handleClick}>
        <HomeIcon sx={{ fontSize: "6rem", color: "#416899"}}></HomeIcon>
      </div>
      <div className="sideBar-NavContainer">
        <ul>
          <li>
            <span className="propClass">
              <img src="./Images/property_img.png" alt="property_img"></img>
              <a href="/#" onClick={e => e.preventDefault()} className="nameSide">
                Property
              </a>
            </span>
          </li>
          <li>
            <span>
              <img src="./Images/assistance_img.png" alt="assistance_img"></img>
              <a href="/#" onClick={e => e.preventDefault()} className="nameSide">
                Assistance
              </a>
            </span>
          </li>
          <li>
            <span>
              <img
                src="./Images/receivedInterest_img.png"
                alt="receivedInterest_img"></img>
              <a href="/#" onClick={e => e.preventDefault()} className="nameSide">
                Received Interest{" "}
              </a>
            </span>
          </li>
          <li>
            <span>
              <img
                src="./Images/sentInterest_img.png"
                alt="sentInterest_img"></img>
              <a href="/#" onClick={e => e.preventDefault()} className="nameSide">
                Sent Interest
              </a>
            </span>
          </li>
          <li>
            <span>
              <img
                src="./Images/propertyViews_img.png"
                alt="propertyViews_img"></img>
              <a href="/#" onClick={e => e.preventDefault()} className="nameSide">
                Property Views
              </a>
            </span>
          </li>
          <li>
            <span>
              <img src="./Images/tariffPlan_img.png" alt="tariffPlan_img"></img>
              <a href="/#" onClick={e => e.preventDefault()} className="nameSide">
                Tariff Plan
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
