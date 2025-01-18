import IniciarSesion from './pages/iniciarSesion';
import { createStaticNavigation, NavigationContainer, useNavigation } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mapa from './pages/mapa';

const Stack = createNativeStackNavigator();

function IS() {
  const navigation = useNavigation();
  return(<IniciarSesion AccionBoton={() => navigation.navigate('Mapa')}/>);
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false, animation: 'fade'}}>
        <Stack.Screen name='Home' component={IS}/>
        <Stack.Screen name='Mapa' component={Mapa}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}