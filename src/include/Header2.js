import React from "react";
import "./Header2.css";
import { Link, withRouter } from "react-router-dom";
const Header2 = ({ history, props }) => {
  // const{ auth } = props;
  const links =
    1 === 2 ? (
      <li className="menu__item2">
        <Link to="/login">로그인</Link>
      </li>
    ) : (
      <div>로그아웃</div>
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
        <li className="menu__item2">
          <Link to="/login">로그인</Link>
        </li>
      </ul>
      <div
        className="gnb-list-item gnb-list-item__search"
        style={{ marginLeft: "75px" }}
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
        <Link to="/summoner/">
          <button /*onCLick={() => history.push("/ranking")}*/>
            <img height="14" src="../img/searchgg.png" alt="이미지" />
          </button>
        </Link>
        {/* </form> */}
      </div>
    </div>
  );
};

export default withRouter(Header2);
