import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9', // Light background color to match the clean design
  },
  searchArea: {
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: '#F9F1E1', // Soft light color for search area background
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,  // Allow the input field to take the remaining space
    height: 40,
    fontSize: 16,
    color: '#A8A8A8', // Light gray text color for placeholder
    paddingLeft: 10, // Add space between the icon and text
  },
  widgetContainer: {
    marginBottom: 30,
  },
  widgetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A4A4A', // Dark gray for titles
  },
  roomCard: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  roomIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain', // Make sure the icon fits well
  },
  roomTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4A4A4A', // Dark gray for room names
  },
  itemCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4A4A4A', // Dark gray for item names
  },
  itemRoom: {
    fontSize: 14,
    color: '#6B6B6B', // Lighter gray for room info
    marginTop: 5,
  },
  noItemsText: {
    fontSize: 16,
    color: '#888',
    fontStyle: 'italic',
  },
});

export default styles;
