import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createNavigationContainer, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { TouchableOpacity } from "react-native";
import TabBarIcon from '../components/TabBarIcon';

import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './DrawerNavigator';
import Slider from '../screens/Slider';
import LoginFNLN1Screen from '../screens/LoginFNLN1Screen';
import DrawerScreen from "../screens/MainComponentScreen";
import OtherScreen from '../screens/OtherScreen';
import SignInScreen from '../screens/SignInScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginPwdCpwd2Screen from '../screens/LoginPwdCpwd2Screen';
import LoginCountryNumber3Screen from '../screens/LoginCountryNumber3Screen';
import LoginCountry4Screen from '../screens/LoginCountry4Screen';
import LoginTown5Screen from '../screens/LoginTown5Screen';
import LoginSearchTown6Screen from '../screens/LoginSearchTown6Screen';
import LoginVerifyCode7Screen from '../screens/LoginVerifyCode7Screen';
import LoginChangeNumber8Screen from '../screens/LoginChangeNumber8Screen';
import LoginWelcome9Screen from '../screens/LoginWelcome9Screen';
import LoginSigning10Screen from '../screens/LoginSigning10Screen';
import LoginPhoneNumber11Screen from '../screens/LoginPhoneNumber11Screen';
import LoginPhoneVerif12Screen from '../screens/LoginPhoneVerif12Screen';
import LoginSignup13Screen from '../screens/LoginSignup13Screen';


const Tabs = createBottomTabNavigator({
  Home: HomeScreen,
  Links: LinksScreen,
  Login: LoginScreen,
},{
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: 'gray',
    style: {
        backgroundColor: '#fff',
    },
    indicatorStyle: {
        backgroundColor: '#000',
    },
  }
});

const StackBottom = createStackNavigator({
  Tabs: Tabs,
})
// i add this tab for my logins screens

const Drawer = createDrawerNavigator({
  Home: StackBottom
});

const MenuImage = ({navigation}) => {
  if(!navigation.state.isDrawerOpen){
      return <Image source={require('../assets/images/menu-button.png')}/>
  }else{
      return <Image source={require('../assets/images/left-arrow.png')}/>
  }
}
const StackNavigator = createStackNavigator({
    
  //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.
  Slider: {screen: Slider,navigationOptions:{header: null}},
  LoginFNLN1:{ screen : LoginFNLN1Screen, navigationOptions:{header: null}},
  LoginPwdCpwd: { screen :LoginPwdCpwd2Screen,navigationOptions:{header: null}  },
  LoginCountryNumber: { screen :LoginCountryNumber3Screen,navigationOptions:{header: null}  },
  LoginCountry : { screen : LoginCountry4Screen,navigationOptions:{header: null}},
  LoginTown : { screen : LoginTown5Screen,navigationOptions:{header: null}},
  LoginSearchTown: { screen : LoginSearchTown6Screen,navigationOptions:{header: null}},
  LoginVerifCode : { screen : LoginVerifyCode7Screen,navigationOptions:{header: null}},
  LoginChangeNumber : { screen : LoginChangeNumber8Screen,navigationOptions:{header: null}},
  LoginWelcome : { screen : LoginWelcome9Screen,navigationOptions:{header: null}},
  LoginSigning : { screen : LoginSigning10Screen,navigationOptions:{header: null}},
  LoginPhoneNumber : { screen : LoginPhoneNumber11Screen,navigationOptions:{header: null}},
  LoginVerifPhone : { screen : LoginPhoneVerif12Screen,navigationOptions:{header: null}},
  LoginSignup : { screen : LoginSignup13Screen},
  
},{
  navigationOptions: ({ navigation }) => ({
      title: 'ReactNavigation',  // Title to appear in status bar
      headerLeft: 
      <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
          <MenuImage style="styles.bar" navigation={navigation}/>
      </TouchableOpacity>,
      headerStyle: {
          backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      initialRouteName: 'Slider'

  })
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: StackNavigator,
  DrawerNav: Drawer,
 
});


export default createAppContainer(AppSwitchNavigator  );

