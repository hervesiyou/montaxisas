import React from "react";
import { View } from "react-native";
import AppNavigator from "../navigation/AppNavigator";
import { NavigationActions } from "react-navigation";
import PropTypes from 'prop-types';
import { DrawerActions } from 'react-navigation';


export default class MainComponentScreen extends React.Component{
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
      }

    render(){
        return(
            <View style={{flex:1}}>
                <AppNavigator/>
            </View>
        )
    }
}