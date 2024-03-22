import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface IStyles {
  container: ViewStyle
  headingContainer: ViewStyle
  subHeadingContainer: ViewStyle
  mapContainer: ViewStyle
  affectedBox: ViewStyle
  boxDark: ViewStyle
  boxLight: ViewStyle
  headingText: TextStyle
  affectedText: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    borderColor: COLORS.lightGray,
    borderRadius: Spacing.space_10,
    borderWidth: Spacing.space_1,
    marginVertical: Spacing.space_10,
    paddingHorizontal: Spacing.space_10,
  },
  headingContainer: {
    marginVertical: Spacing.space_10,
  },
  subHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  mapContainer: {
    alignSelf: 'center',
    paddingVertical: Spacing.space_20,
  },
  affectedBox: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: Spacing.space_10,
  },
  boxDark: {
    backgroundColor: COLORS.lightPink,
    height: Spacing.space_16,
    marginRight: Spacing.space_10,
    width: Spacing.space_16,
  },
  boxLight: {
    backgroundColor: COLORS.pinkShade,
    height: Spacing.space_16,
    marginHorizontal: Spacing.space_10,
    width: Spacing.space_16,
  },

  headingText: {
    color: '#171725',
    fontFamily: Typography.secondary['semiBold'],
    fontSize: Spacing.space_17,
    lineHeight: Spacing.space_22,
  },
  affectedText: {
    color: COLORS.silverGray,
    fontFamily: Typography.secondary['regular'],
    fontSize: Spacing.space_13,
    lineHeight: Spacing.space_18,
  },
})
