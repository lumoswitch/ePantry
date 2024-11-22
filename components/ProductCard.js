import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../styles/ProductCard.styles";
import CheckBox from "expo-checkbox";

const ProductCard = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckedChange = (id, isChecked) => {
    setCheckedItems((prev) => ({ ...prev, [id]: isChecked }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SHOPPING LIST</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCardItem
            item={item}
            isChecked={!!checkedItems[item.id]}
            onCheckedChange={handleCheckedChange}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const ProductCardItem = ({ item, onCheckedChange, isChecked }) => (
  <View style={styles.itemContainer}>
    <View style={[styles.colorBar, { backgroundColor: item.color }]} />
    <View style={styles.itemContent}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
    </View>
    <View style={styles.checkboxContainer}>
      <CheckBox
        value={isChecked}
        onValueChange={(value) => onCheckedChange(item.id, value)}
        color={isChecked ? "#8D4E2A" : undefined}
      />
    </View>
  </View>
);

export default ProductCard;
