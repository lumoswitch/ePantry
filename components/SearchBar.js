import React from 'react';
import { View, TextInput, Image } from 'react-native';
import searchIcon from '../assets/images/search-icon.png'; // Replace with your actual icon path
import styles from "../styles/SearchBar.styles";

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <Image source={searchIcon} style={styles.searchIcon} tintColor="#8D4E2A"/>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#A9A9A9"
      />
    </View>
  );
};

export default SearchBar;
