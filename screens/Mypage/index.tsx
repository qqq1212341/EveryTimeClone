import React, { useState } from "react";
import { TouchableOpacity, Text, Modal } from "react-native";
import { MypageLayout } from "./styled";
import {
  SettingTitleText as Title,
  SettingItemText as Item,
  StyledBorderContainer as OutlinedBox,
} from "../../Common/commonStyle";
import ModalSelector from "react-native-modal-selector";

export default function Mypage(props: any) {
  let index = 0;
  const darkModeOptions = [
    { key: index++, section: true, label: "다크 모드 설정" },
    { key: index++, label: "켜기" },
    { key: index++, label: "끄기" },
  ];
  return (
    <MypageLayout>
      {/* <Profile /> */}
      <OutlinedBox>
        <Title>계정</Title>
        <TouchableOpacity>
          <Item>학교 인증</Item>
        </TouchableOpacity>
        <TouchableOpacity>
          <Item>비밀번호 변경</Item>
        </TouchableOpacity>
        <TouchableOpacity>
          <Item>이메일 변경</Item>
        </TouchableOpacity>
      </OutlinedBox>
      <OutlinedBox>
        <Title>커뮤니티 설정</Title>
        <TouchableOpacity>
          <Item>닉네임 설정</Item>
        </TouchableOpacity>
        <TouchableOpacity>
          <Item>프로필 이미지 설정</Item>
        </TouchableOpacity>
      </OutlinedBox>
      <OutlinedBox>
        <Title>앱 설정</Title>
        <ModalSelector data={darkModeOptions}>
          <Item>다크 모드</Item>
        </ModalSelector>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("NotificationSetting")}
        >
          <Item>알림 설정</Item>
        </TouchableOpacity>
      </OutlinedBox>
    </MypageLayout>
  );
}
