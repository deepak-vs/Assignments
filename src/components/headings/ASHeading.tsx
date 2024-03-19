import React from 'react'
import { Image, ImageSourcePropType, SafeAreaView, Text, View } from 'react-native'

import { styles } from './asHeading-styles'

interface IHeadingProps {
  heading: string
  icon: ImageSourcePropType | undefined
}

const Heading = ({ icon, heading }:IHeadingProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text />
        <View style={styles.heading}>
          <Text style={styles.text}>{heading}</Text>
        </View>
        <Image source={icon} />
      </View>
    </SafeAreaView>
  )
}

export default Heading
