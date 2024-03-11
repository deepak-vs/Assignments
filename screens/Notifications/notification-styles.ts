import {StyleSheet} from 'react-native'

export const styles=StyleSheet.create({
    notificationBox:{
        marginBottom:50,
    },
    
    box:{
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
    //  fontWeight:'700',
    fontSize:24,
    lineHeight:32.4,
    alignContent:'center',
    textAlign:"center",
    color:'#454545',
        
    },
    message:{
        fontFamily:'Quicksand',
        fontWeight:'500',
        fontSize:16,
        lineHeight:24,
        alignSelf:'center',
        color:'#292F36'
    },
   
})