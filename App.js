import React, { useEffect, useState } from 'react';

import auth from '@react-native-firebase/auth';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { setTestDeviceIDAsync } from 'expo-ads-admob';
import AppLoading from 'expo-app-loading';

import Auth from './navigators/Auth';
import Root from './navigators/Root';

import Login from './screens/Login';

const whiteBackgroundTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const startLoading = async () => {
    await setTestDeviceIDAsync('EMULATOR');
  };

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
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
    <NavigationContainer theme={whiteBackgroundTheme}>
      {isLoggedIn ? <Root /> : <Auth />}
    </NavigationContainer>
  );
}
