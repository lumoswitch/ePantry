import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { usePantry } from '../hooks/usePantryData'; // Import the custom hook

const PantryListScreen = ({ navigation }) => {
  const { pantryItems, addItem, removeItem, getExpiredItems } = usePantry();

  // For example: add a test item on initial load
  useEffect(() => {
    addItem({
      id: '1',
      name: 'Milk',
      quantity: 1,
      expiryDate: '2024-11-25',
    });
  }, []);

  return (
    <View>
      <Text>Pantry Items:</Text>
      <FlatList
        data={pantryItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - {item.quantity}</Text>
            <Button title="Remove" onPress={() => removeItem(item.id)} />
            <Button title="View Details" onPress={() => navigation.navigate('ProductDetails', { item })} />
          </View>
        )}
      />
      <Button title="View Expired Items" onPress={() => console.log(getExpiredItems())} />
    </View>
  );
};

export default PantryListScreen;
