import {StyleSheet, Image, TouchableOpacity, View, Alert} from 'react-native';
import React from 'react';

interface cardProps {
  width: number;
  height: number;
  horizontal?: boolean;
}
const Card = ({width, height, horizontal}: cardProps) => {
  return (
    <View style={[styles.card, horizontal ? {marginRight: 10} : {}]}>
      <TouchableOpacity
        onPress={() => Alert.alert('Alert', 'Ouch Dont touch me!', [])}>
        <Image
          source={{
            width: width,
            height: height,
            uri: `https://picsum.photos/${width}/${height}`,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
  },
});
