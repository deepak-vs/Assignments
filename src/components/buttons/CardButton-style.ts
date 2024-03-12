import { StyleSheet } from "react-native"
import {COLORS} from '../../themes'

export const styles=StyleSheet.create({
    button:{
        alignItems:'center',
        width:93,
        backgroundColor:COLORS.background,
        borderRadius:8,
        paddingHorizontal:12,
        paddingVertical:8,
        gap:8,
        elevation:6,
        shadowColor:'white',
    },
    buttonText:{
        fontSize:14,
        letterSpacing:2,
        color:COLORS.dark,
        

    }
})