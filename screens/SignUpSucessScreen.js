import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableHighlight, Linking } from "react-native";

export default class SignUpSucessScreen extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isloading: true
        }
    }

    _joint() {

    }

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.content}>

                    <Text style={styles.buttonText}>Hurray</Text>
                    <Text>Account Successful created</Text>

                    <Image style={styles.image}
                        source={require('../assets/images/group36.png')}
                        resizeMode='contain'
                    />

                    <Text style={styles.loginText}>Have an account, <Text style={styles.TextStyle}>Log In</Text></Text>


                </View>

            </View>
        )
    }




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#FFF301",
        justifyContent: "center",
        alignItems: "center",


    },
    loginText: {
        marginTop: 154.1,
    },
    image: {
        marginTop: 150,
        width: 190,
        height: 260,
    },
    button: {
        backgroundColor: '#fff',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 10,
        padding: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        width: 200
    },
    buttonText: {
        fontSize: 18,
        // color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontStyle: "normal",
        // lineHeight: 6.8,
        letterSpacing: 0,
        textAlign: "center",

    },
    TextStyle: {
        color: '#00d400',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    }

})
