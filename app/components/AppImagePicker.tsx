import {
  // Image,
  StyleSheet,
  // Alert,
  TouchableOpacity,
  // TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import SafeAreaView from 'react-native-safe-area-view';
import CustomIcon from './CustomIcon';
import colors from '../config/colors';

interface AppImagePickerProps {
  imageUris: string[] | null;
  setImageUris: any;
}
const AppImagePicker = ({imageUris, setImageUris}: AppImagePickerProps) => {
  const selectImage = async () => {
    const res = await launchImageLibrary({mediaType: 'photo'}, response => {
      return response;
    });
    const newUri = res?.assets?.[0]?.uri ?? null;

    newUri && setImageUris(imageUris?.map(uri => uri).concat(newUri));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
        <CustomIcon
          name="camera-outline"
          type="ionicon"
          size={40}
          color={colors.primary}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AppImagePicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  selectButton: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
