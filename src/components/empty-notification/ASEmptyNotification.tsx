import React from 'react'
import { Image, Text, View } from 'react-native'

import bell from '../../assets/icons/bell.png'

import { styles } from './asEmptyNotification-styles'

const EmptyNotification = () => {
  return (
    <View style={styles.containerBox}>
      <Image source={bell} />
      <View>
        <Text style={styles.title}>No notifications yet!</Text>
        <Text style={styles.message}>
          You have no notifications right now.{'\n'}Come back later.
        </Text>
      </View>
    </View>
  )
}

export default EmptyNotification
