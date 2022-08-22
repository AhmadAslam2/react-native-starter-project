import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import colors from '../config/colors';

import CustomButton from '../components/CustomButton';
const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assests/welcomScreenImage.jpg')}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../assests/logo.png')}
          />
          <Text style={styles.logoText}>
            Sell Your
            <Text style={styles.logoTextHalf}> Stuff</Text>
          </Text>
        </View>
        <View>
          <CustomButton color={colors.primary} text="REGISTER" />
          <CustomButton color={colors.secondary} text="SIGN IN" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  logoContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    top: 25,
    right: 25,
  },
  logo: {
    width: 200,
    height: 200,
    shadowOffset: {width: 10, height: 10},
    shadowColor: colors.secondary,
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  logoText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: -25,
  },
  logoTextHalf: {
    color: colors.primary,
  },
});
