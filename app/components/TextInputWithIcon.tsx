import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';

interface TextInputWithIconProps {
  Icon?: React.ReactElement;
  placeholder?: string;
  onChangeText?: any;
  props?: TextInputProps;
  onBlur: any;
}
const TextInputWithIcon = ({
  Icon,
  placeholder,
  onChangeText,
  onBlur,
  props = {},
}: TextInputWithIconProps) => {
  return (
    <View style={styles.container}>
      {Icon}
      <TextInput
        onBlur={onBlur}
        style={styles.input}
        clearButtonMode="always"
        onChangeText={onChangeText}
        placeholder={placeholder}
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
    borderRadius: 15,
  },
  input: {
    flex: 1,
    marginLeft: 5,
  },
});
