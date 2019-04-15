import React, { Component } from 'react';
import {Text,TouchableOpacity,View} from 'react-native';

import LoginNameSurname from '../components/LoginNameSurname';
import MyForm from '../components/Statics/MyForm';
import MyButton from '../components/Statics/MyButton';
import MyHeader from '../components/Statics/MyHeader';

import {customStyle} from '../styles/loginStyles'

export default class LoginFNLN1Screen extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      components:[],
      firstime:true,
      fn:'',
      ln:''
    }  
  }
  componentDidMount(){
    if (this.state.firstime) {
      this.setState({
        components:[
        <MyHeader span 
                  title="Let's setup your Name" key={0}
                  navigation={this.props.navigation} />,
         
        <MyForm placeholder="FIRST NAME"  getFromChild={ (value) => {this.setState({childstate:value})} } key={1}/>,
        <MyForm placeholder="LAST NAME" getFromChild={(value) => {this.setState({childstate:value})}} key={2}/>,  
        <View style={[customStyle.topTitle,{ flexDirection: "column" }]} key={3}>             
            <TouchableOpacity onPress={()=>{ this._next("ConfirmPwd") } }> 
                <Text style={customStyle.mybutton}>Next </Text>
            </TouchableOpacity>
        </View> 
        ]
      });
      this.setState({firstime:false});
    }     
  }

  getFromChild = (value) => {
    this.setState({childstate:value})    
  }

  _setData(name,value){
    switch(name){
      case 'fn':{
            this.setState({fn:value});
        break;
      }
    default: break;
    }
  }

  _next(nextPage){
     
      this.state.components=null;

      switch(nextPage){
        case "ConfirmPwd":{
          
          
          alert( this.state.childstate);

          this.setState({
            components:[
              <MyHeader span 
                        title="Let's setup your Password" key={4}
                        goBack={()=>{ this._next("") }} />,
              <MyForm placeholder="PASSWORD" key={5}/>,
              <MyForm placeholder="CONFIRM PASSWORD" key={6}/>,             
              <View style={[customStyle.topTitle,{ flexDirection: "column" }]} key={7}>             
                  <TouchableOpacity onPress={()=>{ this._next("CountryNo") } }> 
                      <Text style={customStyle.mybutton}>Next</Text>
                  </TouchableOpacity>
              </View>             
            ],
          });
          
          console.log(this.state.components)  
          
          break;
        }
        case "CountryNo":{
    
          this.setState({
            components:[
              <MyHeader span 
                        title="Let's setup your Country and Number" key={8}
                        goBack={()=>{ this._next("ConfirmPwd") }} />,
              <MyForm placeholder="COUNTRY" key={9}/>,
              <MyForm placeholder="NUMBER" key={10}/>,                      
              <View style={[customStyle.topTitle,{ flexDirection: "column" }]} key={11}>             
                  <TouchableOpacity onPress={()=>{ this._next("") } }> 
                      <Text style={customStyle.mybutton}>Next </Text>
                  </TouchableOpacity>
              </View>             
            ],
          });
          
          console.log(this.state.components)  
          
          break;
        }
        default: {
          this.setState({
            components:[
            <MyHeader span 
                      title="Let's setup your Name" key={0}
                      navigation={this.props.navigation} />,
            <MyForm placeholder="FIRST NAME" key={1}/>,
            <MyForm placeholder="LAST NAME" key={2}/>,  
            <View style={[customStyle.topTitle,{ flexDirection: "column" }]} key={3}>             
                <TouchableOpacity onPress={()=>{ this._next("ConfirmPwd") } }> 
                    <Text style={customStyle.mybutton}>Next </Text>
                </TouchableOpacity>
            </View> 
            ]
          });
          break;
        }
      }
  }

  render() {
    
    return (
       <LoginNameSurname 
          navigation={this.props.navigation}
          components={this.state.components}
       />
    );
  }
}