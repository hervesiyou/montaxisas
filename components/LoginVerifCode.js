import React from 'react'; 
import { View,Text,TouchableOpacity,TextInput,Picker,Item } from 'react-native'; 
import MyHeader from './Statics/MyHeader';
import {customStyle} from '../styles/loginStyles'

export  default class LoginVerifCode extends React.Component {
    
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation,
    this.state = { 
      loading: true, 
      data:[]       
    };
  } 
  _next(){
     
    this.navigation.navigate('LoginWelcome',{data:this.state.data });
  };
  _back(){ 
    this.navigation.goBack();
  };
  _changeNumber(){ 
    this.navigation.navigate('LoginChangeNumber');
  };
  
  render() { 
    return ( 
        
      <View style={{flex:1,flexDirection:'column'}}>
          <View style={{flex:2,justifyContent:'flex-start',}}>
            <MyHeader span 
                  title="Input the Verification Code you received by SMS"  
                  navigation={this.props.navigation}
            />
          </View>
          <View style={{flex:1}}>      
              <TextInput  
                  style={[customStyle.textinput,{ flex: 1, textAlign: "left" }]}
                  placeholder='Verification code'   
                  onSubmitEditing={(text) => this.setState({data:[...this.state.data,{code:text} ]})}          
              />         
          </View>   
            <View style={[customStyle.topTitle,{flex:3,justifyContent:'center', flexDirection: "column" }]}>             
                <TouchableOpacity onPress={ () => this._next() }> 
                    <Text style={customStyle.mybutton}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this._changeNumber() }> 
                    <Text style={customStyle.mybutton}>Change Number</Text>
                </TouchableOpacity>
            </View>      
      </View>     
              
        
    )
  }
}

 