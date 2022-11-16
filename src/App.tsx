import MainBanner from "components/MainBanner/MainBanner";
import SecondBanner from "components/Second-banner/SecondBanner";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <MainBanner />
      <SecondBanner />
    </div>
  );
};

export default App;
