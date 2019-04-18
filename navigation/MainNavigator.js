 
import React, { Component } from 'react'
import Icon  from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View,Button } from 'react-native';
import {createSwitchNavigator,createBottomTabNavigator,createStackNavigator ,createDrawerNavigator,createAppContainer} from 'react-navigation';

import Slider from '../screens/Slider';
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
// import MainComponentScreen from './screens/MainComponentScreen';
// 

export class MainNavigator extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <AppContainer/>
      </View>
    );
  }

}
/*
class WelcomeScreen extends React.Component {  
  render() {  
    return (
      <View style={styles.container}>
         <Text> je suis dans le WelconeScreen </Text>
	       <Button title='Login' onPress={()=>{ this.props.navigation.navigate('Dashboard')  } }/>
         <Button title='Sign' onPress={()=>{this.props.navigation.navigate('Welcome') } }/>
      </View>
    );
  }
}
class DashBoardScreen extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
         <Text> Je suis dans le Dashboar d </Text>
      </View>
    );
  }
}
*/
class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile component </Text>
      </View>
    )
  }
}
class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Setting Component </Text>
      </View>
    )
  }
}

class Feed extends Component {
  render() {
    return (
      <View style={styles.dashboard}>
        <Text> Feed component </Text>
      </View>
    )
  }
}


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
  // MainComponent : { screen : MainComponentScreen,navigationOptions :{ header: null }},
  },

); 



const DashBoardTabNavigator=createBottomTabNavigator({
  Feed,
  Profile,
  Setting,
},
{
  navigationOptions:({navigation})=>{
    const{routeName}=navigation.state.routes[navigation.state.index];
    return{
      headerTitle:routeName
    }
  }
})
const DashBoardStackNavigator=createStackNavigator({
  // Dashboard:{screen:DashBoardScreen},
  TabDashboard:{screen:DashBoardTabNavigator}
},
{
  defaultNavigationOptions:({navigation})=>{
    return{
      headerLeft:(
      <Icon name='md-menu'
            style={{paddingLeft:10}}
            onPress={()=>{navigation.openDrawer()}}
            size={40} />)
    }
  }
})
const AppDrawerNavigator=createDrawerNavigator({
	Menu:{screen:DashBoardStackNavigator},
})

const AppSwitchNavigator=createSwitchNavigator({
  Welcome:{screen:LogStack},
  MainApp:AppDrawerNavigator,  
})

export default AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 dashboard: {
    marginVertical: 50,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
