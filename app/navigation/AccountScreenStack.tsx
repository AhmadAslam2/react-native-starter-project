import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountScreen, WelcomeScreen} from '../Screens';

const Stack = createNativeStackNavigator();
export default function AccountScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}
