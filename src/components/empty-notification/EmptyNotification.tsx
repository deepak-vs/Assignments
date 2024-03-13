import React from 'react'
import { View, Text,Image } from 'react-native'
import bell from '../../assets/icons/bell.png'
import {styles} from './empty-notification-styles'

const EmptyNotification = (): React.JSX.Element => {
    return (
      <View style={styles.containerBox}>
        <View>
          <Image source={bell} />
        </View>
        <View>
          <Text style={styles.title}>No notifications yet!</Text>
          <View>
            <Text style={styles.message}>You have no notifications right now.</Text>
            <Text style={styles.message}>Come back later.</Text>
          </View>
        </View>
      </View>
    )
  }

export default EmptyNotification