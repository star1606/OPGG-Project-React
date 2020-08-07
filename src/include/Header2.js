import React from "react";
import "./Header2.css";
const Header2 = () => {
  return (
    <div className="l-menu">
      <ul className="menu">
        <li className="menu__item">
          <a href="https://www.op.gg/" class="target=">
            op.gg
          </a>
        </li>
        <li className="menu__item">
          <a href="https://www.op.gg/champion/statistics" class="target=">
            챔피언 분석
          </a>
        </li>

        <li className="menu__item">
          <a href="https://www.op.gg/ranking/" class="target=">
            랭킹
          </a>
        </li>

        <li className="menu__item">
          <a href="http://talk.op.gg/s/lol" class="target=_blank">
            커뮤니티
          </a>
        </li>
        <li className="menu__item">
          <a href="https://member.op.gg/?redirect_url=" class="target=_blank">
            로그인
          </a>
        </li>
        <div
          class="gnb-list-item gnb-list-item__search"
          style="margin-left: auto;"
        >
          <form action="/summoner/" method="get" autocomplete="off">
            <input
              type="text"
              class="gnb-list-item__input _suggest"
              name="userName"
              placeholder="소환사명, 소환사명, ..."
              autocomplete="off"
            />
            <button>
              <img height="14" src="../img/searchgg.png" />
            </button>
          </form>
        </div>
      </ul>
    </div>
  );
};

export default Header2;
