import { View, Image } from 'react-native';
import React from 'react';

import { useSelector } from 'react-redux';
import makeStyle from '../home.styles';
import { useTheme } from '../../../utils/theme';

const ProfileDetailIcons = () => {
  const theme = useTheme();
  const styles = makeStyle(theme);

  const { hosting_mood, travel_mood, availability_status } = useSelector(state => state.auth.profile);

  return (
    <View style={styles.icons}>
      <View style={[styles.iconConatiner, { backgroundColor: hosting_mood ? theme.linkTxt : '#ebebeb' }]}>
        <Image
          source={hosting_mood ? require('../../../assets/host.png') : require('../../../assets/host_grey.png')}
          style={styles.iconStyle}
        />
      </View>
      <View style={[styles.iconConatiner, { backgroundColor: travel_mood ? theme.linkTxt : '#ebebeb' }]}>
        <Image
          source={travel_mood ? require('../../../assets/car.png') : require('../../../assets/car-grey.png')}
          style={styles.iconStyle}
        />
      </View>
      {availability_status && availability_status === 'on_demand' ? (
        <View style={[styles.iconConatiner, { backgroundColor: theme.brown }]}>
          <Image source={require('../../../assets/ondemand.png')} style={styles.iconStyle} />
        </View>
      ) : (
        <View style={[styles.iconConatiner, { backgroundColor: theme.seaGreen }]}>
          <Image source={require('../../../assets/booking.png')} style={styles.iconStyle} />
        </View>
      )}
    </View>
  );
};

export default ProfileDetailIcons;
