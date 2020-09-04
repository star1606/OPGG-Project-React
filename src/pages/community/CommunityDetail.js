import React from "react";
import styled from "styled-components";
import { CommunityWrap } from "./Community";
import Header1 from "../../include/Header1";
import Footer2 from "../../include/Footer2";
import MainForm from "./MainForm";
import CommentWrap from "./CommentWrap";
import moment from "moment";
import "moment/locale/ko";
import { Link } from "react-router-dom";

const CommunityContentBox = styled.div`
  max-width: 1044px;
  .article {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  }
  .article-header {
    padding-left: 24px;
    padding-right: 24px;
    padding: 24px 16px;
    border-bottom: 1px solid #ebeef1;
  }

  .article__title {
    text-align: left;
    line-height: 36px;
    font-size: 24px;
    /* color: #1e2022; */
    word-wrap: break-word;
    word-break: break-all;
    overflow: auto;
  }
  .article-meta {
    margin-top: 9px;
    line-height: 17px;
    font-size: 14px;
    color: #7b858e;
  }

  .article-meta-list {
    float: left;
    margin-top: 0;
  }

  .article-meta__item {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    margin-left: 8px;
    padding-left: 9px;
  }

  .article-meta-list--right {
    float: right;
  }

  .article-content-wrap {
    overflow: auto;
  }

  .article-content {
    padding-right: 24px;
    padding-left: 24px;
    padding: 24px 16px;
  }

  .article-content p {
    margin: 10px 0;
    color: #555;
  }

  .article-box {
    border-top: 1px solid #ebeef1;
    border-bottom: 1px solid #ebeef1;
    text-align: center;
  }
  .article-vote__button {
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #dddfe4;

    width: 88px;
    line-height: 17px;
    font-size: 14px;
    height: 43px;

    color: #1e2022;
  }

  /*화살표 이미지*/
  .article-vote__up-arrow {
    width: 16px;
    height: 16px;
    background-image: url("/img/iconVoteUp.png");
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 16px;
    line-height: 999px;
    vertical-align: top;
    overflow: hidden;
    display: inline-block;
    margin-top: 1px;
    transition: all 0.5s;
  }
  /*추천 숫자*/
  .article-vote__up-count {
    transition: all 0.3s;
    display: inline-block;
  }
  .postVote {
    padding: 12px 0;
  }

  .comment-wrap {
    margin-bottom: 8px;
    background-color: #f8fafa;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  }
  .comment {
    position: relative;
    padding: 20px 15px 12px 64px;
  }

  .comment-meta {
    line-height: 17px;
    font-size: 14px;
    color: #7b858e;
  }
  .comment-vote {
    position: absolute;
    left: 0;
    top: 36px;
    width: 64px;
    text-align: center;
  }
  .comment__date {
    margin-left: 19px;
  }
  .comment__name {
    font-weight: 700;
    color: #1e2022;
  }
  .comment-content {
    line-height: 20px;
    font-size: 14px;
    color: #1e2022;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .article-action {
    margin-top: 16px;
  }

  .article-action__item:first-child {
    margin-left: 0;
  }

  .article-action__item {
    display: inline-block;
    vertical-align: middle;
    /* margin-left: 8px; */
  }

  button,
  input {
    margin: 0;
    font-size: 14px;
    outline: 0;
    border: 1px solid #dddfe4;
    border-radius: 4px;
  }
  .article-action__button {
    line-height: 15px;
    font-size: 12px;
    padding: 8px 15px 7px;
  }
  .button--red--border {
    border-color: #f95b54;
    background: #fff;
    color: #f95b54;
    margin-right: 5px;
  }

  .article-action__button__button {
    border: 1px solid #dddfe4;
    /* border-radius: 4px; */
    /* line-height: 15px; */
    /* font-size: 12px; */
    /* padding: 8px 15px 7px; */
    border-radius: 4px;
    line-height: 15px;
    font-size: 12px;
    padding: 10px 15px 7px;
    color: black;
    box-sizing: border-box;
  }

  .article-meta {
    margin-bottom: 47px;
  }
`;

const CommunityDetail = () => {
  return (
    <div>
      <CommunityWrap>
        <Header1 />

        <div classNameName="community-container">
          <MainForm />
          <CommunityContentBox>
            <div className="article">
              <div className="article-header">
                <div className="article__title">이해하면 소름돋음</div>
                <div className="article-meta">
                  <div className="article-meta-list">
                    <div className="article-meta__item">
                      <span>6 시간 전</span>
                    </div>
                    <div className="article-meta__item article-meta__item--name">
                      <a
                        href="https://talk.op.gg/s/lol/all?q=1190583&amp;target=user_id"
                        style={{ color: "black" }}
                      >
                        ㅈ망겜ㅇㅈ
                      </a>
                    </div>
                  </div>
                  <div className="article-meta-list article-meta-list--right">
                    <div className="article-meta__item">
                      <span>조회 42,477</span>
                    </div>
                    <div className="article-meta__item">
                      <span>댓글 148</span>
                    </div>
                    <div className="article-meta__item">
                      <span>추천 1,729</span>
                    </div>
                  </div>
                </div>

                <div className="article-action">
                  <div className="article-action__item">
                    <form
                      action="https://talk.op.gg/api/posts/2883325"
                      method="post"
                      onSubmit="return confirm('글을 삭제하시겠습니까?')"
                    >
                      <input type="hidden" name="_method" value="delete" />{" "}
                      <input
                        type="hidden"
                        name="_token"
                        value="P3hA0HqAar9BxcfXgIQUiFpVE9NkdLB6ErnCNdWv"
                      />{" "}
                      <button className="article-action__button button button--red button--red--border">
                        삭제
                      </button>
                    </form>
                  </div>
                  <div className="article-action__item">
                    <Link to="/edit" className="article-action__button__button">
                      수정
                    </Link>
                  </div>
                </div>
              </div>
              <div className="article-content-wrap">
                <div className="article-content">
                  <p>
                    메인 화면에 저거 대포 저번에 커뮤니티에서 파란 대포가 더
                    쌔다면서 했던거 아님? ㄹㅇ 옵지 자주 보시나 보네 ㄷㄷ
                  </p>
                </div>
              </div>
              <div className="article-box">
                <div className="postVote">
                  <button type="submit" className="article-vote__button">
                    <span className="article-vote__up-arrow">추천</span>
                    <span className="article-vote__up-count">1419</span>
                  </button>
                </div>
              </div>
              <CommentWrap />
              <CommentWrap />
              <CommentWrap />
              <CommentWrap />
              <CommentWrap />
            </div>

            <Footer2 />
          </CommunityContentBox>
        </div>
      </CommunityWrap>
    </div>
  );
};

export default CommunityDetail;
