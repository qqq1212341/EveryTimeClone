import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
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
import HomeHCardList from "./HomeHCardList";
import HomeHCircleList from "./HomeHCircle";
import HomeFavBulletin from "./HomeFavBulletin";
import HomeTrending from "./HomeTrending";
import HomeSquareAd from "./HomeSquareAd";
import HomeHotBulletin from "./HomeHotBulletin";
import { RefreshControl } from "react-native";
import { useRef } from "react";
import { homeRefObject } from "../../common/commonType";
import { BORDER_COLOR, GRAY_COLOR } from "../../common/commonStyle";
import RectangleAd from "../../components/RectangleAd";
import { useUserContext } from "../../common/contest";

const Home: React.FC<HomeScreenProps> = ({
  navigation: { setOptions, navigate },
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [headerShown, setHeaderShown] = useState(false);

  useEffect(() => {
    setOptions({
      headerStyle: {
        height: 120,
        shadowColor: headerShown ? GRAY_COLOR : "#ffffff",
        shadowOffset: headerShown
          ? { width: 0, height: 2 }
          : { width: 0, height: 0 },
        shadowOpacity: headerShown ? 0.2 : 0,
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
          <StyledHomeHeaderButton
            onPress={() => navigate("Stack", { screen: "Mypage" })}
          >
            <StyledHomeHeaderButtonText>
              <Ionicons name="person-outline" size={24} color="black" />
            </StyledHomeHeaderButtonText>
          </StyledHomeHeaderButton>
        </StyledHomeHeaderButtonContainer>
      ),
    });
  }, [headerShown]);

  const onRefresh = () => {
    setRefreshing(true);
    if (homeFavRef.current) {
      homeFavRef.current.loadPostArray();
    }
    setRefreshing(false);
  };

  const homeFavRef = useRef<homeRefObject>(null);
  const homeTrendingRef = useRef<homeRefObject>(null);
  const homeHotRef = useRef<homeRefObject>(null);

  const handleScroll = (e: any) => {
    // e에 대한 typescript 처리 하기
    if (e.nativeEvent.contentOffset.y > 0) {
      setHeaderShown(true);
    } else {
      setHeaderShown(false);
    }
  };

  return (
    // stickheader로 header 따라 다녀야 함
    <StyledHomeContainer
      onScroll={handleScroll}
      scrollEventThrottle={16}
      refreshControl={
        <RefreshControl
          tintColor={BORDER_COLOR}
          colors={[BORDER_COLOR]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <HomeHCardList />
      <HomeHCircleList />
      <RectangleAd />
      <HomeFavBulletin ref={homeFavRef} />
      <HomeTrending ref={homeTrendingRef} />
      <HomeSquareAd />
      <HomeHotBulletin ref={homeHotRef} />
    </StyledHomeContainer>
  );
};

export default Home;

type HomeScreenProps = BottomTabScreenProps<any, "Home">;
