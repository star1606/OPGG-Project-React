import React from "react";

const LoginBtn = ({ history }) => {
  return (
    <div>
      {/* <!-- 페이스북 로그인 --> */}
      <button
        className="member-button facebook-button login__fb-btn"
        // onClick={() => history.push("/")}
      >
        <span className="facebook-button__inner">
          <img
            src="https://member.op.gg/icon_facebook_wh.6ab689d7.svg"
            className="facebook-button__img"
            width="24"
            height="24"
            alt="facebook"
          />
          <span className="facebook-button__txt">페이스북으로 로그인</span>
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
  );
};

export default LoginBtn;
