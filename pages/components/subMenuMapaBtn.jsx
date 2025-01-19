import { Animated, TouchableOpacity } from 'react-native';

const CustomSubMenuBtn = props => {
    const SvgImg = props.SvgImg
    
    return(
        <TouchableOpacity onPress={props.Accion}>
            <Animated.View style={{alignItems:'center', justifyContent:'center', position:'absolute', backgroundColor:'#FFFFFF', opacity:props.Op, width:50, height:40, borderRadius:10, transform:[{translateX: props.posX}, {translateY: props.posY}]}}>
                <SvgImg viewBox='0 0 30 30' />
            </Animated.View>
        </TouchableOpacity>
    );
}

export default CustomSubMenuBtn