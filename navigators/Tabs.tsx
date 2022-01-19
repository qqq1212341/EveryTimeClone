import React from 'react';

import { Feather, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BulletinList from '../screens/BulletinList';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Setting from '../screens/Setting';
import TimeTable from '../screens/TimeTable';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name='home-outline' size={25} color={focused ? 'black' : 'gray'} />
          ),
          tabBarIconStyle: { marginTop: 10 },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name='TimeTable'
        component={TimeTable}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name='calendar' size={25} color={focused ? 'black' : 'gray'} />
          ),
          tabBarIconStyle: { marginTop: 10 },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name='BulletinList'
        component={BulletinList}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5 name='list-alt' size={25} color={focused ? 'black' : 'gray'} />
          ),
          tabBarIconStyle: { marginTop: 14 },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name='Notification'
        component={Notification}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name='ios-notifications-outline'
              size={25}
              color={focused ? 'black' : 'gray'}
            />
          ),
          tabBarIconStyle: { marginTop: 13 },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name='Setting'
        component={Setting}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name='ios-settings-outline' size={25} color={focused ? 'black' : 'gray'} />
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
