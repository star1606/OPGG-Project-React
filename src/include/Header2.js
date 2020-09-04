import React, { useState } from "react";
import "./Header2.css";
import { Link, withRouter } from "react-router-dom";

const Header2 = ({ history }) => {
  const [username, setUsername] = useState("");

  const handleOnChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    history.push("/summoner/" + username);
  };

  const logout = () => {
    localStorage.clear();
    console.log(localStorage.getItem("jwtToken"));
  };

  const authCheck = localStorage.getItem("jwtToken") ? (
    <Link to="/#" onClick={logout}>
      로그아웃
    </Link>
  ) : (
    <Link to="/login">로그인</Link>
  );
  return (
    <div className="l-menu2">
      <ul className="menu2">
        <li className="menu__item2">
          <Link to="/home">OP.GG</Link>
        </li>

        <li className="menu__item2">
          <Link to="/ranking">랭킹</Link>
        </li>

        <li className="menu__item2">
          <Link to="/community">커뮤니티</Link>
        </li>
        <li className="menu__item2">{authCheck}</li>
      </ul>
      <div
        className="gnb-list-item gnb-list-item__search"
        style={{ marginLeft: "75px" }}
        // style="margin-left: auto;"
      >
        <form onSubmit={handleSubmit}>
          {/* <form action="/summoner/" method="get" autocomplete="off"> */}
          <input
            onChange={handleOnChange}
            type="text"
            className="gnb-list-item__input _suggest"
            name="userName"
            placeholder="소환사명, 소환사명, ..."
            autoComplete="off"
          />

          <button type="submit">
            <img height="14" src="../img/searchgg.png" alt="이미지" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Header2);
