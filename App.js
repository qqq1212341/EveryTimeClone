import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Root from "./navigators/Root";

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
