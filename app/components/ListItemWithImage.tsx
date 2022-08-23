import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';

import {Swipeable} from 'react-native-gesture-handler';

interface listItemWithImageProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
  onPress?: () => void;
  renderRightActions?: any;
}
const ListItemWithImage = ({
  image,
  title,
  description,
  onPress,
  renderRightActions,
}: listItemWithImageProps) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="#f8f4f4" onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItemWithImage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
  },
  textContainer: {
    marginLeft: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: 'grey',
    fontWeight: '500',
  },
});
