import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import Boton from './Boton';
export default function App() {
  return (
    <View style={[{flexDirection: 'column', flex:1}, styles.mainContainer]}>
      <StatusBar style="auto" />
      <View style={{flex:2}}>
        <Image source={require('./assets/ZoevaLogoL.png')} style={[ styles.LogoZoeva]} />
      </View>
      
      <View style={[{flex: 1}]}>
        <View style={[{justifyContent: 'space-evenly'}, styles.containerIS]}>
          <Text style={styles.TituloContainerPrincipal}>Log in</Text>
          <TextInput style={styles.TextInputs} placeholder='/User' />
          <TextInput style={styles.TextInputs} placeholder='/Password' />
          <Boton/>
        </View>
      </View>
    </View>
      
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#0F705F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  // IS = Iniciar Sesión
  containerIS: {
    backgroundColor: '#EDF3D4',
    padding: 20,
    width: 310,
    height: 400,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderRadius: 20,
    marginBottom: 20,
    alignItems:'center',
    alignContent: 'center'
  },
  containerPrincipalIS: {
    backgroundColor: '#3F8674',
    width: 320,
    height: 400,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset : {width: 200, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 10
  },
  TextInputs: {
    fontSize: 14,
    borderRadius: 20,
    borderWidth: -5,
    
    borderColor: '#DADADA',
    backgroundColor:'#DADADA',
    borderColor: '#DADADA',
    padding: 5,
    paddingStart: 10,
    elevation: 10,
    font: 'Roboto'
  },
  LogoZoeva: {
    width: '350',
    height: 250,
    borderRadius: 100
  } ,
  TituloContainerPrincipal: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#33566C'
  },
});
