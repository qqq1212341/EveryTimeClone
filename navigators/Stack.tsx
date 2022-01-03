import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Nav = createNativeStackNavigator<StackNavigatorParamList>();

function Stack() {
  return <Nav.Navigator></Nav.Navigator>;
}

export default Stack;

type StackNavigatorParamList = {};
