import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logar from './src/Logar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack(){
 return(
  <Stack.Navigator>
    <Stack.Screen name="Logar" options={{headerShown:false}} component={Logar} />
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


