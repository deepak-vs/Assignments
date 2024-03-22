import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/stack-navigator/StackNavigator'

import React from 'react'
import { StatusBar,SafeAreaView } from 'react-native'

import { clearAsyncStorage } from './src/utils/common-utils'

export default function App() {
  clearAsyncStorage();

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  )
}
