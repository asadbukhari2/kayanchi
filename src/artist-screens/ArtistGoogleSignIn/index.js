import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Button,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import api from '../../utils/APIservice.js';

const index = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['profile'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '638236296456-6tn51vgeh4t4g5d3ve4v4j0rgdsmntv8.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, 'USERINFO');
      const body = {
        email: userInfo.user.email,
        fullname: userInfo.user.familyName + '' + userInfo.user.givenName,
        profileId: userInfo.user.id,
        profileImage: userInfo.user.photo,
      };

      const res = await api.post('api/users/googleauth/', body);
      //   dispatch({
      //     type: 'SIGN_IN_SUCCESS',
      //     payload: res.data,
      //   });
    } catch (error) {
      console.log('error while google', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>abc</Text>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleSignIn}
        //   disabled={this.state.isSigninInProgress}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
