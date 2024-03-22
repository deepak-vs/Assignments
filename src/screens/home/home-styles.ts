import { StyleSheet, ViewStyle } from 'react-native'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  flatListContent: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: COLORS.white,
    flex: Spacing.space_1,
    padding: Spacing.space_20,
  },
  subContainer: {
    borderColor: COLORS.lightGray,
    borderRadius: Spacing.space_10,
    borderWidth: Spacing.space_1,
    flex: Spacing.space_1,
  },
  flatListContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
