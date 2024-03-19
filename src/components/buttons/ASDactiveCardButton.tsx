import React from 'react'
import { Alert, Text, TouchableOpacity } from 'react-native'

import { styles } from './asDactiveCardButton-styles'

interface IButtonProps {
  text: string
}

const handleAsDactiveCardButtonPress=()=>{
  Alert.alert("Button Pressed !");
}

const ASDactiveCardButton = ({ text }:IButtonProps)=> {
  return (
    <TouchableOpacity style={styles.button} onPress={handleAsDactiveCardButtonPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ASDactiveCardButton
