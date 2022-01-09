import React from "react";
import { TouchableOpacity } from "react-native";
import OutlinedBox from "../../../components/OutlinedBox";
import { Title, Item } from "../styled";

export default function AppSetting() {
  return (
    <OutlinedBox>
      <Title>앱 설정</Title>
      <TouchableOpacity>
        <Item>다크 모드</Item>
      </TouchableOpacity>
      <TouchableOpacity>
        <Item>알림 설정</Item>
      </TouchableOpacity>
    </OutlinedBox>
  );
}
