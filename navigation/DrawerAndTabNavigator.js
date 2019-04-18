import React from 'react';

import { View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import DrawerNavigator from './DrawerNavigator';

// import { Container } from './styles';


export default createSwitchNavigator({
    Main: MainTabNavigator,
    Drawer: DrawerNavigator
});
