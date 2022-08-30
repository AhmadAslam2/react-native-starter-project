import {FlatList, StyleSheet, TouchableHighlight, View} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';

import colors from '../config/colors';
import {
  CustomIcon,
  ListItemSeperator,
  ListItemWithIcon,
  ListItemWithImage,
} from '../components';

interface Data {
  title: string;
  iconColor: string;
  iconName: string;
  backgroundColor: string;
  type: string;
}
const listData: Data[] = [
  {
    title: 'My Listings',
    iconColor: 'white',
    iconName: 'list-outline',
    backgroundColor: colors.primary,
    type: 'ionicon',
  },
  {
    title: 'My Messages',
    iconColor: 'white',
    iconName: 'chatbubble-ellipses-outline',
    backgroundColor: colors.secondary,
    type: 'ionicon',
  },
];

interface AccountScreenProps {
  toggleUser(): void;
}
const AccountScreen = ({toggleUser}: AccountScreenProps) => {
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
      <TouchableHighlight
        underlayColor={colors.lightgrey}
        onPress={toggleUser}
        style={styles.logout}>
        <ListItemWithIcon
          Icon={
            <CustomIcon
              backgroundColor="#ffe66d"
              name="log-out-outline"
              size={25}
              color="black"
              type="ionicon"
            />
          }
          title="Logout"
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
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
    marginBottom: 30,
    width: '100%',
    paddingHorizontal: 15,
  },
});
