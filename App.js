// import 'react-native-gesture-handler';
// In App.js in a new project
import React, { useEffect } from 'react';
// import {oneSignalId} from './src/redux/actions';
import { useDispatch } from 'react-redux';
// import OneSignal from 'react-native-onesignal';

// //OneSignal Init Code
// OneSignal.setLogLevel(6, 0);
// OneSignal.setAppId("d73fdeec-e47d-41c9-9729-cccb5a05cb74");
// //END OneSignal Init Code

// //Prompt for push on iOS
// OneSignal.promptForPushNotificationsWithUserResponse(response => {
//   console.log("Prompt response:", response);
// });

// //Method for handling notifications received while app in foreground
// OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
//   console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
//   let notification = notificationReceivedEvent.getNotification();
//   console.log("notification: ", notification);
//   const data = notification.additionalData
//   console.log("additionalData: ", data);
//   // Complete with null means don't show a notification.
//   notificationReceivedEvent.complete(notification);
// });

// //Method for handling notifications opened
// OneSignal.setNotificationOpenedHandler(notification => {
//   console.log("OneSignal: notification opened:", notification);
// });

// react navigation
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation/root';

// splash screen
// import BootSplash from 'react-native-bootsplash';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './src/redux/reducers';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(); //Ignore all log notifications
import FlashMessage from 'react-native-flash-message';
import { StatusBar } from 'react-native';
function App() {
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
