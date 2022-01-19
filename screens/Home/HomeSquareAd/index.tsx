import React from 'react';

import Swiper from 'react-native-swiper';

import { SCREEN_HEIGHT, StyledBorderContainer, StyledTopText } from '../../../Common/commonStyle';

import HomeSquareItem from './HomeSquareItem/Index';

const HomeSquareAd = () => {
  return (
    <StyledBorderContainer>
      <StyledTopText style={{ marginTop: 25 }}>추전 정보</StyledTopText>
      <Swiper
        containerStyle={{
          height: SCREEN_HEIGHT / 1.5,
          borderRadius: 25,
          marginLeft: -10,
          marginRight: -10,
        }}
        activeDotColor={'red'}
        dotStyle={{ width: 6, height: 6 }}
        activeDotStyle={{ width: 6, height: 6 }}
        horizontal>
        <HomeSquareItem />
        <HomeSquareItem />
        <HomeSquareItem />
        <HomeSquareItem />
        <HomeSquareItem />
        <HomeSquareItem />
      </Swiper>
    </StyledBorderContainer>
  );
};

export default HomeSquareAd;
