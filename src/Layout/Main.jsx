import { Outlet } from "react-router-dom";
import Footer from "../pages/ShearedPages/Footer/Footer";
import NavBar from "../pages/ShearedPages/NavBar/NavBar";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;