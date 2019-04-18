import React from 'react'; 
import { View,Text,TouchableOpacity,TextInput,AsyncStorage } from 'react-native'; 
import MyHeader from './Statics/MyHeader';
import {customStyle} from '../styles/loginStyles';
//import AsyncStorage from '@react-native-community/async-storage';

export  default class LoginNameSurname extends React.Component {
 
  constructor(props) {
    super(props);
    this.navigation= this.props.navigation,
    
    this.state = { 
      firstname: '', 
      lastname: '', 
      data:[]     
    };
  }
 
  componentDidMount(){
     console.log(this.navigation);
  }
  _next() {
     console.log(this.state.data);
     this._storageAccess('SET','firstname',this.state.firstname);
     this._storageAccess('SET','lastname',this.state.lastname);
     this.navigation.navigate('LoginPwdCpwd',{data:this.state.data });
  };
  _back(){  
    this.navigation.goBack();
  };
  _home(){  
    this.navigation.navigate("MainApp")
  };
  _storageAccess = async (mode,name,value="") => {
    switch(mode){
        case 'SET':{
            try {
              await AsyncStorage.setItem(name,value);
              return name+' save  successfully';
            } catch (e) {
              return ' Problem saving '+name;
            }
          break;
        }
        case 'GET':{
            try {
              const value = await AsyncStorage.getItem(name, (err, item) => {console.log(item);return item;})
              if(value !== null) {
                return value
              }
            } catch(e) {
              return ' Problem getting '+name;
            }
          break;
        }
        default: break;
    }
 
  }
  
  render() { 
    return (   
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:2,justifyContent:'flex-start',}}>
            <MyHeader span 
                  title="Let's setup your Account"  
                  navigation={this.props.navigation}
            />
            </View>
            <View style={{flex:2}}>
              <TextInput  
                  style={[customStyle.textinput,{ flex: 1, textAlign: "left" }]}
                  placeholder='FIRST NAME' 
                  onSubmitEditing={
                    (text) =>{this.setState({data:[...this.state.data,{firstname:text} ],firstname:text}) }
                  }                  
              />     
              <TextInput  
                  style={[customStyle.textinput,{ flex: 1, textAlign: "left" }]}
                  placeholder='LAST NAME'   
                  onSubmitEditing={(text) => this.setState({data:[...this.state.data,{lastname:text} ],lastname:text})}          
              /> 
            </View>   
              <View style={[customStyle.topTitle,{flex:3,justifyContent:'center', flexDirection: "column" }]}>             
                  <TouchableOpacity onPress={ () => this._next() }> 
                      <Text style={customStyle.mybutton}>Next</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={ () => this._home() }> 
                      <Text style={customStyle.mybutton}>Home</Text>
                  </TouchableOpacity>
              </View>      
        </View>      
    )
  }
}

 