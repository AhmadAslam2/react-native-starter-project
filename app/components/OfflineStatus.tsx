import {StyleSheet, Text} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import NetInfo from '@react-native-community/netinfo';

const OfflineStatus = () => {
  // Fetching the network status only once.
  const unsubscribe = NetInfo.addEventListener(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
  });

  // Unsubscribe
  unsubscribe();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>No internet connection</Text>
    </SafeAreaView>
  );
};

export default OfflineStatus;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    paddingBottom: 5,
    fontWeight: '500',
  },
});
