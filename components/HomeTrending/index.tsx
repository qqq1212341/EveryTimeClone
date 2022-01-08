import React from "react";
import { Text } from "react-native";
import { StyledBorderContainer, StyledTopText } from "../../Style/commonStyle";
import HomeTrendingPost from "./HomeTrendingPost";
import { StyledTrendingTitle } from "./style";

const HomeTrending = () => {
  return (
    <StyledBorderContainer>
      <StyledTopText style={{ marginTop: 25 }}>실시간 인기글</StyledTopText>
      <HomeTrendingPost />
      <HomeTrendingPost />
    </StyledBorderContainer>
  );
};

export default HomeTrending;
