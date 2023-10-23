import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  ArtistWelcome,
  ArtistNumberSignUp,
  ArtistOtpSignUp,
  ArtistUsernameSignUp,
  ArtistPasswordSignUp,
  ArtistGenderSignUp,
  ArtistInterests,
  ArtistOnBoarding,
  ArtistOnBoardingWelcome,
  ArtistEmailSignUp,
  ArtistGoogleSignIn,
  ArtistVerification,
  ArtistCreateGig,
  ArtistBasicGig,
  ArtistBasicGig2,
  ArtistGigMood,
  ArtistHome,
  ArtistOrder,
  ArtistYourOrders,
  ArtistKnownFor,
} from '../artist-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        <Stack.Screen name="ArtistOtpSignUp" component={ArtistOtpSignUp} />
        <Stack.Screen name="ArtistUsernameSignUp" component={ArtistUsernameSignUp} />
        <Stack.Screen name="ArtistPasswordSignUp" component={ArtistPasswordSignUp} />
        <Stack.Screen name="ArtistKnownFor" component={ArtistKnownFor} />
        <Stack.Screen name="ArtistOnBoardingWelcome" component={ArtistOnBoardingWelcome} />
        <Stack.Screen name="ArtistOnBoarding" component={ArtistOnBoarding} />

        <Stack.Screen name="ArtistYourOrders" component={ArtistYourOrders} />
        <Stack.Screen name="ArtistGenderSignUp" component={ArtistGenderSignUp} />
        <Stack.Screen name="ArtistInterests" component={ArtistInterests} />
        <Stack.Screen name="ArtistVerification" component={ArtistVerification} />
        <Stack.Screen name="ArtistCreateGig" component={ArtistCreateGig} />
        <Stack.Screen name="ArtistBasicGig" component={ArtistBasicGig} />
        <Stack.Screen name="ArtistBasicGig2" component={ArtistBasicGig2} />
        <Stack.Screen name="ArtistGigMood" component={ArtistGigMood} />
        {/* <Stack.Screen name="ArtistHome" component={ArtistHome} /> */}
        {/* <Stack.Screen name="ArtistYourOrders" component={ArtistYourOrders} /> */}
      </Stack.Navigator>
    );
  }
}
