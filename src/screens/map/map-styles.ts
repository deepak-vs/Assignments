import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface IStyles {
  container: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: COLORS.white,
    flex: Spacing.space_1,
    padding: Spacing.space_10,
  },
})
