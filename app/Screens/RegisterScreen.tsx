import {StyleSheet, Text} from 'react-native';
import React, {useContext} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

import colors from '../config/colors';
import {
  TextInputWithIcon,
  CustomButton,
  CustomIcon,
  ErrorMessage,
} from '../components';
import {AppContext} from '../utils/AppContext';
// import storageHelper from '../utils/storageHelper';
import registerFormSchema from '../utils/validationSchema/registerFormSchema';

const RegisterScreen = () => {
  const navigation = useNavigation<any>();
  const {setUser} = useContext(AppContext);
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={values => {
          console.log(values);
          setUser(true);
          // storageHelper.storeData(true);
        }}
        validationSchema={registerFormSchema}>
        {({handleSubmit, handleChange, setFieldTouched, touched, errors}) => (
          <>
            <TextInputWithIcon
              Icon={
                <CustomIcon
                  name="person-outline"
                  type="ionicon"
                  size={25}
                  color={colors.lightgrey}
                />
              }
              props={{
                placeholder: 'Enter Your Full Name',
                onBlur: () => setFieldTouched('name'),
                onChangeText: handleChange('name'),
              }}
            />
            <ErrorMessage text={errors.name} visible={touched.name} />
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
            <ErrorMessage text={errors.email} visible={touched.email} />
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
                placeholder: 'Set Your Password',
                secureTextEntry: true,
                onBlur: () => setFieldTouched('password'),
                onChangeText: handleChange('password'),
              }}
            />
            <ErrorMessage text={errors.password} visible={touched.password} />
            <Text
              style={styles.LoginLink}
              onPress={() => navigation.navigate('LoginScreen')}>
              Login
            </Text>
            <CustomButton
              text="Register"
              onPress={handleSubmit}
              color={colors.primary}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.backgrounnd,
    flex: 1,
  },
  LoginLink: {
    alignSelf: 'flex-end',
    fontSize: 14,
    color: '#0969da',
    marginRight: 5,
  },
});
