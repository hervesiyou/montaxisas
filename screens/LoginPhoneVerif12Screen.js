import React, { Component } from 'react';
import LoginVerifPhone from '../components/LoginVerifPhone';

export default class LoginPhoneVerif12Screen extends Component {
 
  render() {
    return (
       <LoginVerifPhone navigation={this.props.navigation}  />
    );
  }
}