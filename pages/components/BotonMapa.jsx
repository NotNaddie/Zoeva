import { TouchableOpacity, View, Animated } from "react-native";
import CustomSubMenuBtn from "./subMenuMapaBtn";
import Agregar from './mapaBtnSvgs/agregar';
import MenuLogo from "./mapaBtnSvgs/menu";
import Favorito from "./mapaBtnSvgs/favorito";
import Recientes from "./mapaBtnSvgs/recientes";
import Ayuda from "./mapaBtnSvgs/ayuda";

const BotonMapa = props => {
    
    const scaleValue = new Animated.Value(110);
    const scaledRadius = new Animated.Value(55);
    const diagonalMove = new Animated.Value(-25);
    const NdiagonalMove = new Animated.Value(-25);
    const NdiagVarMove = new Animated.Value(-40)
    const NnormalMove = new Animated.Value(-70);
    const NnormalYMove = new Animated.Value(-25)
    const normalMove = new Animated.Value(20);
    const changingOp = new Animated.Value(0);
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
        Animated.timing(NnormalYMove,{
            toValue: open ? -160 : -25,
            duration: 400,
            useNativeDriver: false
        }
        ).start()
        Animated.timing(diagonalMove,{
            toValue: open ? 100 : -25,
            duration: 400,
            useNativeDriver: false
        }
        ).start()
        Animated.timing(NdiagVarMove,{
            toValue: open ? -150 : -40,
            duration: 400,
            useNativeDriver: false
        }
        ).start()
        Animated.timing(NdiagonalMove,{
            toValue: open ? -100 : -25,
            duration: 400,
            useNativeDriver: false
        }
        ).start()
        Animated.timing(changingOp,{
            toValue: open ? 1 : 0,
            duration: 300,
            useNativeDriver: false
        }
        ).start()
        Animated.timing(normalMove,{
            toValue: open ? 155 : 20,
            duration: 400,
            useNativeDriver: false
        }
        ).start()
        Animated.timing(NnormalMove,{
            toValue: open ? -205: -70,
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
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: borderW,
                borderColor: '#FFFFFF',
                borderRadius: scaledRadius
            }}
        >
            <CustomSubMenuBtn SvgImg={Agregar} Op={changingOp} Accion={props.btnAgregarOp} posX={normalMove} posY={25}/>
            <CustomSubMenuBtn SvgImg={MenuLogo} Op={changingOp} Accion={props.btnMenuOp} posX={diagonalMove} posY={NdiagonalMove}/>
            <CustomSubMenuBtn SvgImg={Recientes} Op={changingOp} Accion={props.btnRecientesOp} posX={-25} posY={NnormalYMove}/>
            <CustomSubMenuBtn SvgImg={Favorito} Op={changingOp} Accion={props.btnFavoritoOp} posX={NdiagVarMove} posY={NdiagonalMove}/>
            <CustomSubMenuBtn SvgImg={Ayuda} Op={changingOp} Accion={props.btnAyudaOp} posX={NnormalMove} posY={25}/>
            <TouchableOpacity onPress={alterarEstado}>
                <View style={
                    {
                        backgroundColor:'#FFFFFF',
                        width:80, height:80, 
                        borderRadius:40
                    }}
                />
            </TouchableOpacity>
        </Animated.View>
    )
}

export default BotonMapa;