import React from "react";
import { View,StyleSheet,Text,Image ,TouchableOpacity} from "react-native";
import BarberHeader from "../Header";
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
export default function BarberMiddle({route}){
   const navigation = useNavigation();

 function Edson(){
    navigation.navigate("AgendaMiddle",{Nome:route.params.Nome,Valor:route.params.Valor,Barbeiro:'Edson Siqueira'})
   }

   function Rick(){
    navigation.navigate("AgendaMiddle",{Nome:route.params.Nome,Valor:route.params.Valor,Barbeiro:'Rick'})
   }

    return(

    
       
        <View style={styles.container}>
            <BarberHeader/>
            <Image style={styles.Fotos} source={require('../../../Imagem/Logo.jpeg')} />
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginTop:10,color:'#016AB4'}}>Barbeiros</Text>
            
            <TouchableOpacity onPress={Edson}>
            <View style={{flexDirection:'row',backgroundColor:'#016AB4',marginStart:10,marginEnd:10,borderRadius:10,marginTop:10}}>
                <View style={{marginStart:10,padding:20}}>
                <FontAwesome name="user-circle" size={54} color="#fff" />
                </View>
               <View style={{justifyContent:'center'}}>
               <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}> Edson Siqueira</Text>
               </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={Rick}>
            <View style={{flexDirection:'row',backgroundColor:'#CC0F4F',marginStart:10,marginEnd:10,borderRadius:10,marginTop:20}}>
                <View style={{marginStart:10,padding:20}}>
                <FontAwesome name="user-circle" size={54} color="#fff" />
                </View>
               <View style={{justifyContent:'center'}}>
               <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}> Rick Barber</Text>
               </View>
            </View>
            </TouchableOpacity>





            <View style={{flex:2}}>

            </View>


        <Image style={styles.Fotos} source={require('../../../Imagem/Logo.jpeg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    Fotos:{
        height:10,
        
    }
})