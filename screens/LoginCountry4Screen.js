import React, { Component } from 'react';
import LoginCountry from '../components/LoginCountry';

export default class LoginCountry4Screen extends Component {
 
  render() {
    return (
       <LoginCountry navigation={this.props.navigation}  />
    );
  }
}