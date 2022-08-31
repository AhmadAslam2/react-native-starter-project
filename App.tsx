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

import MainNavigator from './app/navigation/MainNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import {AppContext} from './app/utils/AppContext';

const App = () => {
  const [user, setUser] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppContext.Provider value={setUser.toString()}>
          {user ? <MainNavigator /> : <AuthNavigator />}
        </AppContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
