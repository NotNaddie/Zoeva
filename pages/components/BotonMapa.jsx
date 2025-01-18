import { TouchableOpacity, View, Animated } from "react-native";
import MenuLogo from "./mapaBtnSvgs/menu";

const BotonMapa = () => {
    const scaleValue = new Animated.Value(110);
    const scaledRadius = new Animated.Value(55);
    const borderW = new Animated.Value(5);
    open = false;

    const alterarEstado = () => {
        open = !open
        Animated.timing(scaleValue,{
            toValue: open ? 360 : 110,
            duration: 400,
            useNativeDriver: false
        }
        ).start()
        Animated.timing(scaledRadius,{
            toValue: open ? 180 : 55,
            duration: 400,
            useNativeDriver: false
        }
        ).start()
        Animated.timing(borderW,{
            toValue: open ? 10 : 5,
            duration: 400,
            useNativeDriver: false
        }
        ).start()
    }

    return(
        <Animated.View style=
            {{
                opacity:0.5,
                backgroundColor:'#555555',
                width:scaleValue, height:scaleValue,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: borderW,
                borderColor: '#FFFFFF',
                borderRadius: scaledRadius
            }}
        >
            <TouchableOpacity onPress={alterarEstado}>
                <View style={
                    {
                        backgroundColor:'#FFFFFF',
                        width:80, height:80, 
                        borderRadius:40
                    }}
                >
                </View>
            </TouchableOpacity>
        </Animated.View>
        
    )
}

export default BotonMapa;