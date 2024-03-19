import { Colors } from '../../themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 10,
    borderWidth:1,
  },
  subContainer: {
    flex: 1,
    gap: 48,
    justifyContent: 'space-between',
    // borderWidth:1
  },
  card: {
    borderRadius: 16,
    justifyContent: 'space-between',
  },
  cardTitle: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blur,
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
