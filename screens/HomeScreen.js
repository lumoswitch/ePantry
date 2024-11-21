// screens/HomeScreen.js
import React from 'react';
import { ScrollView, View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import usePantryData from '../hooks/usePantryData'; // Assuming custom hook exists
import ProductCard from '../components/ProductCard'; // Assuming you already created this
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const HomeScreen = () => {
    const { pantryItems, removeItem } = usePantryData();
    
    // Format current date for greeting
    const today = new Date();
    const dateString = today.toLocaleDateString("en-GB", {
        weekday: 'long', 
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.greetingContainer}>
//         <Text style={styles.greeting}>Hello! 👋🏻</Text>
//         <Text style={styles.date}>{dateString}</Text>
//       </View>

//       {/* Search Bar Section */}
//       <View style={styles.searchBarContainer}>
//         <Text style={styles.searchText}>Search</Text>
//       </View>

//       {/* Rooms Section */}
//       <Text style={styles.sectionTitle}>Rooms</Text>
//       <View style={styles.roomsContainer}>
//         {/* Kitchen Icon */}
//         <TouchableOpacity style={styles.roomIcon}>
//           <Image source={require('../assets/images/kitchen.png')} style={styles.icon} /> {/* Kitchen Image */}
//           <Text style={styles.iconText}>Kitchen</Text>
//         </TouchableOpacity>

//         {/* Living Room Icon */}
//         <TouchableOpacity style={styles.roomIcon}>
//           <Image source={require('../assets/images/living_room.png')} style={styles.icon} /> {/* Living Room Image */}
//           <Text style={styles.iconText}>Living Room</Text>
//         </TouchableOpacity>

//         {/* Library Icon */}
//         <TouchableOpacity style={styles.roomIcon}>
//           <Image source={require('../assets/images/library.png')} style={styles.icon} /> {/* Library Image */}
//           <Text style={styles.iconText}>Library</Text>
//         </TouchableOpacity>

//         {/* Bathroom Icon */}
//         <TouchableOpacity style={styles.roomIcon}>
//           <Image source={require('../assets/images/bathroom.png')} style={styles.icon} /> {/* Bathroom Image */}
//           <Text style={styles.iconText}>Bathroom</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Shopping List Section */}
//       <Text style={styles.sectionTitle}>Shopping List</Text>
//       <FlatList
//         data={pantryItems}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <ProductCard
//             name={item.name}
//             room={item.room}
//             color={item.color}
//           />
//         )}
//     />
    
//     </ScrollView>
//   );

const roomsData = [
    { id: '1', name: 'Kitchen', icon: require('../assets/images/kitchen.png') },
    { id: '2', name: 'Living Room', icon: require('../assets/images/living_room.png') },
    { id: '3', name: 'Library', icon: require('../assets/images/library.png') },
    { id: '4', name: 'Bathroom', icon: require('../assets/images/bathroom.png') },
  ];

return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.safeAreaContainer}>
        {/* Greeting Section */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello! 👋🏻</Text>
          <Text style={styles.date}>{dateString}</Text>
        </View>

        {/* Search Bar Section */}
        <View style={styles.searchBarContainer}>
          <Text style={styles.searchText}>Search</Text>
        </View>

        {/* Rooms Section - Using FlatList */}
        <Text style={styles.sectionTitle}>Rooms</Text>
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
        />

        {/* Shopping List Section */}
        <Text style={styles.sectionTitle}>Shopping List</Text>
        <FlatList
          data={pantryItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              name={item.name}
              room={item.room}
              color={item.color}
            />
          )}
        />
    </SafeAreaView>
     </SafeAreaProvider>
  );

};



const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20, // Add horizontal padding to the SafeAreaView
      },
  greetingContainer: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: 'gray',
  },
  searchBarContainer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 20,
  },
  searchText: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  roomsContainer: {
    flexDirection: 'row', // Horizontal layout
    marginBottom: 20,
  },
  roomIcon: {
    alignItems: 'center',
  },
  icon: {
    width: 60,  // Adjust icon size as needed
    height: 60, // Adjust icon size as needed
  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
  },
  shoppingListContainer: {
    marginBottom: 30,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HomeScreen;
