import Svg, { Path } from "react-native-svg";

const Favorito = props => {
    return(
        <Svg width="70%" height="70%" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                fill='none'
                stroke='#000000'
                strokeWidth={3}
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 8A1 1 0 0 1 25 10Q25 15 15 25Q5 15 5 10A1 1 0 0 1 15 8'
            />
        </Svg>
    );
}

export default Favorito;