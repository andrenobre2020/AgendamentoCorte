import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logar from './src/Logar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaLogin from './src/TelaLogin';
const Stack = createStackNavigator();

function MyStack(){
 return(
  <Stack.Navigator>
    <Stack.Screen name="Logar" options={{headerShown:false}} component={Logar} />
    
    <Stack.Screen name="TelaLogin" options={{headerShown:false}} component={TelaLogin} />
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


