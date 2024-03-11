import React from 'react'
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList
  } from 'react-native';
  
import Card from '../../components/d-active-card/Card';
import Scene1 from '../../assets/Images/Scene6.png'
import Scene2 from '../../assets/Images/Scene2.png'
import Scene3 from '../../assets/Images/Scene3.png'
import Scene4 from '../../assets/Images/Scene4.png'
import Scene5 from '../../assets/Images/Scene5.png'

import {styles}  from './home-style'




const CardContainer = () => {

  const data = [
    { title: 'Outer Ring', titleColor: '#D72B6A', background: Scene1 },
    { title: 'Focus', titleColor: '#176E6D', background: Scene2 },
    { title: 'Scan', titleColor: '#B96204', background: Scene3 },
    { title: 'Square', titleColor: '#176E6D', background: Scene4 },
    { title: 'Follow', titleColor: '#292F36', background: Scene5 },
  ];
  
    
    return (

      <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card title={item.title} titleColor={item.titleColor} background={item.background} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    )
  }
  
  

  const Home = () => {
    return (
      <ScrollView>
        <CardContainer/>
        <CardContainer/>
      </ScrollView>
    )
  }



export default Home