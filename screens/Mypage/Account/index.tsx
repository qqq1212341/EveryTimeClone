import React from "react";
import OutlinedBox from "../../../components/OutlinedBox";
import { Text, TouchableOpacity, View } from "react-native";
import { Item, Title } from "../styled";

export default function Account(props: any) {
  return (
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
  );
}
