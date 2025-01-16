import { View } from 'react-native-web';
import IniciarSesion, {styles} from './pages/iniciarSesion';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Mapa from './pages/mapa';

const Stack = createNativeStackNavigator();
const IS = navigation => {
  return(<IniciarSesion onP={() => {navigation.navigate('Mapa')}}/>)
}

export default function App({navigation}) {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Iniciar Sesion"
          component={IS}
          options={{cardStyleInterpolator: ({current}) => ({
            cardStyle: {
              opacity: current.progress
            }
          })}}
        />
        <Stack.Screen name='Mapa' component={Mapa}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}