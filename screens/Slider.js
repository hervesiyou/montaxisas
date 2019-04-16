import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import SplashScreen from 'rn-splash-screen';

export default class slider extends React.Component {

  componentDidMount(){
    SplashScreen.hide();
  }

  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
          <Text>
            This will be your screen when you click Skip from any slide or Done
            button at last
          </Text>
        </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          //comming from the JsonArray below
          onDone={this._onDone}
          //Handler for the done On last slide
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
    text: 'Description.\nSay something cool',
    textStyle: styles.text,
    image: require('./Images/illustration.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun-dos',
    titleStyle: styles.title,
    text: 'Other cool stuff',
    textStyle: styles.text,
    image: require('./Images/illustration.png'),
    backgroundColor: '#febe29',
  }
];