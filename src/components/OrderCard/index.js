import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { height, heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
const location = require('../../assets/Path.png');
import MultiButton from '../MultiButton';
import Button from '../Button';

const theme = useTheme();

const OrderCard = ({ order, navigation }) => {
  const activeOrderHandler = () => {
    console.log('clicked', navigation);
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistConfirmOrderRequest',
    });
  };
  const ViewTimelineHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistTimeline',
    });
  };
  const TimelineHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistFinishedTimeline',
    });
  };
  const CancelHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistCancelledTimeline',
    });
  };
  const GroomingDoneHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistGroomingDone',
    });
  };
  return (
    <View>
      <View style={styles.orderContainer}>
        <View
          style={{
            paddingHorizontal: widthToDp(3),
            paddingBottom: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <View>
              <Text style={styles.headingName}>{order.name}</Text>

              <Text style={[styles.textBold, { marginVertical: 3 }]}>SERVICES:</Text>
              {order.services.map((service, serviceIndex) => {
                const maxServicesToShow = 1;

                if (serviceIndex < maxServicesToShow) {
                  return (
                    <Text key={serviceIndex} style={{ color: '#677790', fontFamily: fonts.robo_reg }}>
                      {service}
                    </Text>
                  );
                } else if (serviceIndex === maxServicesToShow) {
                  const remainingServices = order.services.length - maxServicesToShow;
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
              <Text
                style={{
                  color: '#67506D',
                  fontSize: 18,
                  fontFamily: fonts.hk_bold,
                  marginTop: 4,
                }}>
                Rs {order.serviceCost}
              </Text>
            </View>
          </View>
          {order.statusOrder !== 'Cancelled' && (
            <View style={{ marginLeft: 30 }}>
              <View style={styles.orderDetails}>
                <Text
                  style={{
                    color: '#84668C',
                    fontSize: 16,
                    fontFamily: fonts.robo_med,
                  }}>
                  TRAVELLING
                </Text>
                <Image source={order.imageLink} style={styles.OrderImage} />
              </View>
              <Text style={{ color: '#29AAE2', fontFamily: fonts.robo_reg }}>
                3.5 kms <Text style={{ color: '#0F2851' }}>away for you </Text>{' '}
              </Text>
              <Text style={[styles.textBold, { marginTop: 5 }]}>Hosting at:</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Image source={location} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
                <Text
                  style={{
                    color: '#32aee3',
                    fontSize: 14,
                    fontFamily: fonts.robo_reg,
                  }}>
                  {order.salonAddress}
                </Text>
              </View>
            </View>
          )}
          <View>
            {order.statusOrder === 'Cancelled' && (
              <>
                <View style={styles.orderDetails}>
                  <View>
                    <Text style={[styles.textBold, { marginBottom: 5 }]}>Hosting at:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image source={location} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
                      <Text style={{ color: '#32aee3' }}>{order.salonAddress}</Text>
                    </View>
                  </View>
                  <Image source={order.imageLink} style={styles.OrderImage} />
                </View>

                <Text style={styles.orderStatus}>{order.status}</Text>
                <Text
                  style={[
                    styles.subheading,
                    { overflow: 'hidden' }, // Set the height and overflow
                  ]}>
                  {order.cancelReason}{' '}
                </Text>
              </>
            )}
          </View>
        </View>
        {order.statusOrder === 'Active' ? (
          <View>
            <Text
              style={{
                position: 'absolute',
                right: 15,
                fontSize: 14,
                borderRadius: 30,
                bottom: -10,
                textTransform: 'uppercase',
                fontFamily: fonts.robo_bold,
                paddingVertical: 5,
                paddingHorizontal: 8,
                backgroundColor: '#84668C',
                color: 'white',
              }}>
              Active
            </Text>
          </View>
        ) : order.statusOrder === 'New' ? (
          <View style={styles.indicatorView}>
            <View style={styles.row}>
              <MultiButton
                title={'View'}
                btnStyle={{
                  backgroundColor: '#67506D',
                  fontSize: 14,
                  height: heightToDp(10.5),
                }}
                onPress={activeOrderHandler}
              />
              <MultiButton
                title={'Cancel'}
                btnStyle={{
                  backgroundColor: '#EEEEEF',
                  fontSize: 14,
                  height: heightToDp(10.5),
                }}
                titleStyle={{ color: '#67506D' }}
                onPress={CancelHandler}
              />
            </View>
          </View>
        ) : order.statusOrder === 'Completed' ? (
          <View style={styles.indicatorView}>
            <View style={styles.row}>
              <MultiButton
                title={'View Timeline'}
                btnStyle={{
                  backgroundColor: '#67506D',
                  height: heightToDp(10.5),
                }}
                onPress={TimelineHandler}
              />
              <MultiButton
                title={'Rate'}
                btnStyle={{
                  backgroundColor: '#9A9A9A',
                  height: heightToDp(10.5),
                }}
                titleStyle={{ fontFamily: fonts.hk_medium }}
                onPress={GroomingDoneHandler}
              />
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 40,
    marginLeft: widthToDp(4),
    fontFamily: fonts.hk_bold,
  },
  btnContainer: {
    flexDirection: 'row',
    marginHorizontal: widthToDp(5),
    marginVertical: 10,
  },
  btnContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(5),
    marginVertical: 10,
    backgroundColor: 'white',
  },
  tabText: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: theme.primary,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  button: {
    color: '#A77246',
    borderColor: '#A77246',
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 14,
    marginRight: 10,
  },
  orderStatus: {
    backgroundColor: '#668C6A',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: widthToDp(25),
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 5,
  },
  subheading: {
    fontSize: 12,
    color: '#193356',
    marginRight: 10,
    width: widthToDp(30),
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(7),
  },
  orderContainer: {
    backgroundColor: 'white',
    width: width * 0.91,
    marginHorizontal: widthToDp(5),
    marginBottom: 20,
    // width: (width * 0.91) / 2,
    paddingVertical: heightToDp(5),
    paddingHorizontal: widthToDp(1),
    borderRadius: 10,
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OrderImage: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    // marginHorizontal: 10,
  },
  latestbutton: {
    backgroundColor: '#a77246',
    padding: 5,
    color: 'white',
    fontSize: 12,
    textTransform: 'uppercase',
    paddingLeft: widthToDp(3),
    paddingRight: widthToDp(3),
    borderRadius: 50,
  },
  indicatorView: { marginHorizontal: 4, marginTop: heightToDp(3) },
  row: { flexDirection: 'row', alignItems: 'center' },

  headingName: {
    fontSize: 20,
    color: '#0F2851',
    fontFamily: fonts.hk_bold,
    // fontWeight: 'bold',
  },
  textBold: {
    // fontWeight: 'bold',
    color: '#0F2851',
    fontFamily: fonts.robo_med,
  },
});
