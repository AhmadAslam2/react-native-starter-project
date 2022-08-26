/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AccountScreen,
  ListingDetailScreen,
  ListingsScreen,
  LoginScreen,
  MessagesScreen,
  RegisterScreen,
  WelcomeScreen,
} from './app/Screens';

type StackParams = {
  WelcomeScreen: undefined;
  AccountScreen: undefined;
  ListingsScreen: undefined;
  ListingDetailScreen: undefined;
  MessagesScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};
const Stack = createNativeStackNavigator<StackParams>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="AccountScreen" component={AccountScreen} />
          <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
          <Stack.Screen
            name="ListingDetailScreen"
            component={ListingDetailScreen}
          />
          <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
