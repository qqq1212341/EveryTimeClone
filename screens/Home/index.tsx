import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import {
  StyledHomeContainer,
  StyledHomeHeaderBottomText,
  StyledHomeHeaderButton,
  StyledHomeHeaderButtonContainer,
  StyledHomeHeaderButtonText,
  StyledHomeHeaderContainer,
  StyledHomeHeaderTopText,
} from "./styled";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import HomeHCardList from "../../components/HomeHCardList";
import HomeHCircleList from "../../components/HomeHCircle";
import HomeFavBulletin from "../../components/HomeFavBulletin";
import HomeTrending from "../../components/HomeTrending";
import HomeRectangleAd from "../../components/HomeRectangleAd";
import HomeSquareAd from "../../components/HomeSquareAd";

const Home: React.FC<HomeScreenProps> = ({ navigation: { setOptions } }) => {
  useEffect(() => {
    setOptions({
      headerStyle: {
        height: 120,
      },
      headerLeft: () => (
        <StyledHomeHeaderContainer>
          <StyledHomeHeaderTopText>에브리타임</StyledHomeHeaderTopText>
          {/* 나중에 user의 대학 정보에 맞게 수정 */}
          <StyledHomeHeaderBottomText>고려대 서울캠</StyledHomeHeaderBottomText>
        </StyledHomeHeaderContainer>
      ),
      // 가운데 header는 hide
      headerTitle: "",
      headerRight: () => (
        <StyledHomeHeaderButtonContainer>
          <StyledHomeHeaderButton>
            <StyledHomeHeaderButtonText>
              <AntDesign name="search1" size={24} color="black" />
            </StyledHomeHeaderButtonText>
          </StyledHomeHeaderButton>
          <StyledHomeHeaderButton>
            <StyledHomeHeaderButtonText>
              <Ionicons name="person-outline" size={24} color="black" />
            </StyledHomeHeaderButtonText>
          </StyledHomeHeaderButton>
        </StyledHomeHeaderButtonContainer>
      ),
    });
  }, []);
  return (
    // stickheader로 header 따라 다녀야 함
    <StyledHomeContainer>
      <HomeHCardList />
      <HomeHCircleList />
      <HomeRectangleAd />
      <HomeFavBulletin />
      <HomeTrending />
      <HomeSquareAd />
    </StyledHomeContainer>
  );
};

export default Home;

type HomeScreenProps = BottomTabScreenProps<any, "Home">;
