import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:5,
        padding:5,
        borderRadius:10,
    },
    
    image:{
        height:Dimensions.get('window').height/4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    description:{},
    title:{
        fontWeight:'bold',
        fontSize:20,           

    },
    author:{
        fontStyle:'italic',
        textAlign:'right'
    },
    inner_container:{
        padding:10,
        

    }

})