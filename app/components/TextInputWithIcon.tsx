import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface TextInputWithIconProps {
  Icon: React.ReactElement;
}
const TextInputWithIcon = ({Icon}: TextInputWithIconProps) => {
  return (
    <View style={styles.container}>
      {Icon}
      <Text>TextInputWithIcon</Text>
    </View>
  );
};

export default TextInputWithIcon;

const styles = StyleSheet.create({
  container: {},
});
