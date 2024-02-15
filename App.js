import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation/root';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './src/redux/reducers';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(); //Ignore all log notifications
import FlashMessage from 'react-native-flash-message';
import { StatusBar } from 'react-native';

import { Platform, PermissionsAndroid } from 'react-native';
import { getCurrentLocation } from './src/utils/helper';

function App() {
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
            title: 'Location Permission',
            message: 'App needs access to your location',
          });
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getCurrentLocation({ store });
          } else {
          }
        } catch (err) {
          console.warn(err);
        }
      } else if (Platform.OS === 'ios') {
        getCurrentLocation({ store });
      }
    };

    requestLocationPermission();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </PersistGate>
      <FlashMessage position="top" icon="auto" duration={2000} style={{ zIndex: 9999 }} />
    </Provider>
  );
}

export default App;
