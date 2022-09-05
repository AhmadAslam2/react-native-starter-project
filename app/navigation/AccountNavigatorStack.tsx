import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountScreen, MessagesScreen} from '../Screens';

const Stack = createNativeStackNavigator();
const AccountNavigatorStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigatorStack;
