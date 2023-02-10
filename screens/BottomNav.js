import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/build/Fontisto'


//Screens
import Accounts from './Accounts'

import Settings from './Settings'


//ScreensNames
const accountScreen = 'Accounts';

const settingsScreen = 'Settings';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    
    <NavigationContainer>
    <Tab.Navigator initialRouteName={Accounts} screenOptions={({route}) => ({
        tabBarIcon: ({focused,color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === accountScreen) {
                iconName = focused ? 'home' : 'home-outline'
            } else if (rn === settingsScreen){
                iconName = focused ? 'settings' : 'settings-outline'

            }

            return <Icon name={iconName} size={size} color={color}/>
        },
    })}>

    <Tab.Screen name={accountScreen} component={Accounts}/>

    <Tab.Screen name={settingsScreen} component={Settings}/>


        
    </Tab.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})