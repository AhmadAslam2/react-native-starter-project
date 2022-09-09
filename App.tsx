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
import {getListings} from './app/api/listingsApi';
import {getCategories} from './app/api/categoriesApi';
import {setCategories} from './app/utils/pickerCategories';

const App = () => {
  const [user, setUser] = useState(false);
  const [listings, setListings] = useState(undefined);
  const [loading, setLoading] = useState(false);

  //Loading the listing.
  const loadListings = async () => {
    try {
      setLoading(true);
      const response = await getListings();
      setListings(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  //Getting the current status of the user
  const getUser = async () => {
    const response = await AsyncStorage.getItem('user');
    setUser(response != null ? JSON.parse(response) : false);
  };

  //Loading the categories for the picker
  const loadCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCategories();
    getUser();
    if (user) {
      loadListings();
    }
  }, [user]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppContext.Provider value={{user, setUser, listings}}>
          {loading ? <Splash /> : user ? <MainNavigator /> : <AuthNavigator />}
        </AppContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
