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
// import OfflineStatus from './app/components/OfflineStatus';

const App = () => {
  const [user, setUser] = useState<any>(null);
  const [newListing, setNewListing] = useState(false);
  const [loading, setLoading] = useState(false);

  //Changing the value newListing
  const toggleNewListing = () => {
    if (newListing) {
      setNewListing(false);
    } else {
      setNewListing(true);
    }
  };

  //Getting the current status of the user
  const getUser = async () => {
    const response = await AsyncStorage.getItem('user');
    setUser(response);
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
      {/* <OfflineStatus /> */}
      <NavigationContainer>
        <AppContext.Provider
          value={{user, setUser, newListing, toggleNewListing}}>
          {loading ? <Splash /> : user ? <MainNavigator /> : <AuthNavigator />}
        </AppContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
