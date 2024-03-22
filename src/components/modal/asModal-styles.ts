import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  overlay: ViewStyle
  subContainer: ViewStyle
  headerText: TextStyle
  text: TextStyle
  buttonContainer: ViewStyle
  button: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  overlay: {
    backgroundColor: COLORS.modalOverlay,
    flex: Spacing.space_1,
  },
  container: {
    alignContent: 'center',
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_24,
    height: Spacing.space_172,
    justifyContent: 'space-evenly',
    left: Spacing.space_18,
    position: 'absolute',
    top: Spacing.space_200,
    width: Spacing.space_360,
    paddingHorizontal: Spacing.space_14,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.space_5,
  },
  subContainer: {
    marginBottom: Spacing.space_20,
  },
  headerText: {
    fontSize: Spacing.space_20,
    lineHeight: Spacing.space_24,
    color: COLORS.dark,
    fontFamily: Typography.primary.bold,
    marginVertical:Spacing.space_5,
  },
  text: {
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
    color: COLORS.dark,
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
  },
  button: {
    width: Spacing.space_100,
    marginHorizontal: Spacing.space_8,
  },
})
