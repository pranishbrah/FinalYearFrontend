// screens/StationsScreen.tsx
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const stations = [
  {id: '1', name: 'Station 1'},
  {id: '2', name: 'Station 2'},
  {id: '3', name: 'Station 3'},
];

const StationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Charging Stations</Text>
      <FlatList
        data={stations}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default StationsScreen;
