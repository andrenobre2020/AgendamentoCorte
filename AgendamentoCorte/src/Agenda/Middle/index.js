import React,{useState} from "react";
import { View,StyleSheet,Text, ScrollView,Platform, TouchableOpacity,Button } from "react-native";
import AgendaHeader from "../Header";
import firebase from 'firebase/compat';
import Firebase from  '../../db';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function AgendaMiddle({route}){
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(true);
        setDate(currentDate);
      };
    

      const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
          setShow(true);
          // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
      };



      function Agendar(){
        try{
            firebase.database().ref('/Agendamento').push({
                Nome: route.params.Nome,
                Valor: route.params.Valor,
                Barbeiro: route.params.Barbeiro,
                Data: date.toLocaleString()
            })
        }catch(error){
            alert(error)
        }
        finally{
            alert('Agendamento Concluido ')
        }
      }

     

      
  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

    return(
        <View>
        <AgendaHeader/>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginBottom:20,marginTop:20,color:'#CC0F4F'}}> CONCLUA AGENDAMENTO</Text>

        <ScrollView>

        <View style={{flexDirection:'row',backgroundColor:'#016AB4',marginStart:10,marginEnd:10,borderRadius:10,marginTop:10}}>
                <View style={{padding:10}}>
            <MaterialCommunityIcons style={{padding:10}} name="mustache" size={54} color="#fff" />
                </View>
               <View style={{justifyContent:'center'}}>
               <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}> Serviço : {route.params.Nome}</Text>
               </View>
        </View>

        <View style={{flexDirection:'row',backgroundColor:'#016AB4',marginStart:10,marginEnd:10,borderRadius:10,marginTop:10}}>
                <View style={{marginStart:10,padding:20}}>
                <FontAwesome name="money" size={54} color="#fff" />
                </View>
               <View style={{justifyContent:'center'}}>
               <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}> Valor : {route.params.Valor} Reais</Text>
               </View>
        </View>


        <View style={{flexDirection:'row',backgroundColor:'#016AB4',marginStart:10,marginEnd:10,borderRadius:10,marginTop:10}}>
                <View style={{marginStart:10,padding:20}}>
                <FontAwesome name="cut" size={54} color="#fff" />
                </View>
               <View style={{justifyContent:'center'}}>
               <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}> Barbeiro : {route.params.Barbeiro} </Text>
               </View>
        </View>




            
        <View >
        <Text style={{fontWeight:'bold',textAlign:'center',marginTop:10}}>Selecione Data e Horas</Text>
    <View style={{flexDirection:'row',backgroundColor:'#016AB4',borderRadius:10,padding:10,marginTop:10,marginStart:10,marginEnd:10,justifyContent:"space-between"}}>
    
    <TouchableOpacity style={{padding:10}} onPress={showDatepicker}>
    <Ionicons name="today-sharp" size={24} color="#fff" />
        <Text style={{color:'#fff',fontWeight:'bold'}}>DIA</Text>
    </TouchableOpacity>
       
        <TouchableOpacity style={{padding:10}} onPress={showTimepicker}>
        <MaterialCommunityIcons name="hours-24" size={34} color="#fff" />
            <Text style={{fontWeight:'bold',color:'#fff'}}>Horas</Text>
        </TouchableOpacity>
      </View>
      
      <View  >
      {show && (
        <DateTimePicker
            style={{marginTop:10,padding:10,marginStart:40,marginEnd:100}}
          testID="dateTimePicker"
          value={date}
          mode={'datetime'}
          is24Hour={true}
          locale= 'pt-br'
          onChange={onChange}
          
        />
        
      )}
</View>

        <View style={{alignItems:'center'}}>
      <Text style={{marginTop:20,fontWeight:'bold',color:'#016AB4'}}>Agendamento Para: {date.toLocaleString()}</Text>
        </View>
         </View>

            <View style={{alignItems:'center',marginTop:30}}>

         <TouchableOpacity onPress={Agendar} style={{backgroundColor:'#016AB4',width:110,borderRadius:10,padding:10}}>
            <Text style={{fontWeight:'bold',color:'#fff',textAlign:'center'}}>Agendar</Text>
         </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    Picker:{
     marginEnd:120,
     marginStart:40
      
    }
})