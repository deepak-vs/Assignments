import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'

import ASLiveReportCard from '../../components/live-report-card/ASLiveReportCard'
import ASCountryReportCard from '../../components/country-report-card/ASCountryReportCard'
import ASLoader from '../../components/loader/ASLoader'

import { CountryData } from '../../types/home-types'
import { BASE_URL } from '../../constants/api-constants'

import { styles } from './home-styles'

const Home = () => {
  const [data, setData] = useState<CountryData[]>([])

  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage, setCardsPerPage] = useState(5)

  const fetchData = async () => {
    const response = await fetch(`${BASE_URL}/countries`)
    const data = await response.json()
    const sortedData = data.sort((a: CountryData, b: CountryData) => b.active - a.active)
    setData(sortedData)
  }
  const lastIndex = currentPage * cardsPerPage
  const firstIndex = lastIndex - cardsPerPage

  const DATA = data.slice(firstIndex, lastIndex)
  const size = data.length

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <ASCountryReportCard
              country={item.country}
              flag={item.countryInfo.flag}
              activeCases={item.active}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Text></Text>}
          keyExtractor={item => String(item.countryInfo._id)}
          ListEmptyComponent={() => <ASLoader />}
          ListHeaderComponent={
            <ASLiveReportCard
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              lastIndex={lastIndex}
              size={size}
            />
          }
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  )
}

export default Home
