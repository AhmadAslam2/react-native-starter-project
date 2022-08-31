import {Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import colors from '../config/colors';
import {
  TextInputWithIcon,
  CustomIcon,
  CustomButton,
  ErrorMessage,
} from '../components';

const validationScema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assests/logo.png')} style={styles.logo} />

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={validationScema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <TextInputWithIcon
              Icon={
                <CustomIcon
                  name="mail-outline"
                  type="ionicon"
                  size={25}
                  color={colors.lightgrey}
                />
              }
              props={{
                placeholder: 'Enter Your Email',
                onBlur: () => setFieldTouched('email'),
                onChangeText: handleChange('email'),
              }}
            />
            <ErrorMessage visible={touched.email} text={errors.email} />

            <TextInputWithIcon
              Icon={
                <CustomIcon
                  name="lock-closed-outline"
                  type="ionicon"
                  size={25}
                  color={colors.lightgrey}
                />
              }
              props={{
                placeholder: 'Enter Your Password',
                secureTextEntry: true,
                onBlur: () => setFieldTouched('password'),
                onChangeText: handleChange('password'),
              }}
            />
            <ErrorMessage visible={touched.password} text={errors.password} />
            <Text onPress={() => navigation.navigate('RegisterScreen')}>
              Register
            </Text>
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
