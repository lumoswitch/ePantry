import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchBarContainer: {
      flexDirection: 'row', // Align items horizontally
      alignItems: 'center', // Ensure vertical alignment
      backgroundColor: '#FFF4EC', // Light peach background
      borderRadius: 5, // Rounded corners
      paddingHorizontal: 15, // Padding inside the search bar
      height: 50, // Fixed height for consistency
      marginBottom: 15, // Space below the search bar
      width: '100%', // Adjust width to fit within the container
      alignSelf: 'center', // Center horizontally
      pointerEvents: 'auto',
    },
    searchIcon: {
      width: 18, // Icon size
      height: 18,
      marginRight: 10, // Space between icon and input
    },
    searchInput: {
      flex: 1, // Fill remaining space
      fontSize: 16, // Font size for input text
      color: '#5A5A5A', // Input text color
      fontFamily: 'System', // Default system font
      height: '100%', // Ensure input matches container height
    },
  });

export default styles;