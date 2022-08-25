import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface ErrorMessageProps {
  text: string | undefined;
  visible: boolean | undefined;
}
const ErrorMessage = ({text, visible}: ErrorMessageProps) => {
  return text && visible ? (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  ) : (
    <></>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
  },
  text: {
    color: 'red',
    fontSize: 12,
  },
});
