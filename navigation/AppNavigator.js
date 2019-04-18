import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import AppSwitchNavigator from './MainTabNavigator';


export default createAppContainer( AppSwitchNavigator);

