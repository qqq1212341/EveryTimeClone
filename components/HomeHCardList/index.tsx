import React from "react";
import { StyledHCardScrollView } from "./style";
import HomeHCard from "./HomeHCard";
import { Dimensions, Platform } from "react-native";

// width : 290
// height : 180

const SPACING_FOR_CARD_INSET = Dimensions.get("window").width * 0.1 - 10;

const HomeHCardList: React.FC = () => {
  const flatListData: any[] = [
    {
      icon: "lightbulb-on-outline",
      topText: "시간표마법사로 플랜B 준비",
      bottomText: "수강신청 망했을 때 당황하지 않기!",
      bottomTextColor: "rgb(228, 177, 87)",
      buttonText: "자세히",
      index: 0,
    },
    {
      icon: "checkbox-marked-outline",
      topText: "오늘의 할일",
      bottomText: "1월 4일 (화)",
      bottomTextColor: "rgb(87, 120, 228)",
      buttonText: "전체 보기",
      index: 1,
    },
    {
      icon: "weather-sunny",
      topText: "학생회관",
      bottomText: "점심",
      bottomTextColor: "rgb(228, 177, 87)",
      descText: "",
      index: 2,
    },
    {
      icon: "lightbulb-on-outline",
      topText: "방학에 뭐하지?",
      bottomText: "유익한 공모전, 대외활동 찾아보기",
      bottomTextColor: "rgb(228, 177, 87)",
      buttonText: "자세히",
      index: 3,
    },
  ];

  return (
    <StyledHCardScrollView
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      automaticallyAdjustContentInsets={false}
      data={flatListData}
      keyExtractor={(item: any) => item.index + ""}
      horizontal
      decelerationRate="normal"
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      renderItem={({ item }) => (
        <HomeHCard
          icon={item.icon}
          topText={item.topText}
          bottomText={item.bottomText}
          bottomTextColor={item.bottomTextColor}
          buttonText={item.buttonText}
        />
      )}
      snapToInterval={300}
      snapToAlignment="center"
      contentInset={{
        left: SPACING_FOR_CARD_INSET,
        right: SPACING_FOR_CARD_INSET,
      }}
      contentContainerStyle={{
        paddingHorizontal:
          Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
      }}
    />
  );
};

export default HomeHCardList;
