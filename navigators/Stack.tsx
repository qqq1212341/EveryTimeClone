import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DetailBulletin from "../screens/DetailBulletin";
import Mypage from "../screens/Mypage";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const nativeStack = createNativeStackNavigator<StackNavigatorParamList>();

function Stack() {
  return (
    <nativeStack.Navigator
      screenOptions={({ navigation: { goBack } }) =>
        // 타입스크립트 어떻게 추가하지??
        ({
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={goBack}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
        })
      }
    >
      <nativeStack.Screen name="Detail" component={DetailBulletin} />
      <nativeStack.Screen
        name="Mypage"
        component={Mypage}
        options={{ headerTitle: "내 정보" }}
      />
    </nativeStack.Navigator>
  );
}

export default Stack;

export type StackNavigatorParamList = {
  Detail: { index: number; bullentinName: string };
  Mypage: undefined;
};
