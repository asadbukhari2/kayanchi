import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { handleConsumerOrder } from '../../../../redux/actions/commonActions';

const HostAndTravel = ({ icon, title, status, key }) => {
  const consumerOrder = useSelector(state => state.common.consumerOrder);
  const dispatch = useDispatch();

  const handleType = data => {
    let orderData = {
      ...consumerOrder,
      consumerMood: data,
    };
    dispatch(handleConsumerOrder(orderData));
  };

  const isActive = consumerOrder.consumerMood === status;

  return (
    <TouchableOpacity
      key={key}
      onPress={() => handleType(status)}
      style={[styles.container, isActive && styles.active]}>
      <Image style={styles.icon} source={icon} />
      <Text style={[styles.width50, styles.title]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 120,
    backgroundColor: '#696969',
    marginRight: 10,
    borderRadius: 15,
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#7c6083',
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
