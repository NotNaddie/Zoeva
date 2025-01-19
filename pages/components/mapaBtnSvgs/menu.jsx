import Svg, { Path, Circle } from 'react-native-svg';

function MenuLogo(props) {
  return (
    <Svg width="80%" height="80%" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d='M5 10L15 10M25 20L15 20' fill='none' stroke='#000000' strokeWidth={3}/>
      <Circle fill='none' r={4} cx={22.5} cy={10} stroke='#000000' strokeWidth={3}/>
      <Circle fill='none' r={4} cx={7.5} cy={20} stroke='#000000' strokeWidth={3}/>
    </Svg>
  )
}

export default MenuLogo