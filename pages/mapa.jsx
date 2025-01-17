import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';


const Mapa = props => {
    <View style={{ flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <StatusBar style='auto'/>
        <Image source={require("../assets/mapaNoDisponible.png")} style={[{width:'400', height:800, borderRadius:100}]}/>
    </View>
}

export default Mapa