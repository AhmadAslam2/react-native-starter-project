import {FlatList, StyleSheet, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import React, {useContext, useState} from 'react';

import {Card} from '../components';
import {useNavigation} from '@react-navigation/native';
import colors from '../config/colors';
import {AppContext} from '../utils/AppContext';

const ListingsScreen = () => {
  const navigation = useNavigation<any>();
  const [refreshing, setRefreshing] = useState(false);
  const {Data} = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <FlatList
          onRefresh={() => setRefreshing(false)}
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
    //Figure out a better way for this.
    paddingBottom: 95,
  },
  viewStyle: {
    maxWidth: '100%',
  },
});
