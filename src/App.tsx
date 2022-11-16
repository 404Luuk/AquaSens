import MainBanner from "components/MainBanner/MainBanner";
import SecondBanner from "components/Second-banner/SecondBanner";
import SpecificationBanner from "components/SpecificationBanner/SpecificationBanner";
import SalesBanner from "components/SalesBanner/SalesBanner";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Footer from "components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <MainBanner />
      <SecondBanner />
      <SpecificationBanner />
      <SalesBanner />
      <Footer />
    </div>
  );
};

export default App;
