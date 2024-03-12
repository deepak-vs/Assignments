/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View} from 'react-native';

import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/screens/Home/Home';
import Heading from './src/components/headings/Heading';
import setting from './src/assets/icons/settings.png';
import Notification from './src/screens/Notifications/Notification';
import {COLORS} from './src/themes'

function App(): React.JSX.Element {
  const [settingIcon, setSettingIcon] = useState();

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.background}
        barStyle={'dark-content'}
      />
      {settingIcon ? (
        <View>
          <Heading heading="Notification" icon={settingIcon} />
          <Notification />
        </View>
      ) : (
        <>
          <Heading heading="D-active" icon={settingIcon} />
          <Home />
        </>
      )}
    </SafeAreaView>
  );
}

export default App;
