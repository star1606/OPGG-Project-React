import React from "react";
import LoginBtn from "./LoginBtn";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  return (
    <div className="login-container">
      <div className="app">
        <div className="member-card-layout">
          {/* <!-- 흰색 박스 --> */}
          <div className="member-card-layout__container">
            {/* <!-- 컨테이너 안 div --> */}
            <div className="member-card-layout__inner">
              {/* <!-- 로고 div --> */}
              <h1 className="member-card-layout__logo">
                <img
                  className="member-card-layout__logo-image"
                  src="/img/opggLogo.png"
                  alt="op.gg"
                />
              </h1>
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
                  <button
                    type="button"
                    className="member-button apple-button login__apple-btn"
                  >
                    <span className="apple-button__inner">
                      <img
                        src="https://member.op.gg/logo_apple.dca28233.svg"
                        className="apple-button__img"
                        width="24"
                        height="24"
                        alt="apple"
                      />
                      <span className="apple-button__txt">Apple로 로그인</span>
                    </span>
                  </button>
                </div>

                {/* <!-- apple 로그인 밑  ㅡorㅡ --> */}
                <div className="login__l-or">OR</div>
                <h2 className="login__email-title">이메일 로그인</h2>
                <div className="member-input">
                  <div className="member-input__state">
                    {/* <!-- 이메일 input 박스 --> */}
                    <input
                      id="memberInput6908"
                      className="member-input__box"
                      type="text"
                      autocomplete="off"
                      name="email"
                      value=""
                      placeholder="이메일 주소"
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
                      autocomplete="off"
                      name="password"
                      value=""
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
                      <label
                        for="memberCheckbox6943"
                        className="member-checkbox__label"
                      >
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
                    <a className="member-link" href="/register/agree">
                      회원가입하기
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="select-language select-language--login-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
