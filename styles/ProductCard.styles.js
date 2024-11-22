import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    headerText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#bf6a02',
    },
    seeAllText: {
      fontSize: 12,
      color: '#bf6a02',
      fontWeight: '600',
    },
    listContainer: {
      paddingBottom: 10,
    },
    itemContainer: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2, // For Android shadow
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: "#E0E0E0",
    },
    colorBar: {
      width: 5,
    },
    itemContent: {
      flex: 1,
      padding: 12,
    },
    itemTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
      marginBottom: 4,
    },
    itemSubtitle: {
      fontSize: 14,
      color: '#666',
    },
    icons: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingHorizontal: 12,
    },
    iconPlaceholder: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: '#DDD',
      marginHorizontal: 5,
    },
    checkboxContainer: {
      marginLeft: 12,
      marginTop: 25,
      marginRight: 20
    },
  });

export default styles;