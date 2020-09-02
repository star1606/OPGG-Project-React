import React, { useState, useEffect } from 'react';

import OauthGoogleLogin from './OauthGoogleLogin';
import axios from 'axios';

function OauthLogin() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    };

    let res = await axios.get('http://59.20.79.42:58002/user', config);
    setUser(res.data.data);
  };

  return (
    <div>
      <OauthGoogleLogin />
      <h1>/user : {user}</h1>
      <button onClick={getUser}>유저 정보 가져오기</button>
    </div>
  );
}

export default OauthLogin;
