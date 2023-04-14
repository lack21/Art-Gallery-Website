import { Link, Outlet } from "react-router-dom";
import logoImage from "../assets/logo-light.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import facebookIcon from "../assets/icon-facebook.svg";

function Layout() {
  return (
    <>
      <Outlet />
      <footer className="footer">
        <div className="content">
          <img src={logoImage} alt="logo" className="logo" />
          <p className="text">
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>
          <div className="social-icons">
            <img src={twitterIcon} alt="twitter-icon" />
            <img src={instagramIcon} alt="instagram-icon" />
            <img src={facebookIcon} alt="facebook-icon" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
