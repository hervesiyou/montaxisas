import React from "react";
import { View, Text, Animated,  
    Easing, StyleSheet} from "react-native";
import {styles} from "../styles/joint";

export default class SplashScreen extends React.Component{

    constructor(props){
        super(props)
        console.log(props);
        this.RotateValueHolder = new Animated.Value(0);
        setTimeout(() => {
          //  this.props.navigation.push('Home')
        }, 1000);
        
    }
    componentDidMount() {
        this.StartImageRotate();
    }
    StartImageRotate() {
        this.RotateValueHolder.setValue(0);
        Animated.timing(this.RotateValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
        }).start(() => this.StartImageRotate());
    }
    render(){
        const RotateImage = this.RotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
        return(
            <View style={styles.container}>
             <Animated.Image
                    style={{
                        width: 250,
                        height: 250,
                        transform: [{ rotate: RotateImage }],
                    }}
                    source={{ uri:'../assets/images/mon-taxi.jpg' }}
                />
                <Text style={styles.textView}>
                    Mon Taxi
                </Text>
            </View>
        )
    }
}