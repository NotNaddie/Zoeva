import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SvgComponent from './SVGComponent';

export default function App() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Hola Mundo</Text>
      <SvgComponent viewBox = "0 0 800 800" width="200" height="200"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold'
  },
  svg:{
    width: "100%",
    height: "100%"
  }
});