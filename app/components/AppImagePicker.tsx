import {Button, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import SafeAreaView from 'react-native-safe-area-view';

const AppImagePicker = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const selectImage = async () => {
    const res = await launchImageLibrary({mediaType: 'photo'}, response => {
      return response;
    });
    const newUri = res?.assets?.[0]?.uri ?? null;
    setImageUri(newUri);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Image" onPress={selectImage} />
      {imageUri && <Image source={{uri: imageUri}} style={styles.imageStyle} />}
    </SafeAreaView>
  );
};

export default AppImagePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
});
