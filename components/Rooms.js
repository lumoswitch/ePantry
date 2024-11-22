import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// Room icons
import kitchenIcon from '../assets/images/kitchen.png';  // Replace with actual image paths
import livingRoomIcon from '../assets/images/living_room.png';
import libraryIcon from '../assets/images/library.png';
import bathroomIcon from '../assets/images/bathroom.png';

const Rooms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ROOMS</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.roomList}>
        <View style={styles.roomCard}>
          <Image source={kitchenIcon} style={styles.roomIcon} />
          <Text style={styles.roomLabel}>Kitchen</Text>
        </View>
        <View style={styles.roomCard}>
          <Image source={livingRoomIcon} style={styles.roomIcon} />
          <Text style={styles.roomLabel}>Living Room</Text>
        </View>
        <View style={styles.roomCard}>
          <Image source={libraryIcon} style={styles.roomIcon} />
          <Text style={styles.roomLabel}>Library</Text>
        </View>
        <View style={styles.roomCard}>
          <Image source={bathroomIcon} style={styles.roomIcon} />
          <Text style={styles.roomLabel}>Bathroom</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Rooms;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#BF6A02',  // Room section header color
    marginBottom: 10,
  },
  roomList: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  roomCard: {
    alignItems: 'center',
    marginRight: 15,
    padding: 5,
    borderRadius: 50, // Circular container
    width: 90,
    height: 90,
    justifyContent: 'center',
  },
  roomIcon: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  roomLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});
