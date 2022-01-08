import React from "react";
import {
  StyledSqaureAdButton,
  StyledSqaureAdButtonText,
  StyledSqaureAdContainer,
  StyledSqaureAdDesc,
  StyledSqaureAdImage,
  StyledSqaureAdMark,
  StyledSqaureAdMarkContainer,
  StyledSqaureAdProfile,
  StyledSqaureAdProfileImage,
  StyledSqaureAdProfileText,
  StyledSqaureAdTitle,
  StyledSqaureAdTop,
} from "./style";
import * as WebBrowser from "expo-web-browser";

const HomeSquareItem = () => {
  const onPressButton = async () => {
    await WebBrowser.openBrowserAsync("https://www.univstore.com/", {
      dismissButtonStyle: "close",
      enableBarCollapsing: true,
    });
  };
  return (
    <StyledSqaureAdContainer onPress={onPressButton}>
      <StyledSqaureAdTop>
        <StyledSqaureAdProfile>
          <StyledSqaureAdProfileImage
            source={require("../../../img/univStore.png")}
          />
          <StyledSqaureAdProfileText>학생복지스토어</StyledSqaureAdProfileText>
        </StyledSqaureAdProfile>
        <StyledSqaureAdMarkContainer>
          <StyledSqaureAdMark>AD</StyledSqaureAdMark>
        </StyledSqaureAdMarkContainer>
      </StyledSqaureAdTop>
      <StyledSqaureAdImage source={require("../../../img/macbook.png")} />
      <StyledSqaureAdTitle>2022년 새학기엔 MacBook Pro</StyledSqaureAdTitle>
      <StyledSqaureAdDesc>
        프로는 역시 MacBook Pro, M1칩이 탑재된 MacBook Pro 13을 교육 할인으로
        만나보세요
      </StyledSqaureAdDesc>
      <StyledSqaureAdButton>
        <StyledSqaureAdButtonText>자세히 보기</StyledSqaureAdButtonText>
      </StyledSqaureAdButton>
    </StyledSqaureAdContainer>
  );
};

export default HomeSquareItem;
