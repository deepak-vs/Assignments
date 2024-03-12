import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './CardButton-style';

interface IButtonProps {
  text: string;
}

const CardButton: React.FC<IButtonProps> = ({text}):React.JSX.Element => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};

export default CardButton;
