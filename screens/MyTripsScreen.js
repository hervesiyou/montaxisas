import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import { styles } from "../styles/myTrips";
export default class MyTripsScreen extends React.Component {
    static navigationOptions = {
        header: null,
        headerMode: 'screen',
        title: 'Home',
        transparentHeader: {
            position: 'absolute',
            backgroundColor: 'transparent',
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0
          },
       
    }
  
    render() {
    return (
      <View style={styles.containers}>
        <TextInput style={styles.textInput}/>
      </View>
    )
  }
}
