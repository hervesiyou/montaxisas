import {StyleSheet} from 'react-native';

export const customStyle = StyleSheet.create({
   header:{
      color: 'white',
      backgroundColor:'#fff301'
   },
   loading:{
      justifyContent:'center',
      alignItems:'center',
      flex:1,
   },
   topTitle:{
        
        fontFamily: "ProductSans",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
     
        textAlign: "center",
        color: "#393939"
   },
  rectangle14 : {
    width: 72.3,
    height: 0.8,
    borderRadius: 1,
    backgroundColor: "#393939"
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})