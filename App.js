import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View, Image,TouchableWithoutFeedback,TouchableNativeFeedback, SafeAreaView, Button, Dimensions} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import AccountScreen from './screens/Accounts';


const Stack = createNativeStackNavigator(); 
export default function App() {
return (
    
    <><NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LoginRoute" component={LoginScreen}  options={{ headerShown: false}}/>
      <Stack.Screen name="AccountRoute" component={AccountScreen} options={{
        headerShown: false,
        title: ""
      }}>
    </Stack.Screen>
    </Stack.Navigator>

    
    </NavigationContainer></>
    
  );
}