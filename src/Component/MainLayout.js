import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png"

const MainLayout = () => {
    return (
        <div className="main-wrap">
            <div className="overlay"></div>
            <header>
                <Link to="/">
                <img
                    className="logo-img"
                    src={logo} 
                    alt="Netflix Logo Image"/>
                </Link>
            </header>
            <Outlet/>
        </div>
    );
};

export default MainLayout;