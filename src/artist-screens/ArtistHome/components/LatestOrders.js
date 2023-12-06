import React from 'react';
import { View, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import { fonts, useTheme } from '../../../utils/theme';
import makeStyle from '../home.styles';
import { useNavigation } from '@react-navigation/native';
import { heightToDp, widthToDp } from '../../../utils/Dimensions';
import { useSelector } from 'react-redux';
// import { rejectOrder } from '../../../redux/actions';

const location = require('../../../assets/Path.png');
const information = require('../../../assets/information.png');

const host_green = require('../../../assets/host_green.png');
const car_brown = require('../../../assets/car_brown.png');

const LatestOrders = () => {
  const theme = useTheme();
  const styles = makeStyle(theme);
  const navigation = useNavigation();

  const common = useSelector(state => state.common);

  const latest = [...common.waiting.Booking, ...common.waiting['On-Demand']];

  const handleOrder = () => {
    navigation.navigate('ArtistOrder', { screen: 'ArtistOrders' });
  };
  const handleRejectOrder = id => {
    // rejectOrder(id);
  };

  return (
    <View style={styles.latestOrder}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
        }}>
        <Text
          style={{
            color: '#677790',
            fontFamily: fonts.robo_med,
            fontSize: 14,
          }}>
          Your latest orders
        </Text>
        <TouchableOpacity onPress={handleOrder}>
          <Text style={{ color: '#32aee3' }}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={latest}
        keyExtractor={order => order.name}
        horizontal
        renderItem={order => {
          return (
            <View style={styles.orderContainer}>
              <View
                style={{
                  paddingHorizontal: widthToDp(3),
                  paddingBottom: 45,
                  backgroundColor: 'white',
                  paddingTop: heightToDp(3),
                  borderRadius: 15,
                  elevation: 2,
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 1,
                  shadowRadius: 50,
                }}>
                <View>
                  {order.item.order.order_availibity_status === 'On-Demand' ? (
                    <View style={styles.orderDetails}>
                      <Image source={car_brown} style={styles.OrderImage} />
                      <Text style={[styles.latestbutton, { backgroundColor: theme.brown }]}>On-Demand</Text>
                    </View>
                  ) : (
                    <View style={styles.orderDetails}>
                      <Image source={host_green} style={styles.OrderImage} />
                      <Text style={[styles.latestbutton, { backgroundColor: theme.seaGreen }]}>Booking</Text>
                    </View>
                  )}

                  <View>
                    <Text style={styles.headingName}>{order.item.order.consumer.name ?? 'Asad Bukhari'}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: theme.darkModeText, fontFamily: fonts.hk_regular, fontWeight: 'bold' }}>
                        wants to{' '}
                        <Text style={{ color: theme.primary }}>{!order.item.order.is_hosting ? 'TRAVEL' : 'HOST'}</Text>
                      </Text>
                      <Image
                        source={information}
                        style={{
                          height: 20,
                          width: 20,
                          marginLeft: widthToDp(2),
                        }}
                      />
                    </View>
                    <Text
                      style={[
                        {
                          color: '#0F2851',
                          fontFamily: fonts.robo_med,
                        },
                      ]}>
                      Rs {order.item.order.total_service_charges ?? 0}
                    </Text>

                    {order.item.order.order_items.map((_, serviceIndex) => {
                      if (serviceIndex < 1) {
                        return (
                          <Text key={serviceIndex} style={{ color: theme.greyText }}>
                            {_.service_name}
                          </Text>
                        );
                      } else if (serviceIndex === 1) {
                        const remainingServices = order.item.order.order_items.length - 1;
                        return (
                          <TouchableOpacity
                            key={serviceIndex}
                            onPress={() => {
                              console.log('Touchable link pressed!');
                            }}>
                            <Text style={{ color: theme.darkModeText }}>
                              and
                              <Text
                                style={{
                                  color: '#32aee3',
                                }}>{` ${remainingServices} more service(s)`}</Text>
                            </Text>
                          </TouchableOpacity>
                        );
                      }
                      return null;
                    })}
                    {order.item.order.order_availibity_status === 'On-Demand' ? (
                      <>
                        <Text
                          style={[
                            {
                              color: '#0F2851',
                              textTransform: 'uppercase',
                              marginTop: 5,
                              marginBottom: 3,
                              fontFamily: fonts.robo_med,
                            },
                          ]}>
                          Travelling to:
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Image source={location} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
                          {/* <Text style={{ color: '#32aee3', marginLeft: 5 }}>{order.item.salonAddress}</Text> */}
                        </View>
                      </>
                    ) : (
                      <>
                        <Text
                          style={[
                            {
                              color: '#0F2851',
                              textTransform: 'uppercase',
                              marginTop: 5,
                              marginBottom: 3,
                              fontFamily: fonts.robo_med,
                            },
                          ]}>
                          HOSTING AT:
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Image source={location} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
                          {/* <Text style={{ color: '#32aee3', marginLeft: 5 }}>{order.item.salonAddress}</Text> */}
                        </View>
                      </>
                    )}
                    {order.item.order.order_availibity_status === 'On-Demand' ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingBottom: 10,
                        }}>
                        <Text style={[{ color: '#0F2851', fontFamily: fonts.robo_reg }]}>Arriving in: </Text>
                        <Text style={{ color: theme.primary, fontSize: 12 }}>{order.item.order.time_to_reach}</Text>
                      </View>
                    ) : (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingBottom: 10,
                        }}>
                        <Text style={[{ color: '#0F2851', fontFamily: fonts.robo_reg }]}>Due in: </Text>
                        <Text style={{ color: theme.primary, fontSize: 12 }}>{order.item.order.time_to_reach}</Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>

              <View style={styles.buttons}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgba(58, 58, 58, 0.05)',
                    borderBottomLeftRadius: 10,
                    width: '50%',
                    top: -10,
                  }}
                  onPress={() => {
                    // navigation.navigate('ArtistOrderStack', {
                    //   screen: 'ArtistTimeline',
                    //   params: { id: order.item.order.id, order: order.item.order },
                    // });
                    navigation.navigate('ArtistOrderStack', {
                      screen: 'ArtistConfirmOrderRequest',
                      params: order.item,
                    });
                  }}>
                  <Text style={[styles.buttonText]}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleRejectOrder(order.item.order.id)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderBottomRightRadius: 10,
                    width: '50%',
                    top: -10,
                  }}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default LatestOrders;
