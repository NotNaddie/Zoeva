import IniciarSesion from './pages/iniciarSesion';
import Mapa from './pages/mapa';
import Formulario from './pages/formulario';
import { createStaticNavigation, NavigationContainer, useNavigation } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const IS = () => {
  const navigation = useNavigation();
  return <IniciarSesion AccionBoton={() => navigation.navigate('Mapa')}/>;
}

const MP = () => {
  const navigation = useNavigation();
  return <Mapa AgregarOp={() => navigation.navigate('Formulario')} />
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Formulario' screenOptions={{headerShown: false, animation: 'fade'}}>
        <Stack.Screen name='Home' component={IS}/>
        <Stack.Screen name='Mapa' component={MP}/>
        <Stack.Screen name='Formulario' component={Formulario}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}