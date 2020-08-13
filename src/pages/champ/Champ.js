import React from "react";

import "./Champ.css";
import { Link } from "react-router-dom";
import ChampContent from "./ChampContent";
import Footer2 from "./../../include/Footer2";
import Header2 from "./../../include/Header2";
const Champ = () => {
  return (
    <div className="champ-container">
      <Header2 />

      {/* <!-- 제일 큰 박스 컨테이너 --> */}
      <ChampContent />
      <Footer2 />
    </div>
  );
};

export default Champ;
