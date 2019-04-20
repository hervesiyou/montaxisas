 
import React, { Component } from 'react'
import Icon  from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View,Button ,TouchableOpacity, Platform} from 'react-native';
import {createSwitchNavigator,createBottomTabNavigator,createStackNavigator ,createDrawerNavigator,createAppContainer} from 'react-navigation';
import {customStyle} from '../styles/loginStyles';

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
import MyTripsScreen from '../screens/MyTripsScreen';
import TabBarIcon from '../components/TabBarIcon';
import TaxiPositionScreen from '../screens/TaxiPositionScreen';
import MyWalletScreen from '../screens/MyWalletScreen';

export class MainNavigator extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <AppContainer/>
      </View>
    );
  }

}
 
class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile component </Text>
      </View>
    )
  }
}
class Wallet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Wallet component </Text>
      </View>
    )
  }
}
class Alertes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Alert component </Text>
      </View>
    )
  }
}
class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Setting Component </Text>
        <TouchableOpacity onPress={ () => this.props.navigation.navigate("Slider") }> 
            <Text style={customStyle.mybutton}>Home</Text>
        </TouchableOpacity>
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
  },

); 

const MyTripStack = createStackNavigator({
  MyTrips: MyTripsScreen,

});

MyTripStack.navigationOptions = {
  headerVisible:false,
  tabBarLabel: 'My Trips',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    />
  ),
};
const TaxiPositionStack = createStackNavigator({
  MyTrips: TaxiPositionScreen,

});

TaxiPositionStack.navigationOptions = {
  headerVisible:false,
  tabBarLabel: 'Taxi Position',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'}
    />
  ),
};
const GetTaxiStack = createStackNavigator({
  GetTaxi: Profile,
});

GetTaxiStack.navigationOptions = {
  headerVisible:false,
  tabBarLabel: 'Get Taxi',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-car' : 'md-car'}
    />
  ),
};

const MyWalletStack = createStackNavigator({
  MyWallet: MyWalletScreen,

});

MyWalletStack.navigationOptions = {
  headerVisible:false,
  tabBarLabel: 'My Wallet',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-card-outline' : 'md-card'}
    />
  ),
};

const AlerteStack = createStackNavigator({
  Alertes: Alertes,

});

AlerteStack.navigationOptions = {
  headerVisible:false,
  tabBarLabel: 'Alertes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'}
    />
  ),
};
const DashBoardTabNavigator=createBottomTabNavigator({
  MyTripStack,
  TaxiPositionStack,
  GetTaxiStack,
  MyWalletStack,
  AlerteStack,

});

const DashBoardStackNavigator=createStackNavigator({
 
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
