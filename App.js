import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image } from 'react-native';
import { AppLoading, Asset, Font, Icon, SplashScreen } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import JoinScreen  from "./screens/JoinScreen";


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isReady: false,
  };
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.preventAutoHide();
        }, 5000);
      
  }

  constructor(props){
    super(props)
    this.state = { isLoading: true }
  }

  

  render() {
        if (!this.state.isReady) {
          return (
            
              <Image style={{ backgroundColor:"#FFF301"}}
                source={require('./assets/images/Andriod_copie.png')}
                resizeMode= 'center'
                onLoad={this._cacheResourcesAsync}
              />
          );
        
        } 
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <JoinScreen />
        </View>
      );

  }


  _cacheSplashResourcesAsync = async () => {
    
      const gif = require('./assets/images/Andriod_copie.png');
      return Asset.fromModule(gif).downloadAsync();
       
      
   
  }
  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    const images = [
      require('./assets/images/icon.png'),
      require('./assets/images/robot-dev.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    setTimeout(() => {this.setState({ isReady: true });
        }, 5000);
      
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
