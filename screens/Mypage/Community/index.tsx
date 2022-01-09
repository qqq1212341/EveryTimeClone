import React from "react";
import { TouchableOpacity } from "react-native";
import OutlinedBox from "../../../components/OutlinedBox";
import { Title, Item } from "../styled";

export default function Community() {
  return (
    <OutlinedBox>
      <Title>커뮤니티 설정</Title>
      <TouchableOpacity>
        <Item>닉네임 설정</Item>
      </TouchableOpacity>
      <TouchableOpacity>
        <Item>프로필 이미지 설정</Item>
      </TouchableOpacity>
    </OutlinedBox>
  );
}
