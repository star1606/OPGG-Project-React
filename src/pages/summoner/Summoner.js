import React, { useState, useEffect } from "react";
import Footer2 from "./../../include/Footer2";
import Header2 from "./../../include/Header2";
import styled from "styled-components";
import "../../include/Summoner.css";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const SummonerHeader = styled.div`
  position: relative;
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0 0 0;
`;

const Summoner = ({ match, history }) => {
  if (match.params === null) {
    history.goBack();
  }

  // const [isToggleOn, setIsToggleOn] = useState(false);
  const [toggleId, setToggleId] = useState(0);
  const [respDto, setRespDto] = useState({});
  const [detailRespDto, setDetailRespDto] = useState({});
  const [maxDeal, setMaxDeal] = useState(0);
  const [summonerName, setSummonerName] = useState(match.params.username);

  console.log(history);
  console.log(match.params);

  // 팀별 토탈골드
  const getTotalGolds = (matchSummonerModels) => {
    let totalGolds = 0;

    matchSummonerModels.map((matchSummonerModel) => {
      totalGolds = totalGolds + matchSummonerModel.goldEarned;
    });

    return totalGolds;
  };

  // 팀별 토탈킬
  const getTotalKills = (matchSummonerModels) => {
    let totalKills = 0;

    matchSummonerModels.map((matchSummonerModel) => {
      totalKills = totalKills + matchSummonerModel.kills;
    });

    return totalKills;
  };

  // 아이템 이미지 가져오기
  const getItemImg = (itemId) => {
    if (itemId == 0) {
      return "/img/blank.png";
    } else if (itemId !== null && itemId !== "" && itemId !== "null") {
      return (
        "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/" +
        itemId +
        ".png"
      );
    }
  };

  // 특성 이미지 가져오기
  const getPerkImg = (perkId) => {
    if (perkId == null || perkId === "" || perkId === "null") {
      return;
    }

    return (
      "https://opgg-static.akamaized.net/images/lol/perkStyle/" +
      perkId +
      ".png"
    );
  };

  // 스펠 이미지 가져오기
  const getSpellImg = (spellId) => {
    if (spellId == null || spellId === "" || spellId === "null") {
      return;
    }

    let spellName = null;

    if (spellId === 21) {
      spellName = "SummonerBarrier";
    } else if (spellId === 1) {
      spellName = "SummonerBoost";
    } else if (spellId === 14) {
      spellName = "SummonerDot";
    } else if (spellId === 3) {
      spellName = "SummonerExhaust";
    } else if (spellId === 4) {
      spellName = "SummonerFlash";
    } else if (spellId === 6) {
      spellName = "SummonerHaste";
    } else if (spellId === 7) {
      spellName = "SummonerHeal";
    } else if (spellId === 13) {
      spellName = "SummonerMana";
    } else if (spellId === 30) {
      spellName = "SummonerPoroRecall";
    } else if (spellId === 31) {
      spellName = "SummonerPoroThrow";
    } else if (spellId === 11) {
      spellName = "SummonerSmite";
    } else if (spellId === 39) {
      spellName = "SummonerSnowURFSnowball_Mark";
    } else if (spellId === 32) {
      spellName = "SummonerSnowball";
    } else if (spellId === 12) {
      spellName = "SummonerTeleport";
    }

    return (
      "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/" +
      spellName +
      ".png"
    );
  };

  // 챔프 이미지 가져오기
  const getChampImg = (championId) => {
    return (
      "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/" +
      getChampName(championId) +
      ".png"
    );
  };

  // CS 입력
  const getCs = (cs, duration) => {
    let csData = "" + cs + "(" + (cs / (duration / 60)).toFixed(1) + ")";

    return csData;
  };

  // 평점 계산
  const getGrade = (kill, death, assist) => {
    if (death === 0) {
      return "Perfect 평점";
    }

    let grade = ((kill + assist) / death).toFixed(2);

    return grade + ":1 평점";
  };

  // 숫자 시간을 분과 초로 변경
  const getDuration = (duration) => {
    let minutes = (duration / 60).toFixed(0);
    let seconds = (duration % 60).toFixed(0);

    if ((minutes + "").length === 1) {
      minutes = "0" + minutes;
    }

    if ((seconds + "").length === 1) {
      seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
  };

  // // 타임스탬프 시간을 날짜로 변경
  // const getDate = (timestamp) => {
  //   if (timestamp === null) {
  //     return "9999.12.31";
  //   }

  //   let ts = timestamp.getTime();

  //   var d = new Date();

  //   if (ts + 86400000 > d.getMilliseconds()) {
  //     let temp = d.getMilliseconds() - ts;
  //     if (temp < 60000) {
  //       return temp / 1000 + "초 전";
  //     } else if (temp < 3600000) {
  //       return temp / 60000 + "분 전";
  //     } else {
  //       return temp / 3600000 + "시간 전";
  //     }
  //   }

  //   let date = new Date(ts);
  //   let dateString = date.format("yyyy-MM-dd");

  //   return dateString;
  // };

  // 롱 시간을 날짜로 변경
  const getCreation = (creation) => {
    // Date의 프로토타입에 함수추가
    Date.prototype.yyyymmdd = function () {
      var yyyy = this.getFullYear().toString();
      var mm = (this.getMonth() + 1).toString();
      var dd = this.getDate().toString();

      return (
        yyyy +
        "-" +
        (mm[1] ? mm : "0" + mm[0]) +
        "-" +
        (dd[1] ? dd : "0" + dd[0])
      );
    };

    if (creation + 86400000 > Date.now()) {
      let temp = Date.now() - creation;
      if (temp < 60000) {
        return (temp / 1000).toFixed(0) + "초 전";
      } else if (temp < 3600000) {
        return (temp / 60000).toFixed(0) + "분 전";
      } else {
        return (temp / 3600000).toFixed(0) + "시간 전";
      }
    }
    return new Date(creation).yyyymmdd();
  };

  // 챔피언 데이터
  const getChampName = (champId) => {
    let champName = "";

    if (champId === 266) {
      champName = "Aatrox";
    } else if (champId === 103) {
      champName = "Ahri";
    } else if (champId === 84) {
      champName = "Akali";
    } else if (champId === 12) {
      champName = "Alistar";
    } else if (champId === 32) {
      champName = "Amumu";
    } else if (champId === 34) {
      champName = "Anivia";
    } else if (champId === 1) {
      champName = "Annie";
    } else if (champId === 523) {
      champName = "Aphelios";
    } else if (champId === 22) {
      champName = "Ashe";
    } else if (champId === 136) {
      champName = "AurelionSol";
    } else if (champId === 268) {
      champName = "Azir";
    } else if (champId === 432) {
      champName = "Bard";
    } else if (champId === 53) {
      champName = "Blitzcrank";
    } else if (champId === 63) {
      champName = "Brand";
    } else if (champId === 201) {
      champName = "Braum";
    } else if (champId === 51) {
      champName = "Caitlyn";
    } else if (champId === 164) {
      champName = "Camille";
    } else if (champId === 69) {
      champName = "Cassiopeia";
    } else if (champId === 31) {
      champName = "Chogath";
    } else if (champId === 42) {
      champName = "Corki";
    } else if (champId === 122) {
      champName = "Darius";
    } else if (champId === 131) {
      champName = "Diana";
    } else if (champId === 119) {
      champName = "Draven";
    } else if (champId === 36) {
      champName = "DrMundo";
    } else if (champId === 245) {
      champName = "Ekko";
    } else if (champId === 60) {
      champName = "Elise";
    } else if (champId === 28) {
      champName = "Evelynn";
    } else if (champId === 81) {
      champName = "Ezreal";
    } else if (champId === 9) {
      champName = "Fiddlesticks";
    } else if (champId === 114) {
      champName = "Fiora";
    } else if (champId === 105) {
      champName = "Fizz";
    } else if (champId === 3) {
      champName = "Galio";
    } else if (champId === 41) {
      champName = "Gangplank";
    } else if (champId === 86) {
      champName = "Garen";
    } else if (champId === 150) {
      champName = "Gnar";
    } else if (champId === 79) {
      champName = "Gragas";
    } else if (champId === 104) {
      champName = "Graves";
    } else if (champId === 120) {
      champName = "Hecarim";
    } else if (champId === 74) {
      champName = "Heimerdinger";
    } else if (champId === 420) {
      champName = "Illaoi";
    } else if (champId === 39) {
      champName = "Irelia";
    } else if (champId === 427) {
      champName = "Ivern";
    } else if (champId === 40) {
      champName = "Janna";
    } else if (champId === 59) {
      champName = "JarvanIV";
    } else if (champId === 24) {
      champName = "Jax";
    } else if (champId === 126) {
      champName = "Jayce";
    } else if (champId === 202) {
      champName = "Jhin";
    } else if (champId === 222) {
      champName = "Jinx";
    } else if (champId === 145) {
      champName = "Kaisa";
    } else if (champId === 429) {
      champName = "Kalista";
    } else if (champId === 43) {
      champName = "Karma";
    } else if (champId === 30) {
      champName = "Karthus";
    } else if (champId === 38) {
      champName = "Kassadin";
    } else if (champId === 55) {
      champName = "Katarina";
    } else if (champId === 10) {
      champName = "Kayle";
    } else if (champId === 141) {
      champName = "Kayn";
    } else if (champId === 85) {
      champName = "Kennen";
    } else if (champId === 121) {
      champName = "Khazix";
    } else if (champId === 203) {
      champName = "Kindred";
    } else if (champId === 240) {
      champName = "Kled";
    } else if (champId === 96) {
      champName = "KogMaw";
    } else if (champId === 7) {
      champName = "Leblanc";
    } else if (champId === 64) {
      champName = "LeeSin";
    } else if (champId === 89) {
      champName = "Leona";
    } else if (champId === 127) {
      champName = "Lissandra";
    } else if (champId === 236) {
      champName = "Lucian";
    } else if (champId === 117) {
      champName = "Lulu";
    } else if (champId === 99) {
      champName = "Lux";
    } else if (champId === 54) {
      champName = "Malphite";
    } else if (champId === 90) {
      champName = "Malzahar";
    } else if (champId === 57) {
      champName = "Maokai";
    } else if (champId === 11) {
      champName = "MasterYi";
    } else if (champId === 21) {
      champName = "MissFortune";
    } else if (champId === 62) {
      champName = "MonkeyKing";
    } else if (champId === 82) {
      champName = "Mordekaiser";
    } else if (champId === 25) {
      champName = "Morgana";
    } else if (champId === 267) {
      champName = "Nami";
    } else if (champId === 75) {
      champName = "Nasus";
    } else if (champId === 111) {
      champName = "Nautilus";
    } else if (champId === 518) {
      champName = "Neeko";
    } else if (champId === 76) {
      champName = "Nidalee";
    } else if (champId === 56) {
      champName = "Nocturne";
    } else if (champId === 20) {
      champName = "Nunu";
    } else if (champId === 2) {
      champName = "Olaf";
    } else if (champId === 61) {
      champName = "Orianna";
    } else if (champId === 516) {
      champName = "Ornn";
    } else if (champId === 80) {
      champName = "Pantheon";
    } else if (champId === 78) {
      champName = "Poppy";
    } else if (champId === 555) {
      champName = "Pyke";
    } else if (champId === 246) {
      champName = "Qiyana";
    } else if (champId === 133) {
      champName = "Quinn";
    } else if (champId === 497) {
      champName = "Rakan";
    } else if (champId === 33) {
      champName = "Rammus";
    } else if (champId === 421) {
      champName = "RekSai";
    } else if (champId === 58) {
      champName = "Renekton";
    } else if (champId === 107) {
      champName = "Rengar";
    } else if (champId === 92) {
      champName = "Riven";
    } else if (champId === 68) {
      champName = "Rumble";
    } else if (champId === 13) {
      champName = "Ryze";
    } else if (champId === 113) {
      champName = "Sejuani";
    } else if (champId === 235) {
      champName = "Senna";
    } else if (champId === 875) {
      champName = "Sett";
    } else if (champId === 35) {
      champName = "Shaco";
    } else if (champId === 98) {
      champName = "Shen";
    } else if (champId === 102) {
      champName = "Shyvana";
    } else if (champId === 27) {
      champName = "Singed";
    } else if (champId === 14) {
      champName = "Sion";
    } else if (champId === 15) {
      champName = "Sivir";
    } else if (champId === 72) {
      champName = "Skarner";
    } else if (champId === 37) {
      champName = "Sona";
    } else if (champId === 16) {
      champName = "Soraka";
    } else if (champId === 50) {
      champName = "Swain";
    } else if (champId === 517) {
      champName = "Sylas";
    } else if (champId === 134) {
      champName = "Syndra";
    } else if (champId === 223) {
      champName = "TahmKench";
    } else if (champId === 163) {
      champName = "Taliyah";
    } else if (champId === 91) {
      champName = "Talon";
    } else if (champId === 44) {
      champName = "Taric";
    } else if (champId === 17) {
      champName = "Teemo";
    } else if (champId === 412) {
      champName = "Thresh";
    } else if (champId === 18) {
      champName = "Tristana";
    } else if (champId === 48) {
      champName = "Trundle";
    } else if (champId === 23) {
      champName = "Tryndamere";
    } else if (champId === 4) {
      champName = "TwistedFate";
    } else if (champId === 29) {
      champName = "Twitch";
    } else if (champId === 77) {
      champName = "Udyr";
    } else if (champId === 6) {
      champName = "Urgot";
    } else if (champId === 110) {
      champName = "Varus";
    } else if (champId === 67) {
      champName = "Vayne";
    } else if (champId === 45) {
      champName = "Veigar";
    } else if (champId === 161) {
      champName = "Velkoz";
    } else if (champId === 254) {
      champName = "Vi";
    } else if (champId === 112) {
      champName = "Viktor";
    } else if (champId === 8) {
      champName = "Vladimir";
    } else if (champId === 106) {
      champName = "Volibear";
    } else if (champId === 19) {
      champName = "Warwick";
    } else if (champId === 498) {
      champName = "Xayah";
    } else if (champId === 101) {
      champName = "Xerath";
    } else if (champId === 5) {
      champName = "XinZhao";
    } else if (champId === 157) {
      champName = "Yasuo";
    } else if (champId === 83) {
      champName = "Yorick";
    } else if (champId === 350) {
      champName = "Yuumi";
    } else if (champId === 154) {
      champName = "Zac";
    } else if (champId === 238) {
      champName = "Zed";
    } else if (champId === 115) {
      champName = "Ziggs";
    } else if (champId === 26) {
      champName = "Zilean";
    } else if (champId === 142) {
      champName = "Zoe";
    } else if (champId === 143) {
      champName = "Zyra";
    } else if (champId === 777) {
      champName = "Yone";
    } else if (champId === 145) {
      champName = "Kaisa";
    } else {
      champName = "Garen";
    }

    return champName;
  };

  const getDetailDto = (gameId) => {
    axios
      .get("http://59.20.79.42:58002/api/detail/gameid/" + gameId)
      .then((response) => {
        console.log(response.data);
        if (response.data !== null && response.data !== undefined) {
          setDetailRespDto(response.data);

          let maxDealInt = 0;
          response.data.data.winSummonerModels.map((winSummonerModel) => {
            if (maxDealInt < winSummonerModel.totalDamageDealtToChampions) {
              maxDealInt = winSummonerModel.totalDamageDealtToChampions;
            }
          });

          response.data.data.loseSummonerModels.map((loseSummonerModel) => {
            if (maxDealInt < loseSummonerModel.totalDamageDealtToChampions) {
              maxDealInt = loseSummonerModel.totalDamageDealtToChampions;
            }
          });

          console.log(maxDealInt);

          setMaxDeal(maxDealInt);
        } else {
          setDetailRespDto({});
        }
      })
      .catch((error) => {
        setDetailRespDto({});
        console.log(error);
      });
  };

  const changeName = (changedName) => {
    console.log("changedName: " + changedName);
    setSummonerName(changedName);
  };

  useEffect(() => {
    console.log("summonerName: " + summonerName);
    if (
      summonerName === null ||
      summonerName === "" ||
      summonerName === undefined
    ) {
      alert("소환사명을 입력하세요");
      history.push("/home");
    } else {
      axios
        .get("http://59.20.79.42:58002/api/info/name/" + summonerName)
        .then((response) => {
          console.log(response.data);
          if (response.data !== null && response.data !== undefined) {
            setRespDto(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [summonerName]);

  return (
    <>
      <Header2 changeName={changeName} />
      <div>
        <div className="header">
          <div className="face">
            <div className="profileIcon">
              <div className="borderImage"></div>
              <img
                className="profileImage"
                src={
                  respDto.statusCode === 200
                    ? "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/" +
                      respDto.data[0].summonerModel.profileIconId +
                      ".png"
                    : "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/6.png"
                }
                alt=""
              />
              <span className="level">
                {respDto.statusCode === 200
                  ? respDto.data[0].summonerModel.summonerLevel
                  : 0}
              </span>
            </div>
          </div>
          <div className="profile">
            <div className="information">
              <span className="name">
                {respDto.statusCode === 200
                  ? respDto.data[0].summonerModel.name
                  : "소환사명"}
              </span>
              <div className="rank">
                <div className="ladderRank">
                  랭킹{" "}
                  <span className="ranking">
                    {" "}
                    {respDto.statusCode === 200 ? respDto.data[0].radder : 0}
                  </span>
                  위
                </div>
              </div>
              <div className="button">
                <button className="button__blue">전적갱신</button>
              </div>
            </div>
            <div className="lastUpdate">
              최근업데이트:{" "}
              <span className="time">
                {respDto.statusCode == 200
                  ? respDto.data[1] !== null && respDto.data[1] !== undefined
                    ? getCreation(
                        respDto.data[1].matchSummonerModel.gameCreation
                      )
                    : "로딩실패"
                  : "로딩실패"}
              </span>
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
                        src={
                          respDto.statusCode === 200
                            ? respDto.data[0].entryModels[0].tierRankId !== null
                              ? "https://opgg-static.akamaized.net/images/medals/" +
                                respDto.data[0].entryModels[0].tierRankId +
                                ".png"
                              : "/img/default.png"
                            : "/img/default.png"
                        }
                        alt="솔랭"
                      />
                    </div>
                    <div className="tierRankInfo">
                      <div className="rankType">솔로랭크</div>
                      <div className="tierRank">
                        {respDto.statusCode === 200
                          ? respDto.data[0].entryModels[0].tierRankId !== null
                            ? respDto.data[0].entryModels[0].tier +
                              "  " +
                              respDto.data[0].entryModels[0].rank
                            : "noData"
                          : "noData"}
                      </div>
                      <div className="tierInfo">
                        <span className="leaguePoints">
                          {" "}
                          {respDto.statusCode === 200
                            ? respDto.data[0].entryModels[0].tierRankId !== null
                              ? respDto.data[0].entryModels[0].leaguePoints +
                                " Lp"
                              : 0
                            : 0}{" "}
                        </span>
                        <span className="winLose">
                          <span className="wins">
                            {" "}
                            {respDto.statusCode === 200
                              ? respDto.data[0].entryModels[0].tierRankId !==
                                null
                                ? respDto.data[0].entryModels[0].wins
                                : 0
                              : 0}{" "}
                            승{" "}
                          </span>
                          <span className="lossers">
                            {" "}
                            {respDto.statusCode === 200
                              ? respDto.data[0].entryModels[0].tierRankId !==
                                null
                                ? respDto.data[0].entryModels[0].losses
                                : 0
                              : 0}
                            패{" "}
                          </span>
                          <br />
                          <span className="winRatio">
                            승률{" "}
                            {respDto.statusCode === 200
                              ? respDto.data[0].entryModels[0].tierRankId !==
                                null
                                ? (
                                    (respDto.data[0].entryModels[0].wins /
                                      (respDto.data[0].entryModels[0].wins +
                                        respDto.data[0].entryModels[0]
                                          .losses)) *
                                    100
                                  ).toFixed(2)
                                : 0
                              : 0}
                            %
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sub-tier">
                  <img
                    className="img-sub-tier__medal"
                    src={
                      respDto.statusCode === 200
                        ? respDto.data[0].entryModels[1].tierRankId !== null
                          ? "https://opgg-static.akamaized.net/images/medals/" +
                            respDto.data[0].entryModels[1].tierRankId +
                            ".png"
                          : "/img/default.png"
                        : "/img/default.png"
                    }
                    alt="자유랭"
                  />
                  <div className="sub-tier__info__unranked">
                    <div className="tierRankInfo">
                      <div className="rankType">자유 5:5 랭크</div>
                      <div className="tierRank">
                        {respDto.statusCode === 200
                          ? respDto.data[0].entryModels[1].tierRankId !== null
                            ? respDto.data[0].entryModels[1].tier +
                              "  " +
                              respDto.data[0].entryModels[1].rank
                            : "noData"
                          : "noData"}
                      </div>
                      <div className="tierInfo">
                        <span className="leaguePoints">
                          {respDto.statusCode === 200
                            ? respDto.data[0].entryModels[1].tierRankId !== null
                              ? respDto.data[0].entryModels[1].leaguePoints +
                                " Lp"
                              : "noData"
                            : "noData"}
                        </span>
                        <span className="winLose">
                          <span className="wins">
                            {" "}
                            {respDto.statusCode === 200
                              ? respDto.data[0].entryModels[1].tierRankId !==
                                null
                                ? respDto.data[0].entryModels[1].wins
                                : 0
                              : 0}{" "}
                            승{" "}
                          </span>
                          <span className="lossers">
                            {" "}
                            {respDto.statusCode === 200
                              ? respDto.data[0].entryModels[1].tierRankId !==
                                null
                                ? respDto.data[0].entryModels[1].losses
                                : 0
                              : 0}
                            패{" "}
                          </span>
                          <br />
                          <span className="winRatio">
                            승률{" "}
                            {respDto.statusCode === 200
                              ? respDto.data[0].entryModels[1].tierRankId !==
                                null
                                ? (
                                    (respDto.data[0].entryModels[1].wins /
                                      (respDto.data[0].entryModels[1].wins +
                                        respDto.data[0].entryModels[1]
                                          .losses)) *
                                    100
                                  ).toFixed(2)
                                : 0
                              : 0}
                            %
                          </span>
                        </span>
                      </div>
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
                      {respDto.statusCode === 200 ? (
                        respDto.data.map(
                          (infoDto) =>
                            infoDto.type === 1 && (
                              <div
                                className="gameItemWrap"
                                key={infoDto.matchSummonerModel.id}
                              >
                                <div
                                  className={
                                    infoDto.matchSummonerModel.win === true
                                      ? "gameItemWinExtended"
                                      : "gameItemLoseExtended"
                                  }
                                  data-summoner-id="41913808"
                                  data-game-time="1598546708"
                                  data-game-id="4605496244"
                                  data-game-result="win"
                                >
                                  <div className="toggle-content">
                                    <div className="gameStats">
                                      <div className="gameType" title="솔랭">
                                        {infoDto.matchSummonerModel.queueId ===
                                        420
                                          ? "솔랭"
                                          : "자유"}
                                      </div>
                                      <div className="timeStamp">
                                        <span
                                          className="toggle-time"
                                          data-datetime="1598546708"
                                          data-type=""
                                          data-interval="60"
                                          title="2020년 8월 28일 오전 1시 45분"
                                        >
                                          {getCreation(
                                            infoDto.matchSummonerModel
                                              .gameCreation
                                          )}
                                        </span>
                                      </div>
                                      <div
                                        className={
                                          infoDto.matchSummonerModel.win ===
                                          true
                                            ? "bar"
                                            : "bar bar-lose"
                                        }
                                      ></div>
                                      <div className="gameResult">
                                        {infoDto.matchSummonerModel.win === true
                                          ? "승리"
                                          : "패배"}
                                      </div>
                                      <div className="gameLength">
                                        {" "}
                                        {getDuration(
                                          infoDto.matchSummonerModel
                                            .gameDuration
                                        )}{" "}
                                      </div>
                                    </div>

                                    <div className="gameSettingInfo">
                                      <div className="championImage">
                                        <img
                                          src={getChampImg(
                                            infoDto.matchSummonerModel
                                              .championId
                                          )}
                                          className="championIcon"
                                        />
                                      </div>
                                      <div className="summonerSpell">
                                        <div className="spell1">
                                          <img
                                            src={getSpellImg(
                                              infoDto.matchSummonerModel
                                                .spell1Id
                                            )}
                                            className="summonerSpell1"
                                          />
                                        </div>
                                        <div className="spell2">
                                          <img
                                            src={getSpellImg(
                                              infoDto.matchSummonerModel
                                                .spell2Id
                                            )}
                                            className="summonerSpell2"
                                          />
                                        </div>
                                      </div>
                                      <div className="runes">
                                        <div className="rune1">
                                          <img
                                            src={getPerkImg(
                                              infoDto.matchSummonerModel
                                                .perkPrimaryStyle
                                            )}
                                            className="runeImage1"
                                          />
                                        </div>
                                        <div className="rune2">
                                          <img
                                            src={getPerkImg(
                                              infoDto.matchSummonerModel
                                                .perkSubStyle
                                            )}
                                            className="runeImage2"
                                          />
                                        </div>
                                      </div>
                                      <div className="championName">
                                        {getChampName(
                                          infoDto.matchSummonerModel.championId
                                        )}
                                      </div>
                                    </div>
                                    <div className="kdaWrap">
                                      <div className="kda">
                                        <span className="kill">
                                          {infoDto.matchSummonerModel.kills}
                                        </span>
                                        /
                                        <span className="death">
                                          {infoDto.matchSummonerModel.deaths}
                                        </span>
                                        /
                                        <span className="assist">
                                          {infoDto.matchSummonerModel.assists}
                                        </span>
                                      </div>
                                      <div className="kdaRatio">
                                        <span className="kdaRatioSpan">
                                          {getGrade(
                                            infoDto.matchSummonerModel.kills,
                                            infoDto.matchSummonerModel.deaths,
                                            infoDto.matchSummonerModel.assists
                                          )}
                                        </span>
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
                                      <div className="stateLevel">
                                        레벨
                                        {infoDto.matchSummonerModel.champLevel}
                                      </div>
                                      <div className="cs">
                                        <span className="">
                                          {
                                            infoDto.matchSummonerModel
                                              .totalMinionsKilled
                                          }{" "}
                                          (
                                          {(
                                            infoDto.matchSummonerModel
                                              .totalMinionsKilled /
                                            (infoDto.matchSummonerModel
                                              .gameDuration /
                                              60)
                                          ).toFixed(1)}
                                          )
                                        </span>
                                        CS
                                      </div>
                                      {/* <div className="ckRate">
                                          킬관여 90% 안할 것
                                        </div> */}
                                    </div>
                                    <div className="items">
                                      <div className="itemList">
                                        <div className="item">
                                          <img
                                            src={getItemImg(
                                              infoDto.matchSummonerModel.item0
                                            )}
                                            className="itemImg"
                                            alt=""
                                          />
                                        </div>
                                        <div className="item">
                                          <img
                                            src={getItemImg(
                                              infoDto.matchSummonerModel.item1
                                            )}
                                            className="itemImg"
                                            alt=""
                                          />
                                        </div>
                                        <div className="item">
                                          <img
                                            src={getItemImg(
                                              infoDto.matchSummonerModel.item2
                                            )}
                                            className="itemImg"
                                            alt=""
                                          />
                                        </div>
                                        <div className="item">
                                          <img
                                            src={getItemImg(
                                              infoDto.matchSummonerModel.item6
                                            )}
                                            className="itemImg"
                                            alt=""
                                          />
                                        </div>
                                        <div className="item">
                                          <img
                                            src={getItemImg(
                                              infoDto.matchSummonerModel.item3
                                            )}
                                            className="itemImg"
                                            alt=""
                                          />
                                        </div>
                                        <div className="item">
                                          <img
                                            src={getItemImg(
                                              infoDto.matchSummonerModel.item4
                                            )}
                                            className="itemImg"
                                            alt=""
                                          />
                                        </div>
                                        <div className="item">
                                          <img
                                            src={getItemImg(
                                              infoDto.matchSummonerModel.item5
                                            )}
                                            className="itemImg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={
                                        infoDto.matchSummonerModel.win === true
                                          ? "statusBtn"
                                          : "statusBtn statusBtn-lose"
                                      }
                                    >
                                      <div className="content2">
                                        <a className="btnMatchDetail">
                                          <i
                                            onClick={() => {
                                              if (
                                                toggleId === 0 ||
                                                toggleId !==
                                                  infoDto.matchSummonerModel
                                                    .gameId
                                              ) {
                                                getDetailDto(
                                                  infoDto.matchSummonerModel
                                                    .gameId
                                                );
                                                setToggleId(
                                                  infoDto.matchSummonerModel
                                                    .gameId
                                                );
                                              } else {
                                                setToggleId(0);
                                              }
                                            }}
                                            className={
                                              infoDto.matchSummonerModel.win ===
                                              true
                                                ? "material-icons"
                                                : "material-icons material-icons-lose"
                                            }
                                          >
                                            arrow_drop_down
                                          </i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  {/* <!-- 여기서부터가 경기내용임 --> */}
                                  {toggleId ===
                                    infoDto.matchSummonerModel.gameId &&
                                    detailRespDto.statusCode == 200 && (
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
                                                    {/* <col className="Tier" /> */}
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
                                                        {detailRespDto.statusCode ===
                                                        200
                                                          ? detailRespDto.data
                                                              .winTeam
                                                              .teamId === 100
                                                            ? "(레드팀)"
                                                            : "(블루팀)"
                                                          : ""}
                                                      </th>
                                                      {/* <th className="HeaderCell">
                                                        티어
                                                      </th> */}
                                                      <th className="HeaderCell"></th>
                                                      <th className="HeaderCell">
                                                        KDA
                                                      </th>
                                                      <th className="HeaderCell">
                                                        피해량
                                                      </th>
                                                      <th className="HeaderCell">
                                                        와드
                                                      </th>
                                                      <th className="HeaderCell">
                                                        CS
                                                      </th>
                                                      <th className="HeaderCell">
                                                        아이템
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody className="Content">
                                                    {detailRespDto.data.winSummonerModels.map(
                                                      (matchSummonerModel) => {
                                                        return (
                                                          <tr
                                                            className={
                                                              matchSummonerModel.summonerName ===
                                                              respDto.data[0]
                                                                .summonerModel
                                                                .name
                                                                ? "Row RowNowWin"
                                                                : "Row RowWin"
                                                            }
                                                          >
                                                            <td className="ChampionImage Cell">
                                                              <a>
                                                                <img
                                                                  src={getChampImg(
                                                                    matchSummonerModel.championId
                                                                  )}
                                                                  title="제이스"
                                                                  className="detailChampIcon"
                                                                />

                                                                <div className="Level">
                                                                  {
                                                                    matchSummonerModel.champLevel
                                                                  }
                                                                </div>
                                                              </a>
                                                            </td>
                                                            <td className="SummonerSpell Cell">
                                                              <img
                                                                src={getSpellImg(
                                                                  matchSummonerModel.spell1Id
                                                                )}
                                                                className="Image tip"
                                                              />
                                                              <img
                                                                src={getSpellImg(
                                                                  matchSummonerModel.spell2Id
                                                                )}
                                                                className="Image tip"
                                                              />
                                                            </td>
                                                            <td className="Rune Cell">
                                                              <img
                                                                src={getPerkImg(
                                                                  matchSummonerModel.perkPrimaryStyle
                                                                )}
                                                                className="Image tip"
                                                              />
                                                              <img
                                                                src={getPerkImg(
                                                                  matchSummonerModel.perkSubStyle
                                                                )}
                                                                className="Image tip"
                                                              />
                                                            </td>
                                                            <td className="SummonerName Cell">
                                                              <span
                                                                onClick={() => {
                                                                  changeName(
                                                                    matchSummonerModel.summonerName
                                                                  );
                                                                }}
                                                                style={{
                                                                  cursor:
                                                                    "pointer",
                                                                }}
                                                                className="Link"
                                                              >
                                                                {
                                                                  matchSummonerModel.summonerName
                                                                }
                                                              </span>
                                                            </td>

                                                            {/* <td className="Tier Cell tip">
                                                            </td> */}

                                                            <td className="OPScore Cell"></td>
                                                            <td className="KDA Cell">
                                                              <span className="KDARatio green">
                                                                {getGrade(
                                                                  matchSummonerModel.kills,
                                                                  matchSummonerModel.deaths,
                                                                  matchSummonerModel.assists
                                                                )}
                                                              </span>

                                                              <div className="KDA">
                                                                <span className="Kill">
                                                                  {
                                                                    matchSummonerModel.kills
                                                                  }
                                                                </span>
                                                                /
                                                                <span className="Death">
                                                                  {
                                                                    matchSummonerModel.deaths
                                                                  }
                                                                </span>
                                                                /
                                                                <span className="Assist">
                                                                  {
                                                                    matchSummonerModel.assists
                                                                  }
                                                                </span>
                                                                {/* <span
                                                                    className="CKRate tip"
                                                                    title="킬관여율"
                                                                  >
                                                                    (52%)
                                                                  </span> */}
                                                              </div>
                                                            </td>
                                                            <td className="Damage Cell tip">
                                                              <div className="ChampionDamage">
                                                                {
                                                                  matchSummonerModel.totalDamageDealtToChampions
                                                                }
                                                              </div>
                                                              <div className="Progress">
                                                                <div
                                                                  className="Fill"
                                                                  style={{
                                                                    width:
                                                                      (matchSummonerModel.totalDamageDealtToChampions /
                                                                        maxDeal) *
                                                                        100 +
                                                                      "%",
                                                                  }}
                                                                ></div>
                                                              </div>
                                                            </td>
                                                            <td className="Ward Cell tip">
                                                              {/* <div className="Buy">
                                                                  <span className="SightWard">
                                                                  </span>
                                                                </div> */}
                                                              <div className="Stats">
                                                                <span>
                                                                  {" "}
                                                                  {
                                                                    matchSummonerModel.wardsPlaced
                                                                  }
                                                                </span>{" "}
                                                                /
                                                                <span>
                                                                  {" "}
                                                                  {
                                                                    matchSummonerModel.wardsKilled
                                                                  }
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td className="CS Cell">
                                                              <div className="CS">
                                                                {
                                                                  matchSummonerModel.totalMinionsKilled
                                                                }
                                                              </div>
                                                              <div className="CSPerMinute">
                                                                (
                                                                {(
                                                                  matchSummonerModel.totalMinionsKilled /
                                                                  (matchSummonerModel.gameDuration /
                                                                    60)
                                                                ).toFixed(1)}
                                                                )
                                                              </div>
                                                            </td>
                                                            <td className="Items Cell">
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item0
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item1
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item2
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item3
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item4
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item5
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item6
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                            </td>
                                                          </tr>
                                                        );
                                                      }
                                                    )}
                                                  </tbody>
                                                </table>
                                                <div className="Summary">
                                                  <div className="Team Team-200 Result-WIN">
                                                    <div className="ObjectScore">
                                                      <img
                                                        src="https://opgg-static.akamaized.net/images/site/summoner/icon-baron-b.png"
                                                        className="Image tip"
                                                        title="바론"
                                                      />
                                                      {detailRespDto.statusCode ===
                                                      200
                                                        ? detailRespDto.data
                                                            .winTeam.baronKills
                                                        : 0}
                                                    </div>
                                                    <div className="ObjectScore">
                                                      <img
                                                        src="https://opgg-static.akamaized.net/images/site/summoner/icon-dragon-b.png"
                                                        className="Image tip"
                                                        title="드래곤"
                                                      />
                                                      {detailRespDto.statusCode ===
                                                      200
                                                        ? detailRespDto.data
                                                            .winTeam.dragonKills
                                                        : 0}
                                                    </div>
                                                    <div className="ObjectScore">
                                                      <img
                                                        src="https://opgg-static.akamaized.net/images/site/summoner/icon-tower-b.png"
                                                        className="Image tip"
                                                        title="타워"
                                                      />
                                                      {detailRespDto.statusCode ===
                                                      200
                                                        ? detailRespDto.data
                                                            .winTeam.towerKills
                                                        : 0}
                                                    </div>
                                                  </div>
                                                  <div className="summary-graph">
                                                    <div className="total--container">
                                                      <div className="text graph--title">
                                                        Total Kill
                                                      </div>
                                                      <div className="text graph--data graph--data__left">
                                                        {detailRespDto.statusCode ===
                                                        200
                                                          ? getTotalKills(
                                                              detailRespDto.data
                                                                .winSummonerModels
                                                            )
                                                          : 0}
                                                      </div>
                                                      <div className="graph--container">
                                                        <div
                                                          className="graph win--team"
                                                          style={{
                                                            flex:
                                                              detailRespDto.statusCode ===
                                                              200
                                                                ? getTotalKills(
                                                                    detailRespDto
                                                                      .data
                                                                      .winSummonerModels
                                                                  )
                                                                : 0,
                                                          }}
                                                        ></div>
                                                        <div
                                                          className="graph lose--team"
                                                          style={{
                                                            flex:
                                                              detailRespDto.statusCode ===
                                                              200
                                                                ? getTotalKills(
                                                                    detailRespDto
                                                                      .data
                                                                      .loseSummonerModels
                                                                  )
                                                                : 0,
                                                          }}
                                                        ></div>
                                                      </div>
                                                      <div className="text graph--data graph--data__right">
                                                        {detailRespDto.statusCode ===
                                                        200
                                                          ? getTotalKills(
                                                              detailRespDto.data
                                                                .loseSummonerModels
                                                            )
                                                          : 0}
                                                      </div>
                                                    </div>
                                                    <div className="total--container">
                                                      <div className="text graph--title">
                                                        Total Gold
                                                      </div>
                                                      <div className="text graph--data graph--data__left">
                                                        {detailRespDto.statusCode ===
                                                        200
                                                          ? getTotalGolds(
                                                              detailRespDto.data
                                                                .winSummonerModels
                                                            )
                                                          : 0}
                                                      </div>
                                                      <div className="graph--container">
                                                        <div
                                                          className="graph win--team"
                                                          style={{
                                                            flex:
                                                              detailRespDto.statusCode ===
                                                              200
                                                                ? getTotalGolds(
                                                                    detailRespDto
                                                                      .data
                                                                      .winSummonerModels
                                                                  )
                                                                : 0,
                                                          }}
                                                        ></div>
                                                        <div
                                                          className="graph lose--team"
                                                          style={{
                                                            flex:
                                                              detailRespDto.statusCode ===
                                                              200
                                                                ? getTotalGolds(
                                                                    detailRespDto
                                                                      .data
                                                                      .loseSummonerModels
                                                                  )
                                                                : 0,
                                                          }}
                                                        ></div>
                                                      </div>
                                                      <div className="text graph--data graph--data__right">
                                                        {detailRespDto.statusCode ===
                                                        200
                                                          ? getTotalGolds(
                                                              detailRespDto.data
                                                                .loseSummonerModels
                                                            )
                                                          : 0}
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="Team Team-100 Result-LOSE">
                                                    <div className="ObjectScore">
                                                      <img
                                                        src="https://opgg-static.akamaized.net/images/site/summoner/icon-baron-r.png"
                                                        className="Image tip"
                                                        title="바론"
                                                      />
                                                      {detailRespDto.statusCode ===
                                                      200
                                                        ? detailRespDto.data
                                                            .loseTeam.baronKills
                                                        : 0}
                                                    </div>
                                                    <div className="ObjectScore">
                                                      <img
                                                        src="https://opgg-static.akamaized.net/images/site/summoner/icon-dragon-r.png"
                                                        className="Image tip"
                                                        title="드래곤"
                                                      />
                                                      {detailRespDto.statusCode ===
                                                      200
                                                        ? detailRespDto.data
                                                            .loseTeam
                                                            .dragonKills
                                                        : 0}
                                                    </div>
                                                    <div className="ObjectScore">
                                                      <img
                                                        src="https://opgg-static.akamaized.net/images/site/summoner/icon-tower-r.png"
                                                        className="Image tip"
                                                        title="타워"
                                                      />
                                                      {detailRespDto.statusCode ===
                                                      200
                                                        ? detailRespDto.data
                                                            .loseTeam.towerKills
                                                        : 0}
                                                    </div>
                                                  </div>
                                                </div>

                                                <table className="GameDetailTable Result-LOSE">
                                                  <colgroup>
                                                    <col className="ChampionImage" />
                                                    <col className="SummonerSpell" />
                                                    <col className="KeystoneMastery" />
                                                    <col className="SummonerName" />
                                                    {/* <col className="Tier" /> */}
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
                                                        {detailRespDto.statusCode ===
                                                        200
                                                          ? detailRespDto.data
                                                              .loseTeam
                                                              .teamId === 100
                                                            ? "(레드팀)"
                                                            : "(블루팀)"
                                                          : ""}
                                                      </th>
                                                      {/* <th className="HeaderCell">
                                                        티어
                                                      </th> */}
                                                      <th className="HeaderCell"></th>
                                                      <th className="HeaderCell">
                                                        KDA
                                                      </th>
                                                      <th className="HeaderCell">
                                                        피해량
                                                      </th>
                                                      <th className="HeaderCell">
                                                        와드
                                                      </th>
                                                      <th className="HeaderCell">
                                                        CS
                                                      </th>
                                                      <th className="HeaderCell">
                                                        아이템
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody className="Content">
                                                    {detailRespDto.data.loseSummonerModels.map(
                                                      (matchSummonerModel) => {
                                                        return (
                                                          <tr
                                                            className={
                                                              matchSummonerModel.summonerName ===
                                                              respDto.data[0]
                                                                .summonerModel
                                                                .name
                                                                ? "Row RowNowLose"
                                                                : "Row RowLose"
                                                            }
                                                          >
                                                            <td className="ChampionImage Cell">
                                                              <a
                                                                href=""
                                                                target="_blank"
                                                              >
                                                                <img
                                                                  src={getChampImg(
                                                                    matchSummonerModel.championId
                                                                  )}
                                                                  title="제이스"
                                                                  className="detailChampIcon"
                                                                />

                                                                <div className="Level">
                                                                  {
                                                                    matchSummonerModel.champLevel
                                                                  }
                                                                </div>
                                                              </a>
                                                            </td>
                                                            <td className="SummonerSpell Cell">
                                                              <img
                                                                src={getSpellImg(
                                                                  matchSummonerModel.spell1Id
                                                                )}
                                                                className="Image tip"
                                                              />
                                                              <img
                                                                src={getSpellImg(
                                                                  matchSummonerModel.spell2Id
                                                                )}
                                                                className="Image tip"
                                                              />
                                                            </td>
                                                            <td className="Rune Cell">
                                                              <img
                                                                src={getPerkImg(
                                                                  matchSummonerModel.perkPrimaryStyle
                                                                )}
                                                                className="Image tip"
                                                              />
                                                              <img
                                                                src={getPerkImg(
                                                                  matchSummonerModel.perkSubStyle
                                                                )}
                                                                className="Image tip"
                                                              />
                                                            </td>
                                                            <td className="SummonerName Cell">
                                                              {console.log(
                                                                "link",
                                                                matchSummonerModel
                                                              )}
                                                              <a
                                                                href=""
                                                                target="_blank"
                                                                className="Link"
                                                              >
                                                                {
                                                                  matchSummonerModel.summonerName
                                                                }
                                                              </a>
                                                            </td>

                                                            {/* <td className="Tier Cell tip">
                                                            </td> */}

                                                            <td className="OPScore Cell"></td>
                                                            <td className="KDA Cell">
                                                              <span className="KDARatio green">
                                                                {getGrade(
                                                                  matchSummonerModel.kills,
                                                                  matchSummonerModel.deaths,
                                                                  matchSummonerModel.assists
                                                                )}
                                                              </span>

                                                              <div className="KDA">
                                                                <span className="Kill">
                                                                  {
                                                                    matchSummonerModel.kills
                                                                  }
                                                                </span>
                                                                /
                                                                <span className="Death">
                                                                  {
                                                                    matchSummonerModel.deaths
                                                                  }
                                                                </span>
                                                                /
                                                                <span className="Assist">
                                                                  {
                                                                    matchSummonerModel.assists
                                                                  }
                                                                </span>
                                                                {/* <span
                                                                    className="CKRate tip"
                                                                    title="킬관여율"
                                                                  >
                                                                    (52%)
                                                                  </span> */}
                                                              </div>
                                                            </td>
                                                            <td className="Damage Cell tip">
                                                              <div className="ChampionDamage">
                                                                {
                                                                  matchSummonerModel.totalDamageDealtToChampions
                                                                }
                                                              </div>
                                                              <div className="Progress">
                                                                <div
                                                                  className="Fill"
                                                                  style={{
                                                                    width:
                                                                      (matchSummonerModel.totalDamageDealtToChampions /
                                                                        maxDeal) *
                                                                        100 +
                                                                      "%",
                                                                  }}
                                                                ></div>
                                                              </div>
                                                            </td>
                                                            <td className="Ward Cell tip">
                                                              {/* <div className="Buy">
                                                                  <span className="SightWard">
                                                                  </span>
                                                                </div> */}
                                                              <div className="Stats">
                                                                <span>
                                                                  {" "}
                                                                  {
                                                                    matchSummonerModel.wardsPlaced
                                                                  }
                                                                </span>{" "}
                                                                /
                                                                <span>
                                                                  {" "}
                                                                  {
                                                                    matchSummonerModel.wardsKilled
                                                                  }
                                                                </span>
                                                              </div>
                                                            </td>
                                                            <td className="CS Cell">
                                                              <div className="CS">
                                                                {
                                                                  matchSummonerModel.totalMinionsKilled
                                                                }
                                                              </div>
                                                              <div className="CSPerMinute">
                                                                (
                                                                {(
                                                                  matchSummonerModel.totalMinionsKilled /
                                                                  (matchSummonerModel.gameDuration /
                                                                    60)
                                                                ).toFixed(1)}
                                                                )
                                                              </div>
                                                            </td>
                                                            <td className="Items Cell">
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item0
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item1
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item2
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item3
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item4
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item5
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                              <div className="item">
                                                                <img
                                                                  src={getItemImg(
                                                                    matchSummonerModel.item6
                                                                  )}
                                                                  className="itemImg"
                                                                  alt=""
                                                                />
                                                              </div>
                                                            </td>
                                                          </tr>
                                                        );
                                                      }
                                                    )}
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
                            )
                        )
                      ) : (
                        <div>{respDto.message}</div>
                      )}

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

export default withRouter(Summoner);
