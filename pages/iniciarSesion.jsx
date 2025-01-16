import { StatusBar } from 'expo-status-bar';
import Boton from './Boton';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';

const IniciarSesion = props => {
    return(
        <View style={[{flexDirection: 'column', flex:1}, styles.mainContainer]}>
            <StatusBar style="auto" />
            <View style={{flex:1}}>
                <Image source={require('../assets/ZoevaLogoL.png')} style={[ styles.LogoZoeva]} />
            </View>
            
            <View style={[{flex: 2}]}>
                <View style={[{justifyContent: 'space-evenly'}, styles.containerIS]}>
                    <Text style={styles.TituloContainerPrincipal}>Log in</Text>
                    <TextInput style={styles.TextInputs} placeholder='/User' />
                    <TextInput style={styles.TextInputs} placeholder='/Password' />
                    <Boton onP={props.AccionBoton}/>
                    {props.children}
                </View>
            </View>
        </View>
    );
}

export default IniciarSesion;
export {styles};

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
        borderRadius: 20,
        marginBottom: 20,
        alignItems:'center',
        alignContent: 'center'
    },
    TextInputs: 
    {
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
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#33566C'
    },
    Boton: {
        width: 230,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextoBoton: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
    }
})