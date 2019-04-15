import React from 'react'; 
import {ActivityIndicator,View,Text,AsyncStorage,} from 'react-native';
import { Container, Header,Left,Button,Icon,Right,Body,Title,Input,Image,Content,Form,Item,Item as FormItem,Label } from 'native-base';
import { Font } from 'expo';
import {customStyle} from '../styles/loginStyles'

export  default class LoginCountryNumber extends React.Component {
    
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation,
    this.state = { 
      loading: true,      
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      ProductSans: require("../assets/fonts/ProductSans.ttf"),
    });
    this.setState({ loading: false });
  }
  _next(){
    AsyncStorage.setItem('userToken', 'abc');
    this.navigation.navigate('LoginCountry');
  };
  _back(){ 
    this.navigation.goBack();
  };
  
  render() {

    if (this.state.loading) {
      return (
        <View style={[customStyle.loading, customStyle.header]}>         
          <ActivityIndicator size="small" color="#fff" />
        </View>
      )
    }

    return (        
        <Container style={[this.props.style, { fontFamily: 'space-mono',marginTop:22  }]} >
            <Header span style={customStyle.header}>
              <Left>
                <Button transparent onPress={() =>this._back()}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>              
              <Body>              
                <Title style={customStyle.topTitle}>Create your password</Title>
              </Body>
              <Right />
            </Header>
            <Form>
              <FormItem floatingLabel>
                <Label>COUNTRY</Label>
                <Input />
              </FormItem>
              <FormItem floatingLabel last>
                <Label>NUMBER</Label>
                <Input   />
              </FormItem>                
              <Button light warning title="Next" onPress={() => this._next()}><Text> Next </Text></Button>
            </Form> 
             
        </Container>
    )
  }
}

 