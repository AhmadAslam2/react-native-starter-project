import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import colors from '../config/colors';
import {Icon} from '@rneui/themed';

interface SwipeRightActionProps {
  onPress?: any;
}
const SwipeRightAction = ({onPress}: SwipeRightActionProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.conatiner}>
      <Icon name="trash-outline" type="ionicon" size={30} color="black" />
    </TouchableOpacity>
  );
};

export default SwipeRightAction;

const styles = StyleSheet.create({
  conatiner: {
    width: 80,
    backgroundColor: colors.danger,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
