import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";

import GoogleLogin from "react-google-login";
import styled from "styled-components";

const GooleLoginBox = styled.div`
  .googleBtn {
    text-align: center;
    width: 100%;
    justify-content: center;
    height: 56px;
  }
  span {
    font-size: 16px;
  }
`;

const LoginContent = ({ history }) => {
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };

  const responseGoogle = async (response) => {
    console.log(1, response);
    console.log(5, response.googleId);

    console.log(3, response.profileObj.name);
    console.log(4, response.profileObj.email);

    const googleData = {
      googleId: response.profileObj.googleId,
      email: response.profileObj.email,
      name: response.profileObj.name,
    };

    let jwtToken = await axios.post(
      "http://59.20.79.42:58002/jwt/oauth",
      JSON.stringify(googleData),
      config
    );
    if (jwtToken.status === 200) {
      console.log(0, jwtToken.data);

      localStorage.setItem("userId", jwtToken.data.data.userId);
      localStorage.setItem("nickname", jwtToken.data.data.nickname);
      localStorage.setItem("jwtToken", jwtToken.data.data.jwtToken);
      history.push("/home");
    }
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(form);

    axios
      .post(
        "http://59.20.79.42:58002/jwt/common",

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
        localStorage.setItem("jwtToken", response.data.data.jwtToken);
        localStorage.setItem("userId", response.data.data.userId);
        localStorage.setItem("nickname", response.data.data.nickname);

        history.push("/home");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="app">
      <div className="member-card-layout">
        {/* <!-- 흰색 박스 --> */}
        <div className="member-card-layout__container">
          {/* <!-- 컨테이너 안 div --> */}
          <div className="member-card-layout__inner">
            {/* <!-- 로고 div --> */}
            <Link to={"/home"}>
              <h1 className="member-card-layout__logo">
                <img
                  className="member-card-layout__logo-image"
                  src="/img/opggLogo.png"
                  alt="op.gg"
                />
              </h1>
            </Link>
            <div className="login">
              <h2 className="login__fb-title">간편 로그인</h2>

              {/* <LoginBtn /> */}

              <div>
                {/* <!-- 페이스북 로그인 --> */}
                <button
                  className="member-button facebook-button login__fb-btn"
                  // onClick={() => history.push("/a")}
                >
                  <span className="facebook-button__inner">
                    <img
                      src="https://member.op.gg/icon_facebook_wh.6ab689d7.svg"
                      className="facebook-button__img"
                      width="24"
                      height="24"
                      alt="facebook"
                    />
                    <span className="facebook-button__txt">
                      페이스북으로 로그인
                    </span>
                  </span>
                </button>
                {/* <!-- apple로그인 --> */}
                <GooleLoginBox>
                  <GoogleLogin
                    clientId="1038460159897-8nk592uqfjq3be23dkrah4d3t3clmg66.apps.googleusercontent.com"
                    buttonText="Google로 로그인"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    className="googleBtn"
                  />
                </GooleLoginBox>
              </div>

              {/* <!-- apple 로그인 밑  ㅡorㅡ --> */}
              <div className="login__l-or">OR</div>
              <form onSubmit={onSubmit}>
                <h2 className="login__email-title">이메일 로그인</h2>
                <div className="member-input">
                  <div className="member-input__state">
                    {/* <!-- 이메일 input 박스 --> */}
                    <input
                      id="memberInput6908"
                      className="member-input__box"
                      type="text"
                      autoComplete="off"
                      name="email"
                      placeholder="이메일 주소"
                      onChange={onChangeForm}
                    />
                    <span className="member-input__valid-wrapper"></span>
                  </div>
                </div>

                <div className="member-input">
                  <div className="member-input__state">
                    {/* <!-- 비밀번호 input 박스 --> */}
                    <input
                      id="memberInput3108"
                      className="member-input__box"
                      type="password"
                      autoComplete="off"
                      name="password"
                      onChange={onChangeForm}
                      placeholder="비밀번호"
                    />
                    <span className="member-input__valid-wrapper"></span>
                  </div>
                  {/* <!-- 로그인 상태유지 checkbox --> */}
                </div>
                <div className="login__l">
                  <div className="login__checkbox" id="login__checkbox">
                    <div className="member-checkbox">
                      <span className="member-checkbox__state">
                        <input
                          id="memberCheckbox6943"
                          type="checkbox"
                          className="member-checkbox__input"
                        />
                      </span>
                      <label className="member-checkbox__label">
                        로그인 상태 유지하기
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="member-button login__btn">
                  로그인
                </button>
                <div className="login__l-sign-up">
                  OP.GG에 처음이세요?
                  <span className="login__sign-up-link">
                    <Link className="member-link" to="/join">
                      회원가입하기
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginContent);
