import {StyleSheet} from 'react-native';

export const customStyle = StyleSheet.create({
   header:{
      color: 'white',
      backgroundColor:'#fff301',       
      flexDirection:'column',
      marginTop:20,
   },
   loading:{
      justifyContent:'center',
      alignItems:'center',
      flex:1,
   },
   topTitle:{        
        fontFamily: "ProductSans",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        justifyContent:'flex-end',
        alignItems: 'center',      
        textAlign: "center",
        color: "#393939"
   },
  textinput: { 
    borderBottomColor: '#D1DCE8',
    borderBottomWidth: 1,
    marginVertical:20,
    marginHorizontal: 40,

  },
  mybutton:{
    borderRadius: 20,
    color: "#393939",
    marginRight:40,
    marginLeft:40,
    marginTop:10,    
    padding:10,    
    backgroundColor: "#fff301",
    justifyContent:'space-around',     
    borderWidth: 1,
    borderColor: '#fff',    
    textAlign:'center',
    width:300,
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