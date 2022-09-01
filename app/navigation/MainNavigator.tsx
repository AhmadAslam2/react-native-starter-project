import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  MessagesScreen,
  ListingsScreen,
  ListingDetailScreen,
  ModalScreen,
  AccountScreen,
} from '../Screens';
import {CustomIcon} from '../components';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

interface icon {
  name: string;
  size?: number;
}
const icons: {[key: string]: icon} = {
  ListingsScreen: {
    name: 'list-outline',
  },
  MessagesScreen: {
    name: 'chatbubble-ellipses-outline',
  },
  ModalScreen: {
    name: 'add-circle',
    size: 40,
  },
  ListingDetailScreen: {
    name: 'document-text-outline',
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
      <Tab.Screen name="ListingsScreen" component={ListingsScreen} />
      <Tab.Screen name="MessagesScreen" component={MessagesScreen} />
      <Tab.Screen name="ModalScreen" component={ModalScreen} />
      <Tab.Screen name="ListingDetailScreen" component={ListingDetailScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
}
