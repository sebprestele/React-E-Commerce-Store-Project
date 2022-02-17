import Footer from "Components/Footer/Footer";
import Navigation from "Components/Navigation/Navigation";
import Hero from "Components/Hero/Hero";
import Main from "Components/Main/Main";

import "./Home.css";
import Main2 from "Components/Main/Main2";

const Home = () => {
  return (
    <div className="page-wrapper">
      <Navigation />
      <Hero />
      <Main />
      <Main2 />
      <Footer />
    </div>
  );
};

export default Home;
