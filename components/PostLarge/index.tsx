import React from "react";
import {
  StyledTrendingBottom,
  StyledTrendingBottomLeft,
  StyledTrendingContainer,
  StyledTrendingMiddleDesc,
  StyledTrendingMiddleTitle,
  StyledTrendingTop,
  StyledTrendingTopLeft,
  StyledTrendingTopProfile,
  StyledTrendingTopTimeline,
  StyledTrendingTopWriter,
} from "./style";
import LikeComment from "../LikeComment";

const PostLarge = () => {
  // prop으로 id를 받아와서 클릭시 DetailPost로 이동하게 해야함.
  return (
    <StyledTrendingContainer>
      <StyledTrendingTop>
        <StyledTrendingTopLeft>
          <StyledTrendingTopProfile source={require("../../img/person.png")} />
          <StyledTrendingTopWriter>익명</StyledTrendingTopWriter>
        </StyledTrendingTopLeft>
        <StyledTrendingTopTimeline>121221313</StyledTrendingTopTimeline>
      </StyledTrendingTop>
      <StyledTrendingMiddleTitle>안녕하세요</StyledTrendingMiddleTitle>
      <StyledTrendingMiddleDesc>테스트</StyledTrendingMiddleDesc>
      <StyledTrendingBottom>
        <StyledTrendingBottomLeft>자유게시판</StyledTrendingBottomLeft>
        <LikeComment />
      </StyledTrendingBottom>
    </StyledTrendingContainer>
  );
};

export default PostLarge;
