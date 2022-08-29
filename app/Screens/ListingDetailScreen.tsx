import {StyleSheet, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import React from 'react';

import {Card, ListItemWithImage} from '../components';

const ListingDetailScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Card
          image={require('../assests/jacket.jpg')}
          title="Leather Jacket"
          subtitle="$100"
        />
        <ListItemWithImage
          image={require('../assests/profile.jpg')}
          title="Rana William"
          description="5 Listings"
        />
        <ListItemWithImage
          image={require('../assests/profile.jpg')}
          title="Rana William"
          description="5 Listings"
        />
      </View>
    </SafeAreaView>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
