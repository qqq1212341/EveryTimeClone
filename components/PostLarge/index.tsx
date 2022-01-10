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

interface postLargeProps {
  postId: string;
  name: string;
  date: string;
  title: string;
  desc: string;
  bulletinName: string;
}

const PostLarge: React.FC<postLargeProps> = ({
  postId,
  name,
  date,
  title,
  desc,
  bulletinName,
}) => {
  // prop으로 id를 받아와서 클릭시 DetailPost로 이동하게 해야함.
  return (
    <StyledTrendingContainer>
      <StyledTrendingTop>
        <StyledTrendingTopLeft>
          <StyledTrendingTopProfile source={require("../../img/person.png")} />
          <StyledTrendingTopWriter>{name}</StyledTrendingTopWriter>
        </StyledTrendingTopLeft>
        <StyledTrendingTopTimeline>{date}</StyledTrendingTopTimeline>
      </StyledTrendingTop>
      <StyledTrendingMiddleTitle>{title}</StyledTrendingMiddleTitle>
      <StyledTrendingMiddleDesc>{desc}</StyledTrendingMiddleDesc>
      <StyledTrendingBottom>
        <StyledTrendingBottomLeft>{bulletinName}</StyledTrendingBottomLeft>
        <LikeComment />
      </StyledTrendingBottom>
    </StyledTrendingContainer>
  );
};

export default PostLarge;
