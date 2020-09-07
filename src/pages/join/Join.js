import React, { useState } from "react";
import Footer2 from "./../../include/Footer2";
import "./join.css";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Join = ({ history }) => {
  //화면 전체
  // 만약에 더 바꾸고 싶으면 styled-compoenet로 hover구현해보자 색깔바뀌는거
  const [form, setForm] = useState({
    email: "",
    nickname: "",
    password: "",
  });

  const cancelHome = () => {
    history.push("/login");
  };

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
        "http://59.20.79.42:58002/join",

        form,
        {
          headers: {
            // Accept: 'application/json',
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        //     alert('아이디가 중복되었습니다.');
        // } else if (result == 0) { // === 3개는 타입까지 비교 == 값만비교
        // 	alert('사용하실 수 있는 아이디입니다.');
        alert(response.data.message);
        // join할 때는 jwt 토큰 받을 필요 없다.

        alert("회원가입이 완료되었습니다.");
        history.push("/home");
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
            <Link to={"/home"}>
              <img src="./img/opggJoin.png" alt="opgg" />
            </Link>
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
                  autoComplete="off"
                  name="email"
                  placeholder="이메일 주소"
                />
              </div>

              <div className="member-input__state">
                <input
                  onChange={hanleOnChange}
                  className="member-input__box"
                  type="text"
                  autoComplete="off"
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
                  autoComplete="off"
                  name="password"
                  placeholder="비밀번호"
                />
              </div>

              <div className="sign-up__l-btn">
                <button
                  onClick={cancelHome}
                  type="button"
                  className="cancelBtn"
                >
                  취소
                </button>
                <button type="submit" className="sumbitBtn">
                  가입하기
                </button>
              </div>
            </form>
          </div>
          <br />
          <br />
          <div className="sign-up__go-to-login">
            이미 회원이신가요?
            <Link
              to={"/login"}
              href=""
              type="button"
              className="sign-up__go-to-login-btn"
              alt="ff"
            >
              로그인하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// <h1>Create new account</h1>
// <form action="/newaccount" method=post
//       oninput='up2.setCustomValidity(up2.value != up.value ? "Passwords do not match." : "")'>
//   <p>
//   <label for="username">E-mail address:</label>
//   <input id="username" type=email required name=un>
//   <p>
//   <label for="password1">Password:</label>
//   <input id="password1" type=password required name=up>
//   <p>
//   <label for="password2">Confirm password:</label>
//   <input id="password2" type=password name=up2>
//   <p>
//   <input type=submit value="Create account">
// </form>

export default withRouter(Join);
