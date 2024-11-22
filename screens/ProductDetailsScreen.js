// /screens/ProductDetailsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params; // Get the item data passed from HomeScreen

  return (
    <View style={{ padding: 20 }}>
      <Text>Name: {item.name}</Text>
      <Text>Room: {item.room}</Text>
      <Text>Expiration Date: {item.expirationDate}</Text>
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProductDetailsScreen;
