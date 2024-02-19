import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/CartItemCard.style';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/actions/commonActions';
const CartItemCard = ({ data }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  console.log('this is the data', data);
  const handleAdd = id => {
    const cartData = {
      quantity: 1,
      service_id: id,
    };
    dispatch(addToCart(cartData, token));
  };
  const handleRemove = id => {};
  return (
    <View style={[styles.container, styles.flex, styles.directionRow, styles.justifyBetween]}>
      <View>
        <Text style={[styles.heading]}>{data.service_name}</Text>
        <Text style={[styles.subText]}>{data.service_time} min</Text>
        <Text style={[styles.colorBlue]}>Rs {data.quantity * data.price}</Text>
      </View>
      <View>
        <View
          style={[
            styles.flex,
            styles.directionRow,
            styles.alignCenter,
            styles.countSignContainer,
            styles.justifyBetween,
          ]}>
          <Text style={[styles.subText, styles.fontSize18]}>-</Text>
          <Text style={[styles.count]}>{data.quantity}</Text>
          <TouchableOpacity onPress={() => handleAdd(data.service_id)}>
            <Text style={[styles.subText, styles.fontSize18]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItemCard;
