import {FlatList, ImageSourcePropType, StyleSheet, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import React from 'react';
import Card from '../components/Card';
import MenuBar from '../components/MenuBar';

interface cardData {
  id: number;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
}
const Data: cardData[] = [
  {
    id: 1,
    image: {uri: 'https://picsum.photos/400/300'},
    title: 'Random thing',
    subtitle: '$300',
  },
  {
    id: 3,
    image: require('../assests/jacket.jpg'),
    title: 'Leather jacket',
    subtitle: '$100',
  },
  {
    id: 2,
    image: {uri: 'https://picsum.photos/400/300'},
    title: 'Leather jacket',
    subtitle: '$50',
  },
];

const ListingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <FlatList
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
