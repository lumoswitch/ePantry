import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20, // Add horizontal padding to the SafeAreaView
  },
  greetingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Vertically align items
    marginBottom: 20,
    marginTop: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#401B01",
  },
  date: {
    fontSize: 16,
    color: "gray",
  },
  searchBarContainer: {
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    marginBottom: 20,
  },
  searchText: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  roomsContainer: {
    flexDirection: "row", // Horizontal layout
    justifyContent: "space-between",
    marginBottom: 20,
  },
  roomIcon: {
    alignItems: "center",
  },
  icon: {
    width: 60, // Adjust icon size as needed
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

export default styles;
