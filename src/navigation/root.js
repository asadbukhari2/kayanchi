import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ArtistMainStack from './ArtistMainStack';
import ConsumerMainStack from './ConsumerMainStack';
import ArtistAuthStack from './ArtistAuthStack';
import ConsumerAuthStack from './ConsumerAuthStack';
import InitStack from './InitStack';

export default function Root() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const isArtist = auth?.isArtist === true;
  const isConsumer = auth?.isConsumer === true;
  console.log(auth.signUpUserData);
  console.log('-=-=-=-=-', isArtist, isConsumer, auth?.token?.length > 0);
  // dispatch({ type: 'SIGN_OUT' });

  return <ArtistMainStack />;
  // return !auth.token && isArtist ? (
  //   <ArtistAuthStack />
  // ) : auth.token && isArtist ? (
  //   <ArtistMainStack />
  // ) : !auth.token && isConsumer ? (
  //   <ConsumerAuthStack />
  // ) : auth.token && isConsumer ? (
  //   <ConsumerMainStack />
  // ) : (
  //   <InitStack />
  // );
}
