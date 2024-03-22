import { StackNavigationProp } from '@react-navigation/stack'

import React from 'react'
import { Button, Modal, Text, TouchableOpacity, View } from 'react-native'

import { removeUserFromStorage } from '../../utils/common-utils'

import { styles } from './asModal-styles'

interface IASModalProps {
  navigation: StackNavigationProp<any>
}

const ASModal = ({ navigation }: IASModalProps) => {
  const handleConfirmLogout = () => {
    removeUserFromStorage()
    navigation.navigate('SignIn')
  }
  const handleCancelLogout = () => {
    navigation.goBack()
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        navigation.goBack()
      }}>
      <TouchableOpacity style={styles.overlay} onPress={handleCancelLogout} />
      <View style={styles.container}>
        <View style={styles.subContainer}>
            <Text style={styles.headerText}>Confirm Logout</Text>
          <Text style={styles.text}>Do you really want to logout ?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Button onPress={handleConfirmLogout} title="confirm" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Button onPress={handleCancelLogout} title="Cancel" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default ASModal
