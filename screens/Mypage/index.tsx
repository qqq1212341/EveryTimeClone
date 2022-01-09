import React from "react";
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
