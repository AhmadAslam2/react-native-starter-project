import {StyleSheet} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Formik} from 'formik';
import * as Yup from 'yup';

import TextInputWithIcon from '../components/TextInputWithIcon';
import CustomButton from '../components/CustomButton';
import colors from '../config/colors';
import CustomIcon from '../components/CustomIcon';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});
const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={validationSchema}>
        {({handleSubmit, handleChange, setFieldTouched, touched, errors}) => (
          <>
            <TextInputWithIcon
              placeholder="Enter Your Full Name"
              onChangeText={handleChange('name')}
              Icon={
                <CustomIcon
                  name="person-outline"
                  type="ionicon"
                  size={25}
                  color={colors.lightgrey}
                />
              }
              onBlur={() => setFieldTouched('name')}
            />
            <ErrorMessage text={errors.name} visible={touched.name} />
            <TextInputWithIcon
              placeholder="Enter Your Email"
              onChangeText={handleChange('email')}
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
            <ErrorMessage text={errors.email} visible={touched.email} />
            <TextInputWithIcon
              placeholder="Set Your Password"
              onChangeText={handleChange('password')}
              Icon={
                <CustomIcon
                  name="lock-closed-outline"
                  type="ionicon"
                  size={25}
                  color={colors.lightgrey}
                />
              }
              onBlur={() => setFieldTouched('password')}
              props={{secureTextEntry: true}}
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
