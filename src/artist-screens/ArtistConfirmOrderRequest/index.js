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
import CircularProgressBar from '../../components/CircularProgressBar';
import MultiButton from '../../components/MultiButton';
import MapView from 'react-native-maps';

const theme = useTheme();
const DATA = [
  {
    title: 'Millineum Mall',
    description: 'this is millineum mall karachi',
    lat: 24.9012,
    long: 67.1155,
    img: require('../../assets/logo2.png'),
  },
];

export default function ArtistConfirmOrderRequest(props) {
  const [isPrivate, setIsPrivate] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const order = props.route.params;

  console.log(order);
  const CancelHandler = () => {
    props.navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistCancelledTimeline',
    });
  };
  const map_style = [
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
  ];

  const handleTimePress = time => {
    setSelectedTime(time);
  };

  const getTimeStyles = time => {
    console.log(time, selectedTime);
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

  const handleAcceptOrder = () => {
    const data = { free_travel: isPrivate, timeToReach: selectedTime };
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header backBtn />
        <View>
          <MapView
            initialRegion={{
              latitude: 24.8607,
              longitude: 67.0011,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{ height: heightToDp(50) }} // Set a fixed height
            customMapStyle={map_style}>
            {DATA.map((item, index) => {
              return (
                <MapView.Marker
                  key={index}
                  coordinate={{ latitude: item.lat, longitude: item.long }}
                  title={item.title}
                  description={item.description}
                  image={item.img}>
                  {/* <MapView.Callout
                    tooltip
                    onPress={() => setModalVisible(true)}
                  /> */}
                </MapView.Marker>
              );
            })}
          </MapView>
        </View>
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
            {order.order.is_hosting ? (
              <Text style={{ color: '#84668C', fontFamily: fonts.robo_med }}>wants to HOST at his location</Text>
            ) : (
              <Text style={{ color: '#84668C', fontFamily: fonts.robo_med }}>wants to TRAVEL to you</Text>
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
            <Text style={{ color: '#67718C', fontSize: 14 }}>{order.order.booking_slot.day}</Text>
            <Text style={{ color: '#67718C', fontSize: 14 }}>
              {order.order.booking_slot.start_time}-{order.order.booking_slot.end_time}
            </Text>
          </View>
          {/* <CircularProgressBar
            progress={70}
            radius={40}
            strokeWidth={3}
            color="#84668C"
            textStyle={{ fontSize: 20, fill: '#29AAE2' }}
          /> */}
        </View>

        <View style={styles.timeContainer}>
          <View>
            <Text style={{ fontSize: 12, color: '#67718C' }}>Travel Cost</Text>
            <Text style={{ color: '#84668C', fontWeight: '400' }}>Rs {order.order.travel_cost}</Text>
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
              {_.quantity}x {_.service_name}
            </Text>
          ))}

          <View style={{ marginRight: 10 }}>
            <Text style={{ color: '#1583D8', fontSize: 12 }}>Total amount inc vat</Text>
            <Text style={{ color: '#84668C', fontSize: 24 }}>RS {order.order.total_service_charges}</Text>
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
              title={'Accept'}
              btnStyle={{ backgroundColor: '#67506D', height: heightToDp(10) }}
              onPress={handleAcceptOrder}
            />
            <MultiButton
              title={'Cancel'}
              btnStyle={{ backgroundColor: '#9A9A9A', height: heightToDp(10) }}
              onPress={CancelHandler}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  orderContainer: {
    backgroundColor: 'white',
    marginHorizontal: widthToDp(4),
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  map: {
    flex: 1,
  },
  bookingNotes: {
    backgroundColor: 'white',
    marginHorizontal: widthToDp(4),
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  timeContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(4),
    marginVertical: heightToDp(3),
  },
  time: {
    backgroundColor: '#E6E6E6',
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: '#67718C',
    // fontWeight: '500',
    fontFamily: fonts.robo_med,
    borderRadius: 10,
  },
  timereach: {
    // fontWeight: '500',
    fontFamily: fonts.robo_med,
    color: '#0F2851',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  circularbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: widthToDp(4),
    justifyContent: 'space-between',
    marginTop: 10,
  },
  userLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: widthToDp(4),
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: widthToDp(4),
    marginTop: 15,
  },
  indicatorView: {
    marginHorizontal: widthToDp(5),
    marginTop: heightToDp(3),
    marginBottom: 15,
  },
  row: { flexDirection: 'row', alignItems: 'center' },

  starIcon: {
    fontSize: heightToDp(4.7),
    color: theme.yellow,
    paddingHorizontal: 5,
  },
  hosting: {
    color: '#0F2851',
    fontSize: 16,
    fontFamily: fonts.robo_med,
    // fontWeight: '500',
    marginHorizontal: widthToDp(4),
    marginVertical: 10,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: widthToDp(4),
  },
  locationContainer: {
    flexDirection: 'column',
    marginHorizontal: widthToDp(4),
    justifyContent: 'space-between',
  },
  heading: {
    color: '#193356',
    fontSize: 32,
    fontFamily: fonts.hk_bold,
  },
  images: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
  imagesLoc: {
    width: 10,
    height: 12,
    resizeMode: 'contain',
  },
  subheading: {
    color: '#333333',
    fontSize: 13,
    paddingHorizontal: 5,
  },
  subheading2: {
    color: '#9A9A9A',
    fontSize: 13,
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
