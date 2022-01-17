import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import React, { useEffect, useState } from "react";
import Root from "./navigators/Root";
import AppLoading from "expo-app-loading";
import { setTestDeviceIDAsync } from "expo-ads-admob";
import Login from "./screens/Login";
import Auth from "./navigators/Auth";
import { UserContext } from "./common/context";

const whiteBackgroundTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);

  const startLoading = async () => {
    await setTestDeviceIDAsync("EMULATOR");
  };

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setUserData(user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const onFinish = () => setReady(true);
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return (
    <UserContext.Provider value={userData}>
      <NavigationContainer theme={whiteBackgroundTheme}>
        {isLoggedIn ? <Root /> : <Auth />}
      </NavigationContainer>
    </UserContext.Provider>
  );
}
