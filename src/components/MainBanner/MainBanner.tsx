import "./MainBanner.scss";

const AquaSensApp = require("../../assets/images/AquaSensApp.png");

const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="content">
        <div className="sale-section">
          <h1>AquaSens</h1>
          <p>Quick insights into your aquarium stats</p>
          <button>Buy Now</button>
        </div>
        <div className="app-image">
          <img src={AquaSensApp} alt="AquaSens app" />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
