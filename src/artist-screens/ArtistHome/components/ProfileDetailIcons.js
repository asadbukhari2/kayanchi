import { View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import makeStyle from '../home.styles';
import { useTheme } from '../../../utils/theme';
import { updateProfile } from '../../../redux/actions';
const booking = require('../../../assets/booking.png');
const ondemand = require('../../../assets/ondemand.png');
const avail = [
  {
    title: 'Booking Only',
    value: 'booking_only',
    icon: booking,
  },
  {
    title: 'On Demand',
    value: 'on_demand',
    icon: ondemand,
  },
];
const ProfileDetailIcons = () => {
  const theme = useTheme();
  const styles = makeStyle(theme);
  const dispatch = useDispatch();
  const { hosting_mood, travel_mood, availability_status } = useSelector(state => state.auth.profile);
  useEffect(() => {
    console.log(availability_status);
  }, []);

  const handleTravelMoodStatus = (status) => {
    dispatch(
      updateProfile({
        travel_mood: status,
        hosting_mood: false,
      }),
    );
  }
  const handleHostingMoodStatus = (status) => {
    dispatch(
      updateProfile({
        hosting_mood: status,
        travel_mood: false,
      }),
    );
  }
  const handleAvabilityMoodStatus = () => {
    dispatch(
      updateProfile({
        availability_status: availability_status === 'on_demand' ? 'booking_only' : 'on_demand',
      }),
    );
  }
  return (
    <View style={styles.icons}>
      <TouchableOpacity onPress={() => handleHostingMoodStatus(!hosting_mood)}>
        <View style={[styles.iconConatiner, { backgroundColor: hosting_mood === true ? theme.linkTxt : '#ebebeb' }]}>
          <Image
            source={
              hosting_mood === true ? require('../../../assets/host.png') : require('../../../assets/host_grey.png')
            }
            style={styles.iconStyle}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTravelMoodStatus(!travel_mood)}>

      <View style={[styles.iconConatiner, { backgroundColor: travel_mood === true ? theme.linkTxt : '#ebebeb' }]}>
        <Image
          source={travel_mood === true ? require('../../../assets/car.png') : require('../../../assets/car-grey.png')}
          style={styles.iconStyle}
          />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAvabilityMoodStatus()}>

      {availability_status && availability_status !== 'on_demand' ? (
        <View style={[styles.iconConatiner, { backgroundColor: theme.brown }]}>
          <Image source={require('../../../assets/ondemand.png')} style={styles.iconStyle} />
        </View>
      ) : (
        <View style={[styles.iconConatiner, { backgroundColor: theme.seaGreen }]}>
          <Image source={require('../../../assets/booking.png')} style={styles.iconStyle} />
        </View>
      )}
      </TouchableOpacity>
    </View>
  );
};

export default ProfileDetailIcons;
