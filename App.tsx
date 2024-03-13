/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react'
import { View } from 'react-native'
import { SafeAreaView, StatusBar } from 'react-native'
import Home from './src/screens/Home/Home'
import ASHeading from './src/components/headings/ASHeading'
import setting from './src/assets/icons/settings.png'
import Notification from './src/screens/Notifications/Notification'
import { Colors } from './src/themes'

function App(): React.JSX.Element {
  const [settingIcon, setSettingIcon] = useState()

  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor={Colors.light} barStyle={'dark-content'} />
      {settingIcon ? (
        <View>
          <ASHeading heading="Notification" icon={settingIcon} />
          <Notification />
        </View>
      ) : (
        <View>
          <ASHeading heading="D-active" icon={settingIcon} />
          <Home />
        </View>
      )}
    </SafeAreaView>
  )
}

export default App
