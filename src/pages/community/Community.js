import React from "react";
import Header1 from "./../../include/Header1";
import Footer2 from "./../../include/Footer2";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CommunityContainer = styled.div`
  margin: 0 auto;
  background-color: #5383e8;
  vertical-align: middle;
  justify-content: center;
  max-width: 1044px;

  .community-container {
    text-align: center;
  }
`;

const MainForm = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  .icon-form {
    margin-left: 30px;
    justify-content: flex-start;
    margin-top: 28px;

    align-items: center;
  }
  .icon-text {
    display: inline-block;
    vertical-align: middle;
    line-height: 39px;
    margin-bottom: 46px;
    margin-left: 8px;
    font-size: 32px;
    color: #fff;
    font-weight: bold;
  }
`;

const SearchForm = styled.form`
  position: relative;
  justify-content: flex-end;
  .main-input {
    border-radius: 2px;
    background: #fff;
    border: none;
    width: 268px;
    line-height: 17px;
    font-size: 14px;
    padding: 12px 62px 11px 12px;
    box-sizing: border-box;
    height: 40px;
    margin-right: 8px;
  }

  .mainBtn {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 5px;
    margin-right: 15px;
    position: absolute;
    background: none;
  }
`;

const ContentBox = styled.div`
  max-width: 1044px;

  .content-header {
    position: relative;
    margin-bottom: 8px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  }
  .content-header-wrap {
    display: flex;
    padding-top: 18px;
    padding-bottom: 0px;
    justify-content: space-between;
  }

  .header-text {
    padding-left: 16px;
    line-height: 21px;
    font-size: 18px;
    color: #1e2022;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .article-box {
    display: flex;
    margin-top: 0;
    border-top: 1px solid #ebeef1;
    background: #ffffff;

    line-height: 18px;
    font-size: 14px;
    color: #7b858e;
    min-height: 76px;
  }

  .article-list-item:first-child {
    border-top: none;

    .article-list-item__content {
      vertical-align: middle;
    }

    .article-list-item__title {
      display: flex;
      overflow: auto;
      vertical-align: top;
      line-height: 15px;
      font-size: 14px;
      color: #1e2022;
      word-break: break-all;
    }
    .article-item {
      display: flex;
      border-top: 1px solid #ebeef1;
      background-color: #fff;
    }
    .article-list-item__title .post-title {
      display: block;
      max-width: 80%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .article-number {
      vertical-align: middle;
      margin-top: 5px;
      line-height: 17px;
      font-size: 14px;
      color: #7b858e;
    }
  }

  .post-title {
    color: black;
    padding-right: 5px;
  }

  .article-list-item-meta {
    display: flex;
    justify-content: space-between;
  }

  .article-list-author {
    display: inline-block;
    line-height: 18px;
    font-size: 14px;
    color: #98a0a7;
    padding-left: 8px;
  }

  .sub-search-wrap {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 6px;
    margin-bottom: 6px;
  }

  .sub-header-search__select {
    float: left;
    width: 122px;
    padding: 9px 0 8px 15px;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    border: 1px solid #ebeef1;
    /* background: #fff; */
    border-radius: 4px 0 0 4px;
    line-height: 17px;
    font-size: 14px;
    color: #98a0a7;
    background-image: url("/img/iconDropdown.png");
    background-size: 24px;
    background-position: top 5px right 5px;
    background-repeat: no-repeat;
    /* -webkit-appearance: none; */
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }

  .sub-header-search__input {
    float: left;
    border: none;
    width: 200px;
    /* -webkit-box-sizing: border-box; */
    box-sizing: border-box;
    padding: 10px 32px 9px 16px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #ebeef1;
    line-height: 17px;
    font-size: 14px;
  }

  .sub-header-search__button {
    float: left;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 6px;
    margin-right: 8px;
  }

  .sub-header-search__img {
    width: 24px;
    height: 24px;
  }

  .article-list-paging {
    height: 64px;
    background: #f8f9fa;
  }

  .article-list-paging__button {
    line-height: 17px;
    font-size: 14px;
    color: #7b858e;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #dddfe4;
    width: 77px;
    height: 40px;
    margin-top: 12px;
  }
`;

const Community = () => {
  return (
    <div>
      <CommunityContainer>
        <div className="community-container">
          <MainForm>
            <div className="icon-form">
              <img
                className="community-icon"
                src="img/communityIcon.png"
                alt="아이콘"
              />
              <div className="icon-text">리그오브레전드</div>
            </div>

            <SearchForm>
              <input type="text" className="main-input" />
              <button className="mainBtn" type="submit">
                <img className="btnImg" src="img/searchBtn.gif" alt="검색" />
              </button>
            </SearchForm>
          </MainForm>

          <ContentBox>
            <div className="content-header">
              <div className="content-header-wrap">
                <h2 className="header-text">게시글</h2>
                <div style={{ marginRight: "24px" }}>
                  <Link to="/posts/write/:id">
                    <img
                      src="img/iconWrite.png"
                      style={{ width: "24px" }}
                      alt="글쓰기"
                    />
                  </Link>
                </div>
              </div>

              <div
                className="content-header-sub"
                style={{ height: "48px", position: "relative" }}
              >
                <div className="sub-search-wrap">
                  <form className="sub-search">
                    <select className="sub-header-search__select">
                      <option>제목</option>
                      <option>작성자</option>
                    </select>
                    <input
                      tpye="text"
                      className="sub-header-search__input"
                      placeholder="검색"
                    />
                    <button className="sub-header-search__button">
                      <img
                        className="sub-header-search__img"
                        src="img/iconSearch.png"
                        alt="검색"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* 밑에 div는 flex로 만들것 */}
            <div className="article-list">
              <div className="article-box">
                <div className="article-item" style={{ display: "contents" }}>
                  <div
                    className="article-number"
                    style={{ alignSelf: "center", width: "72px" }}
                  >
                    1234
                  </div>
                  <div
                    className="article-list-item__content"
                    style={{ alignSelf: "center" }}
                  >
                    <Link to="/posts/:id" style={{ cursor: "pointer" }}>
                      <div className="aritcle-list-item__title">
                        <span className="post-title">이해하면 소름돋음</span>
                        <em style={{ color: "#16ae81", fontStyle: "normal" }}>
                          [142]
                        </em>
                      </div>
                    </Link>
                    <div className="article-list-item-meta">
                      <div className="article-list-item-meta__item">
                        <span style={{ color: "#98a0a7" }}>6시간 전</span>
                      </div>
                      <div className="article-list-author">ㅈ망겜ㅇㅈ</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="article-box">
                <div className="article-item" style={{ display: "contents" }}>
                  <div
                    className="article-number"
                    style={{ alignSelf: "center", width: "72px" }}
                  >
                    1234
                  </div>
                  <div
                    className="article-list-item__content"
                    style={{ alignSelf: "center" }}
                  >
                    <Link to="/posts/:id" style={{ cursor: "pointer" }}>
                      <div className="aritcle-list-item__title">
                        <span className="post-title">이해하면 소름돋음</span>
                        <em style={{ color: "#16ae81", fontStyle: "normal" }}>
                          [142]
                        </em>
                      </div>
                    </Link>
                    <div className="article-list-item-meta">
                      <div className="article-list-item-meta__item">
                        <span style={{ color: "#98a0a7" }}>6시간 전</span>
                      </div>
                      <div className="article-list-author">ㅈ망겜ㅇㅈ</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="article-box">
                <div className="article-item" style={{ display: "contents" }}>
                  <div
                    className="article-number"
                    style={{ alignSelf: "center", width: "72px" }}
                  >
                    1234
                  </div>
                  <div
                    className="article-list-item__content"
                    style={{ alignSelf: "center" }}
                  >
                    <Link to="/posts/:id" style={{ cursor: "pointer" }}>
                      <div className="aritcle-list-item__title">
                        <span className="post-title">이해하면 소름돋음</span>
                        <em style={{ color: "#16ae81", fontStyle: "normal" }}>
                          [142]
                        </em>
                      </div>
                    </Link>
                    <div className="article-list-item-meta">
                      <div className="article-list-item-meta__item">
                        <span style={{ color: "#98a0a7" }}>6시간 전</span>
                      </div>
                      <div className="article-list-author">ㅈ망겜ㅇㅈ</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="article-box">
                <div className="article-item" style={{ display: "contents" }}>
                  <div
                    className="article-number"
                    style={{ alignSelf: "center", width: "72px" }}
                  >
                    1234
                  </div>
                  <div
                    className="article-list-item__content"
                    style={{ alignSelf: "center" }}
                  >
                    <Link to="/posts/:id" style={{ cursor: "pointer" }}>
                      <div className="aritcle-list-item__title">
                        <span className="post-title">이해하면 소름돋음</span>
                        <em style={{ color: "#16ae81", fontStyle: "normal" }}>
                          [142]
                        </em>
                      </div>
                    </Link>
                    <div className="article-list-item-meta">
                      <div className="article-list-item-meta__item">
                        <span style={{ color: "#98a0a7" }}>6시간 전</span>
                      </div>
                      <div className="article-list-author">ㅈ망겜ㅇㅈ</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="article-box">
                <div className="article-item" style={{ display: "contents" }}>
                  <div
                    className="article-number"
                    style={{ alignSelf: "center", width: "72px" }}
                  >
                    1234
                  </div>
                  <div
                    className="article-list-item__content"
                    style={{ alignSelf: "center" }}
                  >
                    <Link to="/posts/:id" style={{ cursor: "pointer" }}>
                      <div className="aritcle-list-item__title">
                        <span className="post-title">이해하면 소름돋음</span>
                        <em style={{ color: "#16ae81", fontStyle: "normal" }}>
                          [142]
                        </em>
                      </div>
                    </Link>
                    <div className="article-list-item-meta">
                      <div className="article-list-item-meta__item">
                        <span style={{ color: "#98a0a7" }}>6시간 전</span>
                      </div>
                      <div className="article-list-author">ㅈ망겜ㅇㅈ</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="article-box">
                <div className="article-item" style={{ display: "contents" }}>
                  <div
                    className="article-number"
                    style={{ alignSelf: "center", width: "72px" }}
                  >
                    1234
                  </div>
                  <div
                    className="article-list-item__content"
                    style={{ alignSelf: "center" }}
                  >
                    <Link to="/posts/:id" style={{ cursor: "pointer" }}>
                      <div className="aritcle-list-item__title">
                        <span className="post-title">이해하면 소름돋음</span>
                        <em style={{ color: "#16ae81", fontStyle: "normal" }}>
                          [142]
                        </em>
                      </div>
                    </Link>
                    <div className="article-list-item-meta">
                      <div className="article-list-item-meta__item">
                        <span style={{ color: "#98a0a7" }}>6시간 전</span>
                      </div>
                      <div className="article-list-author">ㅈ망겜ㅇㅈ</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="article-box">
                <div className="article-item" style={{ display: "contents" }}>
                  <div
                    className="article-number"
                    style={{ alignSelf: "center", width: "72px" }}
                  >
                    1234
                  </div>
                  <div
                    className="article-list-item__content"
                    style={{ alignSelf: "center" }}
                  >
                    <Link to="/posts/:id" style={{ cursor: "pointer" }}>
                      <div className="aritcle-list-item__title">
                        <span className="post-title">이해하면 소름돋음</span>
                        <em style={{ color: "#16ae81", fontStyle: "normal" }}>
                          [142]
                        </em>
                      </div>
                    </Link>
                    <div className="article-list-item-meta">
                      <div className="article-list-item-meta__item">
                        <span style={{ color: "#98a0a7" }}>6시간 전</span>
                      </div>
                      <div className="article-list-author">ㅈ망겜ㅇㅈ</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="article-list-paging">
                  <ul>
                    <li>
                      <button className="article-list-paging__button">
                        다음
                        <img
                          src="img/iconArrowRight.png"
                          alt="다음"
                          style={{
                            width: "24px",
                            height: "24px",
                            verticalAlign: "middle",
                          }}
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Footer2 />
          </ContentBox>
        </div>
      </CommunityContainer>
    </div>
  );
};

export default Community;
