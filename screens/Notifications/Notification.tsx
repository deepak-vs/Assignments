import React,{useEffect, useState} from 'react'
import { View ,Text,Image, FlatList} from 'react-native'
import bell from '../../assets/icons/bell.png'
import NotificationCard from '../../components/notification-card/NotificationCard'
import {apiUrl} from '../../constants/api'
import {styles} from './notification-styles'



type ImageIconKey = 1 | 2 | 3;

interface NotificationItem {
  id: string; 
  icon: ImageIconKey;
  reminder: string;
  task: string;
  time: string;
}

type NotificationCount = number;

const startTimestamp = new Date('2024-03-01').getTime(); 
const endTimestamp = new Date().getTime(); 

function generateRandomTimestamp(startTimestamp:number, endTimestamp:number):Date {
    const randomTimestamp = startTimestamp + Math.random() * (endTimestamp - startTimestamp);
    return new Date(randomTimestamp);
  }
  
function getTime(){
    const randomTimestamp:any = generateRandomTimestamp(startTimestamp, endTimestamp);
    const now:any = new Date();
    const diffInMilliseconds = now - randomTimestamp;
    const minutes = Math.floor(diffInMilliseconds / (60 * 1000));
    const hours = Math.floor(diffInMilliseconds / (60 * 60 * 1000));
    const days = Math.floor(diffInMilliseconds / (24 * 60 * 60 * 1000));
    if(minutes<60){
        return `${minutes} min ago`;
    } 
    if(hours<24){
        return `${hours} hours ago`;
    }
    if(days<7){
        return `${days} days ago`
    }
    else{
        return `${days%7} weeks ago`
    }
}




const EmptyNotification = () => {
  return (
    <View style={styles.box}>
        <View>
            <Image source={bell}/>
        </View>
        <View style={styles.titleBox}>
            <Text style={styles.title}>No notifications yet!</Text>
            <View>
            <Text style={styles.message}>You have no notifications right now.</Text> 
            <Text style={styles.message}>Come back later.</Text> 
            </View>
                
        </View>
    </View>
  )
}


const Notification:React.FC=()=>{

    const [notificationCount,setNotificationCount]=useState<NotificationCount>(1);

    const [data,setData]=useState<NotificationItem[]>([]);

    const getData=async()=>{
        const response=await fetch(`${apiUrl}/getallreminders`)
        const data=await response.json();
        setData(data);
        
    }

    useEffect(()=>{
        getData();
    },[])
   

    return (
        <View style={styles.notificationBox}>
          
           <FlatList
            data={notificationCount?data:[]}
            renderItem={({item}) => 
                    <NotificationCard 
                        iconNum={item.icon} 
                        reminder={item.reminder} 
                        task={item.task} 
                        time={getTime()} 
                    />}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={<EmptyNotification/>}
            />
        </View>
    )
}


export default Notification