import React, { useState } from "react";
import styled from "styled-components";
import { CommunityWrap } from "./Community";
import Header1 from "../../include/Header1";
import MainForm from "./MainForm";
import Footer2 from "../../include/Footer2";
import { withRouter } from "react-router-dom";
import axios from "axios";

const WriteBox = styled.div`
  text-align: center;
  width: 1044px;

  .article-write {
    background: rgb(255, 255, 255);
    padding: 20px 10px;
  }
  .article-write__title {
    text-align: left;
  }

  .article-write__title {
    color: rgb(30, 32, 34);
    font-weight: 700;
  }
  .article-write-input {
    margin-top: 16px;
  }
  .article-write-header {
    position: static;
    text-align: left;
    padding-bottom: 0px;
    padding-top: 8px;
    background: rgb(255, 255, 255);
  }

  .article-write__text {
    display: block;
    width: 100%;
    background-color: rgb(255, 255, 255);
    line-height: 19px;
    font-size: 16px;
    color: rgb(30, 32, 34);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(221, 223, 228);
    border-image: initial;
    padding: 10px 16px 9px;
  }

  .article-write-content {
    width: 100%;
  }
  .article-write__textarea {
    font-size: 17px;
    padding: 10px;
    width: 99.8%;
    margin-top: 13px;
    border: 1px solid rgb(221, 223, 228);
    color: rgb(30, 32, 34);
    resize: none;
    height: 447px;
  }

  .article-write__button--submit {
    margin-top: 16px;
    position: static;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background-color: #46cfa7;
    width: 154px;
    height: 48px;
    line-height: 19px;
    font-size: 16px;
  }

  .article-write__button--cancel {
    margin-top: 16px;
    line-height: 19px;
    font-size: 16px;
    color: #7b858e;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #dddfe4;
    width: 154px;
    height: 48px;
  }

  .article-write__btn {
    display: flex;
    justify-content: space-between;
  }
`;

const CommunityEdit = ({ history }) => {
  // console.log(1, history.location.state.title);
  // console.log(2, history.location.state.content);

  console.log(7, history);
  const paramTitle = history.location.state.title;
  const paramContent = history.location.state.content;
  const paramPostId = history.location.state.postId;
  const [updateTitle, setUpdateTitle] = useState(paramTitle);
  const [updateContent, setUpdateContent] = useState(paramContent);
  const storageUserId = parseInt(localStorage.getItem("userId"));

  const handleChangeTitle = (e) => {
    setUpdateTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setUpdateContent(e.target.value);
  };

  // 이거 작성완료 누르면 데이터보내고 본진으로 가는것을 구현할 것이다
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        "http://59.20.79.42:58002/post/update",
        {
          id: paramPostId,
          title: updateTitle,
          content: updateContent,
          user: {
            id: storageUserId,
          },
        },
        {
          headers: {
            // Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
        }
      )
      .then((response) => {
        // 이거 먹히나?
        console.log(response.data);
        // setPostId(response.data.data.post.id);

        alert("글 수정이 완료되었습니다");
      })
      .catch((error) => {
        console.log("에러", error.response);
      });

    history.goBack();
  };

  return (
    <div>
      <CommunityWrap>
        <Header1 />
        <div className="communityWrite-conatiner">
          <MainForm />
          <div>
            <WriteBox>
              <div className="content">
                <form onSubmit={handleSubmit}>
                  <div className="article-write">
                    <div className="article-write-header">
                      <div className="article-write__title">글수정</div>
                    </div>
                    <div className="article-write-input">
                      <input
                        onChange={handleChangeTitle}
                        type="text"
                        name="title"
                        value={updateTitle}
                        className="article-write__text"
                        placeholder="제목"
                        autoComplete="off"
                      />
                    </div>
                    <div className="article-write-content">
                      <textarea
                        onChange={handleChangeContent}
                        className="article-write__textarea"
                        value={updateContent}
                      ></textarea>
                    </div>
                    <div className="article-write__btn">
                      <button
                        className="article-write__button article-write__button--cancel"
                        type="button"
                        onClick={() => history.push("/community")}
                      >
                        취소
                      </button>
                      <button
                        className="article-write__button article-write__button--submit"
                        type="submit"
                      >
                        수정완료
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </WriteBox>
          </div>
          <Footer2 />
        </div>
      </CommunityWrap>
    </div>
  );
};

export default withRouter(CommunityEdit);
