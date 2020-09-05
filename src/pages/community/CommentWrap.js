import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import axios from "axios";
import CommunityDetail from "./CommunityDetail";

const CommentWrap = (props) => {
  moment.locale("ko");

  const [resp, setResp] = useState([
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
    ,
  ]);
  const [dto, setDto] = useState([]);

  const [replies, setReplies] = useState([props.replies]);
  const [reply, setReply] = useState([]);
  const storageUserId = parseInt(localStorage.getItem("userId"));
  const postId = props.post.id;

  // 리플 input 감시
  const replyOnChange = (e) => {
    setReply(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("add", props);
    props.addReply(reply);
    setReply("");
  };

  // 리플 삭제 구현

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
    <div className="comment">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            id="input1"
            type="text"
            onChange={replyOnChange}
            value={reply}
            className="text"
            placeholder="댓글작성하시오"
          />
          <button type="submit">댓글 추가 버튼</button>
        </form>
      </div>

      {props.replies.map((reply) => (
        <div key={reply.id} className="comment-wrap">
          <div data-v-0e41a35e="" className="comment-meta">
            <span
              data-v-0e41a35e=""
              className="comment__name"
              style={{ color: "black" }}
            >
              {" "}
              {reply.user.nickname}
            </span>
            <span className="comment__date">
              {moment(reply.createDate).startOf("minute").fromNow()}
            </span>
          </div>{" "}
          <div className="comment-content">
            <p>{reply.reply}</p>
          </div>{" "}
          {reply.user.id === storageUserId && (
            <button
              onClick={() => {
                deleteReply(reply.id);
              }}
            >
              댓글 삭제버튼
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentWrap;
