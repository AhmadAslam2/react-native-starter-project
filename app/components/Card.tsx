import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../config/colors';

interface cardProps {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  onPress?(): void;
}

const Card = ({image, title, subtitle, onPress}: cardProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image resizeMode="stretch" style={styles.image} source={image} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>${subtitle}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: 'blue',
    fontWeight: '500',
  },
  textContainer: {
    margin: 12,
  },
  image: {
    height: 200,
  },
});
