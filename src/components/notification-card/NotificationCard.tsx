import React from 'react';
import {Text, View, Image, ImageSourcePropType} from 'react-native';

import speaker from '../../assets/icons/speaker.png';
import clock from '../../assets/icons/clock.png';
import lotus from '../../assets/icons/lotus.png';

import {styles} from './notificationcard-styles';


interface INotificationProps {
  iconNum: ImageIconKey;
  reminder: string;
  task: string;
  time: string;
}
type ImageIconKey = 1 | 2 | 3;

type ImageIcon<T extends ImageIconKey> = {
  [key in T]: ImageSourcePropType;
};

const NotificationCard: React.FC<INotificationProps> = ({
  iconNum,
  reminder,
  task,
  time,
}):React.JSX.Element => {
  
  const imageIcon: ImageIcon<ImageIconKey> = {
    1: speaker,
    2: clock,
    3: lotus,
  };

  return (
    
    <View style={styles.card}>
      <View style={styles.title}>
        <Image source={imageIcon[iconNum]} />
        <View>
          <Text style={styles.text}>{reminder}</Text>
          <Text style={styles.text}>{task}</Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

export default NotificationCard;
