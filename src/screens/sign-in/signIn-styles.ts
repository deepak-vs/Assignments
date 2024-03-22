import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  text: TextStyle
  loginContainer: ViewStyle
  input: TextStyle
  validationErrorText: TextStyle
  labelText: TextStyle
  buttonContainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    flex: Spacing.space_1,
  },
  subContainer: {
    alignItems: 'center',
    marginVertical: Spacing.space_50,
  },
  text: {
    color: COLORS.lightPink,
    fontFamily: Typography.primary['semiBold'],
    fontSize: Spacing.space_28,
    lineHeight: Spacing.space_34,
    marginVertical: Spacing.space_20,
    textAlign: 'center',
  },
  loginContainer: {
    paddingHorizontal: Spacing.space_20,
  },
  input: {
    borderColor: COLORS.neutral['300'],
    borderRadius: Spacing.space_16,
    borderWidth: Spacing.space_1,
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
    padding: Spacing.space_12,
  },
  validationErrorText: {
    color: COLORS.danger,
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
    marginHorizontal: Spacing.space_10,
  },
  labelText: {
    color: COLORS.neutral['700'],
    fontFamily: Typography.primary['medium'],
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
    marginVertical: Spacing.space_5,
  },
  buttonContainer: {
    borderRadius: Spacing.space_4,
    marginVertical: Spacing.space_20,
    overflow: 'hidden',
  },
})
