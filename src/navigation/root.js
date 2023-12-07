import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ArtistMainStack from './ArtistMainStack';
import ConsumerMainStack from './ConsumerMainStack';
import ArtistAuthStack from './ArtistAuthStack';
import ConsumerAuthStack from './ConsumerAuthStack';
import InitStack from './InitStack';

import Geolocation from '@react-native-community/geolocation';
import { GET_CURRENT_LOCATION } from '../redux/constants/constants';

export default function Root() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const isArtist = auth?.isArtist === true;
  const isConsumer = auth?.isConsumer === true;
  console.log(auth.signUpUserData);
  console.log('-=-=-=-=-', isArtist, isConsumer, auth?.token?.length > 0);
  // dispatch({ type: 'SIGN_OUT' });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        // console.log(position);
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        dispatch({ type: GET_CURRENT_LOCATION, payload: { latitude, longitude } });
      },
      error => console.log('Error getting location:', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
}
