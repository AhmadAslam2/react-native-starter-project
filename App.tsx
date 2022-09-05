/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainNavigator from './app/navigation/MainNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import {AppContext} from './app/utils/AppContext';
import SplashNavigator from './app/navigation/SplashNavigator';
import {cardData} from './app/utils/cardData';

const App = () => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);
  const [Data, setData] = useState(cardData);
  const getData = () => {
    try {
      setTimeout(async () => {
        const response = await AsyncStorage.getItem('user');
        setUser(response != null ? JSON.parse(response) : false);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  getData();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppContext.Provider value={{user, setUser, Data, setData}}>
          {loading ? (
            <SplashNavigator />
          ) : user ? (
            <MainNavigator />
          ) : (
            <AuthNavigator />
          )}
        </AppContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
