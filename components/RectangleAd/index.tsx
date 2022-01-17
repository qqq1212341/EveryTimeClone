import { AdMobBanner } from "expo-ads-admob";
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
      <AdMobBanner
        //  배너 사이즈 custom 하는 방법 알아보기..
        bannerSize="banner"
        adUnitID="ca-app-pub-3940256099942544/2934735716"
      />
    </StyledRtAdContainer>
  );
};

export default RectangleAd;
