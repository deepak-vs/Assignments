import React from 'react';
import {View, FlatList} from 'react-native';
import Card from '../../components/d-active-card/Card';
import {CARD_DATA} from '../../constants/home-constants';
import {styles} from './home-style';

const CardContainer = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CARD_DATA}
        renderItem={({item}) => (
          <Card
            title={item.title}
            titleColor={item.titleColor}
            background={item.background}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const Home = (): React.JSX.Element => {
  return (
    <View>
      <CardContainer />
    </View>
  );
};

export default Home;
