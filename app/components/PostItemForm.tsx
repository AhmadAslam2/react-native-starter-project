import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import DropDownPicker from 'react-native-dropdown-picker';

import TextInputWithIcon from './TextInputWithIcon';
import CustomIcon from './CustomIcon';
import colors from '../config/colors';
import ErrorMessage from './ErrorMessage';
import CustomButton from './CustomButton';
import SafeAreaView from 'react-native-safe-area-view';
import {cardData, cardDataInterface} from '../utils/cardData';
import {useNavigation} from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.string().required().label('Category'),
  description: Yup.string().required().label('Description'),
});

const categories: {label: string; value: string}[] = [
  {label: 'Jacket', value: 'jacket'},
  {label: 'Chair', value: 'chair'},
  {label: 'Desk', value: 'desk'},
  {label: 'Table', value: 'table'},
  {label: 'Car', value: 'car'},
  {label: 'Bike', value: 'bike'},
];
const PostItemForm = () => {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);

  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          title: '',
          price: 0,
          category: '',
          description: '',
        }}
        onSubmit={values => {
          const newCardEntry: cardDataInterface = {
            id: Math.random(),
            title: values.title,
            subtitle: values.price.toString(),
            image: {uri: 'https://picsum.photos/400/400'},
          };
          cardData.unshift(newCardEntry);
        }}
        validationSchema={validationSchema}>
        {({
          handleSubmit,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          setFieldValue,
        }) => (
          <>
            <TextInputWithIcon
              Icon={
                <CustomIcon
                  name="text-outline"
                  type="ionicon"
                  size={25}
                  color={colors.lightgrey}
                />
              }
              props={{
                placeholder: 'Title',
                onBlur: () => setFieldTouched('title'),
                onChangeText: handleChange('title'),
              }}
            />
            <ErrorMessage text={errors.title} visible={touched.title} />
            <TextInputWithIcon
              Icon={
                <CustomIcon
                  name="cash-outline"
                  type="ionicon"
                  size={25}
                  color={colors.lightgrey}
                />
              }
              props={{
                placeholder: 'Price',
                onBlur: () => setFieldTouched('price'),
                onChangeText: handleChange('price'),
              }}
            />
            <ErrorMessage text={errors.price} visible={touched.price} />
            <DropDownPicker
              style={styles.dropdownStyle}
              placeholderStyle={styles.placeholderStyle}
              setOpen={setOpen}
              multiple={false}
              value={value}
              setValue={setValue}
              open={open}
              items={categories}
              onChangeValue={itemvalue => setFieldValue('category', itemvalue)}
            />
            <TextInputWithIcon
              Icon={
                <CustomIcon
                  name="albums-outline"
                  type="ionicon"
                  size={25}
                  color={colors.lightgrey}
                />
              }
              props={{
                placeholder: 'Description',
                onBlur: () => setFieldTouched('description'),
                onChangeText: handleChange('description'),
              }}
            />
            <ErrorMessage
              text={errors.description}
              visible={touched.description}
            />
            <CustomButton
              text="Post"
              onPress={() => {
                handleSubmit();
                navigation.goBack();
              }}
              color={colors.primary}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default PostItemForm;

const styles = StyleSheet.create({
  container: {padding: 10},
  dropdownStyle: {
    borderColor: colors.lightgrey,
    // borderRadius: 10,
    height: 55,
    marginVertical: 10,
  },
  placeholderStyle: {
    color: colors.lightgrey,
  },
});
