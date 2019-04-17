import React from 'react'; 
import Dialog, {DialogTitle,SlideAnimation,  DialogContent } from 'react-native-popup-dialog';
 
import { View,Text,TouchableOpacity,TextInput ,AsyncStorage } from 'react-native'; 
import MyHeader from './Statics/MyHeader';
import {customStyle} from '../styles/loginStyles' 

export  default class LoginPwdCpwd extends React.Component {
    
  constructor(props) {
    super(props);
    this.navigation=this.props.navigation,
    this.firstname='';
    this.lastname='';
    this.state = { 
      visible: true, 
      data:[]        
    };
  } 
  _next(){ 
    this.navigation.navigate('LoginCountryNumber',{data:this.state.data });
  };
  _back(){ 
    this.navigation.goBack();
  };
  _storageAccess = async (mode,name,value="") => {
    switch(mode){
        case 'SET':{           
              await AsyncStorage.setItem(name, value);
              return name+' save  successfully';            
          break;
        }
        case 'GET':{             
              value = await AsyncStorage.getItem(name, (err, item) => {console.log(item);return item;})
              if(value !== null) {
                return value
              }            
          break;
        }
        default: break;
    }
 
  }
  
  componentWillMount(){
    this.firstname= this._storageAccess('GET','firstname' );
    this.lastname= this._storageAccess('GET','lastname' );
    console.log(this.firstname.toString() +' '+this.lastname.toString())
  }
  
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

              <View >
              <Dialog 
                dialogTitle={<DialogTitle title="YOU" />}
                visible={this.state.visible}
                onTouchOutside={() => {
                  this.setState({ visible: false });
                }}
                dialogAnimation={new SlideAnimation({
                  slideFrom: 'bottom',
                })}
              >
                <DialogContent>
                  <Text> 
                  {JSON.stringify(this.firstname)}
                 
                  </Text>
                </DialogContent>
              </Dialog>
            </View>    
        </View>
        
    )
  }
}

 