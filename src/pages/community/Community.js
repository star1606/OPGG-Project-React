import React from "react";
import Header1 from "./../../include/Header1";
import Footer2 from "./../../include/Footer2";
import styled from "styled-components";

const CommunityContainer = styled.div`
  margin: 0 auto;
  background-color: aqua;
  vertical-align: middle;
`;

const MainForm = styled.div`
  max-width: 1044px;
  height: 200px;
  display: flex;
  align-items: center;
  text-align: center;

  justify-content: space-around;
  .icon-form {
    margin-top: 12px;
    align-items: center;
  }
  .icon-wrap {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 46px;
    margin-left: 21px;
  }
`;

const SearchForm = styled.form`
  position: relative;

  .main-input {
    justify-content: end;
    border-radius: 2px;
    background: #fff;
    border: none;
    width: 268px;
    line-height: 17px;
    font-size: 14px;
    padding: 12px 62px 11px 12px;
    box-sizing: border-box;
    height: 40px;
  }

  .mainBtn {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 5px;
    margin-right: 6px;
    position: absolute;
    background: none;
  }
`;

const ContentBox = styled.div`
  max-width: 1044px;
`;

const Community = () => {
  return (
    <CommunityContainer>
      <div className="community-container">
        <MainForm>
          <div className="icon-form">
            <img
              className="community-icon"
              src="img/communityIcon.png"
              alt="아이콘"
            />
            <div className="icon-wrap">리그오브레전드</div>
          </div>

          <SearchForm>
            <input type="text" className="main-input" />
            <button className="mainBtn" type="submit">
              <img className="btnImg" src="img/searchBtn.gif" alt="검색" />
            </button>
          </SearchForm>
        </MainForm>

        <ContentBox>
          <div></div>
          <div>
            <div>전체 글쓰기아이콘</div>
            {/* 밑에 div는 flex로 만들것 */}
            <div>
              <div>글번호</div>
              <div>
                <div>
                  이해하면 소름돋음
                  <div>
                    <a>[142]</a>
                  </div>
                </div>
                6시간전 ㅣ ㅈ망겜ㅇㅈ
              </div>
            </div>
          </div>
        </ContentBox>

        <Footer2 />
      </div>
    </CommunityContainer>
  );
};

export default Community;
