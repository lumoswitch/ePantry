import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
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

  export default styles;