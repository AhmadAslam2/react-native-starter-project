import {FlatList, StyleSheet, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import React, {useState} from 'react';

import {Card, MenuBar} from '../components';
import {cardData, getData} from '../utils/cardData';

const ListingsScreen = () => {
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
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          )}
        />
        <MenuBar />
      </View>
    </SafeAreaView>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f1f3f4',
    padding: 12,
  },
  viewStyle: {
    maxWidth: '100%',
  },
});
