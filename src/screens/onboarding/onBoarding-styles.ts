import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  imageContainer: ViewStyle
  dot: ViewStyle
  skipButton: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: COLORS.white,
    flex: Spacing.space_1,
    paddingBottom: Spacing.space_24,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_200,
    elevation: Spacing.space_10,
    height: Spacing.space_260,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    shadowColor: COLORS.dark,
    width: Spacing.space_260,
  },
  dot: {
    borderRadius: Spacing.space_4,
    height: Spacing.space_8,
    marginHorizontal: Spacing.space_5,
    width: Spacing.space_8,
  },
  skipButton: {
    color: COLORS.dark,
    fontFamily: Typography.secondary['regular'],
    fontSize: Spacing.space_14,
    fontStyle: 'italic',
    lineHeight: Spacing.space_16,
    marginHorizontal: Spacing.space_20,
  },
})
