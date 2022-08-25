import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

interface TextInputWithIconProps {
  Icon?: React.ReactElement;
  placeholder?: string;
  onChangeText?: any;
  secureTextEntry?: boolean;
}
const TextInputWithIcon = ({
  Icon,
  placeholder,
  onChangeText,
  secureTextEntry,
}: TextInputWithIconProps) => {
  return (
    <View style={styles.container}>
      {Icon}
      <TextInput
        style={styles.input}
        clearButtonMode="always"
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
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
