import React from 'react'; 
import { View,Text,Modal,TouchableOpacity,TouchableHighlight,TextInput,Picker,Item ,Alert} from 'react-native'; 
import MyHeader from './Statics/MyHeader'; 
import {customStyle} from '../styles/loginStyles'
import MyModal from './Statics/MyModal';

export  default class LoginCountry extends React.Component {
    
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation,
    this.state = { 
      data: [],  
      modalVisible:true,  

    };
  } 
  _next(){
    console.log(this.state.data);
    this.navigation.navigate('LoginTown'),{data:this.state.data };
  };
  _back(){ 
    this.navigation.goBack();
  };
  
  render() { 
    return (        
      <View style={{flex:1,flexDirection:'column'}}>
      <View style={{flex:2,justifyContent:'flex-start',}}>
      <MyHeader span 
            title="Select your Country"  
            navigation={this.props.navigation}
      />
      </View>
      <View style={{flex:2}}> 
          
          <View style={{flex:1,flexDirection:'row', marginVertical:20, marginHorizontal: 40,}}>
            {/* <MyModal /> */}
            <View style={{
                    width: 200,
                    height: 200,
                    backgroundColor:'#aaa',
                    borderWidth:1,
                    borderRadius:25}}>
               <Picker
                   style={[customStyle.picker,]}
                   onValueChange={(itemValue, itemIndex) =>
                    this.setState( {data:[...this.state.data,{country:itemValue} ]})
                  }>
                  <Picker.Item label="CAMEROON" value="CMR" />
                  <Picker.Item label="OTHER" value="Other" />
                </Picker> 

              
            </View>

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

 