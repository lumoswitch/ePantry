import React from "react";
import { View, FlatList, Text, TouchableOpacity, Image } from "react-native";
import usePantryData from "../hooks/usePantryData";
import ProductCard from "../components/ProductCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import styles from "../styles/HomeScreen.styles";
import bellIcon from '../assets/images/notification-bell.png'; // Import the bell icon image
import SearchBar from '../components/SearchBar';
import Rooms from '../components/Rooms';

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

  const roomsData = [
    { id: "1", name: "Kitchen", icon: require("../assets/images/kitchen.png") },
    { id: "2", name: "Living Room", icon: require("../assets/images/living_room.png"), },
    { id: "3", name: "Library", icon: require("../assets/images/library.png") },
    { id: "4", name: "Bathroom", icon: require("../assets/images/bathroom.png"), },
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
        {/* <Text style={styles.sectionTitle}>Rooms</Text>
        <FlatList
          data={roomsData}
          horizontal
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.roomsContainer}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.roomIcon}>
              <Image source={item.icon} style={styles.icon} />
              <Text style={styles.iconText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        /> */}

        {/* Shopping List Section */}
        <Text style={styles.sectionTitle}>Shopping List</Text>
        <FlatList
          data={pantryItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard name={item.name} room={item.room} color={item.color} />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
