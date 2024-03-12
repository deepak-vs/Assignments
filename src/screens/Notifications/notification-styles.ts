import {StyleSheet} from 'react-native'
import {COLORS} from '../../themes'

export const styles=StyleSheet.create({
    container:{
        marginBottom:50,
    },
    containerBox:{
        width:335,
        left:30,
        gap:27,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:150,
    },
    titleBox:{
        width:335,
    },
    title:{
        fontFamily:"Fraunces",
        fontSize:24,
        lineHeight:32.4,
        alignContent:'center',
        textAlign:"center",
        color:COLORS.dark
        
    },
    message:{
        fontFamily:'Quicksand',
        fontWeight:'500',
        fontSize:16,
        lineHeight:24,
        alignSelf:'center',
        color:COLORS.dark
    },
   
})