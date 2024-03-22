import { ImageStyle, Platform, StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'

interface Styles {
  icon: ImageStyle
  tabBar: ViewStyle
  iconContainer: ViewStyle
  activeIcon: ImageStyle
}

export const styles = StyleSheet.create({
  tabBar: {
    height: Platform.OS === 'android' ? Spacing.space_70 : Spacing.space_100,
    position: 'relative',
    borderWidth:1,
    paddingBottom:15,
    paddingTop:5
  },
  activeIcon: {
    color: '#FF647C',
  },
   tabBarLabelStyle :{
    fontSize: 11, 
    textAlign:'center',
    lineHeight:14,
    fontFamily:Typography.secondary['semiBold'],
  },
  headerIcon:{
    marginHorizontal:10,
    color:'#999999'
  },
  headerTitle:{
    fontSize:17,
    lineHeight:22,
    textAlign:'center',
    fontFamily:Typography.primary['bold'],
    color:'#151522'
  },
  icons:{
    color:'#999999',
    // backgroundColor:'yellow'
  }
})
