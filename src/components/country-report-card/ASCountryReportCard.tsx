import Icons from 'react-native-vector-icons/Feather'

import React from 'react'
import { Image, Text, View } from 'react-native'

import { ICountryReportCardProps } from '../../types/home-types'

import { styles } from './asCountryReportCard-styles'

const ASCountryReportCard = ({ country, flag, activeCases }: ICountryReportCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.countryContainer}>
        <Image style={styles.image} source={{ uri: flag }} />
        <Text style={styles.text}>{country}</Text>
      </View>
      <View style={styles.countryDetails}>
        <Text style={styles.casesText}>{activeCases.toLocaleString('en-IN')}</Text>
        {activeCases > 50000 ? (
          <Icons style={styles.upIconImage} name={'chevron-up'} size={25} />
        ) : (
          <Icons style={styles.downIconImage} name={'chevron-down'} size={25} />
        )}
      </View>
    </View>
  )
}

export default ASCountryReportCard
