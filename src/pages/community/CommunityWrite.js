import React from "react";
import styled from "styled-components";
import { CommunityWrap } from "./Community";
import Header1 from "../../include/Header1";
import MainForm from "./MainForm";
import Footer2 from "../../include/Footer2";

const CommunityWrite = () => {
  return (
    <div>
      <CommunityWrap>
        <Header1 />
        <div className="community-conatiner">
          <MainForm />
          <Footer2 />
        </div>
      </CommunityWrap>
    </div>
  );
};

export default CommunityWrite;
