import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  countryContainer: ViewStyle
  countryDetails: ViewStyle
  image: ImageStyle
  upIconImage: ImageStyle
  downIconImage: ImageStyle
  text: TextStyle
  casesText: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    alignContent: 'space-between',
    borderColor: COLORS.lightGray,
    borderRadius: Spacing.space_10,
    borderWidth: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.space_20,
    width: Spacing.space_325,
  },
  countryContainer: {
    alignItems: 'center',
    flex: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
  },
  countryDetails: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    borderRadius: Spacing.space_10,
    height: Spacing.space_32,
    marginHorizontal: Spacing.space_16,
    resizeMode: 'contain',
    width: Spacing.space_50,
  },
  upIconImage: {
    color: COLORS.lightGreen,
    marginHorizontal: Spacing.space_5,
  },
  downIconImage: {
    color: COLORS.lightPink,
    marginHorizontal: Spacing.space_5,
  },
  text: {
    color: COLORS.darkGray,
    flex: Spacing.space_1,
    fontFamily: Typography.primary.medium,
    fontSize: Spacing.space_20,
    lineHeight: Spacing.space_28,
  },
  casesText: {
    color: COLORS.darkGray,
    fontFamily: Typography.secondary.semiBold,
    fontSize: Spacing.space_17,
    lineHeight: Spacing.space_22,
  },
})
