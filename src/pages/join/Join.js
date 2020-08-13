import React from "react";
import Footer2 from "./../../include/Footer2";

const Join = () => {
  //화면 전체

  return (
    <div class="join-container">
      <div class="join-box">
        <div class="join-box-inner">
          <div class="register-header">
            <img src="./img/opggJoin.png" />
          </div>
          <h2 class="top-text">기본정보 입력</h2>
          <div class="sign-up__sub">
            회원가입을 위해서 이메일 인증이 진행되며, 인증이 완료되기 전까지
            회원가입이 완료가 되지 않습니다.
          </div>
          <div class="member-input__state">
            <input
              id="memberInput5434"
              class="member-input__box"
              type="text"
              autocomplete="off"
              name="email"
              value=""
              placeholder="이메일 주소"
            />
          </div>

          <div class="member-input__state">
            <input
              id="memberInput1686"
              class="member-input__box"
              type="text"
              autocomplete="off"
              name="nickname"
              value=""
              placeholder="닉네임"
            />
          </div>
          <div class="sign-up__input-nickname-message">
            개인정보를 기입하여 발생될 수 있는 피해는 OP.GG가 일절 책임지지
            않습니다.
          </div>
          <div class="member-input__state">
            <input
              id="memberInput3151"
              class="member-input__box"
              type="password"
              autocomplete="off"
              name="password"
              value=""
              placeholder="비밀번호"
            />
          </div>

          <div class="sign-up__l-btn">
            <button
              type="button"
              class="member-button cancel-button sign-up__btn-cancel"
            >
              취소
            </button>
            <button type="submit" class="member-button sign-up__btn">
              가입하기
            </button>
          </div>
          <br />
          <br />
          <div class="sign-up__go-to-login">
            이미 회원이신가요?
            <a href="" type="button" class="sign-up__go-to-login-btn" alt="ff">
              로그인하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
