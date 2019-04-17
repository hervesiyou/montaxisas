import React from 'react'; 
import { View,Text,TouchableOpacity,TextInput,Picker,Image } from 'react-native'; 
import MyHeader from './Statics/MyHeader';
import {customStyle} from '../styles/loginStyles'

export  default class LoginVerifPhone extends React.Component {
    
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation,
    this.state = { 
      data: [],      
    };
  } 
  _next(){ 
    this.navigation.navigate('LoginSignup',{data:this.state.data });
  };
  _back(){ 
    this.navigation.goBack();
  };
  _changeNumber(){ 
    this.navigation.navigate('LoginChangeNumber'),{data:this.state.data };
  };
  _verifCode(){ 
    this.navigation.navigate('LoginVerifCode',{data:this.state.data });
  };
  
  render() { 
    return (   
      <View style={{flex:1,flexDirection:'column'}}>
          <View style={{flex:2,justifyContent:'flex-start',}}>
          <MyHeader span 
                title="A SMS was send to ***** "  
                navigation={this.props.navigation}
          />
          </View>
          <View style={{flex:2}}> 
              <View style={{flex:1, marginVertical:20, marginHorizontal: 40,}}>
              
                <TextInput  
                    style={[customStyle.textinput,{ flex: 5, textAlign: "center" }]}
                    placeholder='CODE'  
                    onSubmitEditing={(text) => this.setState({data:[...this.state.data,{phone:text} ]})}          
                /> 
              </View>
          </View>   
            <View style={[customStyle.topTitle,{flex:3,justifyContent:'center', flexDirection: "column" }]}>             
                <TouchableOpacity onPress={ () => this._next() }> 
                    <Text style={customStyle.mybutton}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this._changeNumber() }> 
                    <Text style={customStyle.mybutton}>Change Number</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this._verifCode() }> 
                    <Text style={customStyle.mybutton}>Verify Code</Text>
                </TouchableOpacity>
            </View>      
      </View>  
    )
  }
}

 