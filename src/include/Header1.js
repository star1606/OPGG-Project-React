import React from "react";
import "./Header1.css";
import { Link } from "react-router-dom";
const Header1 = () => {
  return (
    <div className="l-menu1">
      <ul className="menu1">
        <li className="menu__item1">
          <Link to="/">op.gg</Link>
        </li>

        <li className="menu__item1">
          <Link to="/ranking">랭킹</Link>
        </li>

        <li className="menu__item1">
          <Link to="/community">커뮤니티</Link>
        </li>
        <li className="menu__item1">
          <Link to="/login">로그인</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header1;
