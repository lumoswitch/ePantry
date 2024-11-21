// /components/ProductCard.js
import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

const ProductCard = ({ name, room, expirationDate, onPress, onRemove }) => {
  return (
    <View style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 5 }}>
      <Text>Name: {name}</Text>
      <Text>Room: {room}</Text>
      <Text>Expiration Date: {expirationDate}</Text>
      <Button title="View Details" onPress={onPress} />
      <Button title="Remove" onPress={onRemove} color="red" />
    </View>
  );
};

export default ProductCard;
