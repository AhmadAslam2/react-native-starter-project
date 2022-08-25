import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

interface TextInputWithIconProps {
  Icon?: React.ReactElement;
  placeholder?: string;
}
const TextInputWithIcon = ({Icon, placeholder}: TextInputWithIconProps) => {
  const [text, setText] = useState('');
  return (
    <>
      <Text>{text}</Text>
      <View style={styles.container}>
        {Icon}
        <TextInput
          style={styles.input}
          clearButtonMode="always"
          onChangeText={value => setText(value)}
          placeholder={placeholder}
          autoCorrect={false}
        />
      </View>
    </>
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
    marginLeft: 10,
    width: '88%',
  },
});
