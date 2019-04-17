import React from 'react';
 
import { View,Text,TouchableOpacity,TextInput } from 'react-native'; 
import MyHeader from './Statics/MyHeader';
import {customStyle} from '../styles/loginStyles' 

export  default class LoginPwdCpwd extends React.Component {
    
  constructor(props) {
    super(props);
    this.navigation=this.props.navigation,
    this.state = { 
      loading: true, 
      data:[]        
    };
  } 
  _next(){
    console.log(this.state.data);
    this.navigation.navigate('LoginCountryNumber',{data:this.state.data });
  };
  _back(){ 
    this.navigation.goBack();
  };
  
  render() { 
    return (        
         <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:2,justifyContent:'flex-start',}}>
            <MyHeader span 
                  title="Create a Password"  
                  navigation={this.props.navigation}
            />
            </View>
            <View style={{flex:2}}>
                <TextInput  
                    style={[customStyle.textinput,{ flex: 1, textAlign: "left" }]}
                    placeholder='PASSWORD' 
                    password={true}
                    secureTextEntry={true}
                    onSubmitEditing={(text) => this.setState({data:[...this.state.data,{password:text} ]})}                  
                />     
                <TextInput  
                    style={[customStyle.textinput,{ flex: 1, textAlign: "left" }]}
                    placeholder='CONFIRM PASSWORD'
                    password={true}
                    secureTextEntry={true}   
                    onSubmitEditing={(text) => this.setState({data:[...this.state.data,{cfpassword:text} ]})}          
                /> 
            </View>   
              <View style={[customStyle.topTitle,{flex:3,justifyContent:'center', flexDirection: "column" }]}>             
                  <TouchableOpacity onPress={ () => this._next() }> 
                      <Text style={customStyle.mybutton}>Next</Text>
                  </TouchableOpacity>
              </View>      
        </View>
        
    )
  }
}

 