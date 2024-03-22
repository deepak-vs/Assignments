import WebView from 'react-native-webview'

import React from 'react'
import { SafeAreaView } from 'react-native'

const Education = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://timesofindia.indiatimes.com/blogs/developing-contemporary-india/how-covid-19-changed-indias-education-system/',
        }}
      />
    </SafeAreaView>
  )
}

export default Education
