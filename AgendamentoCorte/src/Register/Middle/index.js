import React,{useState}from "react";
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from "react-native";
import firebase from 'firebase/compat';
import Firebase from  '../../db';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";

export default function RegisterMiddle(){
    const[Nome,setNome] = useState('')
    const[Telefone,setTelefone] = useState('')
    const[Email,setEmail] = useState('')
    const[Senha,setSenha] = useState('')


 const criarLogin = () => {

const auth = getAuth();
createUserWithEmailAndPassword(auth, Email, Senha,Nome,Telefone)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
     console.log(user)
     alert('Cadastrado com Sucesso !')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
};


    return(
      
        <View style={styles.container}>
          <Image style={styles.Fotos} source={require('../../../Imagem/Logo.jpeg')} />
         
            <View style={styles.conta}>
        <Text style={{marginTop: 70,fontWeight:'bold',fontSize:20,color:'#FFF' }}> REGISTRA-SE</Text>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TextInput onChangeText={Nome => setNome(Nome)} style={styles.Entrada} placeholder="Nome"/>
                <TextInput onChangeText={Telefone => setTelefone(Telefone)} style={styles.Entrada} keyboardType='name-phone-pad' placeholder="Telefone"/>

            </View>


            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TextInput onChangeText={Email => setEmail(Email)} style={styles.Entrada} placeholder="Email"/>
                <TextInput secureTextEntry={true} onChangeText={Senha => setSenha(Senha)} style={styles.Entrada}  placeholder="Senha"/>

            </View>

            <TouchableOpacity onPress={criarLogin} style={{marginTop:20,backgroundColor:'#b22',padding:10,borderRadius:10}}>
                <Text style={{color:'#fff'}}>Register</Text>
            </TouchableOpacity>
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
        height:5
    },
    conta:{
        flex:1,
    
        alignItems:'center',
        backgroundColor:'#016AB4',
        marginTop:150,
        marginBottom:150,
        borderBottomLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        borderTopLeftRadius:30
    },
    Entrada:{
        backgroundColor:'#fff',
        borderRadius:10,
        width:160,
        padding:10,
        marginTop:20,
        marginEnd:10
    }

})