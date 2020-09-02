import GoogleLogin from "react-google-login";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
const config = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

const responseGoogle = async (response, history) => {
  console.log(1, response);
  //   let res = {...response, ...{provider : "google"}};

  let jwtToken = await axios.post(
    "http://59.20.79.42:58002/jwt/oauth",
    JSON.stringify(response),
    config
  );
  if (jwtToken.status === 200) {
    console.log(2, jwtToken.data.data.userId);
    console.log(3, jwtToken.data.data.ninckname);
    console.log(4, jwtToken.data.data.jwtToken);
    localStorage.setItem("userId", jwtToken.data.data.userId);
    localStorage.setItem("nickname", jwtToken.data.data.nickname);
    localStorage.setItem("jwtToken", jwtToken.data.data.jwtToken);
    history.push("/home");
  }
};

const OauthGoogleLogin = () => {
  return (
    <div>
      <GoogleLogin
        clientId="1038460159897-8nk592uqfjq3be23dkrah4d3t3clmg66.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default withRouter(OauthGoogleLogin);
