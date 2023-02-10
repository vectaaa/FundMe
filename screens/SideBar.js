import { View, Text, Settings } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Accounts from './Accounts';
import SettingsScreen from './Settings'


const Drawer = createDrawerNavigator();

const SideBar = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
            key='dashboard'
            name='Dashboard'
            component={Accounts}
        />
         <Drawer.Screen
            key='setings'
            name='Settings'
            component={SettingsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default SideBar