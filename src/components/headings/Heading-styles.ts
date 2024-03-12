import { StyleSheet } from "react-native"
import {COLORS} from '../../themes'

export const styles=StyleSheet.create({
    container:{
        paddingHorizontal:16,
        paddingVertical:24,
    },
    subContainer:{
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',    
    },
    heading:{
        alignItems:'center',
        width:247,
        height:25
    },
    text:{
        fontFamily:"Fraunces",
        fontSize:18,
        color:COLORS.heading,
        
    }
})