/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AppContext, Splash} from './app/utils';
import {AuthNavigator, MainNavigator} from './app/navigation';
import {getCategories} from './app/api/categoriesApi';
import {setCategories} from './app/utils/pickerCategories';

const App = () => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);

  //Getting the current status of the user
  const getUser = async () => {
    const response = await AsyncStorage.getItem('user');
    setUser(response != null ? JSON.parse(response) : false);
  };

  //Loading the categories for the picker
  const loadCategories = async () => {
    try {
      setLoading(true);
      const response = await getCategories();
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCategories();
    getUser();
  }, [user]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppContext.Provider value={{user, setUser}}>
          {loading ? <Splash /> : user ? <MainNavigator /> : <AuthNavigator />}
        </AppContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
