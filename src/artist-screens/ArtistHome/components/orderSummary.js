/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { heightToDp, widthToDp } from '../../../utils/Dimensions';
import { fonts, useTheme } from '../../../utils/theme';

import { GET_ORDERS_SUMMARY } from '../../../redux/actions/homeAction';
import { useSelector } from 'react-redux';

const pending = require('../../../assets/pending.png');
const completed = require('../../../assets/completed.png');
const confirmed = require('../../../assets/confirmed.png');

const theme = useTheme();

const OrderSummary = React.memo(() => {
  const [loading, setLoading] = useState(true);
  const [orderSummary, setOrderSummary] = useState([]);

  const user = useSelector(state => state.auth.user);

  const fetchOrdersSummary = async () => {
    setLoading(true);
    const res = await GET_ORDERS_SUMMARY(user.id);

    const summary = [
      {
        bookingCount: res.pending,
        status: 'Bookings Pending',
        imageSource: pending,
      },
      {
        bookingCount: res.confirmed,
        status: 'Bookings Confirmed',
        imageSource: confirmed,
      },
      {
        bookingCount: res.completed,
        status: 'Bookings Completed',
        imageSource: completed,
      },
    ];
    setOrderSummary(summary);

    setLoading(false);
  };

  useEffect(() => {
    fetchOrdersSummary();
  }, []);

  return (
    <View>
      <Text
        style={{
          marginLeft: widthToDp(5),
          color: '#677790',
          fontFamily: fonts.robo_med,
          marginTop: widthToDp(2),
          marginBottom: 5,
        }}>
        Order Summary
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: widthToDp(3),
          marginVertical: 4,
        }}>
        {loading ? (
          <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
            <Text
              style={{
                color: '#0F2851',
                fontFamily: fonts.hk_medium,
              }}>
              Loading...
            </Text>
          </View>
        ) : (
          orderSummary?.map(item => (
            <View style={styles.OrderSummaryContainer} key={item.status}>
              <Text style={styles.bookingCount}>{item.bookingCount}</Text>
              <Text
                style={{
                  color: '#677790',
                  fontSize: 14,
                  fontFamily: fonts.robo_reg,
                }}>
                {item.status}
              </Text>
              <Image source={item.imageSource} style={styles.orderSummaryImage} />
            </View>
          ))
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  OrderSummaryContainer: {
    borderRadius: 20,
    paddingTop: heightToDp(8),
    paddingBottom: heightToDp(3),
    backgroundColor: 'white',
    marginHorizontal: widthToDp(1),
    paddingHorizontal: widthToDp(3),
    width: widthToDp(29.4),
  },
  bookingCount: {
    fontSize: 27,
    color: theme.darkModeText,
    fontFamily: fonts.hk_bold,
  },
  orderSummaryImage: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 8,
    top: 8,
    resizeMode: 'contain',
  },
});

export default OrderSummary;
