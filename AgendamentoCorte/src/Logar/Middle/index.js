import React from "react";
import { View ,Text,StyleSheet,Image,TextInput,TouchableOpacity,ImageBackground} from "react-native";

import { AntDesign } from '@expo/vector-icons';
export default function MiddleLogar(){
    return(
        <View style={styles.container}>
        


        

        <View style={{alignItems:'center',marginTop:12,}}>
            <Image style={styles.Logo} source={require('../../../Imagem/Pole.png')}/> 
        </View>


    <View style={{alignItems:'center'}}>
        <TouchableOpacity style={{alignItems:'center',marginTop:20,flexDirection:'row' }}>
            <Text style={{color:'#fff',fontSize:16,fontWeight:'bold',paddingEnd:10}}>LOGIN</Text>
            <AntDesign name="arrowright" size={24} color="#fff" />
        </TouchableOpacity>
    </View>
        
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#026AB3'
    },

    Logo:{
        width:300,
        height:450,

    },

    TextoInput:{
        backgroundColor:'#dadada',
        borderRadius:10,
        width: 200,
        padding:10,
        marginBottom:10,
        marginTop:30
       
    }

})