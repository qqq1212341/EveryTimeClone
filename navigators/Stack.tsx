import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DetailBulletin from "../screens/DetailBulletin";
import { Button } from "react-native";

const Nav = createNativeStackNavigator<StackNavigatorParamList>();

function Stack() {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Nav.Screen name="Detail" component={DetailBulletin} />
    </Nav.Navigator>
  );
}

export default Stack;

export type StackNavigatorParamList = {
  Detail: { index: number; bullentinName: string };
};
