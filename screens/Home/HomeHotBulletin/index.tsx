import React, { Ref, forwardRef } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import PostSmall from '../../../components/PostSmall';
import TopContainer from '../../../components/TopContainer';

import { RootNavigatorParamList } from '../../../navigators/Root';

import { StyledBorderContainer } from '../../../Common/commonStyle';
import { homeRefObject } from '../../../Common/commonType';

type DetailScreenProp = NativeStackNavigationProp<RootNavigatorParamList, 'Stack'>;
const HomeHotBulletin = forwardRef((props: any, ref: Ref<homeRefObject>) => {
  // Data를 fetching 해와서 PostSmall를 render함. PostLarge에는 id 값을 넘겨서 클릭시 DetailPost로 이동하게 해야함.
  const navigation = useNavigation<DetailScreenProp>();
  const goToHot = () => {
    navigation.navigate('Stack', {
      screen: 'Detail',
      params: {
        bulletinId: 'Hot',
        bullentinName: 'HOT 게시판',
      },
    });
  };
  return (
    // 그냥 마무리하긴 심심해서 marginBottom 30을 줫음
    <StyledBorderContainer style={{ marginBottom: 30 }}>
      <TopContainer text='Hot 게시물' isMore={true} onPress={goToHot} />
      <PostSmall />
      <PostSmall />
      <PostSmall />
    </StyledBorderContainer>
  );
});

export default HomeHotBulletin;
