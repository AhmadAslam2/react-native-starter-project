import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';

import {CustomIcon, PostItemForm} from '../components';
import colors from '../config/colors';
import AppImagePicker from '../components/AppImagePicker';

const ModalScreen = () => {
  const [imageUris, setImageUris] = useState<string[]>([]);
  const navigation = useNavigation<any>();
  const scrollView = useRef<any>();

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
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}>
        <CustomIcon
          name="close-circle-outline"
          type="ionicon"
          size={25}
          color={colors.primary}
        />
      </TouchableOpacity>
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
          <AppImagePicker setImageUris={setImageUris} imageUris={imageUris} />
        </ScrollView>
      </View>
      <View style={styles.formContainer}>
        <PostItemForm imageUris={imageUris} />
      </View>
    </SafeAreaView>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.backgrounnd,
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    marginTop: 20,
    top: 20,
    right: 10,
    fontWeight: 'bold',
    borderRadius: 20,
    zIndex: 1,
  },
  formContainer: {
    paddingTop: 20,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  imagePickerContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
});
