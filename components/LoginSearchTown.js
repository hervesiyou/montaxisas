import React from 'react'; 
import { View,Text,TouchableOpacity,TextInput,Picker,Item } from 'react-native'; 
import MyHeader from './Statics/MyHeader';
import {customStyle} from '../styles/loginStyles'

export  default class LoginSearchTown extends React.Component {
    
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation,
    this.state = { 
      loading: true,
      data:[]       
    };
  } 

  _next(){ 
    this.navigation.navigate('LoginVerifCode',{data:this.state.data });
  };
  _back(){ 
    this.navigation.goBack();
  };
  
  render() { 

    return (   
      <View style={{flex:1,flexDirection:'column'}}>
          <View style={{flex:2,justifyContent:'flex-start',}}>
            <MyHeader span 
                  title="Select your Current City"  
                  navigation={this.props.navigation}
            />
          </View>
          <View style={{flex:1}}>      
              <TextInput  
                  style={[customStyle.textinput,{ flex: 1, textAlign: "left" }]}
                  placeholder='SEARCH TOWN'   
                  onSubmitEditing={(text) => this.setState({data:[...this.state.data,{town:text} ]})}          
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

 