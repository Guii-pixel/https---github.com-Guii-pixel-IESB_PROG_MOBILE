import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen'
import ConfigScreen from '../screens/ConfigScreen'
import ProfileScreen from '../screens/ProfileScreen'
import UserScreen from '../screens/UserScreen'


import { createDrawerNavigator } from '@react-navigation/drawer'


const Drawer = createDrawerNavigator()


export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>

      <Drawer.Screen 
      name='HomeScreen' 
      component={HomeScreen}
      options={{
        title: 'Inicio',
        drawerIcon: ({color, size}) => <Ionicons name='nome' color={color} size={size}/>
      }}
      />

      <Drawer.Screen 
      name='ConfigScreen' 
      component={ConfigScreen}
      options={{

      }}
      />

      <Drawer.Screen 
      name='ProfileScreen' 
      component={ProfileScreen}
      options={{

      }}
      />

      <Drawer.Screen 
      name='UserScreen' 
      component={UserScreen}
      options={{
        
      }}
      />

    </Drawer.Navigator>
  )
}

