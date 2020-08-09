import React from "react";
import "./Home.css";
import HomeLIst from "./HomeLIst";
const HomeMain = () => {
  return (
    <div className="homeMain-container">
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
          {/* 검색 버튼 부분 */}
          <button type="submit" class="summoner-search-form__button">
            <img src="img/searchBtn.gif" alt="검색" class="btnImg" />
          </button>
        </form>
        {/* 커뮤니티 글목록 부분    */}
        <HomeLIst />
      </div>
    </div>
  );
};

export default HomeMain;
