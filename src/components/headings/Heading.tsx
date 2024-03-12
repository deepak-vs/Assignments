import React from 'react'
import { ImageSourcePropType, SafeAreaView ,Text,View,Image} from 'react-native'
import {styles} from './heading-styles'

interface IHeadingProps {
    heading: string;
    icon:ImageSourcePropType|undefined;
  }

const Heading :React.FC<IHeadingProps>= ({icon,heading}):React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
            <Text></Text>
            <View style={styles.heading}>
            <Text style={styles.text}>{heading}</Text>
            </View>
            <Image source={icon}/>
        </View>
    </SafeAreaView>
  )
}

export default Heading