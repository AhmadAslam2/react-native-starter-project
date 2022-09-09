import {StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';

import {Card, ListItemWithImage} from '../components';
import colors from '../config/colors';
import listingInterface from '../utils/listingInterface';

type ParamList = {
  ListingDetailScreen: {
    item: listingInterface;
  };
};
const ListingDetailScreen = () => {
  const route = useRoute<RouteProp<ParamList, 'ListingDetailScreen'>>();
  const item = route?.params?.item;
  return (
    <SafeAreaView style={styles.container}>
      <Card
        imageUrl={item.images[0].url}
        title={item.title}
        subtitle={item.price}
      />
      <ListItemWithImage
        image={require('../assests/profile.jpg')}
        title="Rana William"
        description="5 Listings"
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
