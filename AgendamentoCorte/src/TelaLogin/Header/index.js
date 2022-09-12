
import React from "react";
import { View, Text,StyleSheet, StatusBar,Image} from "react-native";
const statusbarHeight =  StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function TelaHeader(){
    return(
       <View style={styles.container}>
        
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
        paddingTop:50
    }
})