import { StyleSheet } from 'react-native'
import { Colors } from '../../themes'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.light,
    borderRadius: 8,
    elevation: 10,
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: Colors.light,
    width: 93,
  },
  text: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 14,
    letterSpacing: 2,
    color: Colors.dark,
  },
})
