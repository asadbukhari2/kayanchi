import React, { Component } from 'react';

import {
  ArtistWelcome,
  ArtistNumberSignUp,
  ArtistPasswordSignUp,
  ArtistOnBoarding,
  ArtistOnBoardingWelcome,
  ArtistEmailSignUp,
  ArtistGoogleSignIn,
  ArtistVerification,
  ArtistCreateGig,
  ArtistBasicGig,
  ArtistBasicGig2,
  ArtistGigMood,
  ArtistKnownFor,
  ArtistPublishGig,
  ArtistUpdateProfile,
  ArtistGlowMakeUp,
} from '../artist-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../init-screens/SignIn';

const Stack = createNativeStackNavigator();

export default class ArtistAuthStack extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen name="ArtistWelcome" component={ArtistWelcome} />
        <Stack.Screen name="ArtistEmailSignUp" component={ArtistEmailSignUp} />
        <Stack.Screen name="ArtistGoogleSignIn" component={ArtistGoogleSignIn} />
        <Stack.Screen name="ArtistNumberSignUp" component={ArtistNumberSignUp} />
        <Stack.Screen name="ArtistPasswordSignUp" component={ArtistPasswordSignUp} />
        <Stack.Screen name="ArtistKnownFor" component={ArtistKnownFor} />
        <Stack.Screen name="ArtistOnBoardingWelcome" component={ArtistOnBoardingWelcome} />
        <Stack.Screen name="ArtistOnBoarding" component={ArtistOnBoarding} />
        {/* start */}
        <Stack.Screen name="ArtistCreateGig" component={ArtistCreateGig} />
        <Stack.Screen name="ArtistBasicGig" component={ArtistBasicGig} />
        <Stack.Screen name="ArtistBasicGig2" component={ArtistBasicGig2} />
        <Stack.Screen name="ArtistGigMood" component={ArtistGigMood} />
        <Stack.Screen name="ArtistVerification" component={ArtistVerification} />
        <Stack.Screen name="ArtistPublishGig" component={ArtistPublishGig} />
        <Stack.Screen name="ArtistUpdateProfile" component={ArtistUpdateProfile} />
        <Stack.Screen name="ArtistGlowMakeUp" component={ArtistGlowMakeUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        {/* end */}
      </Stack.Navigator>
    );
  }
}
