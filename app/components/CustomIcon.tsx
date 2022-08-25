import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
interface CustomIconProps {
  backgroundColor: string;
  name: string;
  size: number;
  color: string;
  type: string;
}

const CustomIcon = ({
  backgroundColor = 'white',
  name,
  size,
  color,
  type,
}: CustomIconProps) => {
  return (
    <View style={[styles.container, {backgroundColor: `${backgroundColor}`}]}>
      <Icon name={name} size={size} color={color} type={type} />
    </View>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
