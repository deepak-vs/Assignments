import { createNativeStackNavigator } from '@react-navigation/native-stack'

import React from 'react'
import { StatusBar } from 'react-native'

import TabNavigator from '../tab-navigator/TabNavigator'
import Splash from '../../screens/splash/Splash'
import SignIn from '../../screens/sign-in/SignIn'
import ASModal from '../../components/modal/ASModal'
import OnBoarding from '../../screens/onboarding/OnBoarding'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  StatusBar.setHidden(true)
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} options={{ gestureDirection: 'horizontal' }} />

      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ gestureDirection: 'horizontal' }}
      />

      <Stack.Screen name="SignIn" component={SignIn} options={{ gestureDirection: 'horizontal' }} />

      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ gestureDirection: 'horizontal' }}
      />

      <Stack.Screen name="Modal" component={ASModal} options={{ gestureDirection: 'horizontal' }} />
    </Stack.Navigator>
  )
}

export default StackNavigator
