import React from 'react'
import { ScrollView } from 'react-native'

import ASWorldMap from '../../components/world-map/ASWorldMap'
import ASTopCountries from '../../components/top-countries/ASTopCountries'

import { styles } from './map-styles'

const Map = () => {
  return (
    <ScrollView style={styles.container}>
      <ASWorldMap />
      <ASTopCountries />
    </ScrollView>
  )
}

export default Map
