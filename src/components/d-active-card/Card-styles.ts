import { StyleSheet } from 'react-native'
import { Colors } from '../../themes'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 10,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  card: {
    borderRadius: 16,
    height: 160,
    justifyContent: 'space-between',
  },
  cardTitle: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Fraunces',
    elevation: 6,
    shadowColor: Colors.light,
    fontSize: 18,
    lineHeight: 25.2,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 8,
    paddingVertical: 16,
    gap: 12,
  },
})
