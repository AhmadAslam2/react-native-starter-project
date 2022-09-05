import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListingDetailScreen, ListingsScreen, MessagesScreen} from '../Screens';

const Stack = createNativeStackNavigator();
const HomeNavigatorStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
      <Stack.Screen
        name="ListingDetailScreen"
        component={ListingDetailScreen}
      />
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigatorStack;
