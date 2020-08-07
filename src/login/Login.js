import React from "react";

const Login = () => {
  return (
    <div id="root">
      <div class="app">
        <div class="member-card-layout">
          {/* <!-- 흰색 박스 --> */}
          <div class="member-card-layout__container">
            {/* <!-- 컨테이너 안 div --> */}
            <div class="member-card-layout__inner">
              {/* <!-- 로고 div --> */}
              <h1 class="member-card-layout__logo">
                <img
                  class="member-card-layout__logo-image"
                  src="../img"
                  alt="OP.GG"
                />
              </h1>
              <div class="login">
                <form>
                  <h2 class="login__fb-title">간편 로그인</h2>
                  <button
                    type="button"
                    class="member-button facebook-button login__fb-btn"
                  >
                    {/* <!-- 페이스북 로그인 --> */}
                    <span class="facebook-button__inner">
                      <img
                        src="https://member.op.gg/icon_facebook_wh.6ab689d7.svg"
                        class="facebook-button__img"
                        width="24"
                        height="24"
                        alt="facebook"
                      />
                      <span class="facebook-button__txt">
                        페이스북으로 로그인
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    class="member-button apple-button login__apple-btn"
                  >
                    {/* <!-- apple로그인 --> */}
                    <span class="apple-button__inner">
                      <img
                        src="https://member.op.gg/logo_apple.dca28233.svg"
                        class="apple-button__img"
                        width="24"
                        height="24"
                        alt="apple"
                      />
                      <span class="apple-button__txt">Apple로 로그인</span>
                    </span>
                  </button>
                  {/* <!-- apple 로그인 밑  ㅡorㅡ --> */}
                  <div class="login__l-or">OR</div>
                  <h2 class="login__email-title">이메일 로그인</h2>
                  <div class="member-input">
                    <div class="member-input__state">
                      {/* <!-- 이메일 input 박스 --> */}
                      <input
                        id="memberInput6908"
                        class="member-input__box"
                        type="text"
                        autocomplete="off"
                        name="email"
                        value=""
                        placeholder="이메일 주소"
                      />
                      <span class="member-input__valid-wrapper"></span>
                    </div>
                  </div>

                  <div class="member-input">
                    <div class="member-input__state">
                      {/* <!-- 비밀번호 input 박스 --> */}
                      <input
                        id="memberInput3108"
                        class="member-input__box"
                        type="password"
                        autocomplete="off"
                        name="password"
                        value=""
                        placeholder="비밀번호"
                      />
                      <span class="member-input__valid-wrapper"></span>
                    </div>
                    {/* <!-- 로그인 상태유지 checkbox --> */}
                  </div>
                  <div class="login__l">
                    <div class="login__checkbox" id="login__checkbox">
                      <div class="member-checkbox">
                        <span class="member-checkbox__state">
                          <input
                            id="memberCheckbox6943"
                            type="checkbox"
                            class="member-checkbox__input"
                          />
                        </span>
                        <label
                          for="memberCheckbox6943"
                          class="member-checkbox__label"
                        >
                          로그인 상태 유지하기
                        </label>
                      </div>
                    </div>
                    {/* <!-- 비밀번호를 잊으셨나요? --> */}
                    <span class="login__find-password-btn">
                      <a
                        class="member-link"
                        href="/find/reset-password/send-email"
                      >
                        비밀번호를 잊으셨나요?
                      </a>
                    </span>
                  </div>
                  <button type="submit" class="member-button login__btn">
                    로그인
                  </button>
                  <div class="login__l-sign-up">
                    OP.GG에 처음이세요?
                    <span class="login__sign-up-link">
                      <a class="member-link" href="/register/agree?idType=OPGG">
                        회원가입하기
                      </a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div class="select-language select-language--login-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
