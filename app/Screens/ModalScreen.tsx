import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import {SliderBox} from 'react-native-image-slider-box';
import PropTypes from 'prop-types';

import {CustomIcon, PostItemForm} from '../components';
import colors from '../config/colors';

const images = [
  'https://picsum.photos/id/11/200/300',
  'https://picsum.photos/id/11/200/300',
  'https://picsum.photos/id/11/200/300',
  'https://picsum.photos/id/11/200/300',
];

const ModalScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ListingsScreen')}
        style={styles.closeButton}>
        <CustomIcon
          name="close-circle-outline"
          type="ionicon"
          size={25}
          color={colors.primary}
        />
      </TouchableOpacity>
      <View style={styles.formContainer}>
        <PostItemForm />
      </View>
      {/* <SliderBox images={images} /> */}
    </SafeAreaView>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.backgrounnd,
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    marginTop: 20,
    top: 20,
    right: 10,
    fontWeight: 'bold',
    borderRadius: 20,
    zIndex: 1,
  },
  formContainer: {
    paddingTop: 20,
  },
});
