import { TouchableOpacity, View, Animated} from "react-native";

const scaleValue = new Animated.Value(100);
const scaledRadius = new Animated.Value(50);
open = false;

const BotonMapa = () => {
    return(
        <Animated.View style=
            {{
                opacity:0.5, 
                backgroundColor:'#555555',
                width:scaleValue, height:scaleValue,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: scaledRadius
            }}
        >
            <TouchableOpacity
                onPress={() => { 
                            open = !open
                            Animated.timing(scaleValue,{
                                toValue: open ? 400 : 100,
                                duration: 400,
                                useNativeDriver: true
                            }
                            ).start()
                            Animated.timing(scaledRadius,{
                                toValue: open ? 200 : 50,
                                duration: 400,
                                useNativeDriver: true
                            }
                            ).start()
                        }}
            >
                <View style={
                    {
                        backgroundColor:'#EEEEEE',
                        width:80, height:80, 
                        borderRadius:40
                    }}
                />
            </TouchableOpacity>
        </Animated.View>
        
    )
}

export default BotonMapa;