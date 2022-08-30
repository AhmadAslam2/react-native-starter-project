import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen, RegisterScreen, WelcomeScreen} from '../Screens';

const Stack = createNativeStackNavigator();
interface AuthNavigatorProps {
  toggleUser(): void;
}
const AuthNavigator = ({toggleUser}: AuthNavigatorProps) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen
        name="LoginScreen"
        children={() => <LoginScreen toggleUser={toggleUser} />}
      />
      <Stack.Screen
        name="RegisterScreen"
        children={() => <RegisterScreen toggleUser={toggleUser} />}
        initialParams={toggleUser}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
