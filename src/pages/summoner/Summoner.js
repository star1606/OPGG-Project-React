import React from "react";
import Footer2 from "./../../include/Footer2";
import Header2 from "./../../include/Header2";
import styled from "styled-components";
import "../../include/Summoner.css";

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
    <>
      <Header2 />

      <div>
        <div class="header">
          <div class="face">
            <div class="profileIcon">
              <div class="borderImage"></div>
              <img class="profileImage" src="../include/garen.png" />
              <span class="level">288</span>
            </div>
          </div>
          <div class="profile">
            <div class="information">
              <span class="name">DWG ShowMaker</span>
              <div class="rank">
                <div class="ladderRank">
                  랭킹 <span class="ranking">1</span>위
                </div>
              </div>
              <div class="button">
                <button class="button__blue">전적갱신</button>
              </div>
            </div>
            <div class="lastUpdate">
              최근업데이트: <span class="time">31 분전</span>
            </div>
          </div>
          <div class="contentWrap">
            <div class="tabItem__content">
              <div class="sideContent">
                <div class="tierbox">
                  <div class="summonerRating">
                    <div class="medal">
                      <img class="medalImage" />
                    </div>
                    <div class="tierRankInfo">
                      <div class="rankType">솔로랭크</div>
                      <div class="tierRank">Chanllenger</div>
                      <div class="tierInfo">
                        <span class="leaguePoints">1,604 Lp /</span>
                        <span class="winLose">
                          <span class="wins"> 326승 </span>
                          <span class="lossers"> 324패 </span>
                          <br />
                          <span class="winRatio">승률 58%</span>
                        </span>
                      </div>
                      <div class="leagueName">헤카림의 저격수들</div>
                    </div>
                  </div>
                </div>
                <div class="sub-tier">
                  <img class="img-sub-tier__medal" />
                  <div class="sub-tier__info__unranked">
                    <div class="sub-tier__rank-type">자유 5:5 랭크</div>
                    <div class="sub-tier__rank-tier__unranked">Unranked</div>
                  </div>
                </div>
              </div>
              <div class="realContent">
                <div
                  class="gameListContainer"
                  data-summoer-id=""
                  data-last-info=""
                >
                  <div class="content">
                    <div class="gameItemList">
                      {/* <!-- 여기서 부터 한 경기 --> */}
                      <div class="gameItemWrap">
                        <div
                          class="gameItemWinExtended"
                          data-summoner-id="41913808"
                          data-game-time="1598546708"
                          data-game-id="4605496244"
                          data-game-result="win"
                        >
                          <div class="toggle-content">
                            <div class="gameStats">
                              <div class="gameType" title="솔랭">
                                솔랭
                              </div>
                              <div class="timeStamp">
                                <span
                                  class="toggle-time"
                                  data-datetime="1598546708"
                                  data-type=""
                                  data-interval="60"
                                  title="2020년 8월 28일 오전 1시 45분"
                                >
                                  11시간 전
                                </span>
                              </div>
                              <div class="bar"></div>
                              <div class="gameResult">승리 </div>
                              <div class="gameLength">18분 40초</div>
                            </div>

                            <div class="gameSettingInfo">
                              <div class="championImage">
                                <img
                                  src="../include/Kassadin.png"
                                  class="championIcon"
                                />
                              </div>
                              <div class="summonerSpell">
                                <div class="spell1">
                                  <img
                                    src="../include/8112.png"
                                    class="summonerSpell1"
                                  />
                                </div>
                                <div class="spell2">
                                  <img
                                    src="../include/8112.png"
                                    class="summonerSpell2"
                                  />
                                </div>
                              </div>
                              <div class="runes">
                                <div class="rune1">
                                  <img
                                    src="../include/8112.png"
                                    class="runeImage1"
                                  />
                                </div>
                                <div class="rune2">
                                  <img
                                    src="../include/8112.png"
                                    class="runeImage2"
                                  />
                                </div>
                              </div>
                              <div class="championName">카사딘</div>
                            </div>
                            <div class="kdaWrap">
                              <div class="kda">
                                <span class="kill">13</span>/
                                <span class="death">2</span>/
                                <span class="assist">5</span>
                              </div>
                              <div class="kdaRatio">
                                <span class="kdaRatioSpan">9.00:1</span>
                                평점
                              </div>
                            </div>
                            <div
                              class="stats"
                              style="display: table-cell;
                                                            height: 96px;
                                                            vertical-align: middle;"
                            >
                              <div class="stateLevel">레벨12</div>
                              <div class="cs">
                                <span class="">138 (7.4)</span>
                                CS
                              </div>
                              <div class="ckRate">킬관여 90%</div>
                            </div>
                            <div class="items">
                              <div class="itemList">
                                <div class="item">
                                  <img
                                    src="../include/3802.png"
                                    class="itemImg"
                                  />
                                </div>
                                <div class="item">
                                  <img
                                    src="../include/3802.png"
                                    class="itemImg"
                                  />
                                </div>
                                <div class="item">
                                  <img
                                    src="../include/3802.png"
                                    class="itemImg"
                                  />
                                </div>
                                <div class="item">
                                  <img
                                    src="../include/3802.png"
                                    class="itemImg"
                                  />
                                </div>
                                <div class="item">
                                  <img
                                    src="../include/3802.png"
                                    class="itemImg"
                                  />
                                </div>
                                <div class="item">
                                  <img
                                    src="../include/3802.png"
                                    class="itemImg"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="statusBtn">
                              <div class="content2">
                                <a class="btnMatchDetail">
                                  <i class="material-icons">arrow_drop_down</i>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* <!-- 여기서부터가 경기내용임 --> */}
                          <div class="GameDetail">
                            <div class="MatchDetailLayout tabWrap _recognized">
                              <div class="MatchDetailHeader"></div>
                              <div class="MatchDetailContent tabItems">
                                <div
                                  class="Content tabItem MatchDetailContent-overview"
                                  style="display: block;"
                                >
                                  <div class="GameDetailTableWrap">
                                    <table class="GameDetailTable Result-WIN">
                                      <colgroup>
                                        <col class="ChampionImage" />
                                        <col class="SummonerSpell" />
                                        <col class="KeystoneMastery" />
                                        <col class="SummonerName" />
                                        <col class="Tier" />
                                        <col class="OPScore" />
                                        <col class="KDA" />
                                        <col class="Damage" />
                                        <col class="Ward" />
                                        <col class="CS" />
                                        <col class="Items" />
                                      </colgroup>
                                      <thead class="Header">
                                        <tr class="Row">
                                          <th class="HeaderCell" colspan="4">
                                            <span class="GameResult">
                                              승리{" "}
                                            </span>
                                            (레드팀)
                                          </th>
                                          <th class="HeaderCell">티어</th>
                                          <th class="HeaderCell"></th>
                                          <th class="HeaderCell">KDA</th>
                                          <th class="HeaderCell">피해량</th>
                                          <th class="HeaderCell">와드</th>
                                          <th class="HeaderCell">CS</th>
                                          <th class="HeaderCell">아이템</th>
                                        </tr>
                                      </thead>
                                      <tbody class="Content">
                                        <tr class="Row first  ">
                                          <td class="ChampionImage Cell">
                                            <a href="" target="_blank">
                                              <img
                                                src="../include/Kassadin.png"
                                                title="제이스"
                                                class="detailChampIcon"
                                              />

                                              <div class="Level">14</div>
                                            </a>
                                          </td>
                                          <td class="SummonerSpell Cell">
                                            <img
                                              src="../include/8112.png"
                                              class="Image tip"
                                            />
                                            <img
                                              src="../include/8112.png"
                                              class="Image tip"
                                            />
                                          </td>
                                          <td class="Rune Cell">
                                            <img
                                              src="../include/8112.png"
                                              class="Image tip"
                                            />
                                            <img
                                              src="../include/8112.png"
                                              class="Image tip"
                                            />
                                          </td>
                                          <td class="SummonerName Cell">
                                            <a
                                              href=""
                                              target="_blank"
                                              class="Link"
                                            >
                                              upupupupupupp
                                            </a>
                                          </td>

                                          <td class="Tier Cell tip">
                                            Challenger
                                          </td>

                                          <td class="OPScore Cell"></td>
                                          <td class="KDA Cell">
                                            <span class="KDARatio green">
                                              3.00:1
                                            </span>

                                            <div class="KDA">
                                              <span class="Kill">4</span>/
                                              <span class="Death">4</span>/
                                              <span class="Assist">8</span>
                                              <span
                                                class="CKRate tip"
                                                title="킬관여율"
                                              >
                                                (52%)
                                              </span>
                                            </div>
                                          </td>
                                          <td class="Damage Cell tip">
                                            <div class="ChampionDamage">
                                              13,260
                                            </div>
                                            <div class="Progress">
                                              <div
                                                class="Fill"
                                                style="width: 100%;"
                                              ></div>
                                            </div>
                                          </td>
                                          <td class="Ward Cell tip">
                                            <div class="Buy">
                                              <span class="SightWard">3</span>
                                            </div>
                                            <div class="Stats">
                                              <span> 10</span> /<span> 4</span>
                                            </div>
                                          </td>
                                          <td class="CS Cell">
                                            <div class="CS">172</div>
                                            <div class="CSPerMinute">
                                              분당 7.9
                                            </div>
                                          </td>
                                          <td class="Items Cell">
                                            <div class="Item">
                                              <img
                                                src="../include/3802.png"
                                                class="Image tip"
                                                alt="처형인의 대검"
                                              />
                                            </div>
                                            <div class="Item">
                                              <img
                                                src="../include/3802.png"
                                                class="Image tip"
                                                alt="요우무의 유령검"
                                              />
                                            </div>
                                            <div class="Item">
                                              <img
                                                src="../include/3802.png"
                                                class="Image tip"
                                                alt="밤의 끝자락"
                                              />
                                            </div>
                                            <div class="Item">
                                              <img
                                                src="../include/3802.png"
                                                class="Image tip"
                                                alt="롱소드"
                                              />
                                            </div>
                                            <div class="Item">
                                              <img
                                                src="../include/3802.png"
                                                class="Image tip"
                                                alt="롱소드"
                                              />
                                            </div>
                                            <div class="Item">
                                              <img
                                                src="../include/3802.png"
                                                class="Image tip"
                                                alt="헤르메스의 발걸음"
                                              />
                                            </div>
                                            <div class="Item">
                                              <img
                                                src="../include/3364.png"
                                                class="Image tip"
                                                alt="망원형 개조"
                                              />
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div class="Summary">
                                      <div class="Team Team-200 Result-WIN">
                                        <div class="ObjectScore">
                                          <img
                                            src="../include/iconBaron.png"
                                            class="Image tip"
                                            title="바론"
                                          />
                                          1
                                        </div>
                                        <div class="ObjectScore">
                                          <img
                                            src="../include/iconBaron.png"
                                            class="Image tip"
                                            title="드래곤"
                                          />
                                          2
                                        </div>
                                        <div class="ObjectScore">
                                          <img
                                            src="../include/iconBaron.png"
                                            class="Image tip"
                                            title="타워"
                                          />
                                          4
                                        </div>
                                      </div>
                                      <div class="summary-graph">
                                        <div class="total--container">
                                          <div class="text graph--title">
                                            Total Kill
                                          </div>
                                          <div class="text graph--data graph--data__left">
                                            23
                                          </div>
                                          <div class="graph--container">
                                            <div
                                              class="graph win--team"
                                              style="flex:23"
                                            ></div>
                                            <div
                                              class="graph lose--team"
                                              style="flex:9"
                                            ></div>
                                          </div>
                                          <div class="text graph--data graph--data__right">
                                            9
                                          </div>
                                        </div>
                                        <div class="total--container">
                                          <div class="text graph--title">
                                            Total Gold
                                          </div>
                                          <div class="text graph--data graph--data__left">
                                            45395
                                          </div>
                                          <div class="graph--container">
                                            <div
                                              class="graph win--team"
                                              style="flex:45395"
                                            ></div>
                                            <div
                                              class="graph lose--team"
                                              style="flex:38060"
                                            ></div>
                                          </div>
                                          <div class="text graph--data graph--data__right">
                                            38060
                                          </div>
                                        </div>
                                      </div>
                                      <div class="Team Team-100 Result-LOSE">
                                        <div class="ObjectScore">
                                          <img
                                            src="../include/iconBaron.png"
                                            class="Image tip"
                                            title="바론"
                                          />
                                          0
                                        </div>
                                        <div class="ObjectScore">
                                          <img
                                            src="../include/iconBaron.png"
                                            class="Image tip"
                                            title="드래곤"
                                          />
                                          0
                                        </div>
                                        <div class="ObjectScore">
                                          <img
                                            src="../include/iconBaron.png"
                                            class="Image tip"
                                            title="타워"
                                          />
                                          3
                                        </div>
                                      </div>
                                    </div>

                                    <table class="GameDetailTable Result-LOSE">
                                      <colgroup>
                                        <col class="ChampionImage" />
                                        <col class="SummonerSpell" />
                                        <col class="KeystoneMastery" />
                                        <col class="SummonerName" />
                                        <col class="Tier" />
                                        <col class="OPScore" />
                                        <col class="KDA" />
                                        <col class="Damage" />
                                        <col class="Ward" />
                                        <col class="CS" />
                                        <col class="Items" />
                                      </colgroup>
                                      <thead class="Header">
                                        <tr class="Row">
                                          <th class="HeaderCell" colspan="4">
                                            <span class="GameResult">
                                              패배{" "}
                                            </span>
                                            (블루팀)
                                          </th>
                                          <th class="HeaderCell">티어</th>
                                          <th class="HeaderCell"></th>
                                          <th class="HeaderCell">KDA</th>
                                          <th class="HeaderCell">피해량</th>
                                          <th class="HeaderCell">와드</th>
                                          <th class="HeaderCell">CS</th>
                                          <th class="HeaderCell">아이템</th>
                                        </tr>
                                      </thead>
                                      <tbody class="Content">
                                        <tr class="Row first  ">
                                          <td class="ChampionImage Cell">
                                            <a href="" target="_blank">
                                              <img
                                                src="../include/Kassadin.png"
                                                title="제이스"
                                                class="detailChampIcon"
                                              />

                                              <div class="Level">14</div>
                                            </a>
                                          </td>
                                          <td class="SummonerSpell Cell">
                                            <img
                                              src="../include/8112.png"
                                              class="Image tip"
                                            />
                                            <img
                                              src="../include/8112.png"
                                              class="Image tip"
                                            />
                                          </td>
                                          <td class="Rune Cell">
                                            <img
                                              src="../include/8112.png"
                                              class="Image tip"
                                            />
                                            <img
                                              src="../include/8112.png"
                                              class="Image tip"
                                            />
                                          </td>
                                          <td class="SummonerName Cell">
                                            <a
                                              href=""
                                              target="_blank"
                                              class="Link"
                                            >
                                              upupupupupupp
                                            </a>
                                          </td>

                                          <td class="Tier Cell tip">
                                            Challenger
                                          </td>

                                          <td class="OPScore Cell"></td>
                                          <td class="KDA Cell">
                                            <span class="KDARatio green">
                                              3.00:1
                                            </span>

                                            <div class="KDA">
                                              <span class="Kill">4</span>/
                                              <span class="Death">4</span>/
                                              <span class="Assist">8</span>
                                              <span
                                                class="CKRate tip"
                                                title="킬관여율"
                                              >
                                                (52%)
                                              </span>
                                            </div>
                                          </td>
                                          <td class="Damage Cell tip">
                                            <div class="ChampionDamage">
                                              13,260
                                            </div>
                                            <div class="Progress">
                                              <div
                                                class="Fill"
                                                style="width: 100%;"
                                              ></div>
                                            </div>
                                          </td>
                                          <td class="Ward Cell tip">
                                            <div class="Buy">
                                              <span class="SightWard">3</span>
                                            </div>
                                            <div class="Stats">
                                              <span> 10</span> /<span> 4</span>
                                            </div>
                                          </td>
                                          <td class="CS Cell">
                                            <div class="CS">172</div>
                                            <div class="CSPerMinute">
                                              분당 7.9
                                            </div>
                                          </td>
                                          <td class="Items Cell">
                                            <div class="Item">
                                              <img
                                                src="../include/3802.png"
                                                class="Image tip"
                                                alt="처형인의 대검"
                                              />
                                            </div>
                                            <div class="Item">
                                              <img
                                                src="../include/3802.png"
                                                class="Image tip"
                                                alt="요우무의 유령검"
                                              />
                                            </div>
                                            <div class="Item">
                                              <img
                                                src="../include/3802.png"
                                                class="Image tip"
                                                alt="밤의 끝자락"
                                              />
                                            </div>
                                            <div class="Item">
                                              <img
                                                src="../include/3802.png"
                                                class="Image tip"
                                                alt="롱소드"
                                              />
                                            </div>
                                            <div class="Item">
                                              <img
                                                src="../include/3802.png"
                                                class="Image tip"
                                                alt="롱소드"
                                              />
                                            </div>
                                            <div class="Item">
                                              <img
                                                src="../include/3802.png"
                                                class="Image tip"
                                                alt="헤르메스의 발걸음"
                                              />
                                            </div>
                                            <div class="Item">
                                              <img
                                                src="../include/3364.png"
                                                class="Image tip"
                                                alt="망원형 개조"
                                              />
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="GameMoreButton Box">
                        <a
                          href="#"
                          onclick="$.OP.GG.matches.list.loadMore($(this)); return false;"
                          class="Button"
                        >
                          더 보기
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    </>
  );
};

export default summoner;
