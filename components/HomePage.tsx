import {
  SafeAreaView,
  StyleSheet,
  Button,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import Card from './Card';
const HomePage = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>
        <Card width={220} height={200} />
        <Card width={250} height={200} />
        <Card width={300} height={200} />
        <Card width={350} height={200} />
      </ScrollView>
      <ScrollView horizontal={true}>
        <Card width={150} height={150} horizontal={true} />
        <Card width={150} height={150} horizontal={true} />
        <Card width={150} height={150} horizontal={true} />
        <Card width={150} height={150} horizontal={true} />
      </ScrollView>
      <Button
        title="Click"
        onPress={() =>
          Alert.prompt(
            'Enter Your Name',
            'We want to say hello to you',
            text => {
              Alert.alert(`Hello ${text}`);
            },
          )
        }
      />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'beige',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});
