import Svg, { Path } from "react-native-svg";

const Ayuda = props => {
    return(
        <Svg width="70%" height="70%" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d='M10 10A1 1 0 0 1 20 10C20 20 15 10 15 20M15 25L15 25' stroke='#000000' strokeWidth={3} fill='none' strokeLinecap='round'/>
        </Svg>
    )
}

export default Ayuda;