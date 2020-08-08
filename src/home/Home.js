import React from "react";
import Header1 from "../include/Header1";
import Footer1 from "../include/Footer1";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Header1 />
      <h1>메인, 홈페이지</h1>
      <div class="l-container">
        <div class="index-logo">
          <div id="logo">
            <img
              src="img/homeLogo.png"
              class="Image"
              title="베이가"
              alt="베이가"
            />
          </div>
        </div>
        <form
          class="summoner-search-form"
          action="/summoner/"
          autocomplete="off"
        >
          <input
            type="text"
            name="username"
            class="summoner-search-form__text__suggest"
            placeholder="소환사명 ..."
            autocomplete="off"
          />
          {/* <!-- 검색 버튼 부분--> */}
          <button type="submit" class="summoner-search-form__button">
            <img src="img/searchBtn.gif" alt="검색" class="btnImg" />
          </button>
        </form>

        {/* <!-- 커뮤니티 글목록 부분--> */}
        <div class="community-best">
          <div class="community-best__header">
            {/* <!-- 커뮤니티 상단 제목 부분--> */}
            <a
              href="https://talk.op.gg/s/lol/all?sort=popular"
              class="community-best__title"
            >
              OP.GG Talk 인기글
            </a>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
};

export default Home;
