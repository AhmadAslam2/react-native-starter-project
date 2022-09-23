import {Image, StyleSheet, Text} from 'react-native';
import React, {useContext} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import jwtDecode from 'jwt-decode';
import Toast from 'react-native-toast-message';

import {AppContext, userInterface} from '../utils/AppContext';
import colors from '../config/colors';
import {
  TextInputWithIcon,
  CustomIcon,
  CustomButton,
  ErrorMessage,
} from '../components';
import storageHelper from '../utils/storageHelper';
import loginFormSchema from '../utils/validationSchema/loginFormSchema';
import auth from '../api/authApi';

interface loginVlauesTypes {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const {setUser} = useContext(AppContext);

  const onSubmit = async (loginVlaues: loginVlauesTypes) => {
    try {
      const res = await auth.login(loginVlaues.email, loginVlaues.password);
      storageHelper.storeData('token', res.data);
      const user = jwtDecode<userInterface>(res.data);
      setUser(user);
      storageHelper.storeData('user', user);
      Toast.show({
        type: 'success',
        text1: 'Logged in succesfully',
      });
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Incorrect email or password',
        position: 'bottom',
      });
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assests/logo.png')} style={styles.logo} />
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
