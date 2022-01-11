import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import Root from "./navigators/Root";

const whiteBackgroundTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={whiteBackgroundTheme}>
      <Root />
    </NavigationContainer>
  );
}
