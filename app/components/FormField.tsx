// import {Text, View} from 'react-native';
import React from 'react';
import TextInputWithIcon from './TextInputWithIcon';
import CustomIcon from './CustomIcon';
import colors from '../config/colors';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik';

interface FormFieldProps {
  name: string;
}
const FormField = ({name}: FormFieldProps) => {
  const {handleChange, setFieldTouched, touched, errors} = useFormikContext();
  return (
    <>
      <TextInputWithIcon
        onChangeText={handleChange(name)}
        Icon={
          <CustomIcon
            name="text-outline"
            type="ionicon"
            size={25}
            color={colors.lightgrey}
          />
        }
        props={{onBlur: () => setFieldTouched(name)}}
      />
      <ErrorMessage text={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
