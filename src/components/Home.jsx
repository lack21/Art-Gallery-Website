import { Link } from "react-router-dom";
import rightArrowIcon from "../assets/icon-arrow-right.svg";
import galleyImageOne from "../assets/image-grid.jpg";
import galleryImageTwo from "../assets/image-grid-2.jpg";
import galleryImageThree from "../assets/image-grid-3.jpg";

function Home() {
  return (
    <>
      <section className="top-images">
        <div className="left-image"></div>
        <div className="center-image"></div>
        <div className="right-image"></div>
      </section>

      <header className="header">
        <h1 className="title">
          Modern
          <br /> Art Gallery
        </h1>
        <div className="content">
          <p className="text">
            The arts in the collection of the <span>Modern Art Gallery</span>
            all started from a spark of inspiration. Will these pieces inspire
            you? <span>Visit us and find out.</span>
          </p>
          <Link to="location" className="btn">
            Our Location <img src={rightArrowIcon} alt="right-arrow-icon" />
          </Link>
        </div>
      </header>

      <section className="gallery">
        <div className="top-section">
          <div className="left-content">
            <h2 className="heading">Your Day At The Gallery</h2>
            <p className="text">
              Wander through our distinct collections and find new about our
              artists. Dive into the details of their creative process.
            </p>
          </div>
          <img
            src={galleyImageOne}
            alt="gallery-image"
            className="first-image"
          />
        </div>
        <div className="bottom-section">
          <img
            src={galleryImageTwo}
            alt="gallery-image"
            className="second-image"
          />
          <div className="right-content">
            <img
              src={galleryImageThree}
              alt="gallery-image"
              className="third-image"
            />
            <div className="bottom-right-content">
              <h2 className="heading">Come & Be Inspired</h2>
              <p className="text">
                We're excited to welcome you to our gallery and see how our
                collections influence you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
