import React from 'react'
import { View ,Text, ImageBackground, ImageSourcePropType} from 'react-native'
import CardButton from '../buttons/CardButton'
import {styles} from './Card-styles'

interface CardProps {
    title: string;
    titleColor:string;
    background:ImageSourcePropType;
  }


const Card: React.FC<CardProps> = ({title,titleColor,background}) => {
  return (
   <View style={styles.cardContainer}>
     <ImageBackground source={background} style={styles.card}>

        <View style={styles.contentContainer}>
          <View style={styles.cardTitle}>
            <Text style={[styles.text, { color: titleColor }]}>{title}</Text>
          </View>
          <View style={styles.buttons}>
            <CardButton buttonText="2min" />
            <CardButton buttonText="4min"/>
            <CardButton buttonText="8min"/>
          </View>
        </View>



    </ImageBackground>
   </View>
  )
}


export default Card