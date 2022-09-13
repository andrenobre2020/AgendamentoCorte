
import React from "react";
import { View, Text,StyleSheet, StatusBar,Image} from "react-native";
const statusbarHeight =  StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
import { FontAwesome } from '@expo/vector-icons';
export default function HomeHeader(){
    return(
       <View style={styles.container}>
       <View style={{marginBottom:10,flexDirection:'row'}}>
        <FontAwesome name="user-circle" size={64} color="#fff" />
        <View style={{justifyContent:'center',marginStart:10}}>
            <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Seja bem vindo </Text>
        </View>
        </View>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: statusbarHeight,
        backgroundColor: '#016AB4',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:3,
        paddingTop:50,
        
    }
})