import { View } from 'react-native-web';
import IniciarSesion, {styles} from './pages/iniciarSesion';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Mapa from './pages/mapa';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Screen>
        <IniciarSesion AccionBoton={() => {<Mapa TextStyle={styles.TituloContainerPrincipal}/>}}/>
      </Stack.Screen>
      <Stack.Screen>
        <Mapa/>
      </Stack.Screen>
    </NavigationContainer>
  );
}