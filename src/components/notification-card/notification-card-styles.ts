import { StyleSheet } from 'react-native'
import { Colors } from '../../themes'

export const styles = StyleSheet.create({
  card: {
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 0.7,
    paddingHorizontal: 20,
    paddingVertical: 17,
    gap: 4,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    fontFamily: 'Quicksand',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16.8,
    color: Colors.dark,
  },
  timeContainer: {
    paddingHorizontal: 76,
    gap: 8,
    alignItems: 'center',
  },
  time: {
    width: 183,
    fontFamily: 'Quicksand',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 2,
    color: Colors.grey,
  },
})
