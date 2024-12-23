import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Circle,
  G,
} from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={800} height={800} {...props}>
    <Defs>
      <LinearGradient id="d" x1="100%" x2="0%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#d2bd00" />
        <Stop offset="100%" stopColor="#e19200" />
      </LinearGradient>
      <LinearGradient id="b" x1="50%" x2="100%" y1="50%" y2="100%">
        <Stop offset="0%" stopColor="#005" />
        <Stop offset="100%" stopColor="#2c2c6f" />
      </LinearGradient>
      <LinearGradient id="c" x1="0%" x2="100%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#e2b6ff" />
        <Stop offset="100%" stopColor="#8408d6" />
      </LinearGradient>
      <LinearGradient id="a" x1="0%" x2="100%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#020285" />
        <Stop offset="100%" />
      </LinearGradient>
      <LinearGradient id="e" x1="0%" x2="100%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#fff" />
        <Stop offset="100%" stopColor="#fff" stopOpacity={0.3} />
      </LinearGradient>
      <LinearGradient id="f" x1="0%" x2="100%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#403757" />
        <Stop offset="100%" stopColor="#705f7e" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#b4b4b4" />
        <Stop offset="100%" stopColor="#b4b4b4" stopOpacity={0.3} />
      </LinearGradient>
    </Defs>
    <Path
      fill="url(#a)"
      stroke="#4c037d"
      strokeOpacity={0.7}
      strokeWidth={10}
      d="M180 519.3Q1100 1100 519.3 180"
    />
    <Circle
      cx={300}
      cy={300}
      r={250}
      fill="url(#b)"
      stroke="url(#c)"
      strokeWidth={10}
    />
    <Path
      fill="url(#d)"
      stroke="url(#d)"
      strokeLinecap="round"
      strokeOpacity={0.5}
      strokeWidth={15}
      d="M320 100q-150 70-220 220m0 0q130-90 220-220"
    />
    <Circle cx={435} cy={250} r={50} fill="url(#e)" />
    <Circle cx={420} cy={250} r={10} fill="url(#f)" />
    <Circle cx={420} cy={230} r={15} fill="url(#f)" />
    <Circle cx={410} cy={265} r={5} fill="url(#f)" />
    <Circle cx={430} cy={275} r={10} fill="url(#f)" />
    <Circle cx={455} cy={260} r={18} fill="url(#f)" />
    <G fill="url(#g)">
      <Path d="M200 450q25-30 50-20 50-60 100 0 20-20 50 20M360 370q20-20 40-10 35-35 70 10" />
    </G>
    <G fill="#d5d5d5">
      <Circle cx={170} cy={390} r={5} />
      <Circle cx={300} cy={330} r={3} />
      <Circle cx={500} cy={320} r={3} />
      <Circle cx={240} cy={320} r={2} />
      <Circle cx={400} cy={160} r={2} />
    </G>
  </Svg>
)
export default SvgComponent