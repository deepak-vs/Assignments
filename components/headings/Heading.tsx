import React, { FC } from 'react'
import { ImageSourcePropType, SafeAreaView ,StyleSheet,Text,View,Image} from 'react-native'
import {styles} from './Heading-styles'

interface HeadingProps {
    heading: string;
    icon:ImageSourcePropType|undefined;
  }

const Heading :React.FC<HeadingProps>= ({icon,heading}) => {
  return (
    <SafeAreaView style={styles.heading}>
        <View style={styles.headingText}>
            <Text></Text>
            <View style={styles.mainHeading}>
            <Text style={styles.text}>{heading}</Text>
            </View>
            <Image source={icon}/>
        </View>
    </SafeAreaView>
  )
}




export default Heading