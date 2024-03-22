import React from 'react'
import { View, Text } from 'react-native'

import { Map } from '../../assets/images'

import { styles } from './asWorldMap-styles'

const ASWorldMap = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>COVID - 19 Affected Areas</Text>
        </View>
        <View style={styles.subHeadingContainer}>
          <View style={styles.affectedBox}>
            <View style={styles.boxDark} />
            <Text style={styles.affectedText}>Most Affected</Text>
          </View>
          <View style={styles.affectedBox}>
            <View style={styles.boxLight} />
            <Text style={styles.affectedText}>Less Affected</Text>
          </View>
        </View>
      <View style={styles.mapContainer}>
        <Map />
      </View>
    </View>
  )
}

export default ASWorldMap
