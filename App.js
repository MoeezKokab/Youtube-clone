import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import Home from './src/screen/Home';
import Search from './src/screen/Search';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Home /> */}
      <Search/>


    </View>
  );
}


