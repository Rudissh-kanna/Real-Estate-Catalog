import { useEffect, useState } from "react";
import "../css/PageHeader.css";
import { useNavigate } from "react-router-dom";


const PageHeader = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/home", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
                // "x-access-token":localStorage.getItem("token")
            },
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setData(data)
        })
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <div>

            <div className="header-Container">
                <div className="header-userID-container">
                    <p>USER ID : 06PPD125</p>
                </div>
                <div className="header-userName-container">
                    <span className="header-userName-img">
                        <img src="./Images/userName_img.png" alt="userNameImg"></img>
                    </span>
                    <span>Hello User</span>
                    <span>
                        <select className="dropDown" onChange={handleLogout}>
                            <option>Login</option>
                            <option>Logout</option>
                        </select>
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