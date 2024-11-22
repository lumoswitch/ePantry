import { useState } from 'react';

// Custom hook to manage pantry data
const usePantryData = () => {
  // Initial state with sample pantry items
  const [pantryItems, setPantryItems] = useState([
    { id: 1, name: 'Flour', room: 'Kitchen', expirationDate: '2023-11-30' },
    { id: 2, name: 'Sugar', room: 'Kitchen', expirationDate: '2023-12-15' },
    { id: 3, name: 'Yeelight Bulb', room: 'Living Room', expirationDate: '2023-10-01' },
  ]);

  // Add new item
  const addItem = (item) => {
    setPantryItems((prevItems) => [...prevItems, item]);
  };

  // Remove item by id
  const removeItem = (itemId) => {
    setPantryItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  // Get expired items
  const getExpiredItems = () => {
    const today = new Date();
    return pantryItems.filter(item => new Date(item.expirationDate) < today);
  };

  return {
    pantryItems,
    addItem,
    removeItem,
    getExpiredItems,
  };
};

export default usePantryData;
