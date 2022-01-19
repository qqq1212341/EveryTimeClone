import React, { useEffect } from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import LeftBackHeader from '../../components/LeftBackHeader';
import LikeCommentScrab from '../../components/LikeCommentScrab';
import RectangleAd from '../../components/RectangleAd';
import RightItemHeader from '../../components/RightItemHeader';

import { StackNavigatorParamList } from '../../navigators/Stack';

import { BORDER_COLOR } from '../../Common/commonStyle';

import {
  StyledDetailButton,
  StyledDetailButtonContainer,
  StyledDetailMainText,
  StyledDetailMainTitle,
  StyledDetailPostMain,
  StyledDetailProfile,
  StyledDetailProfileDate,
  StyledDetailProfileImage,
  StyledDetailProfileName,
  StyledDetailProfileTextBox,
  StyledDetailText,
} from './style';

interface DetailPostProps {
  navigation: NativeStackNavigationProp<StackNavigatorParamList, 'DetailBulletin'>;
  route: RouteProp<StackNavigatorParamList, 'DetailPost'>;
}

const DetailPost: React.FC<DetailPostProps> = ({
  navigation: { setOptions, goBack },
  route: {
    params: {
      postData: { Comments, Desc, Like, Name, Pictures, Scrab, Title, Writer, postId, stringDate },
      bulletinName,
    },
  },
}) => {
  useEffect(() => {
    setOptions({
      headerLeft: () => <LeftBackHeader bulletinName={bulletinName} onPress={goBack} />,
      headerRight: () => (
        <RightItemHeader
          isFirstItem={true}
          firstItemComponent={
            <MaterialCommunityIcons name='bell-cancel-outline' size={24} color={BORDER_COLOR} />
          }
          // onPressFirstItem => 색깔 변경. 알림 등록
          secondItemComponent={
            <MaterialCommunityIcons name='dots-vertical' size={24} color='black' />
          }
          // onPressSecondItem : table 열기
        />
      ),
      headerShadowVisible: false,
    });
  }, []);
  // console.log(postData, bulletinName);
  return (
    // Flatlist로 만들어야 함/
    <StyledDetailPostMain>
      <StyledDetailProfile>
        <StyledDetailProfileImage source={require('../../img/person.png')} />
        <StyledDetailProfileTextBox>
          <StyledDetailProfileName>{Name}</StyledDetailProfileName>
          <StyledDetailProfileDate>{stringDate}</StyledDetailProfileDate>
        </StyledDetailProfileTextBox>
      </StyledDetailProfile>
      {Title && <StyledDetailMainTitle>{Title}</StyledDetailMainTitle>}
      <StyledDetailMainText>{Desc}</StyledDetailMainText>
      <LikeCommentScrab
        // Like.length로 고쳐야함
        LikeNum={Like}
        CommentNum={Comments.length}
        isScrabOn={true}
        // Scrab.length로 고쳐야함
        ScrabNum={Scrab}
      />
      <StyledDetailButtonContainer>
        <StyledDetailButton>
          <StyledDetailText>
            <AntDesign name='like2' size={16} color='#ff3939' />
            공감
          </StyledDetailText>
        </StyledDetailButton>
        <StyledDetailButton>
          <StyledDetailText>
            <AntDesign name='staro' size={16} color='#cfda59' />
            스크랩
          </StyledDetailText>
        </StyledDetailButton>
      </StyledDetailButtonContainer>
      <RectangleAd marginTop={10} marginLeft={-19} marginRight={-19} />
    </StyledDetailPostMain>
  );
};

export default DetailPost;
