import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles/CartDetailCard.style';
import CartItemCard from './CartItemCard';
import { useSelector } from 'react-redux';
const CartDetailCard = () => {
  const cart = useSelector(state => state.common.cart);
  const { artistTimeSLot } = useSelector(state => state.common.consumerOrder);
  const artistServices = useSelector(state => state.common.artistServices);
  console.log('artistServicesartistServicesartistServices', artistServices);
  const calculateTotalCart = data => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      let itemTotal = element.quantity * element.price;
      sum += itemTotal;
    }
    return sum;
  };
  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View style={[styles.padding10]}>
          <Text style={[styles.heading]}>Artist</Text>
          <Text style={[styles.subText]}>{artistServices.artist}</Text>
          <Text style={[styles.subText]}>3.2 kms away from You</Text>
        </View>
        {artistTimeSLot && (
          <View style={[styles.marginTop5, styles.paddingHorizontal10]}>
            <Text style={[styles.heading]}>Appointment Date & Time</Text>
            <Text style={[styles.subText]}>26th, April, 2023</Text>
            <Text style={[styles.subText]}>
              {artistTimeSLot.start_time} - {artistTimeSLot.end_time}
            </Text>
          </View>
        )}
        <View style={[styles.borderTopBottom, styles.marginVertical10]}>
          {cart &&
            cart?.cart_items.map(data => {
              return <CartItemCard key={data.cart_id} data={data} />;
            })}
        </View>
        <View
          style={[
            styles.paddingHorizontal10,
            styles.flex,
            styles.directionRow,
            styles.justifyBetween,
            styles.alignCenter,
          ]}>
          <Text>Total service charges</Text>
          <Text style={[styles.count]}>Rs {calculateTotalCart(cart.cart_items)}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CartDetailCard;
