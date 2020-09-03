import React from "react";
import "./Header1.css";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Header1 = ({ history }) => {
  const logout = () => {
    localStorage.clear();
    console.log(localStorage.getItem("jwtToken"));
  };

  const authCheck = localStorage.getItem("jwtToken") ? (
    <Link onClick={logout}>로그아웃</Link>
  ) : (
    <Link to="/login">로그인</Link>
  );

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
        <li className="menu__item1">{authCheck}</li>
      </ul>
    </div>
  );
};

export default withRouter(Header1);
