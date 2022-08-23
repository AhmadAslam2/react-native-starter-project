import {ScrollView, StyleSheet, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import React from 'react';
import Card from '../components/Card';

const ListingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <ScrollView>
          <Card
            image={require('../assests/jacket.jpg')}
            title="Leather jacket"
            subtitle="$100"
          />
          <Card
            image={require('../assests/chair.jpg')}
            title="Leather jacket"
            subtitle="$100"
          />
          <Card
            image={require('../assests/table.jpg')}
            title="Leather jacket"
            subtitle="$100"
          />
          <Card
            image={require('../assests/jacket.jpg')}
            title="Leather jacket"
            subtitle="$100"
          />
        </ScrollView>
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
  },
  viewStyle: {
    flex: 1,
    padding: 12,
  },
});
