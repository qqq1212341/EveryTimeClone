import React from "react";
import {
  StyledBorderContainer,
  StyledTopText,
} from "../../../Style/commonStyle";

import PostLarge from "../../../components/PostLarge";
import TopContainer from "../../../components/TopContainer";

const HomeTrending = () => {
  // Data를 fetching 해와서 PostLarge를 render함. PostLarge에는 id 값을 넘겨서 클릭시 DetailPost로 이동하게 해야함.
  return (
    <StyledBorderContainer>
      <TopContainer text="실시간 인기글" isMore={false} />
      <PostLarge />
      <PostLarge />
    </StyledBorderContainer>
  );
};

export default HomeTrending;
