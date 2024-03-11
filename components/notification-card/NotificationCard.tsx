import React,{useState} from 'react'
import { Text, View ,Image, ImageSourcePropType, Touchable, TouchableHighlight} from 'react-native'
import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'
import {styles } from './NotificationCard-styles'


interface NotificationProps {
    iconNum: ImageIconKey;
    reminder:string;
    task:string;
    time:string
  }
type ImageIconKey = 1 | 2 | 3;

type ImageIcon<T extends ImageIconKey> = {
    [key in T]: ImageSourcePropType;
  };

const NotificationCard:React.FC<NotificationProps> = ({iconNum,reminder,task,time}) => {

      const imageIcon:ImageIcon<ImageIconKey>={
        1:icon1,
        2:icon2,
        3:icon3
      } 

      const [backgroundColor,setBackgroundColor]=useState("white");

      const showColor=()=>{
          setBackgroundColor('red');
      }
    

  return (
    <View style={[styles.card,{backgroundColor:`${backgroundColor}`}]} >
        <View style={styles.title}>
            <Image source={imageIcon[iconNum]}/>
           <View>
            <Text style={styles.text}>{reminder}</Text>
            <Text style={styles.text}>{task}</Text>
           </View>
        </View>
        <View style={styles.timeBox}>
        <Text style={styles.time}>{time}</Text>
        </View>
    </View>
  )
}


export default NotificationCard