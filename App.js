import IniciarSesion from './pages/iniciarSesion';
import { createStaticNavigation, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mapa from './pages/mapa';

const Stack = createNativeStackNavigator();

function Map(){
  return(<Mapa TextStyle={{fontSize:30, fontWeight: 'bold', color:'#000000'}}/>)
}

function IS() {
  const navigation = useNavigation();
  return(<IniciarSesion AccionBoton={() => navigation.navigate('Mapa')}/>);
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={IS} options={{headerShown: false}}/>
        <Stack.Screen name='Mapa' component={Map} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}