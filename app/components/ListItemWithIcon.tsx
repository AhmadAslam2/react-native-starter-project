import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';

interface ListItemWithIconProps {
  Icon: any;
  title: string;
  description?: string;
  onPress?(): void;
}
const ListItemWithIcon = ({
  Icon,
  title = 'Default Title',
  description,
  onPress,
}: ListItemWithIconProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {Icon}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemWithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  textContainer: {
    paddingLeft: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 2,
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: 'grey',
    fontWeight: '500',
  },
});
