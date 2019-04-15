import React, { Component } from 'react';
import LoginNameSurname from '../components/LoginNameSurname';

export default class LoginFNLN1Screen extends Component {
 
  render() {
    
    return (
       <LoginNameSurname navigation={this.props.navigation} />
    );
  }
}