import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const Formulario = props => {
    return(
        <VistaMain>
            <TouchableOpacity style={[styles.boton, {width:500, height:250}]}/>
        </VistaMain>
    );
}

export default Formulario;

const VistaMain = props => {
    <SafeAreaProvider>
        <SafeAreaView style={{flex:1}} edges={['top']}>
            <ScrollView>
                <LinearGradient 
                    colors={['#0F705F', '#0E5D4F']} 
                    style={{flexDirection:'column', flex:1, alignItems:'center'}}
                    start={{x:0, y:0}} end={{x:0, y:1}}/>
                {props.children}
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>  
}

const styles = StyleSheet.create({
    boton:{
        backgroundColor:'#0097C3',
        fontFamily:'Roboto',
        fontSize:20,
        fontWeight:'bold'
    }
})