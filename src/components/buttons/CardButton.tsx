import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './card-button-style'

interface IButtonProps {
  text: string
}

const CardButton: React.FunctionComponent<IButtonProps> = ({ text }): React.JSX.Element => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CardButton
