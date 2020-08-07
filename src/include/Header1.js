import React from "react";
import "./Header1.css";
const Header1 = () => {
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
      </ul>
    </div>
  );
};

export default Header1;
