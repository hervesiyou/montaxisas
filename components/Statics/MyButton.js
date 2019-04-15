import React from 'react'; 
import {View,Button,Text,TouchableOpacity} from 'react-native';
import {customStyle} from '../../styles/loginStyles'


export  default class MyButton extends React.Component {
 
  constructor(props) {
    super(props); 
    this.state = { 
      title: this.props.title?this.props.title:'Button title',  
     };
  }
  componentDidMount(){
  
  } 
  render() {
    return ( 
        <View style={[customStyle.topTitle,{ flexDirection: "column" }]}>             
            <TouchableOpacity onPress={()=>{ this.props.next} }> 
                <Text style={customStyle.mybutton}>{this.state.title}</Text>
            </TouchableOpacity>
         </View>      
    )
  }
}

 