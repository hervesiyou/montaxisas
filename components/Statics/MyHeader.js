import React from 'react'; 
import {ActivityIndicator,View,Text,AsyncStorage} from 'react-native';
import { Container, Header,Left,Button,Icon,Right,Body,Title,Input,Image,Content,Form,Item as FormItem,Item,Label } from 'native-base';
import { Font } from 'expo'; 

import {customStyle} from '../../styles/loginStyles'

export  default class MyHeader extends React.Component {
 
  constructor(props) {
    super(props); 
    this.state = { 
      title: this.props.title?this.props.title:'header title',      
      imageUrl: 'image URL',      
     };
  }

  componentDidMount(){
  
  } 
  render() {
    return ( 
            <Header span style={customStyle.header}>   
              <Left>
                <Button transparent onPress={() =>{this.props.navigation.goBack()} }>
                  <Icon name="arrow-back" />
                </Button>
              </Left>                         
              <Body style={{justifyContent:'flex-end'}}> 
                <View style={[customStyle.topTitle,{ flexDirection: "row" }]}>
                  <Text numberOfLines={1} style={{ flex: 1, textAlign: "center" }}>
                    {this.state.title}
                  </Text>                
                </View>             
               </Body>              
            </Header>         
    )
  }
}

 