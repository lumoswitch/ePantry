import React from "react";
import { View, FlatList, Text, TouchableOpacity, Image } from "react-native";
import usePantryData from "../hooks/usePantryData";
import ProductCard from "../components/ProductCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import styles from "../styles/HomeScreen.styles";
import bellIcon from '../assets/images/notification-bell.png'; // Import the bell icon image
import SearchBar from '../components/SearchBar';
import Rooms from '../components/Rooms';
import PantryListScreen from "../screens/PantryListScreen";

const HomeScreen = () => {
  const { pantryItems, removeItem } = usePantryData();

  // Format current date for greeting
  const today = new Date();
  const dateString = today.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const shoppingItems = [
    { id: 1, title: 'Flour', subtitle: 'Kitchen', color: '#C4C4C4' },
    { id: 2, title: 'Yeelight RGBW Bulb', subtitle: 'Living Room', color: '#F8D9C3' },
    { id: 3, title: 'Harry Potter #1', subtitle: 'Library', color: '#D4ECD4' },
    { id: 4, title: 'Shampoo', subtitle: 'Bathroom', color: '#C9E8F8' },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaContainer}>
        {/* Greeting Section */}
        <View style={styles.greetingContainer}>
          <View>
            <Text style={styles.greeting}>Hello! 👋🏻</Text>
            <Text style={styles.date}>{dateString}</Text>
          </View>
          <TouchableOpacity>
            <Image source={bellIcon} style={styles.notificationIcon} />
          </TouchableOpacity>
        </View>

        {/* Search Bar Section */}
        <SearchBar />

        {/* Rooms Section */}
        <Rooms />

        {/* Shopping List Section */}
        <ProductCard items={shoppingItems} />
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
