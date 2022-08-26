import {Button, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ModalScreen from '../Screens/ModalScreen';

const MenuBar = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('ListingsScreen')}
        title="R1"
      />
      <Button
        onPress={() => navigation.navigate('ListingDetailScreen')}
        title="R2"
      />
      <Button onPress={toggleVisible} title="+" />
      <ModalScreen visible={visible} toggleVisible={toggleVisible} />
      <Button
        onPress={() => navigation.navigate('MessagesScreen')}
        title="R3"
      />
      <Button onPress={() => navigation.navigate('AccountScreen')} title="R4" />
    </View>
  );
};
export default MenuBar;

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
