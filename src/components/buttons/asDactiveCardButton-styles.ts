import { Colors } from '../../themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: 93,
    backgroundColor: Colors.light,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
    elevation: 10,
    shadowColor: Colors.light,
  },
  buttonText: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 14,
    letterSpacing: 2,
    color: Colors.dark,
  },
})
