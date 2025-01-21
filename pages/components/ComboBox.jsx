import { View, Text, Animated, TouchableOpacity } from "react-native";
import comboBoxArr from "./svgs/comboBoxArr";
import { transform } from "@babel/core";

const ComboBox = props => {

    const rotacion = new Animated.Value(0)
    const valores = [props.valores]
    const elementosExe = []
    const abierto = false

    const rotarIcono = () => {
        Animated.timing(rotacion, {
            toValue: abierto ? 180 : 0,
            duration: 400,
            useNativeDriver: false
        });
    }

    const MainView = () => {
        return(
            <TouchableOpacity onPress={alterar}>
                <View style={{width:'100%', flexDirection:'row', flex:1}}>
                    <View style={{flex:4}}/>
                    <comboBoxArr color='#5599FF'/>
                </View>
            </TouchableOpacity>
        );
    }

    valores.forEach((val) => {elementosExe.push(
        () => {
            return(
                <TouchableOpacity>
                    <View style={{flexGrow:'grow'}}>
                        <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:'500'}}>{val}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    )});

    const alterar = () => {
        rotarIcono()
    }

    return(
        <MainView></MainView>
    );
}

export default ComboBox;