import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Boton() {
    return (
        <TouchableOpacity>
            <LinearGradient
                colors={['#548196', '#6CAACF']}
                style={styles.Boton}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={styles.TextoBoton}>Sign in</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

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