import {FlatList, StyleSheet, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import React, {useContext, useEffect, useState} from 'react';

import {Card} from '../components';
import {useNavigation} from '@react-navigation/native';
import colors from '../config/colors';
import {getListings} from '../api/listingsApi';
import listingInterface from '../utils/listingInterface';
import {AppContext} from '../utils';

const ListingsScreen = () => {
  const navigation = useNavigation<any>();
  const [refreshing, setRefreshing] = useState(false);
  const [listings, setListings] = useState<listingInterface[]>([]);

  const {newListing} = useContext(AppContext);
  //Loading the listing.
  const loadListings = async () => {
    try {
      setRefreshing(true);
      const response = await getListings();
      setListings(response.data.reverse());
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };
  useEffect(() => {
    loadListings();
  }, [newListing]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <FlatList
          onRefresh={() => setRefreshing(false)}
          refreshing={refreshing}
          data={listings}
          keyExtractor={data => data.id.toString()}
          renderItem={({item}) => (
            <Card
              onPress={() => navigation.navigate('ListingDetailScreen', {item})}
              imageUrl={item?.images?.[0].url}
              title={item.title}
              subtitle={item.price}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgrounnd,
    padding: 12,
    //Figure out a better way for this.
    paddingBottom: 95,
  },
  viewStyle: {
    maxWidth: '100%',
  },
});
