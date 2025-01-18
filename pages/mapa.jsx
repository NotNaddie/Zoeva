import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import BotonMapa from './BotonMapa';

const Mapa = () => {
    return(
        <View style={styles.container}>
            <BotonMapa/>
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