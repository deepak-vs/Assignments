import React, { useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import Home from './src/screens/Home/Home'

import Notification from './src/screens/Notifications/Notification'
import { Colors } from './src/themes'

const App=()=>{
  const [showHome, setShowHome] = useState(false)

  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor={Colors.light} barStyle={'dark-content'} />
      {showHome ?<Home/>:<Notification/>}
    </SafeAreaView>
  )
}

export default App
