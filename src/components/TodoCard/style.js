import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
       
    },
    appTitle: {
        fontSize: 50,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Times New Roman',
        fontStyle: 'normal',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20
    },
    itemCard: {
        backgroundColor: "lightgrey",
        borderColor: 'lightgrey',
         padding: 10,
         margin: 10,
         borderRadius: 10,
         borderWidth: 2,
       
        
    },
    title: {    
      fontSize: 20,
      color: 'black',
      textAlign: 'center',
      fontFamily: 'Times New Roman',
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
    textInput: {   
        margin: 12,
        borderWidth: 2,
        borderColor: 'white',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
        width:Dimensions.get('window').width/1.1,
        textAlign: 'center',
       height: Dimensions.get('window').height/15,
        backgroundColor: 'white',
      },
      button: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'orange',
      alignSelf: 'center',
        margin: 30,
        width:Dimensions.get('window').width/3,

      },
      toggleButton:{
       alignSelf: 'center',
       alignItems: 'center',
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'orange',
      
        margin: 30,
        width:Dimensions.get('window').width/3,
      },
      buttonText:{
        fontSize: 25,
        color: 'white',
        fontFamily: 'Times New Roman',
        fontStyle: 'normal',
        fontWeight: 'bold',

      }
})