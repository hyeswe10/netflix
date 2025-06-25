import {Link, Outlet} from "react-router-dom";
import logo from "../assets/logo.png";
const MainLayout = () => {
  return (
    <div className="main-wrap main-font">
      <header>
        <Link to="/">
          <img 
            className="logo-img"
            src={logo} 
            alt="Netflix Logo image" 
          />
        </Link>
      </header>
      <Outlet />
    </div>
  );
};

export default MainLayout;