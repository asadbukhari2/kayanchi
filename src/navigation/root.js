import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ArtistMainStack from './ArtistMainStack';
import ConsumerMainStack from './ConsumerMainStack';
import ArtistAuthStack from './ArtistAuthStack';
import ConsumerAuthStack from './ConsumerAuthStack';
import InitStack from './InitStack';

import {
  ArtistBasicGig,
  ArtistBasicGig2,
  ArtistCreateGig,
  ArtistGenderSignUp,
  ArtistGigMood,
  ArtistHome,
  ArtistInterests,
  ArtistOnBoarding,
  ArtistOnBoardingWelcome,
  ArtistPasswordSignUp,
  ArtistPublishGig,
  ArtistUpdateProfile,
  ArtistUsernameSignUp,
  ArtistVerification,
  ArtistYourOrders,
} from '../artist-screens';

// import AsyncStorage from "@react-native-async-storage/async-storage";

// OneSignal.addSubscriptionObserver(event => {
//   console.log("OneSignal: subscription changed event:", event);
//   console.log("OneSignal: subscription changed from userId:", event.from.userId);
//   console.log("OneSignal: subscription changed to userId:", event.to.userId);
//   console.log("OneSignal: subscription changed from pushToken:", event.from.pushToken);
//   console.log("OneSignal: subscription changed to pushToken:", event.to.pushToken);
//   console.log("OneSignal: subscription changed from isPushDisabled:", event.from.isPushDisabled);
//   console.log("OneSignal: subscription changed to isPushDisabled:", event.to.isPushDisabled);
//   console.log("OneSignal: subscription changed from isSubscribed:", event.from.isSubscribed);
//   console.log("OneSignal: subscription changed to isSubscribed:", event.to.isSubscribed);
// })

export default function Root() {
  //   OneSignal.addSubscriptionObserver(async (event) => {
  //     console.log("OneSignal: subscription changed to userId:", event.to.userId);
  //     if(event.to.userId){await AsyncStorage.setItem('oneSignalId', event.to.userId);}
  //   })

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const isArtist = auth?.isArtist === true;
  const isConsumer = auth?.isConsumer === true;
  console.log(auth.signUpUserData);
  console.log('-=-=-=-=-', isArtist, isConsumer, auth?.token?.length > 0);
  // dispatch({ type: 'SIGN_OUT' });

  return !auth.token && isArtist ? (
    <ArtistAuthStack />
  ) : auth.token && isArtist ? (
    <ArtistMainStack />
  ) : !auth.token && isConsumer ? (
    <ConsumerAuthStack />
  ) : auth.token && isConsumer ? (
    <ConsumerMainStack />
  ) : (
    <InitStack />
  );
  // return <ArtistOnBoardingWelcome />;
}
