import React from 'react'
import { ImageBackground, ImageSourcePropType, Text, View } from 'react-native'

import ASDactiveCardButton from '../buttons/ASDactiveCardButton'

import { styles } from './asDactiveCard-styles'

interface ICardProps {
  title: string
  titleColor: string
  background: ImageSourcePropType
}

const ASDactiveCard = ({
  title,
  titleColor,
  background,
}:ICardProps)=> {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.card} resizeMode="cover">
        <View style={styles.subContainer}>
          <View style={styles.cardTitle}>
            <Text style={[styles.text, { color: titleColor }]}>{title}</Text>
          </View>
          <View style={styles.buttons}>
            <ASDactiveCardButton text="2min" />
            <ASDactiveCardButton text="4min" />
            <ASDactiveCardButton text="8min" />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default ASDactiveCard
