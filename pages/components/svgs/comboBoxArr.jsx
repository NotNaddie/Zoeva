import Svg, { Path } from 'react-native-svg';

const comboBoxArr = props => {
    return(
        <Svg width='100%' height='100%' {...props}>
            <Path d='M5 5L15 5L10 10L5 5Z' stroke={props.color} strokeWidth={5} strokeLinecap='round' strokeLinejoin='round' fill={props.color}/>
        </Svg>
    );
}

export default comboBoxArr