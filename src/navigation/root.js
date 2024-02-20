import React from 'react';

import { useSelector } from 'react-redux';

import ArtistMainStack from './ArtistMainStack';
import ConsumerMainStack from './ConsumerMainStack';
import ArtistAuthStack from './ArtistAuthStack';
import ConsumerAuthStack from './ConsumerAuthStack';
import InitStack from './InitStack';

export default function Root() {
  const auth = useSelector(state => state.auth);
  const isArtist = auth?.isArtist === true;
  const isConsumer = auth?.isConsumer === true;
  console.log('-=-=-=-=-', isArtist, isConsumer, auth);

  return !auth.token && isArtist ? (
    <ArtistAuthStack />
  ) : auth.token && isArtist ? (
    <ArtistMainStack />
  ) : !auth?.token && isConsumer ? (
    <ConsumerAuthStack />
  ) : auth?.token && isConsumer ? (
    <ConsumerMainStack />
  ) : (
    <InitStack />
  );
}
