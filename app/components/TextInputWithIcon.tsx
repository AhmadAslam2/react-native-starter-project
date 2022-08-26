import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';

interface TextInputWithIconProps {
  Icon?: React.ReactElement;
  props?: TextInputProps;
}
const TextInputWithIcon = ({Icon, props = {}}: TextInputWithIconProps) => {
  return (
    <View style={styles.container}>
      {Icon}
      <TextInput
        style={styles.input}
        clearButtonMode="always"
        autoCorrect={false}
        autoCapitalize="none"
        {...props}
      />
    </View>
  );
};

export default TextInputWithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 8,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    marginLeft: 5,
  },
});
