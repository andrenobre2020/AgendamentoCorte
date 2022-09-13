import React from "react";
import { View,StyleSheet,Text,Image,TouchableOpacity,ScrollView} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatables from "react-native-animatable";
import{useNavigation} from '@react-navigation/native'

export default function HomeMiddle(){
    const navigation = useNavigation();

function Corte(){
    navigation.navigate("BarberMiddle",{Nome:'Corte Masculino',Valor:'25.00'})
}

function Sombracelha(){
    navigation.navigate("BarberMiddle",{Nome:'Sombracelha',Valor:'10.00'})
}

function Alisamento(){
    navigation.navigate("BarberMiddle",{Nome:'Alisamento',Valor:'50.00'})
}

    return(
        <Animatables.View animation='fadeIn' delay={500} style={styles.container}>
        <Image style={styles.Fotos} source={require('../../../Imagem/Logo.jpeg')}/>
            
            <Text style={{textAlign:'center',marginTop:10,fontWeight:'bold',color:'#1E90FF',fontSize:20}}>SERVIÇOS</Text>

            <ScrollView>
            
            <TouchableOpacity onPress={Corte}>
            <View style={{backgroundColor:'#ADD8E6',borderRadius:20,padding:5,marginTop:20,flexDirection:'row',marginStart:10,marginEnd:10}}>
            <View style={{backgroundColor:'#016AB4',width:70,marginStart:10,borderRadius:50}} >
                <MaterialCommunityIcons style={{padding:10}} name="mustache" size={54} color="#fff" />
            </View>
            <View style={{justifyContent:'center',marginStart:10}}>
            <Text style={{fontWeight:'bold',fontSize:16,color:'#016AB4'}}> CORTE DE CABELO </Text>
            
            <Text style={{marginTop:5,fontWeight:'bold',color:'#fff',fontSize:20}}>R$ 25.00</Text>
            </View>
            </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={Sombracelha}>
            <View style={{backgroundColor:'#ADD8E6',borderRadius:20,padding:5,marginTop:20,flexDirection:'row',marginStart:10,marginEnd:10}}>
            <View style={{backgroundColor:'#016AB4',width:70,marginStart:10,borderRadius:50}} >
            <MaterialCommunityIcons style={{padding:10}} name="razor-double-edge" size={54} color="#fff" />
            </View>
            <View style={{justifyContent:'center',marginStart:10}}>
            <Text style={{fontWeight:'bold',fontSize:16,color:'#016AB4'}}> SOMBRACELHA </Text>
            
            <Text style={{marginTop:5,fontWeight:'bold',color:'#fff',fontSize:20}}>R$ 10.00</Text>
            </View>
            </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={Alisamento}>
            <View style={{backgroundColor:'#ADD8E6',borderRadius:20,padding:5,marginTop:20,flexDirection:'row',marginStart:10,marginEnd:10}}>
            <View style={{backgroundColor:'#016AB4',width:70,marginStart:10,borderRadius:50}} >
            <MaterialCommunityIcons style={{padding:10}} name="hair-dryer" size={54} color="#FFF" />
            </View>
            <View style={{justifyContent:'center',marginStart:10}}>
            <Text style={{fontWeight:'bold',fontSize:16,color:'#016AB4'}}> ALISAMENTO </Text>
            
            <Text style={{marginTop:5,fontWeight:'bold',color:'#fff',fontSize:20}}>R$ 50.00</Text>
            </View>
            </View>
            </TouchableOpacity>


            </ScrollView>

            <Image style={styles.Fotos} source={require('../../../Imagem/Logo.jpeg')}/>

        </Animatables.View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Fotos:{
        height:10
    }
})