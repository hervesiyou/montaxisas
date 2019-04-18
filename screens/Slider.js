import React from 'react';
import { StyleSheet, View, Text , Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LoginFNLN1Screen from '../screens/LoginFNLN1Screen';
import AppNavigator from '../navigation/AppNavigator';

export default class slider extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    
    this.state = {
      showRealApp: false,
    };
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return (
        <LoginFNLN1Screen navigation={this.props.navigation}  />
        );
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#000000',
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#393939',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 16,
  },
});
 
const slides = [
  {
    key: 'somethun',
    titleStyle: styles.title,
    text: 'Bienvenue dans mon',
    textStyle: styles.text,
    image: require('../assets/images/illustration.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun-dos',
    titleStyle: styles.title,
    text: 'Other cool stuff',
    textStyle: styles.text,
    image: require('../assets/images/illustration.png'),
    backgroundColor: '#febe29',
  }
];