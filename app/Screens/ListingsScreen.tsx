import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Card from '../components/Card';

const ListingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card
          image={require('../assests/jacket.jpg')}
          title="Wooden Chair"
          subtitle="sd"
        />
        <Card
          image={require('../assests/jacket.jpg')}
          title="Wooden Chair"
          subtitle="sd"
        />
        <Card
          image={require('../assests/jacket.jpg')}
          title="Wooden Chair"
          subtitle="sd"
        />
        <Card
          image={require('../assests/jacket.jpg')}
          title="Wooden Chair"
          subtitle="sd"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'beige',
  },
});
