import {FlatList, ImageSourcePropType, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';

import {
  ListItemWithImage,
  ListItemSeperator,
  SwipeRightAction,
  CustomIcon,
} from '../components';
import colors from '../config/colors';

interface Message {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}
let _messages: Message[] = [
  {
    id: '112',
    title: 'Rana William',
    description: 'I am under waterr woooo',
    image: require('../assests/profile.jpg'),
  },
  {
    id: '212',
    title: 'Rana William',
    description: 'I am under waterr woooo',
    image: require('../assests/profile.jpg'),
  },
  {
    id: '3',
    title: 'Rana William',
    description: 'I am under waterr woooo',
    image: require('../assests/profile.jpg'),
  },
  {
    id: '4',
    title: 'Rana William',
    description: 'I am under waterr woooo',
    image: require('../assests/profile.jpg'),
  },
  {
    id: '553',
    title: 'Rana William',
    description: 'I am under waterr woooo',
    image: require('../assests/profile.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState<Message[]>(_messages);

  const handleDelete = (id: string) => {
    setMessages(messages.filter(message => message.id !== id));
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={message => message.id}
        renderItem={({item}) => (
          <View style={styles.renderItemStyle}>
            <ListItemWithImage
              image={item.image}
              title={item.title}
              description={item.description}
              renderRightActions={() => (
                <SwipeRightAction onPress={() => handleDelete(item.id)} />
              )}
            />
            <CustomIcon
              name="chevron-forward-outline"
              type="ionicon"
              size={20}
              color="grey"
            />
          </View>
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
    backgroundColor: colors.backgrounnd,
  },
  renderItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
