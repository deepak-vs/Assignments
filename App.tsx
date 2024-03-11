/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  
} from 'react-native';
import Home from './screens/Home/Home';
import Heading from './components/headings/Heading';
import setting from './assets/icons/settings.png';
import Notification from './screens/Notifications/Notification';



function App(): React.JSX.Element {

  const [settingIcon,setSettingIcon]=useState(setting);
  
  
  return (
    <SafeAreaView>
      <StatusBar
          animated={true}
          backgroundColor="white"
          barStyle={"dark-content"}
        
      />
    
        {settingIcon?
           <>
            <Heading heading="Notification" icon={settingIcon}/>
            <Notification/>
           </>
        :
          <>
            <Heading heading="D-active" icon={settingIcon}/>
            <Home/>
          </>
        }  
        
    </SafeAreaView>
  );
}



export default App;
