import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function SearchBar() {
  return (
    <View style={styles.barSearch}>
      <View style={styles.searchContainer}>
        <Icon name="bars" size={20} color="#49454F" style={styles.iconLeft} />
        <TextInput
          placeholder="Qual vai ser a sua aventura hoje?"
          placeholderTextColor="#49454F"
          style={styles.input}
        />
        <Icon name="search" size={20} color="#49454F" style={styles.iconRight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barSearch: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDE2E5', 
    borderRadius: 30, 
    paddingHorizontal: 15,
    height: 50, 
    width: '90%', 
  },
  iconLeft: {
    marginRight: 10, 
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  iconRight: {
    marginLeft: 10, 
  },
});
