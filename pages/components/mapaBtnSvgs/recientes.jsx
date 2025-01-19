import Svg, { Circle, Path } from "react-native-svg";

const Recientes = props => {
    return(
        <Svg width="70%" height="70%" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Circle r={13} cx={15} cy={15} stroke='#000000' strokeWidth={3} fill='none' />
            <Path d='M15 15L15 8M15 15L19 19' stroke='#000000' strokeWidth={3} fill='none' strokeLinecap='round'/>
        </Svg>
    )
}

export default Recientes;