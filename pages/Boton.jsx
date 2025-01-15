import React from "react";
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Boton = props => {
    return (
        <TouchableOpacity onPress={props.onP} >
            <LinearGradient
                colors={['#548196', '#6CAACF']}
                style={styles.Boton}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={styles.TextoBoton}>Sign in</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

export default Boton;
export {styles};
const styles = StyleSheet.create({
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
  });