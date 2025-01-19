import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import BotonMapa from './components/BotonMapa';

const Mapa = props => {
    return(
        <View style={styles.container}>
            <View style={{height:500}}/>
            <BotonMapa 
                btnAgregarOp={props.AgregarOp} 
                btnMenuOp={props.MenuOp} 
                btnRecientesOp={props.RecientesOp} 
                btnFavoritoOp={props.FavoritoOp} 
                btnAyudaOp={props.AyudaOp}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#777777',
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    text: {
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:40
    }
})

export default Mapa;