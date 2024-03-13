import React from 'react'
import { View, FlatList } from 'react-native'
import ASDactiveCard from '../../components/d-active-card/ASDactiveCard'
import { CARD_DATA } from '../../constants/home-constants'
import { styles } from './home-styles'

const CardContainer = (): React.JSX.Element => {
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

const Home = (): React.JSX.Element => {
  return (
    <View style={styles.subContainer}>
      <CardContainer />
    </View>
  )
}

export default Home
