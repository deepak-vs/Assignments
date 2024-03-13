import { Colors } from '../../themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerBox: {
    gap: 27,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 150,
  },
  title: {
    fontFamily: 'Fraunces',
    fontSize: 24,
    lineHeight: 32.4,
    alignContent: 'center',
    textAlign: 'center',
    color: Colors.dark,
  },
  message: {
    fontFamily: 'Quicksand-light',
    fontSize: 16,
    lineHeight: 24,
    alignSelf: 'center',
    color: Colors.dark,
  },
})
