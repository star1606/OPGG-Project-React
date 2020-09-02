import React from "react";
import "./Header1.css";
import { Link, NavLink } from "react-router-dom";
const Header1 = () => {
  return (
    <div className="l-menu1">
      <ul className="menu1">
        <li className="menu__item1">
          <Link to="/home">OP.GG</Link>
        </li>

        <li className="menu__item1">
          <Link to="/ranking">랭킹</Link>
        </li>

        <li className="menu__item1">
          <Link to="/community">커뮤니티</Link>
        </li>
        <li className="menu__item1">
          <NavLink to="/login">로그인</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header1;
