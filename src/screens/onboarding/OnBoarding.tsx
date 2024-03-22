import { StackNavigationProp } from '@react-navigation/stack'
import Onboarding from 'react-native-onboarding-swiper'

import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { Breathing, Cough, Fever } from '../../assets/images'

import { styles } from './onBoarding-styles'
import { COLORS } from '../../theme/colors'

interface IOnBoardingProps {
  navigation: StackNavigationProp<any>
}

const OnBoarding = ({ navigation }: IOnBoardingProps) => {
  const handleDoneButtonPress = () => {
    navigation.navigate('SignIn')
  }
  const DotComponent = ({ selected }: { selected: boolean }) => {
    return <View style={[styles.dot, { backgroundColor: selected ? COLORS.lightPink : COLORS.lightGray }]} />
  }
  const CustomSkipButton = () => {
    return (
      <TouchableOpacity onPress={handleDoneButtonPress}>
        <Text style={styles.skipButton}>Skip</Text>
      </TouchableOpacity>
    )
  }
  const CustomNextButton = ({ onPress }: { onPress: () => void }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.skipButton}>Next</Text>
      </TouchableOpacity>
    )
  }

  const CustomDoneButton = () => {
    return (
      <TouchableOpacity onPress={handleDoneButtonPress}>
        <Text style={styles.skipButton}>Next</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Onboarding
        DotComponent={DotComponent}
        SkipButtonComponent={CustomSkipButton}
        NextButtonComponent={CustomNextButton}
        DoneButtonComponent={CustomDoneButton}
        bottomBarColor={COLORS.white}
        pages={[
          {
            backgroundColor: COLORS.white,
            image: (
              <View style={styles.imageContainer}>
                <Fever />
              </View>
            ),
            title: 'Fever',
            subtitle:
              'He severity of COVID-19 symptoms can range from very mild to severe. Some people have no symptoms. People who are older or have existing chronic medical conditions.',
          },
          {
            backgroundColor: COLORS.white,
            image: (
              <View style={styles.imageContainer}>
                <Cough />
              </View>
            ),
            title: 'Cough',
            subtitle:
              'Such as heart or lung disease or diabetis, may be at higher risk of serious illness. This is similar to what is seen with other respiratory illnesses, such influenza.',
          },
          {
            backgroundColor: COLORS.white,
            image: (
              <View style={styles.imageContainer}>
                <Breathing />
              </View>
            ),
            title: 'Breathing Difficulty',
            subtitle:
              'Contact your doctor or clinic right away if you have COVID-19 symptoms, you’ve been exposed to someone with COVID-19, or you live in or have traveled from an area with ongoing community spread of COVID-19.',
          },
        ]}
      />
    </View>
  )
}

export default OnBoarding
