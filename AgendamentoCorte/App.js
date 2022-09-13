import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logar from './src/Logar';
import Register from './src/Register';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaLogin from './src/TelaLogin';
import Home from './src/Home';
import Barber from './src/Barbeiros';
import BarberMiddle from './src/Barbeiros/Middle';
import AgendaMiddle from './src/Agenda/Middle';
const Stack = createStackNavigator();

function MyStack(){
 return(
  <Stack.Navigator>
    <Stack.Screen name="Logar" options={{headerShown:false}} component={Logar} />
    <Stack.Screen name="TelaLogin" options={{headerShown:false}} component={TelaLogin} />
    <Stack.Screen name="Register" options={{headerShown:false}} component={Register} />
    <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
    <Stack.Screen name="Barber" options={{headerShown:false}} component={Barber} />
    <Stack.Screen name="BarberMiddle" options={{headerShown:false}} component={BarberMiddle} />
    <Stack.Screen name="AgendaMiddle" options={{headerShown:false}} component={AgendaMiddle} />
  </Stack.Navigator>
 )
}





export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


