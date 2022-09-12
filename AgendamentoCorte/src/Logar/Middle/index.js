import React from "react";
import { View ,Text,StyleSheet,Image,TextInput,TouchableOpacity,ImageBackground} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
export default function MiddleLogar(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
        


        

        <View style={{alignItems:'center',marginTop:12,}}>
            <Image style={styles.Logo} source={require('../../../Imagem/Barber_Shop.png')}/> 
        </View>


    <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={() => {navigation.navigate("TelaLogin"), navigation.reset({index:0, routes:[{name: 'TelaLogin'}]})}} style={{alignItems:'center',marginTop:20,flexDirection:'row' }}>
            <Text style={{color:'#fff',fontSize:16,fontWeight:'bold',paddingEnd:10}}>LOGIN</Text>
            <AntDesign name="right" size={24} color="#fff" />
        </TouchableOpacity>
    </View>
        
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#016AB4'
    },

    Logo:{
        width:300,
        height:550,

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