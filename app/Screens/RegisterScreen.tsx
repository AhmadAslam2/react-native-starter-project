import {StyleSheet} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import colors from '../config/colors';

import {
  TextInputWithIcon,
  CustomButton,
  CustomIcon,
  ErrorMessage,
} from '../components';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});
const RegisterScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={values => {
          console.log(values);
          navigation.navigate('ListingsScreen');
        }}
        validationSchema={validationSchema}>
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
  },
});
