import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/Login";
import Join from "../screens/Join";
import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

const nativeStack = createNativeStackNavigator<AuthNavigatorParamList>();

function Auth() {
  return (
    <nativeStack.Navigator>
      <nativeStack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: "" }}
      />
      <nativeStack.Screen
        name="Join"
        component={Join}
        options={({ navigation: { goBack } }) => ({
          headerShown: true,
          headerTitle: "",
          headerLeft: () => (
            <Text style={{ fontSize: 20, marginLeft: 10 }}>회원가입</Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 10 }} onPress={goBack}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </nativeStack.Navigator>
  );
}

export default Auth;

export type AuthNavigatorParamList = {
  Login: undefined;
  Join: undefined;
};
