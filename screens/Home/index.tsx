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
  StyledHomeText,
} from "./styled";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import HomeHCardList from "../../components/HomeHCardList";

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
    <StyledHomeContainer>
      <HomeHCardList />
    </StyledHomeContainer>
  );
};

export default Home;

type HomeScreenProps = BottomTabScreenProps<any, "Home">;
