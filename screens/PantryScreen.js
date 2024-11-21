// /screens/PantryScreen.js
import React from 'react';
import { FlatList, Text, View, Button } from 'react-native';
import ProductCard from '../components/ProductCard'; // Assuming this component exists
import usePantryData from '../hooks/usePantryData'; // Custom hook for pantry logic

const PantryScreen = ({ navigation }) => {
  const { pantryItems, getExpiredItems, removeItem } = usePantryData();
  const expiredItems = getExpiredItems(); // Get expired items

  // Combine pantryItems and expiredItems with unique keys
  const combinedItems = [
    ...pantryItems.map(item => ({ ...item, source: 'pantry' })),
    ...expiredItems.map(item => ({ ...item, source: 'expired' }))
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Add a Button to go back to the previous screen */}
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()} // This will navigate to the previous screen
      />
      
      <FlatList
        data={combinedItems} // Use combined items
        keyExtractor={(item) => `${item.id}-${item.source}`} // Ensure unique keys by adding source to key
        ListHeaderComponent={
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Pantry Tracker</Text>
            <Text style={{ marginVertical: 10 }}>Track your pantry items and expired products.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <ProductCard
              name={item.name}
              room={item.room}
              expirationDate={item.expirationDate}
              onPress={() => navigation.navigate('ProductDetails', { item })}
              onRemove={() => removeItem(item.id)} // Button to remove item
            />
          </View>
        )}
        ListFooterComponent={
          expiredItems.length > 0 ? (
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Expired Items:</Text>
              <FlatList
                data={expiredItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <ProductCard
                    name={item.name}
                    room={item.room}
                    expirationDate={item.expirationDate}
                    onPress={() => navigation.navigate('ProductDetails', { item })}
                    onRemove={() => removeItem(item.id)} // Button to remove item
                  />
                )}
              />
            </View>
          ) : (
            <View style={{ padding: 10 }}>
              <Text>No expired items</Text>
            </View>
          )
        }
      />
    </View>
  );
};

export default PantryScreen;
