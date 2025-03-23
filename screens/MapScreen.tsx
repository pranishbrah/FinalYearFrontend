// import React, {useState, useEffect} from 'react';
// import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import * as Location from 'expo-location';
// import {Search, Filter} from 'lucide-react-native';

// export default function MapScreen() {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const {status} = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         return;
//       }

//       const currentLocation = await Location.getCurrentPositionAsync({});
//       setLocation(currentLocation);
//     })();
//   }, []);

//   const initialRegion = {
//     latitude: location?.coords?.latitude || 27.7172,
//     longitude: location?.coords?.longitude || 85.324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         provider={PROVIDER_GOOGLE}
//         style={styles.map}
//         initialRegion={initialRegion}
//         showsUserLocation
//         showsMyLocationButton>
//         {/* Add markers for charging stations here */}
//       </MapView>

//       <View style={styles.searchBar}>
//         <TouchableOpacity style={styles.searchInput}>
//           <Search size={20} color="#666" />
//           <Text style={styles.searchText}>Search for charging stations</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterButton}>
//           <Filter size={20} color="#1a73e8" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   map: {
//     flex: 1,
//   },
//   searchBar: {
//     position: 'absolute',
//     top: 50,
//     left: 20,
//     right: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   searchInput: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 12,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     gap: 12,
//   },
//   searchText: {
//     fontFamily: 'Poppins-Regular',
//     color: '#666',
//     fontSize: 14,
//   },
//   filterButton: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 12,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
// });
