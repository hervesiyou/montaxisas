import React from 'react'; 
import { View,Text,TouchableOpacity,TextInput,Picker,Image } from 'react-native';  
import {customStyle} from '../styles/loginStyles'

export  default class LoginWelcome extends React.Component {
    
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation,
    this.state = { 
      data: [],             
    };
  } 
  _next(){
     
    this.navigation.navigate('LoginPhoneNumber',{data:this.state.data });
  };
  _back(){ 
    this.navigation.goBack();
  };
  _signing(){ 
    this.navigation.navigate('LoginSigning');
  };
  
  render() { 
    return (  
         
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:3,justifyContent:'center',alignItem:'center',marginHorizontal:20,marginVertical:20}}>
              <Image 
                    title="Let's setup your Account"  
                    source={require('../assets/images/taxiround.png')}
              />
            </View>
            <View style={{flex:2}}>
              <Text style={{marginLeft:30}}>HI  Welcome Back</Text>
              <TextInput  
                  style={[customStyle.textinput,{ flex: 1, textAlign: "left" }]}
                  placeholder='PHONE NUMBER' 
                  onSubmitEditing={(text) => this.setState({data:[...this.state.data,{phone:text} ]})}                  
              />     
              <TextInput  
                  style={[customStyle.textinput,{ flex: 1, textAlign: "left" }]}
                  placeholder='PASSWORD'   
                  onSubmitEditing={(text) => this.setState({data:[...this.state.data,{password:text} ]})}          
              /> 
            </View>   
              <View style={[customStyle.topTitle,{flex:3,justifyContent:'center', flexDirection: "column" }]}>             
                  <TouchableOpacity onPress={ () => this._next() }> 
                      <Text style={customStyle.mybutton}>Next</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this._signing()}> 
                      <Text style={customStyle.mybutton}>Signing</Text>
                  </TouchableOpacity>
                   <Text>Don't have account ? Sign Up</Text>
              </View>      
        </View>       
       
    )
  }
}

 