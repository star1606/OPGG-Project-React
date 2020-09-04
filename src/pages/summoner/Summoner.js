import React, { useState } from "react";
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

const Summoner = ({ match }) => {
  console.log(match.params);
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <>
      <Header2 />

      <div>
        <div className="header">
          <div className="face">
            <div className="profileIcon">
              <div className="borderImage"></div>
              <img className="profileImage" src="/img/garen.png" alt="" />
              <span className="level">288</span>
            </div>
          </div>
          <div className="profile">
            <div className="information">
              <span className="name">DWG ShowMaker</span>
              <div className="rank">
                <div className="ladderRank">
                  랭킹 <span className="ranking">1</span>위
                </div>
              </div>
              <div className="button">
                <button className="button__blue">전적갱신</button>
              </div>
            </div>
            <div className="lastUpdate">
              최근업데이트: <span className="time">31 분전</span>
            </div>
          </div>
          <div className="contentWrap">
            <div className="tabItem__content">
              <div className="sideContent">
                <div className="tierbox">
                  <div className="summonerRating">
                    <div className="medal">
                      <img
                        className="medalImage"
                        src="/img/challenger_1.png"
                        alt="솔랭"
                      />
                    </div>
                    <div className="tierRankInfo">
                      <div className="rankType">솔로랭크</div>
                      <div className="tierRank">Chanllenger</div>
                      <div className="tierInfo">
                        <span className="leaguePoints">1,604 Lp /</span>
                        <span className="winLose">
                          <span className="wins"> 326승 </span>
                          <span className="lossers"> 324패 </span>
                          <br />
                          <span className="winRatio">승률 58%</span>
                        </span>
                      </div>
                      <div className="leagueName">헤카림의 저격수들</div>
                    </div>
                  </div>
                </div>
                <div className="sub-tier">
                  <img
                    className="img-sub-tier__medal"
                    src="/img/default.png"
                    alt="자유랭"
                  />
                  <div className="sub-tier__info__unranked">
                    <div className="sub-tier__rank-type">자유 5:5 랭크</div>
                    <div className="sub-tier__rank-tier__unranked">
                      Unranked
                    </div>
                  </div>
                </div>
              </div>
              <div className="realContent">
                <div
                  className="gameListContainer"
                  data-summoer-id=""
                  data-last-info=""
                >
                  <div className="content">
                    <div className="gameItemList">
                      {/* <!-- 여기서 부터 한 경기 --> */}
                      <div className="gameItemWrap">
                        <div
                          className="gameItemWinExtended"
                          data-summoner-id="41913808"
                          data-game-time="1598546708"
                          data-game-id="4605496244"
                          data-game-result="win"
                        >
                          <div className="toggle-content">
                            <div className="gameStats">
                              <div className="gameType" title="솔랭">
                                솔랭
                              </div>
                              <div className="timeStamp">
                                <span
                                  className="toggle-time"
                                  data-datetime="1598546708"
                                  data-type=""
                                  data-interval="60"
                                  title="2020년 8월 28일 오전 1시 45분"
                                >
                                  11시간 전
                                </span>
                              </div>
                              <div className="bar"></div>
                              <div className="gameResult">승리 </div>
                              <div className="gameLength">18분 40초</div>
                            </div>

                            <div className="gameSettingInfo">
                              <div className="championImage">
                                <img
                                  src="/img/Kassadin.png"
                                  className="championIcon"
                                />
                              </div>
                              <div className="summonerSpell">
                                <div className="spell1">
                                  <img
                                    src="/img/8112.png"
                                    className="summonerSpell1"
                                  />
                                </div>
                                <div className="spell2">
                                  <img
                                    src="/img/8112.png"
                                    className="summonerSpell2"
                                  />
                                </div>
                              </div>
                              <div className="runes">
                                <div className="rune1">
                                  <img
                                    src="/img/8112.png"
                                    className="runeImage1"
                                  />
                                </div>
                                <div className="rune2">
                                  <img
                                    src="/img/8112.png"
                                    className="runeImage2"
                                  />
                                </div>
                              </div>
                              <div className="championName">카사딘</div>
                            </div>
                            <div className="kdaWrap">
                              <div className="kda">
                                <span className="kill">13</span>/
                                <span className="death">2</span>/
                                <span className="assist">5</span>
                              </div>
                              <div className="kdaRatio">
                                <span className="kdaRatioSpan">9.00:1</span>
                                평점
                              </div>
                            </div>
                            <div
                              className="stats"
                              style={{
                                display: "table-cell",
                                height: "96px",
                                verticalAlign: "middle",
                              }}
                            >
                              <div className="stateLevel">레벨12</div>
                              <div className="cs">
                                <span className="">138 (7.4)</span>
                                CS
                              </div>
                              <div className="ckRate">킬관여 90%</div>
                            </div>
                            <div className="items">
                              <div className="itemList">
                                <div className="item">
                                  <img
                                    src="/img/3802.png"
                                    className="itemImg"
                                  />
                                </div>
                                <div className="item">
                                  <img
                                    src="/img/3802.png"
                                    className="itemImg"
                                  />
                                </div>
                                <div className="item">
                                  <img
                                    src="/img/3802.png"
                                    className="itemImg"
                                  />
                                </div>
                                <div className="item">
                                  <img
                                    src="/img/3802.png"
                                    className="itemImg"
                                  />
                                </div>
                                <div className="item">
                                  <img
                                    src="/img/3802.png"
                                    className="itemImg"
                                  />
                                </div>
                                <div className="item">
                                  <img
                                    src="/img/3802.png"
                                    className="itemImg"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="statusBtn">
                              <div className="content2">
                                <a className="btnMatchDetail">
                                  <i
                                    onClick={() =>
                                      setIsToggleOn((isToggleOn) => !isToggleOn)
                                    }
                                    className="material-icons"
                                  >
                                    arrow_drop_down
                                  </i>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* <!-- 여기서부터가 경기내용임 --> */}
                          {isToggleOn && (
                            <div className="GameDetail">
                              <div className="MatchDetailLayout tabWrap _recognized">
                                <div className="MatchDetailHeader"></div>
                                <div className="MatchDetailContent tabItems">
                                  <div
                                    className="Content tabItem MatchDetailContent-overview"
                                    style={{ display: "block" }}
                                  >
                                    <div className="GameDetailTableWrap">
                                      <table className="GameDetailTable Result-WIN">
                                        <colgroup>
                                          <col className="ChampionImage" />
                                          <col className="SummonerSpell" />
                                          <col className="KeystoneMastery" />
                                          <col className="SummonerName" />
                                          <col className="Tier" />
                                          <col className="OPScore" />
                                          <col className="KDA" />
                                          <col className="Damage" />
                                          <col className="Ward" />
                                          <col className="CS" />
                                          <col className="Items" />
                                        </colgroup>
                                        <thead className="Header">
                                          <tr className="Row">
                                            <th
                                              className="HeaderCell"
                                              colSpan="4"
                                            >
                                              <span className="GameResult">
                                                승리{" "}
                                              </span>
                                              (레드팀)
                                            </th>
                                            <th className="HeaderCell">티어</th>
                                            <th className="HeaderCell"></th>
                                            <th className="HeaderCell">KDA</th>
                                            <th className="HeaderCell">
                                              피해량
                                            </th>
                                            <th className="HeaderCell">와드</th>
                                            <th className="HeaderCell">CS</th>
                                            <th className="HeaderCell">
                                              아이템
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody className="Content">
                                          <tr className="Row first  ">
                                            <td className="ChampionImage Cell">
                                              <a href="" target="_blank">
                                                <img
                                                  src="/img/Kassadin.png"
                                                  title="제이스"
                                                  className="detailChampIcon"
                                                />

                                                <div className="Level">14</div>
                                              </a>
                                            </td>
                                            <td className="SummonerSpell Cell">
                                              <img
                                                src="/img/8112.png"
                                                className="Image tip"
                                              />
                                              <img
                                                src="/img/8112.png"
                                                className="Image tip"
                                              />
                                            </td>
                                            <td className="Rune Cell">
                                              <img
                                                src="/img/8112.png"
                                                className="Image tip"
                                              />
                                              <img
                                                src="/img/8112.png"
                                                className="Image tip"
                                              />
                                            </td>
                                            <td className="SummonerName Cell">
                                              <a
                                                href=""
                                                target="_blank"
                                                className="Link"
                                              >
                                                upupupupupupp
                                              </a>
                                            </td>

                                            <td className="Tier Cell tip">
                                              Challenger
                                            </td>

                                            <td className="OPScore Cell"></td>
                                            <td className="KDA Cell">
                                              <span className="KDARatio green">
                                                3.00:1
                                              </span>

                                              <div className="KDA">
                                                <span className="Kill">4</span>/
                                                <span className="Death">4</span>
                                                /
                                                <span className="Assist">
                                                  8
                                                </span>
                                                <span
                                                  className="CKRate tip"
                                                  title="킬관여율"
                                                >
                                                  (52%)
                                                </span>
                                              </div>
                                            </td>
                                            <td className="Damage Cell tip">
                                              <div className="ChampionDamage">
                                                13,260
                                              </div>
                                              <div className="Progress">
                                                <div
                                                  className="Fill"
                                                  style={{ width: "100%" }}
                                                ></div>
                                              </div>
                                            </td>
                                            <td className="Ward Cell tip">
                                              <div className="Buy">
                                                <span className="SightWard">
                                                  3
                                                </span>
                                              </div>
                                              <div className="Stats">
                                                <span> 10</span> /
                                                <span> 4</span>
                                              </div>
                                            </td>
                                            <td className="CS Cell">
                                              <div className="CS">172</div>
                                              <div className="CSPerMinute">
                                                분당 7.9
                                              </div>
                                            </td>
                                            <td className="Items Cell">
                                              <div className="Item">
                                                <img
                                                  src="/img/3802.png"
                                                  className="Image tip"
                                                  alt="처형인의 대검"
                                                />
                                              </div>
                                              <div className="Item">
                                                <img
                                                  src="/img/3802.png"
                                                  className="Image tip"
                                                  alt="요우무의 유령검"
                                                />
                                              </div>
                                              <div className="Item">
                                                <img
                                                  src="/img/3802.png"
                                                  className="Image tip"
                                                  alt="밤의 끝자락"
                                                />
                                              </div>
                                              <div className="Item">
                                                <img
                                                  src="/img/3802.png"
                                                  className="Image tip"
                                                  alt="롱소드"
                                                />
                                              </div>
                                              <div className="Item">
                                                <img
                                                  src="/img/3802.png"
                                                  className="Image tip"
                                                  alt="롱소드"
                                                />
                                              </div>
                                              <div className="Item">
                                                <img
                                                  src="/img/3802.png"
                                                  className="Image tip"
                                                  alt="헤르메스의 발걸음"
                                                />
                                              </div>
                                              <div className="Item">
                                                <img
                                                  src="/img/3364.png"
                                                  className="Image tip"
                                                  alt="망원형 개조"
                                                />
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <div className="Summary">
                                        <div className="Team Team-200 Result-WIN">
                                          <div className="ObjectScore">
                                            <img
                                              src="/img/iconBaron.png"
                                              className="Image tip"
                                              title="바론"
                                            />
                                            1
                                          </div>
                                          <div className="ObjectScore">
                                            <img
                                              src="/img/iconBaron.png"
                                              className="Image tip"
                                              title="드래곤"
                                            />
                                            2
                                          </div>
                                          <div className="ObjectScore">
                                            <img
                                              src="/img/iconBaron.png"
                                              className="Image tip"
                                              title="타워"
                                            />
                                            4
                                          </div>
                                        </div>
                                        <div className="summary-graph">
                                          <div className="total--container">
                                            <div className="text graph--title">
                                              Total Kill
                                            </div>
                                            <div className="text graph--data graph--data__left">
                                              23
                                            </div>
                                            <div className="graph--container">
                                              <div
                                                className="graph win--team"
                                                style={{ flex: 23 }}
                                              ></div>
                                              <div
                                                className="graph lose--team"
                                                style={{ flex: 9 }}
                                              ></div>
                                            </div>
                                            <div className="text graph--data graph--data__right">
                                              9
                                            </div>
                                          </div>
                                          <div className="total--container">
                                            <div className="text graph--title">
                                              Total Gold
                                            </div>
                                            <div className="text graph--data graph--data__left">
                                              45395
                                            </div>
                                            <div className="graph--container">
                                              <div
                                                className="graph win--team"
                                                style={{ flex: 45395 }}
                                              ></div>
                                              <div
                                                className="graph lose--team"
                                                style={{ flex: 38060 }}
                                              ></div>
                                            </div>
                                            <div className="text graph--data graph--data__right">
                                              38060
                                            </div>
                                          </div>
                                        </div>
                                        <div className="Team Team-100 Result-LOSE">
                                          <div className="ObjectScore">
                                            <img
                                              src="/img/iconBaron.png"
                                              className="Image tip"
                                              title="바론"
                                            />
                                            0
                                          </div>
                                          <div className="ObjectScore">
                                            <img
                                              src="/img/iconBaron.png"
                                              className="Image tip"
                                              title="드래곤"
                                            />
                                            0
                                          </div>
                                          <div className="ObjectScore">
                                            <img
                                              src="/img/iconBaron.png"
                                              className="Image tip"
                                              title="타워"
                                            />
                                            3
                                          </div>
                                        </div>
                                      </div>

                                      <table className="GameDetailTable Result-LOSE">
                                        <colgroup>
                                          <col className="ChampionImage" />
                                          <col className="SummonerSpell" />
                                          <col className="KeystoneMastery" />
                                          <col className="SummonerName" />
                                          <col className="Tier" />
                                          <col className="OPScore" />
                                          <col className="KDA" />
                                          <col className="Damage" />
                                          <col className="Ward" />
                                          <col className="CS" />
                                          <col className="Items" />
                                        </colgroup>
                                        <thead className="Header">
                                          <tr className="Row">
                                            <th
                                              className="HeaderCell"
                                              colSpan="4"
                                            >
                                              <span className="GameResult">
                                                패배{" "}
                                              </span>
                                              (블루팀)
                                            </th>
                                            <th className="HeaderCell">티어</th>
                                            <th className="HeaderCell"></th>
                                            <th className="HeaderCell">KDA</th>
                                            <th className="HeaderCell">
                                              피해량
                                            </th>
                                            <th className="HeaderCell">와드</th>
                                            <th className="HeaderCell">CS</th>
                                            <th className="HeaderCell">
                                              아이템
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody className="Content">
                                          <tr className="Row first  ">
                                            <td className="ChampionImage Cell">
                                              <a href="" target="_blank">
                                                <img
                                                  src="/img/Kassadin.png"
                                                  title="제이스"
                                                  className="detailChampIcon"
                                                />

                                                <div className="Level">14</div>
                                              </a>
                                            </td>
                                            <td className="SummonerSpell Cell">
                                              <img
                                                src="/img/8112.png"
                                                className="Image tip"
                                              />
                                              <img
                                                src="/img/8112.png"
                                                className="Image tip"
                                              />
                                            </td>
                                            <td className="Rune Cell">
                                              <img
                                                src="/img/8112.png"
                                                className="Image tip"
                                              />
                                              <img
                                                src="/img/8112.png"
                                                className="Image tip"
                                              />
                                            </td>
                                            <td className="SummonerName Cell">
                                              <a
                                                href=""
                                                target="_blank"
                                                className="Link"
                                              >
                                                upupupupupupp
                                              </a>
                                            </td>

                                            <td className="Tier Cell tip">
                                              Challenger
                                            </td>

                                            <td className="OPScore Cell"></td>
                                            <td className="KDA Cell">
                                              <span className="KDARatio green">
                                                3.00:1
                                              </span>

                                              <div className="KDA">
                                                <span className="Kill">4</span>/
                                                <span className="Death">4</span>
                                                /
                                                <span className="Assist">
                                                  8
                                                </span>
                                                <span
                                                  className="CKRate tip"
                                                  title="킬관여율"
                                                >
                                                  (52%)
                                                </span>
                                              </div>
                                            </td>
                                            <td className="Damage Cell tip">
                                              <div className="ChampionDamage">
                                                13,260
                                              </div>
                                              <div className="Progress">
                                                <div
                                                  className="Fill"
                                                  style={{ width: "100%" }}
                                                ></div>
                                              </div>
                                            </td>
                                            <td className="Ward Cell tip">
                                              <div className="Buy">
                                                <span className="SightWard">
                                                  3
                                                </span>
                                              </div>
                                              <div className="Stats">
                                                <span> 10</span> /
                                                <span> 4</span>
                                              </div>
                                            </td>
                                            <td className="CS Cell">
                                              <div className="CS">172</div>
                                              <div className="CSPerMinute">
                                                분당 7.9
                                              </div>
                                            </td>
                                            <td className="Items Cell">
                                              <div className="Item">
                                                <img
                                                  src="/img/3802.png"
                                                  className="Image tip"
                                                  alt="처형인의 대검"
                                                />
                                              </div>
                                              <div className="Item">
                                                <img
                                                  src="/img/3802.png"
                                                  className="Image tip"
                                                  alt="요우무의 유령검"
                                                />
                                              </div>
                                              <div className="Item">
                                                <img
                                                  src="/img/3802.png"
                                                  className="Image tip"
                                                  alt="밤의 끝자락"
                                                />
                                              </div>
                                              <div className="Item">
                                                <img
                                                  src="/img/3802.png"
                                                  className="Image tip"
                                                  alt="롱소드"
                                                />
                                              </div>
                                              <div className="Item">
                                                <img
                                                  src="/img/3802.png"
                                                  className="Image tip"
                                                  alt="롱소드"
                                                />
                                              </div>
                                              <div className="Item">
                                                <img
                                                  src="/img/3802.png"
                                                  className="Image tip"
                                                  alt="헤르메스의 발걸음"
                                                />
                                              </div>
                                              <div className="Item">
                                                <img
                                                  src="/img/3364.png"
                                                  className="Image tip"
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
                          )}
                        </div>
                      </div>

                      <div className="GameMoreButton Box">
                        <a href="#" className="Button">
                          더 보기
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer2 />
        </div>
      </div>
    </>
  );
};

export default Summoner;
