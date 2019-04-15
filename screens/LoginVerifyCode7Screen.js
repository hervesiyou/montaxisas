import React, { Component } from 'react';
import LoginVerifCode from '../components/LoginVerifCode';

export default class LoginVerifyCode7Screen extends Component {
 
  render() {
    return (
       <LoginVerifCode navigation={this.props.navigation}  />
    );
  }
}