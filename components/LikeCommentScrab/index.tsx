import React from "react";
import {
  StyledTrendingBottomRight,
  StyledTrendingBottomRightComment,
  StyledTrendingBottomRightLike,
  StyledTrendingBottomRightScrab,
} from "./style";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import {
  COMMENT_COLOR,
  LIKE_COLOR,
  SCRAB_COLOR,
} from "../../common/commonStyle";

interface LikeCommentScrabProps {
  LikeNum: number;
  CommentNum: number;
  isScrabOn: boolean;
  ScrabNum?: number;
}

const LikeCommentScrab: React.FC<LikeCommentScrabProps> = ({
  LikeNum,
  CommentNum,
  isScrabOn,
  ScrabNum,
}) => {
  return (
    <StyledTrendingBottomRight>
      <StyledTrendingBottomRightLike>
        <AntDesign name="like2" size={16} color={LIKE_COLOR} />
        &nbsp;{LikeNum}
      </StyledTrendingBottomRightLike>
      <StyledTrendingBottomRightComment>
        <EvilIcons name="comment" size={16} color={COMMENT_COLOR} />
        &nbsp;{CommentNum}
      </StyledTrendingBottomRightComment>
      {isScrabOn && (
        <StyledTrendingBottomRightScrab>
          <AntDesign name="staro" size={16} color={SCRAB_COLOR} />
          &nbsp;{ScrabNum}
        </StyledTrendingBottomRightScrab>
      )}
    </StyledTrendingBottomRight>
  );
};

export default LikeCommentScrab;
