import React from 'react';
import { createAppContainer,createStackNavigator, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import OtherScreen from '../screens/OtherScreen';
import SignInScreen from '../screens/SignInScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginFNLN1Screen from '../screens/LoginFNLN1Screen';
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
import Slider from '../screens/Slider';

import MainTabNavigator from './MainTabNavigator';
 
const LogStack = createStackNavigator({
    Slider : { screen : Slider,navigationOptions :{ header: null }}, 
    LoginFNLN1:{ screen : LoginFNLN1Screen, navigationOptions :{ header: null }},
    LoginPwdCpwd: { screen :LoginPwdCpwd2Screen ,navigationOptions :{ header: null } },
    LoginCountryNumber: { screen :LoginCountryNumber3Screen ,navigationOptions :{ header: null } },
    LoginCountry : { screen : LoginCountry4Screen,navigationOptions :{ header: null }},
    LoginTown : { screen : LoginTown5Screen,navigationOptions :{ header: null }},
    LoginSearchTown: { screen : LoginSearchTown6Screen,navigationOptions :{ header: null }},
    LoginVerifCode : { screen : LoginVerifyCode7Screen,navigationOptions :{ header: null }},
    LoginChangeNumber : { screen : LoginChangeNumber8Screen,navigationOptions :{ header: null }},
    LoginWelcome : { screen : LoginWelcome9Screen,navigationOptions :{ header: null }},
    LoginSigning : { screen : LoginSigning10Screen,navigationOptions :{ header: null }},
    LoginPhoneNumber : { screen : LoginPhoneNumber11Screen,navigationOptions :{ header: null }},
    LoginVerifPhone : { screen : LoginPhoneVerif12Screen,navigationOptions :{ header: null }},
    LoginSignup : { screen : LoginSignup13Screen,navigationOptions :{ header: null }},
    },
  );


export default createAppContainer(LogStack);
 