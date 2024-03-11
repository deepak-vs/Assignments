import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import {styles} from './CardButton-style'


  interface ButtonProps{
    buttonText:string;
  }

const CardButton:React.FC<ButtonProps> = ({buttonText}) => {
  return (
    <View style={styles.button}> 
        <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  )
}



export default CardButton