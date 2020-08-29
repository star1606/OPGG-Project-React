import React from "react";
import Footer2 from "./../../include/Footer2";
import Header2 from "./../../include/Header2";
import styled from "styled-components";

const SummonerHeader = styled.div`
  position: relative;
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0 0 0;
`;
const Face = styled.div`
  display: inline-block;
  width: 100px;
  padding-left: 30px;
  vertical-align: top;

  .profileIcon {
    position: relative;
  }

  .borderImage {
    position: absolute;
    left: -10px;
    top: -10px;
    width: 120px;
    height: 120px;
    background-position: center bottom;
    background-repeat: no-repeat;
  }

  .ProfileImage {
    display: block;
    width: 100px;
    height: 100px;
  }

  .Level {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: -14px;
    margin-left: -22px;
    width: 44px;
    height: 24px;
    padding-top: 3px;
    box-sizing: border-box;
    background: url(../images/site/summoner/bg-levelbox.png);
    background-size: 100%;
    line-height: 17px;
    font-family: Helvetica, AppleSDGothic, "Apple SD Gothic Neo", AppleGothic,
      Arial, Tahoma;
    font-size: 14px;
    text-align: center;
    color: #eabd56;
  }

  .profile {
    position: relative;
    display: inline-block;
    height: 100px;
    margin: 0 25px 0 25px;
    vertical-align: top;
    line-height: 1.1;
  }

  .Name {
    color: #242929;
    font-size: 20px;
    font-weight: bold;
    margin-right: 4px;
    vertical-align: middle;
  }
  .Rank {
    margin-bottom: 5px;

    .Link {
      color: #555e5e;
      font-size: 11px;
      text-decoration: none;
      line-height: 1.5;
    }
  }
  .SummonerLayout > .Header > .Profile > .Buttons {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 0;
    margin: 15px 0 -6px;
    white-space: nowrap;
  }
`;

const summoner = () => {
  return (
    <div>
      <Header2 />
      <div>
        <SummonerHeader>
          <Face>
            <div class="profileIcon">
              <div
                class="borderImage"
                style={{
                  backgroundImage:
                    "url(http://opgg-static.akamaized.net/images/borders2/challenger.png)",
                }}
              ></div>

              <img src="img/homeLogo.png" class="ProfileImage" />
              <span class="Level" title="">
                288
              </span>
            </div>
          </Face>

          <div
            class="profile"
            style={{
              display: "inline-block",
            }}
          >
            <div class="Information">
              <span class="Name">DWG ShowMaker</span>

              <div class="Rank">
                <div class="LadderRank">
                  <a
                    href="https://www.op.gg/ranking/ladder/summonerName=DWG%20ShowMaker"
                    class="tip Link"
                    title="래더 랭킹 목록에서 보기"
                    target="_blank"
                  >
                    랭킹 <span class="ranking">1</span>위
                  </a>
                </div>
              </div>
            </div>
            <div class="Buttons">
              <button
                class="Button SemiRound Blue"
                id="SummonerRefreshButton"
                onclick="$.OP.GG.summoner.renewBtn.start(this, '41913808');"
                style={{ position: "relative" }}
              >
                전적 갱신
              </button>
            </div>
          </div>
        </SummonerHeader>
        <h1>소환사 페이지입니다</h1>
        <Footer2 />
      </div>
    </div>
  );
};

export default summoner;
