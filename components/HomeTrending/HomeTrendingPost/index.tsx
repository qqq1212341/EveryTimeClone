import React from "react";
import {
  StyledTrendingBottom,
  StyledTrendingBottomLeft,
  StyledTrendingBottomRight,
  StyledTrendingBottomRightComment,
  StyledTrendingBottomRightLike,
  StyledTrendingContainer,
  StyledTrendingMiddleDesc,
  StyledTrendingMiddleTitle,
  StyledTrendingTop,
  StyledTrendingTopLeft,
  StyledTrendingTopProfile,
  StyledTrendingTopTimeline,
  StyledTrendingTopWriter,
} from "./style";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

const HomeTrendingPost = () => {
  return (
    <StyledTrendingContainer>
      <StyledTrendingTop>
        <StyledTrendingTopLeft>
          <StyledTrendingTopProfile
            source={require("../../../img/person.png")}
          />
          <StyledTrendingTopWriter>익명</StyledTrendingTopWriter>
        </StyledTrendingTopLeft>
        <StyledTrendingTopTimeline>121221313</StyledTrendingTopTimeline>
      </StyledTrendingTop>
      <StyledTrendingMiddleTitle>안녕하세요</StyledTrendingMiddleTitle>
      <StyledTrendingMiddleDesc>테스트</StyledTrendingMiddleDesc>
      <StyledTrendingBottom>
        <StyledTrendingBottomLeft>자유게시판</StyledTrendingBottomLeft>
        <StyledTrendingBottomRight>
          <StyledTrendingBottomRightLike>
            <AntDesign name="like2" size={14} color="#ff3939" />
            &nbsp;80
          </StyledTrendingBottomRightLike>
          <StyledTrendingBottomRightComment>
            <EvilIcons name="comment" size={14} color="#8383f5" />
            &nbsp;50
          </StyledTrendingBottomRightComment>
        </StyledTrendingBottomRight>
      </StyledTrendingBottom>
    </StyledTrendingContainer>
  );
};

export default HomeTrendingPost;
