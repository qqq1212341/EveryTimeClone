import React from "react";
import { Text } from "react-native";
import { StyledRtAdContainer } from "./style";

const RectangleAd = ({
  marginTop = 30,
  marginLeft = 10,
  marginRight = 10,
}: {
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
}) => {
  return (
    <StyledRtAdContainer style={{ marginTop, marginLeft, marginRight }}>
      <Text>광고입니다</Text>
    </StyledRtAdContainer>
  );
};

export default RectangleAd;
