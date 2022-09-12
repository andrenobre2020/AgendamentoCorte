import React from "react";
import { View,Text,StyleSheet,Image ,TextInput,TouchableOpacity} from "react-native";

export default function TelaMiddle(){
    return(
        <View style={styles.container}>
            <Image style={styles.Fotos} source={require('../../../Imagem/Logo.jpeg')}/>

          
            <View style={{alignItems:'center',marginTop:40}}>
                <Image style={styles.logo} source={require('../../../Imagem/Barberia.png')}/>
            </View>

        <View style={styles.caixa}>
        <Text style={styles.TextoTitle}>
             BARBER SHOP LOGIN
            </Text>

            <TextInput autoComplete="email" style={styles.Entrada} placeholderTextColor='#fff' placeholder="Usuario"/>
            <TextInput autoComplete="password" secureTextEntry={true} style={styles.Entrada} placeholderTextColor='#fff' placeholder="Senha"/>
            
            <TouchableOpacity style={{marginTop:10}}>
                <Text style={{fontWeight:'bold',fontSize:16}}>
                    Registra-se
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Botao}>
                <Text style={{color:'#fff',fontWeight:'bold',textAlign:'center'}}>Logar</Text>
            </TouchableOpacity>
        </View>            


            

        <Image style={styles.Fotos} source={require('../../../Imagem/Logo.jpeg')}/>
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
        marginTop:5

    },
    TextoTitle:{
        color:'#0164af',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:26,
        marginBottom:15
        
      
    },
    caixa:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        marginTop:-80
        
    
    },
    Entrada:{
        width:250,
        backgroundColor:'#0164af',
        marginTop:15,
        borderRadius:10,
        padding:10
      
    },
    logo:{
        width:250,
        height:250,
        
    },
    Botao:{
        backgroundColor:'#0164af',
        marginTop:20,
        padding:10,
        borderRadius:10,
        width:90
    }
})