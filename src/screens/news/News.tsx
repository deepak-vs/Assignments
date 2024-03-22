import { WebView } from 'react-native-webview'

import React from 'react'
import { SafeAreaView } from 'react-native'

const News = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/news',
        }}
      />
    </SafeAreaView>
  )
}

export default News
