import SideBar from "./SideBar";
import PageHeader from "./PageHeader";

const Home = () => {
    return (
        <div className="home-Container">
            <SideBar />
            <PageHeader />
            <div className="search-Add-Container">
                <form className="searchBar-Container"></form>
                <button>+ Add Property</button>
            </div>
            <div className="data-table-container">
                
            </div>
        </div>
    )
}

export default Home;