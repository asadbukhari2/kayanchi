import React, { useEffect } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import Insights from './components/Insights';
import Performance from './components/Performance';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import Comission from './components/Comission';
import OrderSummary from './components/orderSummary';
import Earning from './components/Earnings';
import { getMyProfile, getGigsOfUser, getCategory } from '../../redux/actions';
import makeStyle from './home.styles';

//images import
const timer = require('../../assets/timer.png');
const carBrown = require('../../assets/car_brown.png');
const location = require('../../assets/Path.png');
const information = require('../../assets/information.png');

const host_green = require('../../assets/host_green.png');

const orders = [
  {
    name: 'John Doe',
    serviceCost: 30000,
    services: ['Foot Massage', 'Haircut', 'Manicure'],
    salonAddress: 'Your salon address',
    arrivalTime: '50 - 60 mins',
    imageLink: carBrown,
    status: 'wants to TRAVEL',
  },
  {
    name: 'Jane Smith',
    serviceCost: 25000,
    services: ['Facial', 'Pedicure'],
    salonAddress: 'Your salon address',
    arrivalTime: '30 - 40 mins',
    imageLink: host_green,
    status: 'wants to HOST',
  },
];

const ArtistHome = props => {
  const theme = useTheme();
  const styles = makeStyle(theme);
  const auth = useSelector(state => state.auth);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { name } = auth.user;
  const { hosting_mood, travel_mood, availability_status } = auth.profile;

  const profileLevelCount = auth.profileLevelCount;

  const handleOrder = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistOrders',
    });
  };
  const handleButtonPress = () => {
    navigation.navigate('ArtistGig');
  };

  const handleInfoIconPress = () => {
    navigation.navigate('ArtistRankUp');
  };

  useEffect(() => {
    dispatch(getGigsOfUser());
    dispatch(getCategory());
    dispatch(getMyProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.userDetails.token]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 90 }}>
        <View style={styles.logoView}>
          <Image source={require('../../assets/KAYNCHI.png')} style={styles.logo} />
        </View>
        <TouchableOpacity
          style={styles.invite}
          onPress={() => {
            navigation.navigate('ArtistInviteFriends');
          }}>
          <Text style={styles.text}>Get 15% off</Text>
        </TouchableOpacity>
        {/* welcome text and icons */}
        <View style={styles.welcome}>
          <View>
            <Text style={styles.welcomeTxt}>Welcome</Text>
            <Text style={styles.welcomeTxt}>{name}</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../assets/Status.png')}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  marginRight: 5,
                  marginLeft: 10,
                }}
              />
              <Text
                style={{
                  color: '#84668C',
                  fontFamily: fonts.hk_medium,
                }}>
                Your Status
              </Text>
            </View>
            <View style={styles.icons}>
              <View style={[styles.iconConatiner, { backgroundColor: hosting_mood ? theme.linkTxt : '#ebebeb' }]}>
                <Image
                  source={hosting_mood ? require('../../assets/host.png') : require('../../assets/host_grey.png')}
                  style={styles.iconStyle}
                />
              </View>
              <View style={[styles.iconConatiner, { backgroundColor: travel_mood ? theme.linkTxt : '#ebebeb' }]}>
                <Image
                  source={travel_mood ? require('../../assets/car.png') : require('../../assets/car-grey.png')}
                  style={styles.iconStyle}
                />
              </View>
              {availability_status &&
                availability_status.length > 0 &&
                availability_status?.map(_ => (
                  <View
                    key={_}
                    style={[
                      styles.iconConatiner,
                      { backgroundColor: _ === 'on_demand' ? theme.brown : theme.seaGreen },
                    ]}>
                    <Image
                      source={
                        _ === 'on_demand' ? require('../../assets/ondemand.png') : require('../../assets/booking.png')
                      }
                      style={styles.iconStyle}
                    />
                  </View>
                ))}
            </View>
          </View>
        </View>

        {/* last hosted */}

        <View style={styles.hosted}>
          <Text style={styles.hostedHeading}>Last hosted at North Nazimabad</Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 2,
              fontSize: 14,
              color: '#0F2851',
              fontFamily: fonts.robo_light,
            }}>
            Amjad is expecting you at 10:30AM
          </Text>
        </View>

        {/* create a gig button */}

        <LinearGradient
          colors={['#84668C', '#42275A']} // Define the gradient colors
          style={{ borderRadius: 25, marginHorizontal: widthToDp(5) }}>
          <Button
            title="Create a new gig"
            btnStyle={{ backgroundColor: 'transparent' }} // Use a transparent background for the button
            image={timer}
            imageStyle={styles.buttonicon}
            onPress={handleButtonPress}
          />
        </LinearGradient>

        {/* latest Order */}

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
            data={orders}
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
                      <View style={styles.orderDetails}>
                        <Image source={order.item.imageLink} style={styles.OrderImage} />
                        <Text style={styles.latestbutton}>On-Demand</Text>
                      </View>
                      <View>
                        <Text style={[styles.headingName, { marginTop: 7, marginBottom: 3 }]}>{order.item.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ color: theme.darkModeText, fontFamily: fonts.hk_regular }}>
                            {order.item.status}
                          </Text>
                          <Image
                            source={information}
                            style={{
                              height: 15,
                              width: 15,
                              marginLeft: widthToDp(2),
                            }}
                          />
                        </View>
                        <Text
                          style={[
                            {
                              // marginVertical: 5,
                              color: '#0F2851',
                              fontFamily: fonts.robo_med,
                            },
                          ]}>
                          SERVICES: Rs {order.item.serviceCost}
                        </Text>

                        {order.item.services.map((_, serviceIndex) => {
                          if (serviceIndex < 1) {
                            return (
                              <Text key={serviceIndex} style={{ color: theme.greyText }}>
                                {_}
                              </Text>
                            );
                          } else if (serviceIndex === 1) {
                            const remainingServices = order.item.services.length - 1;
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
                          return null; // If more than the maximum services are shown, don't render them
                        })}
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
                          <Text style={{ color: '#32aee3', marginLeft: 5 }}>{order.item.salonAddress}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            // justifyContent: 'center',
                            alignItems: 'center',
                            paddingBottom: 10,
                          }}>
                          <Text style={[{ color: '#0F2851', fontFamily: fonts.robo_reg }]}>Arriving in: </Text>
                          <Text style={{ color: theme.primary, fontSize: 12 }}>{order.item.arrivalTime}</Text>
                        </View>
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
                      onPress={() =>
                        props.navigation.navigate('ArtistOrderStack', {
                          screen: 'ArtistTimeline',
                        })
                      }>
                      <Text style={[styles.buttonText]}>View</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
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

        {/* order summary */}
        <OrderSummary />

        {/* Rank up */}

        <View style={{ marginLeft: widthToDp(5), marginTop: heightToDp(5) }}>
          <TouchableOpacity onPress={handleInfoIconPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.heading}>Grow your Rank</Text>
              <Image source={information} style={{ height: 20, width: 20, marginLeft: 8 }} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontFamily: fonts.hk_bold,
              color: '#2F3A58',
              marginTop: 10,
              marginBottom: 5,
            }}>
            Next evaluation
            <Text
              style={{
                fontFamily: fonts.hk_regular,
                fontSize: 14,
                color: '#2F3A58',
              }}>
              {' (25th Jul 2023)'}
            </Text>
          </Text>
          <Text style={{ color: '#333333', fontFamily: fonts.robo_reg }}>(Approaching in 12 days)</Text>
        </View>
        {/* slider */}
        <View
          style={{
            marginHorizontal: widthToDp(5),
            marginVertical: heightToDp(2),
          }}>
          <Progress.Bar
            progress={profileLevelCount}
            height={10}
            width={widthToDp(90)}
            color={'#29AAE2'}
            unfilledColor={'#EDEDED'}
            borderRadius={20}
            borderWidth={0}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text
              style={{
                fontSize: 14,
                color: '#84668C',
                fontFamily: fonts.hk_regular,
              }}>
              New
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#84668C',
                fontFamily: fonts.hk_bold,
              }}>
              Expert
            </Text>
          </View>
        </View>

        {/* Performance */}

        <View>
          <Text
            style={{
              marginLeft: widthToDp(5),
              color: '#677790',
              fontFamily: fonts.robo_med,
              marginTop: 10,
            }}>
            Your Performance metrices
          </Text>
          <Performance />
        </View>

        {/* Earning */}
        <Earning />
        {/* Insights */}
        <Insights />

        <Comission />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistHome;
