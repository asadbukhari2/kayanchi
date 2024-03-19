import React, { useEffect, useState } from 'react';
import makeStyle from './home.styles';
import { Button } from '../../components';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Insights from './components/Insights';
import Performance from './components/Performance';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import Comission from './components/Comission';
import OrderSummary from './components/orderSummary';
import Earning from './components/Earnings';
import { getGigsOfUser, getCategory, getMyOrders, getLatestOrder } from '../../redux/actions';
import ProfileDetailIcons from './components/ProfileDetailIcons';
import LatestOrders from './components/LatestOrders';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text, TouchableOpacity, ScrollView, Platform, PermissionsAndroid } from 'react-native';
import { getCurrentLocation } from '../../utils/helper';

//images import
const timer = require('../../assets/timer.png');
const information = require('../../assets/information.png');

const ArtistHome = () => {
  const theme = useTheme();
  const styles = makeStyle(theme);
  const auth = useSelector(state => state.auth);
  const { ordersLoading, bookingSlots } = useSelector(state => state.common);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [latestData, setLatestData] = useState(null);

  const dispatch = useDispatch();

  const { name } = auth.user;
  const { profileLoading } = auth;

  const profileLevelCount = auth.profileLevelCount;

  const handleButtonPress = () => {
    navigation.navigate('ArtistGig');
  };

  const handleInfoIconPress = () => {
    navigation.navigate('ArtistRankUp');
  };
  const bookingSlotHandler = () => {
    navigation.navigate('ArtistProfileStack', {
      screen: 'ArtistBookingSlots',
    });
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
            title: 'Location Permission',
            message: 'App needs access to your location',
          });
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getCurrentLocation({ dispatch });
          }
        } catch (err) {
          console.warn(err);
        }
      } else if (Platform.OS === 'ios') {
        getCurrentLocation({ dispatch });
      }
    };

    requestLocationPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getLatestOrder()
      .then(res => {
        setLatestData(res);
        setLoading(false);
      })
      .catch(err => console.log(err));

    dispatch(getGigsOfUser());
    dispatch(getCategory());
    dispatch(getMyOrders());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.userDetails.token]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 90 }}>
        <View style={styles.logoView}>
          <Image source={require('../../assets/KAYNCHI.png')} style={styles.logo} />
        </View>
        <TouchableOpacity style={styles.invite} onPress={() => navigation.navigate('ArtistInviteFriends')}>
          <Text style={styles.text}>Get 15% off</Text>
        </TouchableOpacity>

        <View style={styles.welcome}>
          <View>
            <Text style={styles.welcomeTxt}>Welcome</Text>
            <Text style={styles.welcomeTxt}>{name ? name?.split(' ')[0] : ''}</Text>
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
            {!profileLoading ? (
              <ProfileDetailIcons />
            ) : (
              <View style={{ alignItems: 'center', marginTop: 15 }}>
                <View
                  style={{ width: 150, height: 20, backgroundColor: '#e0e0e0', marginBottom: 10, borderRadius: 2 }}
                />
              </View>
            )}
          </View>
        </View>

        {/* last hosted */}

        {latestData?.last_order && latestData?.next_order ? (
          <View style={styles.hosted}>
            {!loading && <Text style={styles.hostedHeading}>Last hosted at {latestData.last_order.location}</Text>}
            {!loading && (
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 2,
                  fontSize: 14,
                  color: '#0F2851',
                  fontFamily: fonts.robo_light,
                }}>
                {latestData.next_order.consumer?.name} is expecting you at {latestData.next_order.date}
              </Text>
            )}
          </View>
        ) : bookingSlots.length < 1 ? (
          <View style={styles.hosted}>
            <TouchableOpacity onPress={bookingSlotHandler}>
              <Text style={styles.createBookingSlot}>Create Your booking slots</Text>
            </TouchableOpacity>
          </View>
        ) : null}

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
        {ordersLoading ? (
          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
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

              <Text style={{ color: '#32aee3' }}>View all</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {[1, 2].map((_, i) => (
                <View style={{ marginTop: 15 }} key={i}>
                  <View
                    style={{ width: 170, height: 200, backgroundColor: '#e0e0e0', marginBottom: 10, borderRadius: 10 }}
                  />
                </View>
              ))}
            </View>
          </View>
        ) : (
          <LatestOrders />
        )}
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
