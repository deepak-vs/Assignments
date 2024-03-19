import React from 'react'
import { FlatList, View } from 'react-native'

import ASDactiveCard from '../../components/d-active-card/ASDactiveCard'
import ASHeading from '../../components/headings/ASHeading'

import { CARD_DATA } from '../../constants/home-constants'

import { styles } from './home-styles'

const CardContainer = ()=> {
  return (
    <View style={styles.container}>
      <FlatList
        data={CARD_DATA}
        renderItem={({ item }) => (
          <ASDactiveCard
            title={item.title}
            titleColor={item.titleColor}
            background={item.background}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const Home = () => {
  return (
    <View style={styles.subContainer}>
      <ASHeading heading="D-active" icon={undefined} />
      <CardContainer />
    </View>
  )
}

export default Home
