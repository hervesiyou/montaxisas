import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image } from 'react-native';
import { AppLoading, Asset, Font, Icon, SplashScreen } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import JoinScreen from "./screens/JoinScreen";
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import Slider from './screens/Slider';
import MainTabNavigator from './navigation/MainTabNavigator';

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

  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }



  render() {
    if (!this.state.isReady) {
      return (
        <View style={styles.container}> 
          <Image style={styles.image}
            source={require('./assets/images/screen.png')}
            resizeMode='contain'
            onLoad={this._cacheResourcesAsync}
          />

        </View>

      );

    }
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <MainTabNavigator />
      </View>
    );

  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
       
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        ProductSans: require("./assets/fonts/ProductSans.ttf"),
      }),
    ]);
  }; 
  
  _cacheSplashResourcesAsync = async () => {

    const gif = require('./assets/images/screen.png');
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
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 5000);

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image:{
   
  },
});
