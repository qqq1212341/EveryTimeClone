import React from 'react';

import { AntDesign, EvilIcons } from '@expo/vector-icons';

import {
  StyledTrendingBottomRight,
  StyledTrendingBottomRightComment,
  StyledTrendingBottomRightLike,
  StyledTrendingBottomRightScrab,
} from './style';

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
        <AntDesign name='like2' size={16} color='#ff3939' />
        &nbsp;{LikeNum}
      </StyledTrendingBottomRightLike>
      <StyledTrendingBottomRightComment>
        <EvilIcons name='comment' size={16} color='#8383f5' />
        &nbsp;{CommentNum}
      </StyledTrendingBottomRightComment>
      {isScrabOn && (
        <StyledTrendingBottomRightScrab>
          <AntDesign name='staro' size={16} color='#cfda59' />
          &nbsp;{ScrabNum}
        </StyledTrendingBottomRightScrab>
      )}
    </StyledTrendingBottomRight>
  );
};

export default LikeCommentScrab;
