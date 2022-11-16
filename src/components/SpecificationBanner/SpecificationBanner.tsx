import "./SpecificationBanner.scss";
const girlWithFish = require("../../assets/images/girl-with-fish.jpg");

const SpecificationBanner = () => {
  return (
    <div className="spec-banner">
      <div className="content">
        <div className="section-spec">
          <img src={girlWithFish} alt="girl-with-fish" />
          <div className="spec-text">
            <h2>AquaSens Specifications</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, eius? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              ad minim veniam, quis nostrud
            </p>
          </div>
        </div>
        <div className="section-app">
          <img src={girlWithFish} alt="girl-with-fish" />
          <div className="app-text">
            <h2>AquaSens Mobile App</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illum, ipsam? Ut enim ad minim veniam, quis nostrud
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificationBanner;
