import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  text: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    borderColor: COLORS.lightGray,
    borderRadius: Spacing.space_10,
    borderWidth: Spacing.space_2,
    flex: Spacing.space_1,
    paddingHorizontal: Spacing.space_10,
    paddingVertical: Spacing.space_10,
  },
  text: {
    color: COLORS.gray,
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_17,
    lineHeight: Spacing.space_22,
    marginVertical: Spacing.space_5,
  },
})
