import Svg, { Path } from 'react-native-svg';

function MenuLogo(props) {
  return (
    <Svg width="60%" height="60%" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M10 15a5 5 180 110-10h30a5 5 180 110 10M10 30a5 5 180 110-10h30a5 5 180 110 10M10 45a5 5 180 110-10h30a5 5 180 110 10"
        fill="#666"
      />
    </Svg>
  )
}

export default MenuLogo