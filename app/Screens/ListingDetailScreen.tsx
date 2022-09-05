import {Button, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import React from 'react';

import {Card, ListItemWithImage} from '../components';
import colors from '../config/colors';
import {useNavigation} from '@react-navigation/native';

const ListingDetailScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <Card
        image={require('../assests/jacket.jpg')}
        title="Leather Jacket"
        subtitle="100"
      />
      <ListItemWithImage
        image={require('../assests/profile.jpg')}
        title="Rana William"
        description="5 Listings"
      />
      <Button
        title="Message"
        onPress={() => navigation.navigate('MessagesScreen')}
      />
    </SafeAreaView>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.backgrounnd,
    flex: 1,
  },
});
