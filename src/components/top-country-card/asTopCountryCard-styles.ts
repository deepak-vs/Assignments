import { StyleSheet } from 'react-native'

import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

export const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.lightGray,
    borderRadius: Spacing.space_10,
    borderWidth: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.space_16,
    paddingLeft: Spacing.space_9,
    paddingRight: Spacing.space_5,
    paddingVertical: Spacing.space_10,
  },
  circle: {
    paddingHorizontal: Spacing.space_5,
  },
  subDetails: {
    color: COLORS.silverGray,
    fontFamily: Typography.secondary.regular,
    fontSize: Spacing.space_12,
    lineHeight: Spacing.space_18,
  },
  circleText: {
    color: COLORS.darkGray,
    fontFamily: Typography.primary.medium,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_20,
  },
  countryText: {
    color: COLORS.gray,
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_17,
    lineHeight: Spacing.space_22,
  },
  subContainer: {
    flexDirection: 'row',
    gap: Spacing.space_14,
  },
  greenBellIcon: {
    color: COLORS.success,
  },
  redBellIcon: {
    color: COLORS.failure,
  },
  bellIconContainer: {
    paddingTop: Spacing.space_4,
  },
})
