import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Header } from '../../components';
import { useTheme } from '../../utils/theme';
import booking from '../../assets/booking.png';
import OrderDetails from './components/OrderDetails';
import { useNavigation } from '@react-navigation/native';

import PaymentMethod from './components/PaymentMethod';
import ConsumerOrderConRejModal from '../ConsumerOrderConRejModal';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../../redux/actions';

const theme = useTheme();
const ConsumerHostCashPayment = () => {
  const navigation = useNavigation();
  const cart = useSelector(state => state.common.cart);
  const consumerOrder = useSelector(state => state.common.consumerOrder);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const token = useSelector(state => state.auth.token);
  const handleOrder = () => {
    if (consumerOrder.consumerMood === 'hosting') {
      const order = {
        is_hosting: true,
        date: moment(Date.now()).format('YYYY-MM-DD'),
        booking_slot_id: consumerOrder.artistTimeSLot.id,
        booking_notes: consumerOrder.note,
      };
      dispatch(postOrder(order, token));
      setIsModalVisible(true);
    }
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <View style={[styles.container]}>
        <Header backBtnGrey />
        <View style={[styles.headingContainer]}>
          <Text style={[styles.heading]}>Payment Method</Text>
        </View>
        <View style={[styles.discountTabContainer]}>
          <View style={[styles.flexContainer]}>
            <View style={[styles.discountTabIconContainer]}>
              <Image style={styles.discountTabIcon} source={booking} />
            </View>
            <Text style={styles.text}>myowndiscount</Text>
          </View>
          <Text style={styles.white}>-Rs 320</Text>
        </View>
        <View>
          <OrderDetails cartItems={cart?.cart_items} />
        </View>
        <View>
          <PaymentMethod />
        </View>
        <View style={[styles.marginTop20]}>
          <Button title={'Place order'} onPress={() => handleOrder()} />
        </View>
      </View>
      <ConsumerOrderConRejModal navigation={navigation} visible={isModalVisible} close={closeModal} />
    </>
  );
};

export default ConsumerHostCashPayment;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headingContainer: {
    marginTop: 3,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 22,
    color: theme.darkBlue,
  },
  discountTabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: theme.purple,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 12,
  },
  discountTabIconContainer: {
    width: 50,
    height: '100%',
  },
  discountTabIcon: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
  marginTop20: {
    marginTop: 20,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  white: {
    color: 'white',
  },
});
