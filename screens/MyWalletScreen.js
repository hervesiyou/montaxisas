import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MyWalletScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
    return (
      <View>
        <Text> This is Wallet </Text>
      </View>
    )
  }
}
