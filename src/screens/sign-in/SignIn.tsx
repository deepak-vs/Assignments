import AsyncStorage from '@react-native-async-storage/async-storage'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


import React, { useEffect, useState } from 'react'
import { Button, ScrollView, Text, TextInput, View } from 'react-native'

import { splash as SplashSVG } from '../../assets/images'
import { ISignInProps, IFormErrors } from '../../types/signin-types'

import { styles } from './signIn-styles'
import { COLORS } from '../../theme/colors'

const SignIn = ({ navigation }: ISignInProps) => {
  const [phone, setPhone] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [username, setUserName] = useState<string>('')
  const [formErrors, setFormErrors] = useState<IFormErrors>({})
  const [isEmpty, setIsEmpty] = useState<boolean>(true)

  const validate = () => {
    let errors: IFormErrors = {}

    const passRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    const passResult = passRegex.test(password)

    if (!passResult) errors.password = 'Password is too weak !'
    if (phone.length !== 10) errors.phone = 'Incorrect mobile number  !'
    if (!username) errors.username = 'Invalid Username !'

    if (Object.keys(errors).length === 0) {
      AsyncStorage.setItem('User', JSON.stringify({ username, phone, password }))
      navigation.navigate('TabNavigator')
    }
    setFormErrors(errors)
  }

  const googleLogin = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("userinfo", userInfo);

    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log(error)
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log(error)
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log(error)
        } else {
          console.log(error,"in last")
        }
    }
  };

  useEffect(() => {
    setIsEmpty(!(username || phone || password))
    AsyncStorage.setItem('isUserOnBoarded', JSON.stringify(true))
    GoogleSignin.configure({
      webClientId: '623351954228-0757fjh28jpbf3qc1ofqk4rkv2cs58fg.apps.googleusercontent.com', 
  })  
  }, [username, phone, password])
  


  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <SplashSVG />
        <Text style={styles.text}>COVSTATS</Text>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.labelText}>Username *</Text>
        <TextInput
          style={styles.input}
          defaultValue={username}
          onChangeText={text => setUserName(text)}
          placeholder="Enter your username"
        />
        <Text style={styles.validationErrorText}>
          {formErrors.username ? formErrors.username : ''}
        </Text>

        <Text style={styles.labelText}>Mobile Number *</Text>
        <TextInput
          style={styles.input}
          defaultValue={phone}
          onChangeText={text => setPhone(text)}
          placeholder="Enter your mobile number"
          keyboardType="numeric"
        />
        <Text style={styles.validationErrorText}>{formErrors.phone ? formErrors.phone : ''}</Text>

        <Text style={styles.labelText}>Password *</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
        <Text style={styles.validationErrorText}>
          {formErrors.password ? formErrors.password : ''}
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            onPress={isEmpty ? googleLogin : validate}
            title={isEmpty ? 'Sign in with Google' : 'Submit'}
            color={COLORS.lightPink}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default SignIn
