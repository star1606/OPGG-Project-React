import React from "react";
import Header1 from "../../include/Header1";
import Footer2 from "../../include/Footer2";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RankingBox = styled.div`
  text-align: center;

  .inputText {
    font-size: 14px;
  }
  .wrap-container {
    position: relative;
    min-height: 700px;
    padding-bottom: 120px;
    text-align: center;
  }
  .pageHeaderWrap {
    padding-top: 28px;
    width: 970px;
    margin: 0 auto;
  }

  .menu {
    margin: 0 0 17px;
    border-bottom: 1px solid #d7dada;
    display: grid;
    grid-template-columns: 100px 300px;
    justify-content: space-between;
    padding-bottom: 15px;
  }
  .searchItem {
    display: inline-block;
  }

  .inputText {
    display: inline-block;
    width: 168px;
    margin-right: 13px;
    padding-right: 25px;
  }

  .input {
    font-size: 14px;
    width: 196px;
    height: 17px;
    line-height: 17px;
    width: 100%;
    padding: 10px 13px 9px;
    border: 1px solid #cdd2d2;
  }
  /* 버튼 css */
  .button-SemiRound-Blue {
    border: 1px solid #1a78ae;
    background: #1f8ecd;
    color: #f2f2f2;
    font-size: 13px;
    outline: none;
    text-align: center;
    vertical-align: middle;
    margin-left: 6px;
    width: 82px;
    height: 37px;
  }

  .text {
    float: left;
    color: #4a4a4a;
    font-size: 14px;
  }
  .small {
    float: right;
    color: #9b9b9b;
    font-size: 12px;
  }

  .ladderRankingLayoutWrap {
    width: 970px;
    margin: 0 auto;
    min-height: 500px;
  }
  small,
  div,
  p,
  span,
  button {
    font-family: Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic,
      Dotum, Arial, Tahoma;
  }

  .LadderRankingLayout > .ContentWrap > .Content {
    width: 970px;
    margin: 0 auto;
    min-height: 500px;
  }

  .ranking-table {
    width: 100%;
    table-layout: fixed;
    background-color: #ededed;
    border: solid 1px #cdd2d2;
  }

  colgroup {
    display: table-column-group;
  }

  .ranking-table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }

  .ranking-table__header {
    height: 41px;
    padding: 0;
    border-bottom: 1px solid #cdd2d2;
    background: #f2f2f2;
    line-height: 17px;
    font-size: 14px;
    text-align: left;
    color: #444b4b;
    font-weight: normal;
  }

  .ranking-table__cell--rank {
    text-align: center;
    color: #444b4b;
  }

  .ranking-table__cell--summoner {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ranking-table__cell--tier,
  .ranking-table__cell--lp,
  .ranking-table__cell--level,
  .ranking-table__cell--winratio {
    color: #787878;
  }

  .ranking-table__cell--winratio {
    text-align: center;
  }

  .ranking-table__cell--summoner a {
    display: inline-block;
    text-decoration: none;
  }

  .winratio-graph {
    position: relative;
    display: inline-block;
    width: 150px;
    height: 20px;
    vertical-align: middle;
  }

  .winratio-graph__fill--left {
    background: #3d95e5;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    z-index: 1;
  }

  .winratio__text {
    vertical-align: middle;
    margin-left: 10px;
    line-height: 16px;
    font-family: Helvetica, AppleSDGothic, "Apple SD Gothic Neo", AppleGothic,
      Arial, Tahoma;
    font-size: 14px;
    color: #4a4a4a;
  }

  .ranking-pagination {
    text-align: center;
    margin-top: 30px;
  }

  .ranking-pagination__item:first-child {
    margin-left: 0;
  }

  .ranking-pagination__desc {
    margin-top: 20px;
    line-height: 17px;
    font-size: 14px;
    text-align: center;
    color: #a0a0a0;
  }

  .ranking-pagination__desc span {
    color: #4a4a4a;
  }

  .ranking-table__cell {
    border-bottom: 1px solid #cdd2d2;
    height: 54px;
    line-height: 16px;
    font-family: Helvetica, AppleSDGothic, "Apple SD Gothic Neo", AppleGothic,
      Arial, Tahoma;
    font-size: 14px;
  }

  .ranking-table__cell--summoner span {
    vertical-align: middle;
    line-height: 19px;
    font-size: 15px;
    font-weight: bold;
    color: #444b4b;
  }

  /* radius 이미지 */
  .ranking-table__cell--summoner img {
    margin-right: 12px;
    vertical-align: middle;
    border-radius: 50%;
    width: 38px;
    height: 38px;
  }

  .ranking-table__cell {
    text-align: start;
  }

  .ranking-table__cellranking-table__cell--rank {
    padding-left: 43px;
    text-align: center;
    color: #444b4b;
    font-size: 14px;
  }

  /* 빨파 바 */
  .winratio-graph {
    position: relative;
    display: inline-block;
    width: 150px;
    height: 20px;
    vertical-align: middle;
  }
  .winratio-graph__fill--left {
    background: #3d95e5;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    z-index: 1;
  }

  .winratio-graph__text {
    position: absolute;
    top: 3px;
    height: 100%;
    line-height: 15px;
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .winratio-graph__fill--right {
    width: 100%;
    background: #ee5a52;
  }

  .winratio-graph__text--right {
    right: 8px;
    text-align: right;
  }

  .winratio-graph__text--left {
    left: 9px;
    text-align: left;
    z-index: 1;
  }

  .winratio-graph__fill {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-radius: 4px;
  }

  .winratio-graph__text {
    position: absolute;
    top: 3px;
    height: 100%;
    line-height: 15px;
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ranking-pagination {
    text-align: center;
    margin-top: 30px;
  }
  .ranking-pagination__item:first-child {
    margin-left: 0;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .ranking-pagination__item--arrow a {
    background: #f2f2f2;
  }

  .ranking-pagination__item a {
    display: block;
    width: 90px;
    padding: 4px 0 8px;

    border: solid 1px #cdd2d2;
    line-height: 16px;
    font-family: Helvetica, AppleSDGothic, "Apple SD Gothic Neo", AppleGothic,
      Arial, Tahoma;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    color: #444b4b;
    box-sizing: border-box;
  }
  .ranking-pagination__item {
    display: inline-block;
    margin-left: 10px;
  }
`;

const Ranking = () => {
  return (
    <>
      <Header1 />
      <RankingBox>
        <div className="wrap-container">
          <div className="pageHeaderWrap">
            <div className="menu">
              <div style={{ fontSize: "28px" }}>랭킹</div>
              <div className="actions">
                <div className="searchItem">
                  <form
                    id="search_summoner"
                    className="formItem"
                    action="/ranking/ladder/"
                    method="get"
                  >
                    <div className="inputText">
                      <input
                        type="text"
                        className="input"
                        placeholder="소환사명"
                        name="summonerName"
                      />
                    </div>
                    <button className="button-SemiRound-Blue" type="submit">
                      랭킹검색
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="pageDescription" style={{ paddingBottom: "32px" }}>
              <span className="text">
                소환사의 협곡에 총 4,192,065명의 소환사가 있습니다.
              </span>
              <small className="small">
                랭킹은 브론즈 이상 소환사만 표시. 랭킹은 주기적으로 갱신됩니다.
              </small>
            </div>

            <div className="LadderRankingLayoutWrap">
              <div className="LadderRankingLayout">
                <div className="ContentWrap">
                  <div className="Content">
                    <div className="ranking-highest"></div>
                    <table className="ranking-table">
                      <colgroup>
                        <col width="100" />
                        <col width="230" />
                        <col width="90" />
                        <col width="90" />
                        <col width="90" />
                        <col width="198" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="ranking-table__header"></th>
                          <th className="ranking-table__header">소환사</th>
                          <th className="ranking-table__header">티어</th>
                          <th className="ranking-table__header">LP</th>
                          <th className="ranking-table__header">레벨</th>
                          <th className="ranking-table__header">승률</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="ranking-table__row"
                          id="summoner-41780873"
                        >
                          <td className="ranking-table__cellranking-table__cell--rank">
                            6
                          </td>
                          <td className="select_summoner ranking-table__cell ranking-table__cell--summoner">
                            <a href="//www.op.gg/summoner/userName=KT+Malrang">
                              <img src="img/homeLogo.png" onerror="" />
                              <span>KT Malrang</span>
                            </a>
                          </td>
                          <td className="ranking-table__cell ranking-table__cell--tier">
                            Challenger
                          </td>
                          <td className="ranking-table__cell ranking-table__cell--lp">
                            1,326 LP
                          </td>
                          <td className="ranking-table__cell ranking-table__cell--level">
                            277
                          </td>
                          <td className="ranking-table__cell ranking-table__cell--winratio">
                            <div className="winratio">
                              <div className="winratio-graph">
                                <div
                                  className="winratio-graph__fill winratio-graph__fill--left"
                                  style={{ width: "57%" }}
                                ></div>
                                <div className="winratio-graph__text winratio-graph__text--left">
                                  343
                                </div>
                                <div className="winratio-graph__fill winratio-graph__fill--right"></div>
                                <div className="winratio-graph__text winratio-graph__text--right">
                                  262
                                </div>
                              </div>
                              <span className="winratio__text">57%</span>
                            </div>
                          </td>
                        </tr>
                        {/* 두번째 컴포넌트 */}
                        <tr
                          className="ranking-table__row"
                          id="summoner-41780873"
                        >
                          <td className="ranking-table__cellranking-table__cell--rank">
                            6
                          </td>
                          <td className="select_summoner ranking-table__cell ranking-table__cell--summoner">
                            <a href="//www.op.gg/summoner/userName=KT+Malrang">
                              <img src="img/homeLogo.png" onerror="" />
                              <span>KT Malrang</span>
                            </a>
                          </td>
                          <td className="ranking-table__cell ranking-table__cell--tier">
                            Challenger
                          </td>
                          <td className="ranking-table__cell ranking-table__cell--lp">
                            1,326 LP
                          </td>
                          <td className="ranking-table__cell ranking-table__cell--level">
                            277
                          </td>
                          <td className="ranking-table__cell ranking-table__cell--winratio">
                            <div className="winratio">
                              <div className="winratio-graph">
                                <div
                                  className="winratio-graph__fill winratio-graph__fill--left"
                                  style={{ width: "57%" }}
                                ></div>
                                <div className="winratio-graph__text winratio-graph__text--left">
                                  343
                                </div>
                                <div className="winratio-graph__fill winratio-graph__fill--right"></div>
                                <div className="winratio-graph__text winratio-graph__text--right">
                                  262
                                </div>
                              </div>
                              <span className="winratio__text">57%</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="ranking-pagination">
                      <ul className="ranking-pagination__list">
                        <li className="ranking-pagination__item ranking-pagination__item--arrow">
                          <a href="#">◀</a>
                        </li>
                        <li className="ranking-pagination__item ranking-pagination__item--disable">
                          <a href="#">1</a>
                        </li>
                        <li className="ranking-pagination__item">
                          <a href="/ranking/ladder/page=2">2</a>
                        </li>
                        <li className="ranking-pagination__item">
                          <a href="/ranking/ladder/page=3">3</a>
                        </li>
                        <li className="ranking-pagination__item">
                          <a href="/ranking/ladder/page=4">4</a>
                        </li>
                        <li className="ranking-pagination__item">
                          <a href="/ranking/ladder/page=5">5</a>
                        </li>
                        <li className="ranking-pagination__item">
                          <a href="/ranking/ladder/page=6">6</a>
                        </li>
                        <li className="ranking-pagination__item">
                          <a href="/ranking/ladder/page=7">7</a>
                        </li>
                        <li className="ranking-pagination__item ranking-pagination__item--arrow">
                          <a href="/ranking/ladder/page=8">▶</a>
                        </li>
                      </ul>
                      <div className="ranking-pagination__desc">
                        <span>1 ~ 100</span> 등 / 총 <span>4,193,201</span>{" "}
                        소환사
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </RankingBox>
    </>
  );
};

export default Ranking;
