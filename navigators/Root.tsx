import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Stack, { StackNavigatorParamList } from "./Stack";
import Tabs, { TabNavigatorParamList } from "./Tabs";

const Nav = createNativeStackNavigator<RootNavigatorParamList>();

function Root() {
  return (
    <Nav.Navigator screenOptions={{ headerShown: false }}>
      <Nav.Screen name="Tabs" component={Tabs} />
      <Nav.Screen name="Stack" component={Stack} />
    </Nav.Navigator>
  );
}

export default Root;

export type RootNavigatorParamList = {
  Tabs: NavigatorScreenParams<TabNavigatorParamList>;
  Stack: NavigatorScreenParams<StackNavigatorParamList>;
};
