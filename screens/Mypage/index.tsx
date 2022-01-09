import React from "react";
import { ScrollView, Text, View } from "react-native";
import Account from "./Account";
import AppSetting from "./AppSettings";
import Community from "./Community";
import Profile from "./Profile";
import { MainpageLayout } from "./styled";

export default function Mypage() {
  return (
    <MainpageLayout>
      <Profile />
      <Account />
      <Community />
      <AppSetting />
    </MainpageLayout>
  );
}
