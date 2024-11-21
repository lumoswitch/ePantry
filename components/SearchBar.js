// // /components/SearchBar.js
// import React from 'react';
// import { TextInput, View, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const SearchBar = ({ value, onChangeText }) => {
//   return (
//     <View style={styles.searchBar}>
//       <Ionicons name="search" size={20} color="#A8A8A8" />
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search"
//         value={value}
//         onChangeText={onChangeText}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   searchBar: {
//     marginBottom: 20,
//     borderRadius: 25,
//     backgroundColor: '#F9F1E1',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//     color: '#A8A8A8',
//     paddingLeft: 10,
//   },
// });

// export default SearchBar;  // Make sure this line is correct

// /components/SearchBar.js
import React from 'react';
import { TextInput, View } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
