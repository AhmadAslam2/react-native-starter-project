import {FlatList, StyleSheet, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import React, {useState} from 'react';

import {Card} from '../components';
import {cardData, getData} from '../utils/cardData';
import {useNavigation} from '@react-navigation/native';
import colors from '../config/colors';

const ListingsScreen = () => {
  const navigation = useNavigation<any>();
  const [Data, setData] = useState(cardData);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = () => {
    setRefreshing(true);
    setData(getData);
    setRefreshing(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <FlatList
          onRefresh={fetchData}
          refreshing={refreshing}
          data={Data}
          keyExtractor={data => data.id.toString()}
          renderItem={({item}) => (
            <Card
              onPress={() => navigation.navigate('ListingDetailScreen')}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
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
  },
  viewStyle: {
    maxWidth: '100%',
  },
});
