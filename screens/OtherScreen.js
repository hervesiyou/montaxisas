import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
 
import {customStyle} from '../styles/loginStyles'

export default class OtherScreen extends React.Component {
    static navigationOptions = {
      title: 'Lots of features here',
    };
  
    render() {
      return (
        <View style={customStyle.container}>
          <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Main');
    };
  }

   