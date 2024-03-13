import { Colors } from '../../themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  containerBox: {
    width: 335,
    left: 30,
    gap: 27,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 150,
  },
  titleBox: {
    width: 335,
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
    fontFamily: 'Quicksand',
    fontSize: 16,
    lineHeight: 24,
    alignSelf: 'center',
    color: Colors.dark,
  },
})
