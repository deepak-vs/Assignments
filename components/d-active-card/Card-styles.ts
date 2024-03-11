import { StyleSheet } from "react-native"

export const styles=StyleSheet.create({
    cardContainer: {
        borderRadius: 16,
        overflow: 'hidden',
        marginVertical:10,
      },
    card:{
      borderRadius:16,
      height:160,
      justifyContent:'space-between',
        
    },
    cardTitle:{
        paddingHorizontal:8,
        paddingVertical:8,
        gap:12,
        justifyContent:'center',
        alignItems:'center',
        

    },
    text:{
        fontFamily:'Fraunces',
        elevation:6,
        shadowColor:"white",
        // fontWeight:'700',
        fontSize:18,
        lineHeight:25.2,
        
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingHorizontal:8,
        paddingVertical:16,
        gap:12
    },
    background:{
        height:100,
    },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

})