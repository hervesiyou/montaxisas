import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import LoginNameSurname from '../components/LoginNameSurname';

export default class LoginScreen extends Component {
  render() {
    return (
       <LoginNameSurname />
    );
  }
}