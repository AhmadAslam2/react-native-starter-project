import {Image, StyleSheet} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Formik} from 'formik';

import TextInputWithIcon from '../components/TextInputWithIcon';
import CustomIcon from '../components/CustomIcon';
import colors from '../config/colors';
import CustomButton from '../components/CustomButton';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assests/logo.png')} style={styles.logo} />

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={value => console.log(value)}>
        {({handleChange, handleSubmit}) => (
          <>
            <TextInputWithIcon
              onChangeText={handleChange('email')}
              placeholder="Enter your Email"
              Icon={
                <CustomIcon
                  name="mail-outline"
                  type="ionicon"
                  size={25}
                  color={colors.lightgrey}
                />
              }
            />
            <TextInputWithIcon
              onChangeText={handleChange('password')}
              placeholder="Enter your Password"
              secureTextEntry={true}
              Icon={
                <CustomIcon
                  name="lock-closed-outline"
                  type="ionicon"
                  size={25}
                  color={colors.lightgrey}
                />
              }
            />
            <CustomButton
              color={colors.primary}
              text="Login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    marginVertical: 30,
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
