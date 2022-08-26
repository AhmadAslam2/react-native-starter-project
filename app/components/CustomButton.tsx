import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface CustomButtonProps {
  color: string;
  text: string;
  onPress(): void;
}

const CustomButton = ({color, text, onPress}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  container: {
    height: 50,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
