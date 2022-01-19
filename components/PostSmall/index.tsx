import React from 'react';

import LikeCommentScrab from '../LikeCommentScrab';
import {
  StyledPostSmallBottomContainer,
  StyledPostSmallContainer,
  StyledPostSmallDate,
  StyledPostSmallTop,
} from './style';

const PostSmall = () => {
  // prop으로 id를 받아와서 클릭시 DetailPost로 이동하게 해야함.
  return (
    <StyledPostSmallContainer>
      <StyledPostSmallTop>안녕하세요</StyledPostSmallTop>
      <StyledPostSmallBottomContainer>
        <StyledPostSmallDate>01/09</StyledPostSmallDate>
        {/* Like.length로 고쳐야함 */}
        <LikeCommentScrab LikeNum={30} CommentNum={50} isScrabOn={false} />
      </StyledPostSmallBottomContainer>
    </StyledPostSmallContainer>
  );
};

export default PostSmall;
