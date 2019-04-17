import React from 'react'; 
import { View,Text,TouchableOpacity,TextInput,Picker,Item } from 'react-native'; 
import MyHeader from './Statics/MyHeader';
import {customStyle} from '../styles/loginStyles'  

export  default class LoginCountryNumber extends React.Component {
    
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation,
    this.state = { 
      loading: true,  
      data:[]    
    };
  }
 
  _next(){
    console.log(this.state.data);
    this.navigation.navigate('LoginCountry',{data:this.state.data });
  };
  _back(){ 
    this.navigation.goBack();
  };
  
  render() { 

    return (        
        
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:2,justifyContent:'flex-start',}}>
            <MyHeader span 
                  title="Input phone number"  
                  navigation={this.props.navigation}
            />
            </View>
            <View style={{flex:2}}>
        
                <Picker
                   style={[customStyle.picker,{ flex: 1}]}
                   onValueChange={(itemValue, itemIndex) =>
                    this.setState( {data:[...this.state.data,{country:itemValue} ]})
                  }>
                  <Picker.Item label="CAMEROON" value="CMR" />
                  <Picker.Item label="OTHER" value="Other" />
                </Picker> 
                
                <View style={{flex:1,flexDirection:'row', marginVertical:20, marginHorizontal: 40,}}>
                  <Text  style={{flex:1}} >237</Text>
                  <TextInput  
                      style={[customStyle.textinput,{ flex: 5, textAlign: "center" }]}
                      placeholder='NUMBER'  
                      onSubmitEditing={(text) => this.setState({data:[...this.state.data,{phone:text} ]})}          
                  /> 
                </View>
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

 