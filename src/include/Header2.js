import React from "react";
import "./Header2.css";
import { Link } from "react-router-dom";
const Header2 = ({ history }) => {
  return (
    <div className="l-menu">
      <ul className="menu">
        <li className="menu__item">
          <Link to="/">op.gg</Link>
        </li>
        <li className="menu__item">
          <Link to="/champion">챔피언 분석</Link>
        </li>

        <li className="menu__item">
          <Link to="/ranking">랭킹</Link>
        </li>

        <li className="menu__item">
          <Link to="/community">커뮤니티</Link>
        </li>
        <li className="menu__item">
          <Link to="/login">로그인</Link>
        </li>

        <div
          className="gnb-list-item gnb-list-item__search"
          // style="margin-left: auto;"
        >
          {/* <form action="/summoner/" method="get" autocomplete="off"> */}
          <input
            type="text"
            className="gnb-list-item__input _suggest"
            name="userName"
            placeholder="소환사명, 소환사명, ..."
            autocomplete="off"
          />

          {/* 이벤트가 e.target.value 타이핑하는거 잡고 그거를 주소 뒤의 value에다가 붙이면 될듯 */}
          <Link to="/summoner/username=aaa">
            <button /*onCLick={() => history.push("/ranking")}*/>
              <img height="14" src="../img/searchgg.png" alt="이미지" />
            </button>
          </Link>
          {/* </form> */}
        </div>
      </ul>
    </div>
  );
};

export default Header2;
