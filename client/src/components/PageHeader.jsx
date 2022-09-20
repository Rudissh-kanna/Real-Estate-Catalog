import "../css/PageHeader.css";


const PageHeader = () => {
    //handling logout
    function handleLogout(e){
        
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
                    <span>User Name</span>
                    <span>
                        {/* <img src="./Images/dropDownArrow.png" alt="dropDownArrow"></img> */}
                        <select className="dropDown" onChange={handleLogout}>
                            <option></option>
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