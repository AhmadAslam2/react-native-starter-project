import {Image, StyleSheet} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Formik} from 'formik';
import * as Yup from 'yup';

import TextInputWithIcon from '../components/TextInputWithIcon';
import CustomIcon from '../components/CustomIcon';
import colors from '../config/colors';
import CustomButton from '../components/CustomButton';
import ErrorMessage from '../components/ErrorMessage';

const validationScema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});
const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assests/logo.png')} style={styles.logo} />

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={value => console.log(value)}
        validationSchema={validationScema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
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
              onBlur={() => setFieldTouched('email')}
            />
            <ErrorMessage visible={touched.email} text={errors.email} />

            <TextInputWithIcon
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              placeholder="Enter your Password"
              Icon={
                <CustomIcon
                  name="lock-closed-outline"
                  type="ionicon"
                  size={25}
                  color={colors.lightgrey}
                />
              }
              props={{secureTextEntry: true}}
            />
            <ErrorMessage visible={touched.password} text={errors.password} />
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
