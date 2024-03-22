import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface IStyle {
  container: ViewStyle
  subContainer: ViewStyle
  text: TextStyle
  footer: ViewStyle
  footerText: TextStyle
}

export const styles = StyleSheet.create({
  container: {
    flex: Spacing.space_1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainer: {
    marginVertical: Spacing.space_150,
  },
  text: {
    fontSize: Spacing.space_28,
    lineHeight: Spacing.space_34,
    textAlign: 'center',
    color: COLORS.lightPink,
    fontFamily: Typography.primary['semiBold'],
    marginVertical: Spacing.space_10,
  },
  footer: {
    marginVertical: Spacing.space_50,
  },
  footerText: {
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_17,
    fontFamily: Typography.primary['semiBold'],
  },
})
