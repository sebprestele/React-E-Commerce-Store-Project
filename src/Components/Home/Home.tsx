import Footer from "Components/Footer/Footer";
import Navigation from "Components/Navigation/Navigation";
import Hero from "Components/Hero/Hero";
import Main from "Components/Main/Main";

import "./Home.css";

const Home = () => {
  return (
    <div className="page-wrapper">
      <Navigation />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
