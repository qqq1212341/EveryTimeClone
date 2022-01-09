import React from "react";
import {
  StyledTrendingBottomRight,
  StyledTrendingBottomRightComment,
  StyledTrendingBottomRightLike,
} from "./style";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

const LikeComment = () => {
  return (
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
  );
};

export default LikeComment;
