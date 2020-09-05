import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import axios from "axios";
import CommunityDetail from "./CommunityDetail";

const CommentWrap = (props) => {
  moment.locale("ko");

  const [reply, setReply] = useState([]);
  const storageUserId = parseInt(localStorage.getItem("userId"));

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
              {moment(reply.createDate).startOf("second").fromNow()}
            </span>
          </div>{" "}
          <div className="comment-content">
            <p>{reply.reply}</p>
          </div>{" "}
          {reply.user.id === storageUserId && (
            <button
              onClick={() => {
                props.deleteReply(reply.id);
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
