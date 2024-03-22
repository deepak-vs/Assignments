import WebView from 'react-native-webview'

import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Discovery = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://maps.google.com/maps/place/28.69875679999999,77.29257710000002' }}
      />
    </SafeAreaView>
  )
}

export default Discovery
