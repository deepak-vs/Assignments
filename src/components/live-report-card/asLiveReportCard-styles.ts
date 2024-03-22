import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface IStyles {
  container: ViewStyle
  liveContainer: ViewStyle
  iconContainer: ViewStyle
  liveText: TextStyle
  countryText: TextStyle
  image: ImageStyle
  disabledIcon: ImageStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: Spacing.space_10,
    paddingBottom: Spacing.space_8,
    alignSelf: 'flex-start',
  },
  liveContainer: {
    padding: Spacing.space_10,
  },
  iconContainer: {
    borderWidth: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: Spacing.space_10,
    borderColor: COLORS.lightGray,
  },
  liveText: {
    fontSize: Spacing.space_17,
    lineHeight: Spacing.space_36,
    fontFamily: Typography.primary['bold'],
    color: COLORS.gray,
  },
  countryText: {
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_18,
    color: COLORS.silverGray,
    fontFamily: Typography.primary['semiBold'],
  },
  image: {
    paddingVertical: Spacing.space_8,
    paddingHorizontal: Spacing.space_10,
  },
  disabledIcon: {
    color: COLORS.lightGray,
  },
})
