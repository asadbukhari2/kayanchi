import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { fonts, useTheme } from '../../utils/theme';

import ToggleSwitch from 'toggle-switch-react-native';

const host_green = require('../../assets/host_green.png');
const car_brown = require('../../assets/car_brown.png');
import location from '../../assets/location.png';
import MultiButton from '../../components/MultiButton';

import { acceptOrder, rejectOrder, updateLatAndLonOrder } from '../../redux/actions';
import { showMessage } from 'react-native-flash-message';
import Map from '../../components/MapView';
import makeStyle from './artistConfirmOrderRequest.style';
import { useDispatch, useSelector } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

const theme = useTheme();

export default function ArtistConfirmOrderRequest(props) {
  const [isPrivate, setIsPrivate] = useState(false);
  const auth = useSelector(state => state.auth);
  const [userLocation, setUserLocation] = useState(null);
  const dispatch = useDispatch();
  const [selectedTime, setSelectedTime] = useState(null);
  const styles = makeStyle(theme);
  const order = props.route.params;
  console.log('this is the order', order);
  const CancelHandler = () => {
    rejectOrder(order.order.id)
      .then(res => {
        console.log('res', res);
        showMessage({ message: 'Order Cancelled', type: 'success' });
        props.navigation.navigate('ArtistOrders');
      })
      .catch(err => console.log(err));
  };

  const handleTimePress = time => {
    setSelectedTime(time);
  };

  const getTimeStyles = time => {
    if (time === selectedTime) {
      return {
        color: 'white',
        backgroundColor: '#84668C',
      };
    }
    return {
      backgroundColor: '#E6E6E6',
      color: '#67718C',
    };
  };
  const getUserLonAndLat = () => {
    Geolocation.getCurrentPosition(
      position => {
        // console.log(position);
        const { latitude, longitude } = position.coords;
        console.log('lon and lat ', longitude, latitude);
        setUserLocation({ latitude, longitude });
      },
      error => console.log('Error getting location:', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  };

  const handleAcceptOrder = () => {
    const data = { free_travel: isPrivate, timeToReach: selectedTime };

    if (!selectedTime) {
      showMessage({ message: 'Data Must not be empty', type: 'warning' });
    } else {
      acceptOrder(order.order.id, data)
        .then(res => {
          console.log('res', res);
          showMessage({ message: 'Order Accepted', type: 'success' });
          console.log('order.order.id', order.order.id);
          // setInterval(() => {
          getUserLonAndLat();
          //   dispatch(updateLatAndLonOrder(order.order.id, userLocation, auth.token));
          // }, 2000);
          props.navigation.navigate('ArtistOrders');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header backBtn />
        <View>{/* <Map /> */}</View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{order.order.consumer.name}</Text>
          <View>
            <AntDesign name={'star'} style={styles.starIcon} />
          </View>
          <Text style={styles.subheading}>{order.consumer_rating}</Text>
          <Text style={styles.subheading2}>{`(${order.rating_count})`}</Text>
        </View>

        <View style={styles.locationContainer}>
          {order.order.is_hosting && (
            <Text style={{ color: '#1583D8', fontFamily: fonts.robo_reg }}>
              3.5kms <Text style={{ color: '#67718C' }}>away from you</Text>
            </Text>
          )}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            {!order.order.is_hosting ? (
              <Text style={{ color: '#84668C', fontFamily: fonts.robo_med }}>wants to TRAVEL to you</Text>
            ) : (
              <Text style={{ color: '#84668C', fontFamily: fonts.robo_med }}>wants to HOST at his location</Text>
            )}

            {order.order.order_availibity_status === 'On-Demand' ? (
              <Image source={car_brown} style={styles.images} />
            ) : (
              <Image source={host_green} style={styles.images} />
            )}
          </View>
        </View>
        <View>
          <Text style={styles.hosting}> {order.order.is_hosting ? 'HOSTING AT:' : 'TRVELLING TO:'}</Text>
        </View>
        <View style={styles.userLocation}>
          <Image source={location} style={styles.imagesLoc} />
          <Text
            style={{
              color: '#1583D8',
              paddingHorizontal: 5,
              marginRight: widthToDp(24),
            }}>
            House B91, Lane 4, building 14-C main nishat commercial, DHA
          </Text>
        </View>
        <View style={styles.circularbar}>
          <View>
            <Text style={{ color: '#67718C', fontSize: 14 }}>{order?.order?.booking_slot?.day}</Text>
            <Text style={{ color: '#67718C', fontSize: 14 }}>
              {order?.order?.booking_slot?.start_time}-{order?.order?.booking_slot?.end_time}
            </Text>
          </View>
        </View>

        <View style={styles.timeContainer}>
          <View>
            <Text style={{ fontSize: 12, color: '#67718C' }}>Travel Cost</Text>
            <Text style={{ color: '#84668C', fontWeight: '400' }}>Rs {Number(order.order.travel_cost).toFixed(2)}</Text>
          </View>
          <Text style={{ color: theme.greyText }}>Offer free travel</Text>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <View style={styles.switchContainer}>
              <ToggleSwitch
                isOn={isPrivate}
                style={{ height: 20, marginRight: 10 }}
                value={isPrivate}
                onColor="#84668C"
                offColor="#9A9A9A"
                size="small"
                onToggle={isOn => setIsPrivate(isOn)}
              />
            </View>
          </View>
        </View>

        <View style={styles.orderContainer}>
          {order.order.order_items.map(_ => (
            <Text
              key={_.service_name}
              style={{
                color: '#2F3A58',
                fontSize: 20,
                fontFamily: fonts.hk_bold,
              }}>
              {_.quantity}x {_.service_name} {'\n'}
            </Text>
          ))}

          <View style={{ marginRight: 10 }}>
            <Text style={{ color: '#1583D8', fontSize: 12 }}>Total amount inc vat</Text>
            <Text style={{ color: '#84668C', fontSize: 24 }}>RS {order.order.total_service_charges?.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.timeContainer2}>
          <Text style={styles.timereach}>Time to reach</Text>
          <TouchableOpacity onPress={() => handleTimePress('20')} style={[styles.time, getTimeStyles('20')]}>
            <Text style={{ color: getTimeStyles('20').color }}>20m</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTimePress('40')} style={[styles.time, getTimeStyles('40')]}>
            <Text style={{ color: getTimeStyles('40').color }}>40m</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTimePress('60')} style={[styles.time, getTimeStyles('60')]}>
            <Text style={{ color: getTimeStyles('60').color }}>60m</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bookingNotes}>
          <Text style={{ color: '#67718C', fontFamily: fonts.hk_bold }}>BOOKING NOTES:</Text>
          <Text style={{ color: '#67718C', fontFamily: fonts.robo_reg }}>{order.order.booking_notes}</Text>
        </View>
        <View style={styles.indicatorView}>
          <View style={styles.row}>
            <MultiButton
              disable={!selectedTime}
              title="Accept"
              btnStyle={{ backgroundColor: '#67506D', height: heightToDp(10) }}
              onPress={handleAcceptOrder}
            />
            <MultiButton
              title="Cancel"
              btnStyle={{ backgroundColor: '#9A9A9A', height: heightToDp(10) }}
              onPress={CancelHandler}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
