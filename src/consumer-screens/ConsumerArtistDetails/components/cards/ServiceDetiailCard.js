/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import plus from '../../../../assets/plus.png';
import minus from '../../../../assets/minus.png';
import travelIcon from '../../../../assets/travel_brown.png';
import hostingIcon from '../../../../assets/hosting_brown.png';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/ServiceDetiailCard.style';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, handleConsumerOrder, removeFromCart } from '../../../../redux/actions/commonActions';
import moment from 'moment';
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const ServiceDetiailCard = ({
  id,
  name,
  discount_percentage,
  amount,
  discounted_price,
  duration,
  travel_mood,
  hosting_mood,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  let today = moment(Date.now()).day();

  const artistBookingSlots = useSelector(state => state.common.artistBookingSlots);
  const consumerOrder = useSelector(state => state.common.consumerOrder);
  const token = useSelector(state => state.auth.token);

  const [cardCartItem, setCardCartItem] = useState({});
  const cart = useSelector(state => state.common.cart);
  const calculateCartItem = (idItem, cartItem) => {
    if (cartItem) {
      return cartItem.filter(item => item.service_id === idItem)[0];
    }
    return [];
  };
  useEffect(() => {
    selectActiveBookingSLot(artistBookingSlots, DAYS[today]);
  }, []);
  const selectActiveBookingSLot = (slots, day) => {
    const keys = Object.keys(slots);
    if (keys.length > 0) {
      for (let i = 0; i < keys.length; i++) {
        const element = keys[i];
        if (slots[element].length > 0) {
          // if (element === day) {
          return slots[element][0];
          // }
        }
      }
    }
    return [];
  };
  const handleAddToCart = () => {
    const cartData = {
      quantity: 1,
      service_id: id,
    };
    dispatch(addToCart(cartData, token));
    let slot = selectActiveBookingSLot(artistBookingSlots, DAYS[today]);
    if (slot) {
      let orderData = {
        ...consumerOrder,
        artistTimeSLot: slot,
      };
      dispatch(handleConsumerOrder(orderData));
    }
  };
  const handleRemoveFromCart = () => {
    const cartData = {
      id,
    };
    dispatch(removeFromCart(cartData, token));
  };
  useEffect(() => {
    setCardCartItem(calculateCartItem(id, cart.cart_items));
  }, [cart]);
  return (
    <View style={[styles.container]}>
      <View style={[styles.flex, styles.flexDirectionRow, styles.justifyBetween, styles.alignItemStart]}>
        <View>
          <View style={[styles.flex, styles.flexDirectionRow, styles.alignItemCenter]}>
            <Text style={[styles.heading]}>{name}</Text>
            {discount_percentage > 0 && <Text style={[styles.offerContainer]}>{discount_percentage}% Off</Text>}
          </View>
          <View>
            {discount_percentage > 0 ? (
              <View style={[styles.flex, styles.flexDirectionRow, styles.alignItemCenter]}>
                <Text style={[styles.colorBlue]}>Rs {amount - discounted_price}</Text>
                <Text
                  style={[styles.colorGray, discount_percentage > 0 && styles.textLilneThrough, styles.marginLeft10]}>
                  Rs {amount}
                </Text>
              </View>
            ) : (
              <Text style={[styles.colorBlue]}>Rs {amount}</Text>
            )}
          </View>
        </View>
        <View style={[styles.flex, styles.flexDirectionRow, styles.alignItemCenter]}>
          {cardCartItem?.id?.length > 0 && (
            <TouchableOpacity onPress={() => handleRemoveFromCart()} style={[styles.plusBtnContainer]}>
              <Image style={[styles.plusIcon]} source={minus} />
            </TouchableOpacity>
          )}

          {cart?.cart_items?.length > 0 && (
            <Text style={[styles.colorBlack, styles.fontSize10, styles.marginHorizontal5]}>
              {cardCartItem?.quantity}
            </Text>
          )}

          <TouchableOpacity
            onPress={() => {
              handleAddToCart();
            }}
            style={[styles.plusBtnContainer]}>
            <Image style={[styles.plusIcon]} source={plus} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.flex, styles.flexDirectionRow, styles.justifyBetween, styles.alignItemCenter]}>
        <View>
          <Text style={[styles.colorGray]}>Takes {duration} min</Text>
        </View>
        <View style={[styles.flex, styles.flexDirectionRow, styles.justifyBetween, styles.alignItemCenter]}>
          {travel_mood && <Image style={[styles.icons, styles.marginLeft10]} source={travelIcon} />}
          {hosting_mood && <Image style={[styles.icons, styles.marginLeft10]} source={hostingIcon} />}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ConsumerHomeStack', {
                screen: 'ConsumerGigDetailHair',
                params: { id },
              });
            }}
            style={[styles.marginLeft10, styles.link]}>
            <Text>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ServiceDetiailCard;
