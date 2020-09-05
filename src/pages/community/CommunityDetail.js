import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { CommunityWrap } from "./Community";
import Header1 from "../../include/Header1";
import Footer2 from "../../include/Footer2";
import MainForm from "./MainForm";
import CommentWrap from "./CommentWrap";
import moment from "moment";
import "moment/locale/ko";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";

const CommunityContentBox = styled.div`
  max-width: 1044px;
  text-align: left;

  .article {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  }

  .comment-wrap {
    padding: 10px;
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
    /* padding: 20px 15px 12px 64px; */
    padding: 10px;
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
    font-size: 15px;
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

const CommunityDetail = ({ match, history }) => {
  //responseDto

  // const [post, setPost] = useState('');
  // post의 id
  const [dto, setDto] = useState([
    {
      type: 1,
      post: {
        id: 0,
        title: "",
        content: "",
        likeCount: 0,
        viewCount: 0,
        user: {
          id: 0,
          username: "",
          nickname: "",
          email: "",
          roles: "",
          providerId: "",
          provider: "",
          createDate: "",
        },
        replies: [],
        createDate: "",
      },
    },
    {
      type: 2,
      post: null,
    },
  ]);
  const [replies, setReplies] = useState([]);
  const [resp, setResp] = useState({});

  const [postUserId, setPostUserId] = useState(0);
  // post 좋아요

  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postCreateDate, setPostCreateDate] = useState("");
  const [postUserNickname, setPostUserNickname] = useState("");
  const [postLikeCount, setPostLikeCount] = useState(0);
  const [postViewCount, setPostViewCount] = useState(0);
  const [post, setPost] = useState({});

  //replies map리스트뿌리기

  // reply 작성 value

  const [replyUserId, setReplyUserId] = useState("");
  const [repliesCreateDate, setRepliesCreateDate] = useState("");
  const storageUserId = parseInt(localStorage.getItem("userId"));

  let postId = match.params.id;

  useEffect(() => {
    const enterPage = async () => {
      moment.locale("ko");

      if (
        localStorage.getItem("updateView") === null ||
        localStorage.getItem("updateView").indexOf(postId) === -1
      ) {
        await axios
          .put(
            "http://59.20.79.42:58002/post/update/view/" + postId,
            {},
            {
              headers: {
                // Accept: 'application/json',
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwtToken"),
              },
            }
          )
          .then((response1) => {
            // response.data.data.post.id
            console.log("여기로옴");
            if (localStorage.getItem("updateView") == null) {
              localStorage.setItem("updateView", postId);
            } else {
              localStorage.setItem(
                "updateView",
                localStorage.getItem("updateView") + "," + postId
              );
            }
            console.log(11, postViewCount);
          })
          .catch((error) => {
            console.log(8, error.response);
          });
      }

      await axios
        .get("http://59.20.79.42:58002/post/detail/" + postId)
        .then((response) => {
          if (response.data.statusCode === 400) {
            alert("해당 글이 없습니다.");
            history.push("/community");
          }

          console.log(11, response.data);
          setResp(response.data);
          setPostUserId(response.data.data.post.user.id);
          // 배열 설정해야하는지 확인
          // setDto([response.data.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    enterPage();
  }, []);

  //update/view/1

  //삭제 버튼
  const deletePost = () => {
    axios
      .delete(
        "http://59.20.79.42:58002/post/delete/" + postId,
        // data넣는자리, headers를 넣으면 안됨
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        history.pushState("/community");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  //update/like/1
  const addLike = () => {
    // if (localStorage.getItem('updateLike') !== null) {
    //   const storageUpdateLike = localStorage.getItem('updateLike').split(',');
    //   console.log(storageUpdateLike);
    //   for (let i = 0, len = storageUpdateLike.length; i < len; i++) {
    //     let key = localStorage.key(i);
    //     let value = localStorage[key];
    //     if (value !== null) {
    //       return;
    //     }
    //   }
    // }

    if (localStorage.getItem("updateLike") !== null) {
      const storageUpdateLike = localStorage.getItem("updateLike");

      if (storageUpdateLike.indexOf(postId) !== -1) {
        // 0으로 나옴console.log(111, storageUpdateLike.indexOf(postId));
        return;
      }
    }

    axios
      .put(
        "http://59.20.79.42:58002/post/update/like/" + postId,
        {},
        {
          headers: {
            // Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
        }
      )
      .then((response) => {
        // response.data.data.post.id

        if (localStorage.getItem("updateLike") === null) {
          localStorage.setItem("updateLike", response.data.data.post.id);
        } else {
          localStorage.setItem(
            "updateLike",
            localStorage.getItem("updateLike") +
              "," +
              response.data.data.post.id
          );
        }
        setPost(response.data.data.post.likeCount);
        console.log("likeCount", post.likeCount);
        // setPostLikeCount(response.data.data.post.likeCount);
        // console.log("postLikeCount", postLikeCount);
      })
      .catch((error) => {
        console.log(9, error.response);
      });
  };

  // reply 추가, 삭제 로직 구현
  // reply 추가 로직
  const addReply = (reply) => {
    axios
      .post(
        "http://59.20.79.42:58002/reply/writeProc/",
        {
          reply: reply,
          post: {
            id: postId,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
        }
      )
      .then((response) => {
        console.log("replyresponse1", response);
        console.log("replyresponse2", response.data);

        axios
          .get("http://59.20.79.42:58002/post/detail/" + postId)
          .then((response) => {
            console.log(99, response.data.data.post);
            // let newReplies = [...response.data.data.post.replies, reply];
            // setResp(newReplies);

            setResp(response.data);
          });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const deleteReply = (id) => {
    // if (user.post.replise.reply.id !== id) {
    //   alert('삭제 못함');
    //   return;
    // }
    console.log(id);
    axios
      .delete("http://59.20.79.42:58002/reply/delete/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      })
      .then((response) => {
        axios
          .get("http://59.20.79.42:58002/post/detail/" + postId)
          .then((response) => {
            console.log(100, response);
            setReplies(response.data.data.post.replies);
            // let repliesObject = replies.filter((reply) => {
            //   return reply.id !== id;
            // });
            // setData(responseData);

            // console.log(2, response.data.data.post);
          });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <CommunityWrap>
        <Header1 />

        <div className="community-container">
          <MainForm />
          <CommunityContentBox>
            {resp.statusCode == 201
              ? resp.data.type == 1 && (
                  <div key={resp.data.post.id}>
                    <div className="article">
                      <div className="article-header">
                        <div className="article__title">
                          {resp.data.post.title}
                        </div>
                        <div className="article-meta">
                          <div className="article-meta-list">
                            <div className="article-meta__item">
                              <span>
                                {moment(resp.data.post.createDate)
                                  .startOf("minute")
                                  .fromNow()}
                              </span>
                            </div>
                            <div className="article-meta__item article-meta__item--name">
                              <a
                                href="https://talk.op.gg/s/lol/all?q=1190583&amp;target=user_id"
                                style={{ color: "black" }}
                              >
                                {resp.data.post.user.nickname}
                              </a>
                            </div>
                          </div>
                          <div className="article-meta-list article-meta-list--right">
                            <div className="article-meta__item">
                              <span>조회 {resp.data.post.viewCount}</span>
                            </div>
                            <div className="article-meta__item">
                              <span>댓글 {resp.data.post.replies.length}</span>
                            </div>
                            <div className="article-meta__item">
                              <span>추천 {resp.data.post.likeCount}</span>
                            </div>
                          </div>
                        </div>

                        {postUserId === storageUserId && (
                          <div className="article-action">
                            <div className="article-action__item">
                              <button
                                onClick={deletePost}
                                className="article-action__button button button--red button--red--border"
                              >
                                삭제
                              </button>
                            </div>
                            <div className="article-action__item">
                              <Link
                                to={{
                                  pathname: "/edit",
                                  state: {
                                    postId: resp.data.post.id,
                                    title: resp.data.post.title,
                                    content: resp.data.post.content,
                                  },
                                }}
                                className="article-action__button__button"
                              >
                                수정
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="article-content-wrap">
                        <div className="article-content">
                          <p>{resp.data.post.content}</p>
                        </div>
                      </div>
                      <div className="article-box">
                        <div className="postVote">
                          <button
                            type="submit"
                            className="article-vote__button"
                          >
                            <span className="article-vote__up-arrow">추천</span>
                            <span className="article-vote__up-count">
                              {resp.data.post.likeCount}
                            </span>
                          </button>
                        </div>
                      </div>
                      <CommentWrap
                        deleteReply={deleteReply}
                        addReply={addReply}
                        replies={resp.data.post.replies}
                        post={resp.data.post}
                      />
                      {/* {detailDto.post.replies.map((reply, k) => (
                      <CommentWrap replies={detailDto.post.replies} />
                    ))} */}
                    </div>
                  </div>
                )
              : ""}

            <Footer2 />
          </CommunityContentBox>
        </div>
      </CommunityWrap>
    </div>
  );
};

export default withRouter(CommunityDetail);
