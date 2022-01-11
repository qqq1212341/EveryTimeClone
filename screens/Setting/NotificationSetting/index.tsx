import React from "react";
import {
  StyledBorderContainer as OutlinedBox,
  SettingTitleText as Title,
  SettingItemText as Item,
} from "../../../Common/commonStyle";
import { Layout, SwitchContainer, Switch } from "./styled";
function NotificationSetting() {
  return (
    <Layout>
      <OutlinedBox>
        <Title>내 글 알림</Title>
        <SwitchContainer>
          <Item>댓글이 달리면 알리기</Item>
          <Item>
            <Switch />
          </Item>
        </SwitchContainer>
        <SwitchContainer>
          <Item>HOT 게시물이 되면 알리기</Item>
          <Item>
            <Switch />
          </Item>
        </SwitchContainer>
        <SwitchContainer>
          <Item>추천을 받으면 알리기</Item>
          <Item>
            <Switch />
          </Item>
        </SwitchContainer>
      </OutlinedBox>
      <OutlinedBox>
        <Title>댓글 알림</Title>
        <SwitchContainer>
          <Item>대댓글이 달리면 알리기</Item>
          <Item>
            <Switch />
          </Item>
        </SwitchContainer>
        <SwitchContainer>
          <Item>추천을 받으면 알리기</Item>
          <Item>
            <Switch />
          </Item>
        </SwitchContainer>
      </OutlinedBox>
    </Layout>
  );
}

export default NotificationSetting;
