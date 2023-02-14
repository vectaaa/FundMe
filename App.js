import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  SafeAreaView,
  Button,
  Dimensions,
  Settings,
} from "react-native";
import LoginScreen from "./screens/LoginScreen";
import AccountScreen from "./screens/Accounts";
import {Provider} from 'react-redux';
import {Store} from './screens/Redux/store';
import SideBar from "./screens/SideBar";
import SettingsScreen from "./screens/Settings";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginRoute"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AccountRoute"
            component={AccountScreen}
            options={{
              headerShown: false,
              title: "",
            }}
          ></Stack.Screen>
         
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </>
  );
}
