import React, { useState } from "react";
import Footer2 from "./../../include/Footer2";
import "./join.css";
import axios from "axios";
const Join = () => {
  //화면 전체
  // 만약에 더 바꾸고 싶으면 styled-compoenet로 hover구현해보자 색깔바뀌는거
  const [form, setForm] = useState({
    username: "",
    nickname: "",
    password: "",
  });

  const hanleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post(
        "http://59.20.79.42:58002/test/join",

        form,
        {
          headers: {
            // Accept: 'application/json',
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="join-container">
      <div className="join-box">
        <div className="join-box-inner">
          <div className="register-header">
            <img src="./img/opggJoin.png" />
          </div>
          <h2 className="top-text">기본정보 입력</h2>
          <div className="sign-up__sub">
            회원가입을 위해서 이메일 인증이 진행되며, 인증이 완료되기 전까지
            회원가입이 완료가 되지 않습니다.
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="member-input__state">
                <input
                  onChange={hanleOnChange}
                  className="member-input__box"
                  type="text"
                  autocomplete="off"
                  name="username"
                  placeholder="이메일 주소"
                />
              </div>

              <div className="member-input__state">
                <input
                  onChange={hanleOnChange}
                  className="member-input__box"
                  type="text"
                  autocomplete="off"
                  name="nickname"
                  placeholder="닉네임"
                />
              </div>
              <div className="sign-up__input-nickname-message">
                개인정보를 기입하여 발생될 수 있는 피해는 OP.GG가 일절 책임지지
                않습니다.
              </div>
              <div className="member-input__state">
                <input
                  onChange={hanleOnChange}
                  className="member-input__box"
                  type="password"
                  autocomplete="off"
                  name="password"
                  placeholder="비밀번호"
                />
              </div>

              <div className="sign-up__l-btn">
                <button
                  type="button"
                  className="member-button cancel-button sign-up__btn-cancel"
                >
                  취소
                </button>
                <button type="submit" className="member-button sign-up__btn">
                  가입하기
                </button>
              </div>
            </form>
          </div>
          <br />
          <br />
          <div className="sign-up__go-to-login">
            이미 회원이신가요?
            <a
              href=""
              type="button"
              className="sign-up__go-to-login-btn"
              alt="ff"
            >
              로그인하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
