import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { heightToDp, widthToDp } from '../utils/Dimensions';
import { fonts } from '../utils/theme';

const host_green = require('../assets/host_green.png');
const car_brown = require('../assets/car_brown.png');
const location = require('../assets/Path.png');

const SimpleOrderCard = ({ order, onPress = () => {}, type, section }) => {
  return (
    <View style={styles.orderContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <View>
            <Text style={styles.headingName}>{order?.order?.consumer?.name}</Text>

            <Text style={[styles.textBold, { marginVertical: 5 }]}>SERVICES:</Text>
            {order?.order?.order_items.map((service, serviceIndex) => {
              const maxServicesToShow = 2;

              if (serviceIndex < maxServicesToShow) {
                return (
                  <Text style={{ color: '#32aee3' }} key={serviceIndex}>
                    {service.quantity}X {service.service_name}
                  </Text>
                );
              } else if (serviceIndex === maxServicesToShow) {
                const remainingServices = order.order.order_items.length - maxServicesToShow;
                return (
                  <TouchableOpacity
                    key={serviceIndex}
                    onPress={() => {
                      console.log('Touchable link pressed!');
                    }}>
                    <Text
                      style={{
                        color: '#32aee3',
                        fontSize: 12,
                      }}>{`${remainingServices} more service(s)`}</Text>
                  </TouchableOpacity>
                );
              }
              return null;
            })}
            <Text style={{ color: '#84668C', fontFamily: fonts.hk_bold, fontSize: 18 }}>
              Rs {order?.order?.total_service_charges}
            </Text>
          </View>

          {type !== 'cancelled' ? (
            <View>
              <View style={styles.orderDetails}>
                <Text style={{ color: '#84668C', fontFamily: fonts.robo_med }}>
                  {order.order.is_hosting ? 'Is HOSTING' : 'Is TRAVELLING'}
                </Text>
                {order.order.order_availibity_status === 'On-Demand' ? (
                  <Image source={car_brown} style={styles.OrderImage} />
                ) : (
                  <Image source={host_green} style={styles.OrderImage} />
                )}
              </View>

              <Text style={{ color: '#29AAE2' }}>
                3.5 kms <Text style={{ color: '#0F2851' }}>away for you </Text>
              </Text>
              <Text style={[styles.textBold, { textTransform: 'uppercase', marginTop: 5, marginBottom: 3 }]}>
                {order.order.is_hosting ? 'HOSTING AT:' : 'TRVELLING TO:'}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={location} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
                <Text style={{ color: '#32aee3' }}>{order?.hostingspot?.name}</Text>
              </View>
            </View>
          ) : (
            <View>
              {order.order.order_availibity_status === 'On-Demand' ? (
                <Image source={car_brown} style={styles.OrderImage} />
              ) : (
                <Image source={host_green} style={styles.OrderImage} />
              )}
              <Text style={[styles.textBold, { textTransform: 'uppercase', marginRight: 10 }]}>
                {order.order.is_hosting ? 'HOSTING AT:' : 'TRVELLING TO:'}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={location} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
                <Text style={{ color: '#32aee3' }}>{order?.hostingspot?.name}</Text>
              </View>
              <Text
                style={{
                  color: '#ACACAC',
                  backgroundColor: '#E9E9E9',
                  borderRadius: 20,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  width: widthToDp(30),
                  textAlign: 'center',
                  marginTop: heightToDp(2),
                  fontFamily: fonts.sans_bold,
                }}>
                Cancelled
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      {section && section}
    </View>
  );
};

export default SimpleOrderCard;

const styles = StyleSheet.create({
  orderContainer: {
    backgroundColor: 'white',
    marginHorizontal: widthToDp(5),
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: heightToDp(5),
    paddingHorizontal: widthToDp(1),
    borderRadius: 10,
  },

  container: {
    paddingHorizontal: widthToDp(3),
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  OrderImage: {
    height: 30,
    width: 30,
    marginBottom: 5,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },

  headingName: {
    fontSize: 20,
    color: '#0F2851',
    fontFamily: fonts.hk_bold,
  },
  textBold: {
    color: '#0F2851',
    fontFamily: fonts.robo_med,
  },
  indicatorView: { marginHorizontal: 4, marginTop: heightToDp(3), width: '100%' },
  row: { flexDirection: 'row', alignItems: 'center' },
});
