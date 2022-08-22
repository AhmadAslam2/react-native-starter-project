import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface cardProps {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
}

const Card = ({image, title, subtitle}: cardProps) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
  },
  textContainer: {
    margin: 12,
  },
});
