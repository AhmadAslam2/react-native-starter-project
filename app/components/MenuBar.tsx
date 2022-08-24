import {Button, StyleSheet, View} from 'react-native';
import React from 'react';

const MenuBar = () => {
  return (
    <View style={styles.container}>
      <Button title="R1" />
      <Button title="R2" />
      <Button title="R3" />
      <Button title="R4" />
    </View>
  );
};
export default MenuBar;

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
