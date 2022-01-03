import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Stack from "./Stack";
import Tabs from "./Tabs";

const Nav = createNativeStackNavigator();

function Root() {
  return (
    <Nav.Navigator
      screenOptions={{ presentation: "modal", headerShown: false }}
    >
      <Nav.Screen name="Tabs" component={Tabs} />
      <Nav.Screen name="Stack" component={Stack} />
    </Nav.Navigator>
  );
}

export default Root;
