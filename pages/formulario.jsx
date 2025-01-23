import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ComboBox from "./components/ComboBox";

const Formulario = props => {
    return(
        <VistaMain contStyle={{padding:40}}>
            <Text style={styles.titulo}>Formulario de Registro de ANPs</Text>
            <View style={styles.contenedor}>
                <Text style={styles.subtitulo}>Imformación Básica</Text>
                <Text style={styles.texto}>Hola me llamo Oh el capitan smek es genial y el que diga lo contrario es un jugador de Lol experto nivel sayayin supremo ultrainstinto xxxtentacion skibidisigmapomni</Text>
                <ComboBox styles={styles.comboBox} valores={['Uno', 'Dos', 'Tres', 'Cuatro']} placeHolderText='HolaPepe' arrowSize={'70%'} arrowColor={'#5588FF'} placeHolderStyle={{
                    color:'#AAAAAA',
                    fontFamily:'Roboto',
                    fontSize:18,
                    textAlign:'justify',
                    fontWeight:'400',
                    fontStyle:'italic',
                    flexWrap:'wrap',
                    flexDirection:'column',
                    letterSpacing:1
                }}/>
            </View>
        </VistaMain>
    );
}

export default Formulario;

const VistaMain = props => {
    return(
        <View style={{flex:1}} edges={['top']}>
            <ScrollView style={{backgroundColor:'0F705F'}}>
                <View style={{flex:1}}>
                    <LinearGradient 
                        colors={['#0F705F', '#08504E']} 
                        style={[{flexDirection:'column', flex:1, alignItems:'center'}, props.contStyle]}
                        start={{x:0, y:0}} end={{x:0, y:1}}>
                        {props.children}
                    </LinearGradient>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    comboBox:{
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        justifyContent:'space-around',
        alignItems:'center',
        flex:1,
        flexGrow:1,
        padding:0
    },
    texto:{
        color:'#000000',
        fontFamily:'Roboto',
        fontSize:18,
        textAlign:'justify',
        fontWeight:'500',
        flexWrap:'wrap',
        flexDirection:'column'
    },
    contenedor:{
        backgroundColor:'#EDF3D4',
        borderRadius:10,
        padding:30,
        maxWidth: 600,
        flexGrow: 'grow',
        flex: 1
    },
    subtitulo:{
        color:'#445566',
        fontFamily:'Roboto',
        fontSize:28,
        paddingBottom:30,
        textAlign:'center',
        fontWeight:'bold',
        flex:1,
        flexShrink:1,
        flexWrap:'wrap',
        flexDirection:'column'
    },
    titulo:{
        fontSize: 60,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: 40,
        textShadowColor: '#337589',
        textShadowRadius: 0,
        textShadowOffset: {height:5, width:5},
        color: '#EEEEEE'
    }
})