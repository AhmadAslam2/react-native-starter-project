import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  MessagesScreen,
  ListingsScreen,
  AccountScreen,
  ListingDetailScreen,
  ModalScreen,
} from '../Screens';
import {CustomIcon} from '../components';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

interface icon {
  name: string;
}
const icons: {[key: string]: icon} = {
  ListingsScreen: {
    name: 'list-outline',
  },
  MessagesScreen: {
    name: 'chatbubble-ellipses-outline',
  },
  ModalScreen: {
    name: 'add-circle-outline',
  },
  ListingDetailScreen: {
    name: 'document-text-outline',
  },
  AccountScreen: {
    name: 'person-outline',
  },
};

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          return (
            <CustomIcon
              name={icons[route.name].name}
              type="ionicon"
              size={25}
              color={colors.secondary}
            />
          );
        },
      })}>
      <Tab.Screen
        name="ListingsScreen"
        component={ListingsScreen}
        options={{
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{tabBarLabel: '', headerShown: false}}
      />
      <Tab.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{tabBarLabel: '', headerShown: false}}
      />
      <Tab.Screen
        name="ListingDetailScreen"
        component={ListingDetailScreen}
        options={{tabBarLabel: '', headerShown: false}}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{tabBarLabel: '', headerShown: false}}
      />
    </Tab.Navigator>
  );
}
