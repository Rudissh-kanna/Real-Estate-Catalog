import "../css/SideBar.css";

const SideBar = () => {
    return (
        <div className="sideBar-Container">
            <div className="sideBar-LogoContainer">
                <h1>LOGO</h1>
            </div>
            <div className="sideBar-NavContainer">
                <ul>
                    <li>
                        <span>
                            <img src="./Images/property_img.png" alt="property_img" ></img><a href="/#" onClick={(e) => e.preventDefault()} >Property</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <img src="./Images/assistance_img.png" alt="assistance_img" ></img><a href="/#" onClick={(e) => e.preventDefault()}>Assistance</a>
                        </span>
                    </li><li>
                        <span>
                            <img src="./Images/receivedInterest_img.png" alt="receivedInterest_img" ></img><a href="/#" onClick={(e) => e.preventDefault()}>Received Interest </a>
                        </span>
                    </li><li>
                        <span>
                            <img src="./Images/sentInterest_img.png" alt="sentInterest_img" ></img><a href="/#" onClick={(e) => e.preventDefault()}>Sent Interest</a>
                        </span>
                    </li><li>
                        <span>
                            <img src="./Images/propertyViews_img.png" alt="propertyViews_img" ></img><a href="/#" onClick={(e) => e.preventDefault()}>Property Views</a>
                        </span>
                    </li><li>
                        <span>
                            <img src="./Images/tariffPlan_img.png" alt="tariffPlan_img" ></img><a href="/#" onClick={(e) => e.preventDefault()}>Tariff Plan</a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;