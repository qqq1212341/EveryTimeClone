import React from "react";
import { Text } from "react-native";
import { StyledBorderContainer } from "../../Style/commonStyle";
import HomeTrendingPost from "./HomeTrendingPost";
import { StyledTrendingTitle } from "./style";

const HomeTrending = () => {
  return (
    <StyledBorderContainer>
      <StyledTrendingTitle>실시간 인기글</StyledTrendingTitle>
      <HomeTrendingPost />
      <HomeTrendingPost />
    </StyledBorderContainer>
  );
};

export default HomeTrending;
