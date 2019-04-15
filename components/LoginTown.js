import React from 'react'; 
import { View,Text,TouchableOpacity,TextInput,Picker,Item } from 'react-native'; 
import MyHeader from './Statics/MyHeader';
import {customStyle} from '../styles/loginStyles'

export  default class LoginTown extends React.Component {
    
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation,
    this.state = { 
      loading: true, 
      data:[]      
    };
  } 
  _next(){
    
    this.navigation.navigate('LoginSearchTown');
  };
  _back(){ 
    this.navigation.goBack();
  };
  
  render() { 

    return (        
      <View style={{flex:1,flexDirection:'column'}}>
      <View style={{flex:2,justifyContent:'flex-start',}}>
      <MyHeader span 
            title="Select your Town"  
            navigation={this.props.navigation}
      />
      </View>
      <View style={{flex:2}}>
  
          <Picker
             style={[customStyle.picker,{ flex: 1}]}
             onValueChange={(itemValue, itemIndex) =>
              this.setState( {data:[...this.state.data,{country:itemValue} ]})
            }>
            <Picker.Item label="Select Town" value="CMR" />
            <Picker.Item label="OTHER" value="Other" />
          </Picker> 
          
           
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

 