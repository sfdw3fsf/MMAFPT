import React from 'react';

import { View, Text, StyleSheet, FlatList, SectionList } from 'react-native';

// const menuItemsToDisplay = [
//   { name: 'Hummus', price: '$5.00', id: '1A' },
//   { name: 'Moutabal', price: '$5.00', id: '2B' },
//   { name: 'Falafel', price: '$7.50', id: '3C' },
//   { name: 'Marinated Olives', price: '$5.00', id: '4D' },
//   { name: 'Kofta', price: '$5.00', id: '5E' },
//   { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
//   { name: 'Lentil Burger', price: '$10.00', id: '7G' },
//   { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
//   { name: 'Kofta Burger', price: '$11.00', id: '9I' },
//   { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
//   { name: 'Fries', price: '$3.00', id: '11K' },
//   { name: 'Buttered Rice', price: '$3.00', id: '12L' },
//   { name: 'Bread Sticks', price: '$3.00', id: '13M' },
//   { name: 'Pita Pocket', price: '$3.00', id: '14N' },
//   { name: 'Lentil Soup', price: '$3.75', id: '15O' },
//   { name: 'Greek Salad', price: '$6.00', id: '16Q' },
//   { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
//   { name: 'Baklava', price: '$3.00', id: '18S' },
//   { name: 'Tartufo', price: '$3.00', id: '19T' },
//   { name: 'Tiramisu', price: '$5.00', id: '20U' },
//   { name: 'Panna Cotta', price: '$5.00', id: '21V' },
// ];
const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        data={menuItemsToDisplay} // This line is redundant and can be removed.
        keyExtractor={(item, index) => item.title + index.toString()}// Assuming you have an 'id' field in your items.
        renderItem={({ item }) => (
          <View style={menuStyles.item}>
            <Text style={menuStyles.title}>{item.name}</Text>
            <Text style={menuStyles.price}>{item.price}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={menuStyles.header}>{title}</Text>
        )}

      />
    </View>
  );
};
const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333333', // Background color of items
    backgroundColor: '#333333', // Background color of items
  },
  title: {

    fontSize: 18,
    color: '#F4CE14', // Text color for item names
  },
  price: {
    fontSize: 16,
    color: '#F4CE14', // Text color for item prices
  },
  header: {
    fontSize: 20,
    backgroundColor: '#F4CE14', // Background color of section headers
    padding: 8,
    color: 'white', // Text color for section headers
    textAlign: 'center'
  },
});
export default MenuItems;