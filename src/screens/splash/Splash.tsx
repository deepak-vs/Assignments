import { StackNavigationProp } from '@react-navigation/stack'

import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { splash as SplashSVG } from '../../assets/images'
import { getUserFromStorage, getUserOnboardingStatus } from '../../utils/common-utils'

import { styles } from './splash-styles'

interface ISplashProps {
  navigation: StackNavigationProp<any>
}

const Splash = ({ navigation }: ISplashProps) => {
  const navigateTo = async () => {
    setTimeout(async () => {
      const isUserOnBoarded = await getUserOnboardingStatus()
      if (!isUserOnBoarded) {
        navigation.navigate('OnBoarding')
      } else {
        const user = await getUserFromStorage()
        if (!user) {
          navigation.navigate('SignIn')
        } else {
          navigation.navigate('TabNavigator')
        }
      }
    }, 3000)
  }

  useEffect(() => {
    navigateTo()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <SplashSVG width={180} height={180} />
        <Text style={styles.text}>COVSTATS</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© Copyright COVSTATS 2020. All rights reserved</Text>
      </View>
    </View>
  )
}

export default Splash
