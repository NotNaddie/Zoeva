import { useEffect } from 'react';
import { Animated, useAnimatedValue } from 'react-native';

const FadeAnimView = props => {
    const FadeO = useAnimatedValue(props.fadeInicial);
    
    useEffect( () => {
        Animated.timing(FadeO, {
            toValue: props.fadeFinal,
            duration: props.duracion,
            useNativeDriver: true
        }).start();
    }, [fadeInicial]);

    return(
        <Animated.View style = {{...props.style, opacity: FadeO}}>
            {props.children}
        </Animated.View>
    );
}

export default FadeAnimView;
