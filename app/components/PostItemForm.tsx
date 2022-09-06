import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import {Formik} from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation} from '@react-navigation/native';

import {
  AppImagePicker,
  CustomButton,
  CustomIcon,
  ErrorMessage,
  TextInputWithIcon,
} from '.';
import colors from '../config/colors';
import {postFormSchema} from '../utils/validationSchema';
import {AppContext, categories} from '../utils';
import {cardDataInterface} from '../utils/cardData';

const initialValues = {
  title: '',
  price: 0,
  category: '',
  description: '',
};
const PostItemForm = () => {
  const [imageUris, setImageUris] = useState<string[]>([]);
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const navigation = useNavigation<any>();
  const {Data, setData} = useContext(AppContext);
  const scrollView = useRef<any>();

  const onSubmit = (values: any, resetForm: any) => {
    const newCardEntry: cardDataInterface = {
      id: Math.random(),
      title: values.title,
      subtitle: values.price.toString(),
      image: {uri: imageUris[0] ?? '../assests/jacket.jpg'},
    };
    const newData = [newCardEntry, ...Data];
    setData(newData);
    setImageUris([]);
    resetForm({});
    setValue(null);
    navigation.navigate('ListingsScreen');
  };

  const removeImage = (imageUri: string) => {
    Alert.alert('Delete', 'Are you sure you want to delete this image?', [
      {
        text: 'Yes',
        onPress: () => setImageUris(imageUris.filter(uri => uri !== imageUri)),
      },
      {
        text: 'Cancel',
      },
    ]);
  };
  return (
    <SafeAreaView>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, {resetForm}) => {
          onSubmit(values, resetForm);
        }}
        validationSchema={postFormSchema}>
        {({
          values,
          handleSubmit,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          setFieldValue,
        }) => (
          <>
            <View style={styles.imagePickerContainer}>
              <ScrollView
                onContentSizeChange={() => scrollView?.current?.scrollToEnd()}
                ref={scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {imageUris.map(uri => (
                  <TouchableOpacity key={uri} onPress={() => removeImage(uri)}>
                    <Image source={{uri: uri}} style={styles.imageStyle} />
                  </TouchableOpacity>
                ))}
                <AppImagePicker
                  setImageUris={setImageUris}
                  imageUris={imageUris}
                />
              </ScrollView>
            </View>
            {!imageUris.length && (
              <Text style={styles.errortext}>
                Please select atleast one image
              </Text>
            )}
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
                value: values.title || '',
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
                //@ts-ignore
                value: values.price || undefined,
              }}
            />
            <ErrorMessage text={errors.price} visible={touched.price} />
            <DropDownPicker
              dropDownContainerStyle={styles.dropDownContainerStyle}
              listItemContainerStyle={styles.listItemContainerStyle}
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
            <ErrorMessage text={errors.category} visible={touched.category} />
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
                value: values.description || '',
              }}
            />
            <ErrorMessage
              text={errors.description}
              visible={touched.description}
            />
            <CustomButton
              text="Post"
              onPress={() => {
                !!imageUris.length && handleSubmit();
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
  dropdownStyle: {
    borderColor: 'transparent',
    borderRadius: 8,
    height: 55,
    marginVertical: 10,
  },
  placeholderStyle: {
    color: colors.lightgrey,
  },
  dropDownContainerStyle: {
    borderColor: 'transparent',
  },
  listItemContainerStyle: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  imagePickerContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  errortext: {
    color: 'red',
    fontSize: 12,
  },
});
