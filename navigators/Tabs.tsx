import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import TimeTable from "../screens/TimeTable";
import BulletinList from "../screens/BulletinList";
import Notification from "../screens/Notification";
import Setting from "../screens/Setting";
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="home-outline"
              size={28}
              color={focused ? "black" : "gray"}
            />
          ),
          tabBarIconStyle: { marginTop: 10 },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="TimeTable"
        component={TimeTable}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              name="calendar"
              size={28}
              color={focused ? "black" : "gray"}
            />
          ),
          tabBarIconStyle: { marginTop: 10 },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="BulletinList"
        component={BulletinList}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name="list-alt"
              size={28}
              color={focused ? "black" : "gray"}
            />
          ),
          tabBarIconStyle: { marginTop: 14 },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="ios-notifications-outline"
              size={28}
              color={focused ? "black" : "gray"}
            />
          ),
          tabBarIconStyle: { marginTop: 13 },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="ios-settings-outline"
              size={28}
              color={focused ? "black" : "gray"}
            />
          ),
          tabBarIconStyle: { marginTop: 15 },
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

export type TabNavigatorParamList = {
  // undifined means no parameter
  Home: undefined;
  TimeTable: undefined;
  BulletinList: undefined;
  Notification: undefined;
  Setting: undefined;
};
