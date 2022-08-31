import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AppContext} from '../utils/AppContext';
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
    name: 'add-circle-outline',
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
  const setUser = useContext(AppContext);

  console.log(setUser);

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
          height: 60,
          paddingTop: 25,
        },
        tabBarIcon: ({focused}) => {
          return (
            <CustomIcon
              backgroundColor={
                icons[route.name].name === 'ModalScreen'
                  ? `${colors.primary}`
                  : ''
              }
              name={icons[route.name].name}
              type="ionicon"
              size={icons[route.name].size ?? 25}
              color={focused ? colors.primary : 'grey'}
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
