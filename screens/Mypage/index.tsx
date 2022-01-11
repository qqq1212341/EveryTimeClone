import React from "react";
import { TouchableOpacity } from "react-native";
import { MainpageLayout, Title, Item } from "./styled";
import OutlinedBox from "../../components/OutlinedBox";

export default function Mypage() {
  return (
    <MainpageLayout>
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
        <TouchableOpacity>
          <Item>다크 모드</Item>
        </TouchableOpacity>
        <TouchableOpacity>
          <Item>알림 설정</Item>
        </TouchableOpacity>
      </OutlinedBox>
    </MainpageLayout>
  );
}
