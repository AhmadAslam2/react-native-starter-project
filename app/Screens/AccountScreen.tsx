import {FlatList, StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import SafeAreaView from 'react-native-safe-area-view';

import colors from '../config/colors';
import {
  CustomIcon,
  ListItemSeperator,
  ListItemWithIcon,
  ListItemWithImage,
} from '../components';
import {AppContext} from '../utils/AppContext';
import {storeData} from '../utils/StoreData';
import {useNavigation} from '@react-navigation/native';

interface Data {
  title: string;
  iconColor: string;
  iconName: string;
  backgroundColor: string;
  type: string;
  navigation?: string;
}
const listData: Data[] = [
  {
    title: 'My Listings',
    iconColor: 'white',
    iconName: 'list-outline',
    backgroundColor: colors.primary,
    type: 'ionicon',
    navigation: 'ListingsScreen',
  },
  {
    title: 'My Messages',
    iconColor: 'white',
    iconName: 'chatbubble-ellipses-outline',
    backgroundColor: colors.secondary,
    type: 'ionicon',
    navigation: 'MessagesScreen',
  },
];

const AccountScreen = () => {
  const {setUser} = useContext(AppContext);
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userView}>
        <ListItemWithImage
          image={require('../assests/profile.jpg')}
          title={'Ahmad Aslam'}
          description={'React Native Developer @SysPlus'}
        />
      </View>
      <View style={styles.listView}>
        <FlatList
          scrollEnabled={false}
          data={listData}
          keyExtractor={data => data.title}
          renderItem={({item}) => (
            <ListItemWithIcon
              onPress={() => navigation.navigate(item.navigation)}
              title={item.title}
              Icon={
                <CustomIcon
                  backgroundColor={item.backgroundColor}
                  name={item.iconName}
                  size={25}
                  color={item.iconColor}
                  type={item.type}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <View style={styles.logout}>
        <ListItemWithIcon
          onPress={() => {
            setUser(false);
            storeData(false);
          }}
          Icon={
            <CustomIcon
              backgroundColor={colors.danger}
              name="log-out-outline"
              size={25}
              color="white"
              type="ionicon"
            />
          }
          title="Logout"
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgrounnd,
  },
  userView: {
    backgroundColor: 'white',
    marginBottom: 30,
    paddingHorizontal: 15,
    width: '100%',
  },
  listView: {
    backgroundColor: 'white',
    marginBottom: 30,
    width: '100%',
    paddingHorizontal: 15,
  },
  logout: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
});
