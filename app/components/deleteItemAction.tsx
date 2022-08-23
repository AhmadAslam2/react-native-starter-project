import {StyleSheet, View} from 'react-native';
import React from 'react';

import colors from '../config/colors';
import {Icon} from '@rneui/themed';

const deleteItemAction = () => {
  return (
    <View style={styles.conatiner}>
      <Icon
        reverse
        name="ios-american-football"
        type="ionicon"
        color="#517fa4"
      />
    </View>
  );
};

export default deleteItemAction;

const styles = StyleSheet.create({
  conatiner: {
    width: 80,
    backgroundColor: colors.danger,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
