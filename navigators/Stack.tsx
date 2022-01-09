import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Mypage from "../screens/Mypage";

const Nav = createNativeStackNavigator<StackNavigatorParamList>();

function Stack() {
  return (
    <Nav.Navigator screenOptions={{ headerTitle: "내 정보" }}>
      <Nav.Screen component={Mypage} name="Mypage" />
    </Nav.Navigator>
  );
}

export default Stack;

type StackNavigatorParamList = { Mypage: undefined };
