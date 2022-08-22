import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';

const Playground = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view} />
      <View style={styles.view} />
      <View style={styles.view} />
      <View style={styles.view} />
      <View style={styles.view} />
      <View style={styles.view} />
    </SafeAreaView>
  );
};

export default Playground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  view: {
    backgroundColor: 'red',
    width: 140,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
});
