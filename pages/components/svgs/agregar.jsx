import Svg, { Circle, Path } from  'react-native-svg';

const Agregar = props => {
    return(
        <Svg width='70%' height='70%' xmlns="http://www.w3.org/2000/svg" {...props}>
            <Circle r={13} strokeWidth={3} stroke='#000000' cx='15' cy='15' fill='none'/>
            <Path d="M8 15L22 15M15 8L15 22" strokeLinecap='round' strokeWidth={3} stroke='#000000' fill='none' />
        </Svg>
    )
}

export default Agregar