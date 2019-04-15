import React from 'react'; 
import {View,TextInput,} from 'react-native';
import {customStyle} from '../../styles/loginStyles'


export  default class MyForm extends React.Component {
 
  constructor(props) {
    super(props); 
    console.log(props)    
    this.state = { 
      placeholder: this.props.placeholder?this.props.placeholder:'header title',      
      imageUrl: 'image URL',  
      content:'',    
     };
  }
  _getContent(){
    return this.state.content;
  }
  _sendValue = (value) => this.props.getFromChild(value);

  componentDidMount(){
  
  } 
  render() {
    return ( 
        <View style={[customStyle.topTitle,{ flexDirection: "row" }]}>
            <TextInput  
                 style={[customStyle.textinput,{ flex: 1, textAlign: "left" }]}
                 placeholder={this.state.placeholder}
                //  onChangeText={(text) => this.setState({content})}
                //  onChangeText={(text) => this._sendValue(text) }                  
                  onChangeText={(text) => this.props.getFromChild(text) }                  
            />                
        </View>      
    )
  }
}

 