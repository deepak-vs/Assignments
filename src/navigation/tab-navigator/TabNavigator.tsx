import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StackNavigationProp } from '@react-navigation/stack'
import { StatusBar, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/Feather'

import React from 'react'

import Discovery from '../../screens/discovery/Discovery'
import Education from '../../screens/education/Education'
import Home from '../../screens/home/Home'
import Map from '../../screens/map/Map'
import News from '../../screens/news/News'

import { Screens, TAB_ICON_SOURCE } from '../../constants/navigation-constants'

import { styles } from './tabNavigator-styles'

interface ITabNavigatorProps {
  navigation: StackNavigationProp<any>
}

const Tab = createBottomTabNavigator()

const tabScreenOptions = (screenName: string) => {
  return {
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <Icons
        style={[styles.icons, focused && styles.activeIcon]}
        name={TAB_ICON_SOURCE[screenName]}
        size={25}
      />
    ),
    tabBarLabel: screenName,
  }
}

const TabNavigator = ({ navigation }: ITabNavigatorProps) => {
  StatusBar.setHidden(false);

  const handleLogout = () => {
    navigation.navigate('Modal')
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerTitleAlign: 'center',
        headerTitleStyle: styles.headerTitle,
        headerStyle: { elevation: 4, shadowColor: '#323247' },
        tabBarActiveTintColor: '#FF647C',
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerLeft: () => <Icons style={styles.headerIcon} name="menu" size={24} />,
        headerRight: () => (
          <TouchableOpacity onPress={handleLogout}>
            <Icons style={styles.headerIcon} name="user-check" size={24} />
          </TouchableOpacity>
        ),
      }}
      initialRouteName={Screens.Home}>
      <Tab.Screen name={'COVID-19'} component={Home} options={tabScreenOptions(Screens.Home)} />

      <Tab.Screen name={'World Wide map'} component={Map} options={tabScreenOptions(Screens.Map)} />

      <Tab.Screen
        name={Screens.Education}
        component={Education}
        options={tabScreenOptions(Screens.Education)}
      />

      <Tab.Screen
        name={Screens.Discovery}
        component={Discovery}
        options={tabScreenOptions(Screens.Discovery)}
      />

      <Tab.Screen name={Screens.News} component={News} options={tabScreenOptions(Screens.News)} />
    </Tab.Navigator>
  )
}

export default TabNavigator
