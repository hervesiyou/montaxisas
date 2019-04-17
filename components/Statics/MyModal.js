import React, {Component} from 'react';
import {Modal,Picker, Text, TouchableHighlight, View, Alert} from 'react-native';
import {customStyle} from '../../styles/loginStyles'

export default class MyModal extends Component {
  state = {
    modalVisible: true,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22,}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
         <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'}}>
            <View style={{
                    width: 200,
                    height: 200,
                    backgroundColor:'#aaa',
                    borderWidth:1,
                    borderRadius:25}}>
               <Picker
                   style={[customStyle.picker,{ flex: 1}]}
                   onValueChange={(itemValue, itemIndex) =>
                    this.setState( {data:[...this.state.data,{country:itemValue} ]})
                  }>
                  <Picker.Item label="CAMEROON" value="CMR" />
                  <Picker.Item label="OTHER" value="Other" />
                </Picker> 

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

         
      </View>
    );
  }
}