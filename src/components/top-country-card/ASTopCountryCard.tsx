import * as Progress from 'react-native-progress'
import Icon from 'react-native-vector-icons/Feather'

import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import { ITopCountryCardProps } from '../../types/map-types'
import { RandomColor } from '../../constants/home-constants'

import { styles } from './asTopCountryCard-styles'

const ASTopCountryCard = ({ country, active, cases }: ITopCountryCardProps) => {
  const [percent, setPercent] = useState(0)

  const randomNumber = Math.floor(Math.random() * 10)
  const randomColor = RandomColor[randomNumber]
  const { color } = randomColor

  useEffect(() => {
    const percentage = Number(((active / cases) * 100).toFixed(0))
    setPercent(percentage)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.circle}>
          <Progress.Circle
            showsText={true}
            size={57}
            progress={percent / 100}
            indeterminate={false}
            thickness={5}
            unfilledColor="#E4E4E4"
            borderWidth={0}
            textStyle={styles.circleText}
            color={color}
          />
        </View>
        <View>
          <Text style={styles.countryText}>{country}</Text>
          <Text style={styles.subDetails}>Affected - {(Number(active) / 1000).toFixed(0)} k</Text>
          <Text style={styles.subDetails}>
            Recovered - {(Number(cases - active) / 1000).toFixed(0)} K
          </Text>
        </View>
      </View>
      <View style={styles.bellIconContainer}>
        <Icon
          name="bell"
          size={23}
          style={[styles.greenBellIcon, percent > 75 && styles.redBellIcon]}
        />
      </View>
    </View>
  )
}

export default ASTopCountryCard
