import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen, RegisterScreen, WelcomeScreen} from '../Screens';
import AppImagePicker from '../components/AppImagePicker';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ImagePicker" component={AppImagePicker} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
