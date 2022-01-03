import React from "react";
import { StyledHCardScrollView } from "./style";
import HomeHCard from "./HomeHCard";

const HomeHCardList: React.FC = () => {
  return (
    <StyledHCardScrollView horizontal showsHorizontalScrollIndicator={false}>
      <HomeHCard
        icon="lightbulb-on-outline"
        topText="시간표마법사로 플랜B 준비"
        bottomText="수강신청 망했을 때 당황하지 않기!"
        bottomTextColor="rgb(228, 177, 87)"
        buttonText="자세히"
      />
      <HomeHCard
        icon="checkbox-marked-outline"
        topText="오늘의 할일"
        bottomText="1월 4일 (화)"
        bottomTextColor="rgb(87, 120, 228)"
        buttonText="전체 보기"
      />
    </StyledHCardScrollView>
  );
};

export default HomeHCardList;
