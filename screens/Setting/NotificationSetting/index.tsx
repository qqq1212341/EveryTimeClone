import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SettingItemText as Item,
  StyledBorderContainer as OutlinedBox,
  SettingTitleText as Title,
} from '../../../Common/commonStyle';
import { preferenceProps } from '../../../Common/commonType';

import { Layout, Switch, SwitchContainer } from './styled';

function NotificationSetting() {
  const handlePress = (option: keyof preferenceProps, value: boolean) => {
    AsyncStorage.setItem('preference', JSON.stringify({ ...preference, [option]: value }));
    setPreference(prev => ({
      ...prev,
      [option]: value,
    }));
  };

  useEffect(() => {
    AsyncStorage.getItem('preference').then(result => {
      if (!result) {
        const preferencePreset = {
          myPostCommentNoti: true,
          myPostHOTNoti: true,
          myPostLikedNoti: true,
          myCommentReplyNoti: true,
          myCommentLikedNoti: true,
        };
        AsyncStorage.setItem('preference', JSON.stringify(preferencePreset));
      } else {
        setPreference(JSON.parse(result));
      }
    });
  }, []);
  const [preference, setPreference] = useState<preferenceProps>({
    myPostCommentNoti: true,
    myPostHOTNoti: true,
    myPostLikedNoti: true,
    myCommentReplyNoti: true,
    myCommentLikedNoti: true,
  });

  return (
    <Layout>
      <OutlinedBox>
        <Title>내 글 알림</Title>
        <SwitchContainer>
          <Item>댓글이 달리면 알리기</Item>
          <Item>
            <Switch
              value={preference.myPostCommentNoti}
              onValueChange={value => handlePress('myPostCommentNoti', value)}
            />
          </Item>
        </SwitchContainer>
        <SwitchContainer>
          <Item>HOT 게시물이 되면 알리기</Item>
          <Item>
            <Switch
              value={preference.myPostHOTNoti}
              onValueChange={value => handlePress('myPostHOTNoti', value)}
            />
          </Item>
        </SwitchContainer>
        <SwitchContainer>
          <Item>추천을 받으면 알리기</Item>
          <Item>
            <Switch
              value={preference.myPostLikedNoti}
              onValueChange={value => handlePress('myPostLikedNoti', value)}
            />
          </Item>
        </SwitchContainer>
      </OutlinedBox>
      <OutlinedBox>
        <Title>댓글 알림</Title>
        <SwitchContainer>
          <Item>대댓글이 달리면 알리기</Item>
          <Item>
            <Switch
              value={preference.myCommentReplyNoti}
              onValueChange={value => handlePress('myCommentReplyNoti', value)}
            />
          </Item>
        </SwitchContainer>
        <SwitchContainer>
          <Item>추천을 받으면 알리기</Item>
          <Item>
            <Switch
              value={preference.myCommentLikedNoti}
              onValueChange={value => handlePress('myCommentLikedNoti', value)}
            />
          </Item>
        </SwitchContainer>
      </OutlinedBox>
    </Layout>
  );
}

export default NotificationSetting;
