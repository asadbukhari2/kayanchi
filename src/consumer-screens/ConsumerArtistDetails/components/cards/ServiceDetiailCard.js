/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import plus from '../../../../assets/plus.png';
import minus from '../../../../assets/minus.png';
import travelIcon from '../../../../assets/travel_brown.png';
import hostingIcon from '../../../../assets/hosting_brown.png';
import { styles } from '../styles/ServiceDetiailCard.style';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../redux/actions/commonActions';

import { Button } from '../../../../components';

const ServiceDetiailCard = ({ id, name, discount_percentage, amount, discounted_price, is_travelling, is_hosting }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const calculatePrice = (discount, actualPrice) => {
    let val = (discount / 100) * actualPrice;
    return actualPrice - val;
  };
  const [cardCartItem, setCardCartItem] = useState({});
  const cart = useSelector(state => state.common.cart);
  console.log('this is the id', id);
  const calculateCartItem = (idItem, cartItem) => {
    return cartItem.filter(item => item.service_id === idItem)[0];
  };
  function handleAddToCart() {
    console.log('handleadd to the cart press');
    const cartData = {
      quantity: 1,
      service_id: id,
    };
    dispatch(addToCart(cartData, token));
  }
  useEffect(() => {
    setCardCartItem(calculateCartItem(id, cart));
  }, []);
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
            <View style={[styles.plusBtnContainer]}>
              <Image style={[styles.plusIcon]} source={minus} />
            </View>
          )}

          {cardCartItem?.id?.length > 0 && (
            <Text style={[styles.colorBlack, styles.fontSize10, styles.marginHorizontal5]}>
              {cardCartItem?.quantity}
            </Text>
          )}

          <TouchableOpacity
            onPress={() => {
              console.log('hi main click hova hoon');
            }}
            style={[styles.plusBtnContainer]}>
            <Image style={[styles.plusIcon]} source={plus} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.flex, styles.flexDirectionRow, styles.justifyBetween, styles.alignItemCenter]}>
        <View>
          <Text style={[styles.colorGray]}>Takes 40 min</Text>
        </View>
        <View style={[styles.flex, styles.flexDirectionRow, styles.justifyBetween, styles.alignItemCenter]}>
          {is_travelling && <Image style={[styles.icons, styles.marginLeft10]} source={travelIcon} />}
          {is_hosting && <Image style={[styles.icons, styles.marginLeft10]} source={hostingIcon} />}
          <Text style={[styles.marginLeft10, styles.link]}>View</Text>
        </View>
      </View>
    </View>
  );
};

export default ServiceDetiailCard;
