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
// import ListingDetailScreen from './app/Screens/ListingDetailScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MessagesScreen from './app/Screens/MessagesScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <MessagesScreen />
    </SafeAreaProvider>
  );
};
export default App;
