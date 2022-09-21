import {Image, StyleSheet, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import jwtDecode from 'jwt-decode';

import {AppContext} from '../utils/AppContext';
import colors from '../config/colors';
import {
  TextInputWithIcon,
  CustomIcon,
  CustomButton,
  ErrorMessage,
} from '../components';
import storageHelper from '../utils/storageHelper';
import loginFormSchema from '../utils/validationSchema/loginFormSchema';
import auth from '../api/auth';

interface loginVlauesTypes {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  const {setUser} = useContext(AppContext);

  const onSubmit = async (loginVlaues: loginVlauesTypes) => {
    try {
      const res = await auth.login(loginVlaues.email, loginVlaues.password);
      setLoginFailed(false);
      const user = jwtDecode(res.data);
      setUser(user);
      storageHelper.storeData('user', user);
    } catch (err) {
      setLoginFailed(true);
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assests/logo.png')} style={styles.logo} />
      <ErrorMessage
        visible={loginFailed}
        text={'Incorrect email or password'}
      />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          onSubmit(values);
        }}
        validationSchema={loginFormSchema}>
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
            <Text
              style={styles.RegisterLink}
              onPress={() => navigation.navigate('RegisterScreen')}>
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
    backgroundColor: colors.backgrounnd,
    flex: 1,
  },
  logo: {
    marginVertical: 30,
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  RegisterLink: {
    alignSelf: 'flex-end',
    fontSize: 14,
    color: '#0969da',
    marginRight: 5,
  },
});
