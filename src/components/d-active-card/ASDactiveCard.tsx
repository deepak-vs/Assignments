import React from 'react'
import { View, Text, ImageBackground, ImageSourcePropType } from 'react-native'
import ASDactiveCardButton from '../buttons/ASDactiveCardButton'
import { styles } from './asDactiveCard-styles'

interface ICardProps {
  title: string
  titleColor: string
  background: ImageSourcePropType
}

const Card: React.FunctionComponent<ICardProps> = ({
  title,
  titleColor,
  background,
}): React.JSX.Element => {
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

export default Card
