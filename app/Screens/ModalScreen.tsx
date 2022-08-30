import {Button, StyleSheet, View} from 'react-native';
import React from 'react';

import {PostItemForm} from '../components';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';

const ModalScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <PostItemForm />
      <View style={styles.closeButton}>
        <Button
          color="black"
          title="X"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  closeButton: {},
});
