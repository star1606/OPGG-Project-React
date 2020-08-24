import React from "react";
import Footer2 from "../../include/Footer2";

const ChampContent = () => {
  return (
    <div className="l-champion-index">
      {/* <!-- 두번째로 큰 박스 여기서 사이즈 정함 --> */}
      <div className="l-champion-index-content">
        {/* <!-- 플레~~~입니다 박스--> */}

        <div className="champion-index-message">
          <div className="champion-index__message">
            챔피언 분석은 플래티넘 티어 이상의 랭크 게임만을 수집합니다
          </div>
        </div>
        {/* <!-- 내용 들어 가 있는 최상단 박스 --> */}
        <div
          className="l-champion-index-content--main"
          id="l-champion-index-content--main"
        >
          <div className="top-bar">
            <ul className="champ-ul">
              <li className="champ-li">챔피언 목록</li>
            </ul>
            <form>
              <input
                className="top-input"
                type="text"
                placeholder="챔피언 검색 (가렌, ㄱㄹ, ...)"
              />
            </form>
          </div>
          {/* 
          <!-- 탭박스 이 안에 ul 태그랑 오른쪽에 검색창 있음-->

          <!-- 챔피언 리스트 박스--> */}
          <div className="champion-index__champion-list">
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
            <div className="champ__list" name="가렌">
              <a className="champ-a" alt="d">
                <img
                  src="./img/garen.png"
                  style={{ style: "width: 82px; height: 82px;" }}
                  alt="da"
                />
                <div className="champ-div">가렌</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampContent;
