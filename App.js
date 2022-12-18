import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import SignIn from './Screens/SingIn'
import SignUp from './Screens/SignUp'
import Main from './Screens/Main'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const App: () => Node = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
            title: 'SignIn',
            headerStyle: { backgroundColor: '#000' },
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
            title: 'SignUp',
            headerStyle: { backgroundColor: '#000' },
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
            title: 'SignUp',
            headerStyle: { backgroundColor: '#000' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
