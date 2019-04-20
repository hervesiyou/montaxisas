import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class TaxiPositionScreen extends Component {
 
    static navigationOptions = {
        header: null
    }
    render() {
    return (
      <View>
        <Text> textInComponent Taxi position</Text>
      </View>
    )
  }
}
