import { Link } from "react-router-dom";
import mapImage from "../assets/image-map.png";
import leftArrowIcon from "../assets/icon-arrow-left.svg";

function Location() {
  return (
    <>
      <img src={mapImage} alt="map-image" className="map-image" />
      <Link to="/Art-Gallery-Website" className="btn second">
        <img src={leftArrowIcon} alt="left-arrow-icon" />
        <h3>Back to Home</h3>
      </Link>

      <section className="location">
        <div className="container">
          <h2 className="heading">Our location</h2>
          <div className="content">
            <h3 className="name">99 King Street</h3>
            <h4 className="sub-name">Newport</h4>
            <h4 className="sub-name">RI 02840</h4>
            <h4 className="sub-name">United States of America</h4>
            <p className="text">
              Our newly opened gallery is located near the Edward King House on
              99 King Street, the Modern Art Gallery is free to all visitors and
              open seven days a week from 8am to 9pm.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Location;
