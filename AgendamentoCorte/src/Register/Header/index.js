
import React from "react";
import { View, Text,StyleSheet, StatusBar,Image,TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
const statusbarHeight =  StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function RegisterHeader(){
    const navigation = useNavigation();
    return(
       <View style={styles.container}>
       <TouchableOpacity onPress={() => {navigation.navigate('TelaLogin')}} style={{paddingBottom:10,marginStart:10}}>
        <AntDesign name="arrowleft" size={26} color="#fff" />
        </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: statusbarHeight,
        backgroundColor: '#016AB4',

        paddingBottom:3,
        paddingTop:50
    }
})