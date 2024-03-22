import Icons from 'react-native-vector-icons/Feather'

import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { IASLiveReportCardProps } from '../../types/home-types'

import { styles } from './asLiveReportCard-styles'

const ASLiveReportCard = ({
  setCurrentPage,
  currentPage,
  lastIndex,
  size,
}: IASLiveReportCardProps) => {
  const handlePreviousData = () => {
    setCurrentPage(() => currentPage - 1)
  }
  const handleNextData = () => {
    setCurrentPage(() => currentPage + 1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.liveContainer}>
        <Text style={styles.liveText}>Live Reports</Text>
        <Text style={styles.countryText}>Top five countries</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity disabled={currentPage === 1} onPress={handlePreviousData}>
          <Icons
            style={[styles.image, currentPage === 1 && styles.disabledIcon]}
            name="chevron-left"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity disabled={lastIndex >= size} onPress={handleNextData}>
          <Icons
            style={[styles.image, lastIndex >= size && styles.disabledIcon]}
            name="chevron-right"
            size={25}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ASLiveReportCard
