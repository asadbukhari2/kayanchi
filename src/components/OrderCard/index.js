import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
const location = require('../../assets/Path.png');
import MultiButton from '../MultiButton';

const host_green = require('../../assets/host_green.png');
const car_brown = require('../../assets/car_brown.png');

const theme = useTheme();

const OrderCard = ({ order, navigation }) => {
  const activeOrderHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistConfirmOrderRequest',
      params: { ...order },
    });
  };
  const viewTimelineHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistTimeline',
      params: { ...order, timlineType: 'active' },
    });
  };

  const TimelineHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      // screen: 'ArtistFinishedTimeline',
      screen: 'ArtistTimeline',
      // screen: 'ArtistCancelledTimeline',
      params: { ...order, timlineType: 'cancelled' },
      // params: { ...order, timlineType: 'finished' },
    });
  };
  const CancelHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistCancelledTimeline',
      params: { ...order, timlineType: 'cancelled' },
    });
  };
  const GroomingDoneHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistGroomingDone',
    });
  };
  return (
    <View style={styles.orderContainer}>
      <View
        style={{
          paddingBottom: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.headingName}>{order.order.consumer.name}</Text>

          <Text style={[styles.textBold, { marginVertical: 3 }]}>SERVICES:</Text>
          {order.order.order_items.map((service, serviceIndex) => {
            const maxServicesToShow = 2;

            if (serviceIndex < maxServicesToShow) {
              return (
                <Text key={serviceIndex} style={{ color: theme.linkTxt, fontFamily: fonts.robo_reg }}>
                  {service.quantity}X {service.service_name}
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
            Rs {order.order.total_service_charges}
          </Text>
        </View>

        {order.order.order_status !== 'Cancelled' && (
          <View>
            {order.order.is_hosting ? (
              <View style={styles.orderDetails}>
                <Text style={{ color: '#0F2851' }}>wants to</Text>
                <Text style={{ color: '#84668C', fontFamily: fonts.robo_med }}>HOST</Text>
                {order.order.order_availibity_status === 'On-Demand' ? (
                  <Image source={car_brown} style={styles.OrderImage} />
                ) : (
                  <Image source={host_green} style={styles.OrderImage} />
                )}
              </View>
            ) : (
              <View style={styles.orderDetails}>
                <Text style={{ color: '#0F2851' }}>wants to</Text>
                <Text style={{ color: '#84668C', fontFamily: fonts.robo_med }}>TRAVEL</Text>
                {order.order.order_availibity_status === 'On-Demand' ? (
                  <Image source={car_brown} style={styles.OrderImage} />
                ) : (
                  <Image source={host_green} style={styles.OrderImage} />
                )}
              </View>
            )}
            {order.order.is_hosting && (
              <Text style={{ color: '#29AAE2', fontFamily: fonts.robo_reg }}>
                {order.distance} kms <Text style={{ color: '#0F2851' }}>away for you </Text>{' '}
              </Text>
            )}
            <Text style={[styles.textBold, { marginTop: 5 }]}>
              {order.order.is_hosting ? 'HOSTING AT:' : 'TRVELLING TO:'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'space-between',
                marginTop: 5,
              }}>
              <Image source={location} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
              <Text
                style={{
                  color: '#32aee3',
                  fontSize: 14,
                  fontFamily: fonts.robo_reg,
                }}>
                {order.default_artist_address.text}
              </Text>
            </View>

            {order.order.order_status === 'Accepted' ? (
              <TouchableOpacity
                onPress={viewTimelineHandler}
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
                <Text>View Timeline</Text>
              </TouchableOpacity>
            ) : order.order.order_status === 'Waiting' ? (
              <View style={styles.indicatorView}>
                <View style={styles.row}>
                  <MultiButton
                    title="View"
                    btnStyle={{
                      backgroundColor: '#67506D',
                      fontSize: 14,
                      height: heightToDp(10.5),
                    }}
                    onPress={activeOrderHandler}
                  />
                  <MultiButton
                    title="Cancel"
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
            ) : order.order.order_status === 'Completed' ? (
              <View style={styles.indicatorView}>
                <View style={styles.row}>
                  <MultiButton
                    title="View Timeline"
                    btnStyle={{
                      backgroundColor: '#67506D',
                      height: heightToDp(10.5),
                    }}
                    onPress={TimelineHandler}
                  />
                  <MultiButton
                    title="Rate"
                    btnStyle={{
                      backgroundColor: '#eee',
                      height: heightToDp(10.5),
                    }}
                    titleStyle={{ fontFamily: fonts.hk_medium, color: theme.dark }}
                    onPress={GroomingDoneHandler}
                  />
                </View>
              </View>
            ) : null}
          </View>
        )}

        {order.order.order_status === 'Cancelled' && (
          <>
            <View style={styles.orderDetails}>
              <View>
                <Text style={[styles.textBold, { marginTop: 5 }]}>
                  {order.order.is_hosting ? 'HOSTING AT:' : 'TRVELLING TO:'}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={location} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
                  <Text style={{ color: '#32aee3' }}>{order.default_artist_address.text}</Text>
                </View>
              </View>
              <Image source={order.imageLink} style={styles.OrderImage} resizeMode="contain" />
            </View>

            <Text style={styles.orderStatus}>{order.order.order_status}</Text>
            <Text style={[styles.subheading, { overflow: 'hidden' }]}>{order.cancelReason} </Text>
          </>
        )}
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
    backgroundColor: '#eee',
    color: theme.dark,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: widthToDp(25),
    textAlign: 'center',
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
    paddingVertical: heightToDp(5),
    paddingHorizontal: widthToDp(1),
    borderRadius: 10,
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  OrderImage: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
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
  indicatorView: { marginHorizontal: 4, marginTop: heightToDp(3), width: '100%', backgroundColor: 'red' },
  row: { flexDirection: 'row', alignItems: 'center' },

  headingName: {
    fontSize: 20,
    color: '#0F2851',
    fontFamily: fonts.hk_bold,
  },
  textBold: {
    color: '#0F2851',
    fontFamily: fonts.robo_med,
  },
});
