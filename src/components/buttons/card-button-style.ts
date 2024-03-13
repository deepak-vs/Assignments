import { StyleSheet } from 'react-native'
import { Colors } from '../../themes'

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
    fontSize: 14,
    letterSpacing: 2,
    color: Colors.dark,
  },
})
