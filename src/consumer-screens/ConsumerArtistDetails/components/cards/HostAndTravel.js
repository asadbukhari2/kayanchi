import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { color } from 'react-native-reanimated';
import hosting from '../../../../assets/hosting_white.png';
import travel from '../../../../assets/travel_white.png';
import { handleConsumerOrder } from '../../../../redux/actions/commonActions';
import { useDispatch, useSelector } from 'react-redux';
const HostAndTravel = ({ icon, title, status }) => {
  const [type, setType] = useState(status);
  const consumerOrder = useSelector(state => state.common.consumerOrder);
  console.log('this is the status in the host and travel', status, consumerOrder);
  const dispatch = useDispatch();
  const handleType = data => {
    let orderData = {
      ...consumerOrder,
      consumerMood: data,
    };
    dispatch(handleConsumerOrder(orderData));
  };

  return (
    <TouchableOpacity
      onPress={() => handleType(status)}
      style={[
        styles.container,
        type === 'hosting' ? styles.active : type === 'traveling' ? styles.active : styles.bgGray,
      ]}>
      <Image style={[styles.icon]} source={icon} />
      <Text style={[styles.width50, styles.title]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 120,
    // backgroundColor: '#696969',
    marginRight: 10,
    borderRadius: 15,
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#7c6083',
  },
  colorWhite: {
    color: 'white',
  },
  bgGray: {
    backgroundColor: 'gray',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  width50: {
    width: 90,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    marginTop: 4,
  },
});
export default HostAndTravel;
