import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import ASTopCountryCard from '../top-country-card/ASTopCountryCard'
import { BASE_URL } from '../../constants/api-constants'
import { CountryData } from '../../types/home-types'

import { styles } from './asTopCountries-styles'

const ASTopCountries = () => {
  const [data, setData] = useState<CountryData[]>([])

  const fetchData = async () => {
    const response = await fetch(`${BASE_URL}/countries`)
    const data = await response.json()
    const sortedData = data.sort((a: any, b: any) => b.active - a.active)
    const top3CountryData = sortedData.slice(0, 3)

    setData(top3CountryData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Top Countries</Text>
      <View>
        {data.map(item => (
          <ASTopCountryCard key={item.countryInfo._id} {...item} />
        ))}
      </View>
    </View>
  )
}

export default ASTopCountries
