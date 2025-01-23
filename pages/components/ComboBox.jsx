import { View, Text, Animated, TouchableOpacity} from "react-native";
import ComboBoxArr from './svgs/comboBoxArr'

const ComboBox = props => {

    const scale = new Animated.Value(0)
    const valores = [props.valores]
    const elementosExe = []
    const placeHolder = props.placeHolderText
    const abierto = false

    const MainView = () => {
        return(
            <>
            <TouchableOpacity activeOpacity={0.5} onPress={alterar} style={[props.styles, {flexDirection:'row'}]}>
                <View style={[props.styles, {flex:6}]}>
                    <Text style={props.placeHolderStyle}>{placeHolder}</Text>
                </View>
                <View style={{height:'100%', flexDirection:'column', flex:1, backgroundColor:props.styles.backgroundColor, flexGrow:1, alignItems:'center', justifyContent:'center', borderRadius:props.styles.borderRadius}}>
                    <ComboBoxArr viewBox='0 0 20 20' color={props.arrowColor} size={props.arrowSize}/>
                </View>
            </TouchableOpacity>
            <StretchView/>
            </>
        );
    }

    valores.forEach((val) => {elementosExe.push(
        () => {
            return(
                <TouchableOpacity style={props.styles}>
                    <View style={{flexGrow:'grow'}}>
                        <Text style={{color:'#000000', fontFamily:'Roboto', fontSize:16, fontWeight:'500'}}>{val}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    )});
    
    const StretchView = () => {
        return(
            <View style={[props.styles, {position:'absolute', alignItems:'flex-end', flex:1, height:2000, backgroundColor:'#333333'}]}>
                {elementosExe[0]}
            </View>
        );
    }

    const alterar = () => {
        abierto = !abierto
        Animated.timing(scale,
            {
                toValue: abierto ? 400 : 0,
                duration:400,
                useNativeDriver:false
            }
        ).start()
    }

    return(
        <MainView/>
    );
}

export default ComboBox;