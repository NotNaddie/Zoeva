import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import Boton from './Boton';
export default function App() {
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <View>
        <Image source={require('./assets/ZoevaLogoL.png')} style={styles.LogoZoeva} />
      </View>

      <View style={styles.containerPrincipalIS}>
        <View style={styles.containerSecundarioIS}>
          <TextInput style={styles.TextInputs} placeholder='/User' />
          <TextInput style={styles.TextInputs} placeholder='/Password' />
          <Text style={styles.TituloContainerPrincipal}>Log in</Text>
           <Boton/>
        </View>

        </View>
      </View>
      
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0F705F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // IS = Iniciar Sesión
  containerSecundarioIS: {
    backgroundColor: '#EDF3D4',
    width: 310,
    height: 400,
    borderRadius: 20,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'center',
    transform: [{translateX: -8}, {translateY: -15}],
  },
  containerPrincipalIS: {
    backgroundColor: '#3F8674',
    width: 320,
    height: 400,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset : {width: 10, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 30,
    transform: [{translateX: 10}, {translateY: -65}],
  },
  TextInputs: {
    fontSize: 14,
    height: 32,
    borderRadius: 40,
    width: 250,
    borderWidth: -5,
    borderColor: '#DADADA',
    backgroundColor:'#DADADA',
    borderColor: '#DADADA',
    transform: [{translateX: 35}, {translateY: -10}],
    padding: 5,
    paddingStart: 10,
    marginTop: 40,
    elevation: 20,
    font: 'Roboto'
  },
  LogoZoeva: {
    width: '350',
    height: 250,
    borderRadius: 100,
    transform: [{translateX: -13}, {translateY: -80}],
  } ,
  TituloContainerPrincipal: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#33566C',
    transform: [{translateX: 120}, {translateY: -190}],
  },
});
