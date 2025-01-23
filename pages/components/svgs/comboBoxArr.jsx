import Svg, { Path } from 'react-native-svg';

const ComboBoxArr = props => {
    return(
        <Svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} {...props}>
            <Path 
                d='M3 5L17 5L10 15L3 5' 
                stroke={props.color} 
                strokeWidth={3} 
                strokeLinecap='round'
                strokeLinejoin='round' 
                fill={props.color}
            />
        </Svg>
    );
}

export default ComboBoxArr;