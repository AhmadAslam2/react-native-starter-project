import {FlatList, ImageSourcePropType, StyleSheet} from 'react-native';
import React from 'react';
import ListItemWithImage from '../components/ListItemWithImage';
import SafeAreaView from 'react-native-safe-area-view';
import ListItemSeperator from '../components/ListItemSeperator';
import deleteItemAction from '../components/deleteItemAction';

interface Message {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}
const messages: Message[] = [
  {
    id: '112',
    title: 'Rana Joseph',
    description: 'I am under waterr woooo',
    image: require('../assests/profile.jpg'),
  },
  {
    id: '212',
    title: 'Rana Joseph',
    description: 'I am under waterr woooo',
    image: require('../assests/profile.jpg'),
  },
  {
    id: '3',
    title: 'Rana Joseph',
    description: 'I am under waterr woooo',
    image: require('../assests/profile.jpg'),
  },
];

const MessagesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={message => message.id}
        renderItem={({item}) => (
          <ListItemWithImage
            image={item.image}
            title={item.title}
            description={item.description}
            onPress={() => console.log(item)}
            renderRightActions={deleteItemAction}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
