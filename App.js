import IniciarSesion from './pages/iniciarSesion';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mapa from './pages/mapa';

const Stack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: { 
      screen: IS,
      options: {
        headerShown: false
      }
    },
    Mapa: { 
      screen: Map,
      options: {
        headerShown: false
      }
    },
  },
});

function Map(){
  return(<Mapa TextStyle={{fontSize:30, fontWeight: 'bold', color:'#000000'}}/>)
}

function IS() {
  const navigation = useNavigation();
  return(<IniciarSesion AccionBoton={() => navigation.navigate('Mapa')}/>);
}

const Navigation = createStaticNavigation(Stack);

export default function App() {
  return <Navigation/>;
}