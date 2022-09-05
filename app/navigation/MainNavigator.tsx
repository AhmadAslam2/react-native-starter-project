import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ModalScreen, AccountScreen} from '../Screens';
import {CustomIcon} from '../components';
import colors from '../config/colors';
import HomeNavigatorStack from './HomeNavigatorStack';

const Tab = createBottomTabNavigator();

interface icon {
  name: string;
  size?: number;
}
const icons: {[key: string]: icon} = {
  HomeTab: {
    name: 'home-outline',
  },
  ModalScreen: {
    name: 'add-circle',
    size: 40,
  },
  AccountScreen: {
    name: 'person-outline',
  },
};

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 70,
        },
        tabBarItemStyle: {
          height: 70,
        },
        tabBarIcon: ({focused}) => {
          return (
            <CustomIcon
              name={icons[route.name].name}
              type="ionicon"
              size={icons[route.name].size ?? 30}
              color={focused ? colors.primary : colors.secondary}
            />
          );
        },
      })}>
      <Tab.Screen name="HomeTab" component={HomeNavigatorStack} />
      <Tab.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{tabBarIconStyle: {zIndex: 12}}}
      />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
}
