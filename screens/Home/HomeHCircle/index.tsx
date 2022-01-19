import React from 'react';

import HomeHCircle from './HomeHCircle';
import { StyledHCircleScrollView } from './style';

const HomeHCircleList = () => {
  return (
    <StyledHCircleScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 30,
      }}>
      <HomeHCircle
        icon='home'
        title='학교 홈'
        address='http://www.korea.ac.kr/mbshome/mbs/university/index.do'
      />
      <HomeHCircle
        icon='md-book-outline'
        title='열람실 현황'
        address='https://library.korea.ac.kr/hodi_site_link/'
      />
      <HomeHCircle
        iconStyle='Antd'
        icon='earth'
        title='KUPID'
        address='https://portal.korea.ac.kr/front/Intro.kpd?language=en'
      />
      <HomeHCircle
        icon='bus-outline'
        title='셔틀  버스'
        address='http://www.korea.ac.kr/mbshome/mbs/university/subview.do?id=university_010503000000'
      />
      <HomeHCircle
        icon='megaphone-outline'
        title='학사  공지'
        address='http://www.korea.ac.kr/cop/portalBoard/portalBoardList.do?siteId=university&type=E&id=university_060202000000'
      />
      <HomeHCircle
        icon='calendar'
        title='학사  일정'
        address='http://www.korea.ac.kr/cop/portalBoard/portalBoardList.do?siteId=university&type=NG&id=university_060201000000'
      />
      <HomeHCircle icon='md-book-outline' title='도서관' address='https://library.korea.ac.kr/' />
      <HomeHCircle
        iconStyle='Antd'
        icon='earth'
        title='웹메일'
        address='https://mail.korea.ac.kr/'
      />
    </StyledHCircleScrollView>
  );
};

export default HomeHCircleList;
