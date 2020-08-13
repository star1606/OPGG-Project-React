import React from "react";
import Header1 from "../../include/Header1";
import Footer1 from "../../include/Footer1";
import "./Home.css";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
    <div className="home-container">
      <Header1 />
      <HomeMain />
      <Footer1 />
    </div>
  );
};

export default Home;
