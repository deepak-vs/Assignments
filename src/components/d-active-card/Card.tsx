import React from 'react';
import {View, Text, ImageBackground, ImageSourcePropType} from 'react-native';

import CardButton from '../buttons/CardButton';
import {styles} from './Card-styles';

interface ICardProps {
  title: string;
  titleColor: string;
  background: ImageSourcePropType;
}

const Card: React.FC<ICardProps> = ({title, titleColor, background}):React.JSX.Element => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.card}>
        <View style={styles.subContainer}>
          <View style={styles.cardTitle}>
            <Text style={[styles.text, {color: titleColor}]}>{title}</Text>
          </View>

          <View style={styles.buttons}>
            <CardButton text="2min" />
            <CardButton text="4min" />
            <CardButton text="8min" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
