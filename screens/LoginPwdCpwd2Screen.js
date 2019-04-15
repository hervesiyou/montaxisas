import React, { Component } from 'react'; 
import LoginPwdCpwd from '../components/LoginPwdCpwd';

export default class LoginPwdCpwd2Screen extends Component {
  
  render() {
    return (
       <LoginPwdCpwd navigation={this.props.navigation}  />
    );
  }
}