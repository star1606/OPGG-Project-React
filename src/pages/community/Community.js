import React, { useState, useEffect } from "react";
import Header1 from "./../../include/Header1";
import Footer2 from "./../../include/Footer2";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainForm from "./MainForm";
import moment from "moment";
import axios from "axios";
import "moment/locale/ko";

export const CommunityWrap = styled.div`
  margin: 0 auto;
  background-color: #5383e8;
  vertical-align: middle;
  justify-content: center;
  max-width: 1044px;

  .community-container {
    text-align: center;
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

  .article-list-author {
    margin-left: 5px;
  }
`;

const Community = () => {
  moment.locale("ko");
  const [communityDtos, setCommunityDtos] = useState([]);
  const [postPage, setPostPage] = useState(0);
  // const [replies, setReplies] = useState([]);
  // setReplies(response.data.data.post.replies);
  //  replies.length

  useEffect(() => {
    axios
      .get("http://59.20.79.42:58002/post/" + postPage)
      .then((response) => {
        setCommunityDtos(response.data.data);

        console.log(1, response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNextPage = () => {
    setPostPage(postPage + 1);

    axios
      .get("http://59.20.79.42:58002/post/" + postPage)
      .then((response) => {
        setCommunityDtos(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // const changePage = async () => {
    //   await axios
    //     .get("http://59.20.79.42:58002/post/" + postPage)
    //     .then((response) => {
    //       setCommunityDtos(response.data.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });

    //   changePage();
    // };
  };
  //    <div>
  //    {communityDtos.map(
  //      (communityDto) =>
  //        communityDto.type === 1 && (
  //          <ul key={communityDto.post.id}>
  //            <li>
  //              <Link to={'/community/' + communityDto.post.id}>
  //                {communityDto.post.title}
  //              </Link>
  //            </li>
  //            <li>
  //              {moment(communityDto.post.createDate)
  //                .startOf('minute')
  //                .fromNow()}
  //            </li>

  //            <li>{communityDto.post.user.nickname}</li>
  //            <hr />
  //          </ul>
  //        ),
  //    )}
  //  </div>

  return (
    <div>
      <CommunityWrap>
        <Header1 />
        <div className="community-container">
          <MainForm />

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
              {/* 여기서 부터 반복 */}
              {communityDtos.map(
                (communityDto) =>
                  communityDto.type === 1 && (
                    <div className="article-box" key={communityDto.post.id}>
                      <div
                        className="article-item"
                        style={{ display: "contents" }}
                      >
                        <div
                          className="article-number"
                          style={{ alignSelf: "center", width: "72px" }}
                        >
                          글 번호
                        </div>
                        <div
                          className="article-list-item__content"
                          style={{ alignSelf: "center" }}
                        >
                          <Link
                            to={"/community/" + communityDto.post.id}
                            style={{ cursor: "pointer" }}
                          >
                            <div
                              className="aritcle-list-item__title"
                              style={{ textAlign: "left" }}
                            >
                              <span className="post-title">
                                {communityDto.post.title}
                              </span>
                              <em
                                style={{
                                  color: "#16ae81",
                                  fontStyle: "normal",
                                }}
                              >
                                [{communityDto.post.replies.length}]
                              </em>
                            </div>
                          </Link>
                          <div className="article-list-item-meta">
                            <div className="article-list-item-meta__item">
                              <span style={{ color: "#98a0a7" }}>
                                {moment(communityDto.post.createDate)
                                  .startOf("minute")
                                  .fromNow()}
                              </span>
                              <span className="article-list-author">
                                {communityDto.post.user.nickname}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}

              <div>
                <div className="article-list-paging">
                  <ul>
                    <li>
                      <button
                        onClick={handleNextPage}
                        className="article-list-paging__button"
                      >
                        다음
                        <img
                          src="img/iconArrowRight.png"
                          alt="다음"
                          style={{
                            width: "24px",
                            height: "24px",
                            verticalAlign: "middle",
                            cursor: "pointer",
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
      </CommunityWrap>
    </div>
  );
};

export default Community;
