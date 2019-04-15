import React from 'react'; 
import {ActivityIndicator,View,Text,AsyncStorage} from 'react-native';
import MyHeader from './Statics/MyHeader'

import {customStyle} from '../styles/loginStyles';
import MyForm from './Statics/MyForm';
import MyButton from './Statics/MyButton';

export  default class LoginNameSurname extends React.Component {
 
  constructor(props) {
    super(props);
    this.navigation= this.props.navigation,
    this.state = { 
          
     };
  }

  componentDidMount(){
     console.log(this.navigation);
  }
  _next() {  
     this.navigation.navigate('LoginPwdCpwd');
  };
  _back(){  
    this.navigation.goBack();
  };
  
  render() {

    if ((this.props.components !=null)) {
      return this.props.components.map((item,index) =>{
         return item
        }
      );
    } 
    return (  
        <View  style={[this.props.style, { fontFamily: 'space-mono',marginTop:22  }]} >            
            <Text>Nothing to SHOW</Text>
        </View>         
    )
  }
}

 