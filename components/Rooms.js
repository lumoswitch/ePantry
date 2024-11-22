import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from "../styles/Rooms.styles";

// Room icons
import kitchenIcon from '../assets/images/kitchen.png';  // Replace with actual image paths
import livingRoomIcon from '../assets/images/living_room.png';
import libraryIcon from '../assets/images/library.png';
import bathroomIcon from '../assets/images/bathroom.png';

const Rooms = () => {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headerText}>ROOMS</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
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
