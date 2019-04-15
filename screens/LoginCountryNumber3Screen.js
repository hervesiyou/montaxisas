import React, { Component } from 'react';
import LoginCountryNumber from '../components/LoginCountryNumber';

export default class LoginCountryNumber3Screen extends Component {
 
  render() {
    return (
       <LoginCountryNumber navigation={this.props.navigation}  />
    );
  }
}