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
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        tabBarIcon: ({focused}) => {
          return (
            <CustomIcon
              name={icons[route.name].name}
              type="ionicon"
              size={25}
              color={focused ? 'red' : 'grey'}
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
