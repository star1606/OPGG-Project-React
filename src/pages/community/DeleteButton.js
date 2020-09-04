import React from "react";
import styled from "styled-components";

const DeleteBtn = styled.button`
  line-height: 15px;
  font-size: 12px;
  padding: 8px 15px 7px;
  border-color: #f95b54;
  background: #fff;
  color: #f95b54;
  border: 1px solid #dddfe4;
  cursor: pointer;
  border-radius: 4px;
`;

const LikeButton = () => {
  return <DeleteBtn>삭제</DeleteBtn>;
};

export default LikeButton;
