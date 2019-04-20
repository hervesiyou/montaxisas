import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MyTripsScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
  
    render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
