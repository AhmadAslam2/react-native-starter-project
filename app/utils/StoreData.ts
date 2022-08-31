import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: boolean) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user', jsonValue);
  } catch (e) {
    console.log(e);
  }
};
