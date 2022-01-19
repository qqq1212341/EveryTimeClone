import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';

import DetailBulletin from '../screens/DetailBulletin';
import DetailPost from '../screens/DetailPost';
import Mypage from '../screens/Mypage';
import NotificationSetting from '../screens/Setting/NotificationSetting';

import { postType } from '../Common/commonType';

const nativeStack = createNativeStackNavigator<StackNavigatorParamList>();

function Stack() {
  return (
    <nativeStack.Navigator
      screenOptions={({ navigation: { goBack } }) =>
        // 타입스크립트 어떻게 추가하지??
        ({
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 10 }} onPress={goBack}>
              <AntDesign name='arrowleft' size={24} color='black' />
            </TouchableOpacity>
          ),
        })
      }>
      <nativeStack.Screen
        name='DetailBulletin'
        component={DetailBulletin}
        options={{ headerTitle: '' }}
      />
      <nativeStack.Screen name='DetailPost' component={DetailPost} options={{ headerTitle: '' }} />
      <nativeStack.Screen name='Mypage' component={Mypage} options={{ headerTitle: '내 정보' }} />
      <nativeStack.Screen
        name='NotificationSetting'
        component={NotificationSetting}
        options={{ headerTitle: '알림 설정' }}
      />
    </nativeStack.Navigator>
  );
}

export default Stack;

export type StackNavigatorParamList = {
  DetailBulletin: { bulletinId: string; bulletinName: string };
  DetailPost: { postData: postType; bulletinName: string };
  Mypage: undefined;
  NotificationSetting: undefined;
};
