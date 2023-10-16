import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Button} from '../../components';
import {height, heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {useTheme, fonts} from '../../utils/theme';
const carBrown = require('../../assets/car_brown.png');
const location = require('../../assets/Path.png');
import FinishedOrderStep from '../../components/FinishedOrderStep';

const theme = useTheme();
const data = [
  {
    title: 'Order request accept',
    body: 'Today',
    text: '7:30-8:30',
  },
  {
    title: 'Reached',
    body: 'Today',
    text: '7:30-8:30',
  },
  {
    title: 'Grooming Started',
    body: '2 july 2023',
    text: '7:30-8:30',
  },
  {
    title: 'Grooming Done',
    body: '2 july 2023',
    text: '7:30-8:30',
  },
  {
    title: 'Your client has given you a tip',
    body: '2 july 2023',
    text: '7:30-8:30',
  },
  {
    title: 'Clients Review',
    body: '2 july 2023',
    text: '7:30-8:30',
  },
];
const orders = [
  {
    name: 'John Doe',
    serviceCost: 30000,
    services: ['3x Foot Massage', 'Haircut', 'Manicure'],
    salonAddress: '123 Salon Street, Cityville',
    arrivalTime: '50-60 mins',
    imageLink: carBrown,
    status: 'wants to TRAVEL',
  },
];
const ArtistFinishedTimeline = props => {
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: widthToDp(5),
            width: widthToDp(90),
          }}>
          {/* <Image source={back} /> */}
          <View style={{marginLeft: 0}}>
            <Header
              backBtn
              title="help?"
              titleStyle={{
                position: 'absolute',
                right: 0,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#84668C',
                fontSize: 14,
                color: '#84668C',
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
            />
          </View>
        </View>

        <View>
          <Text style={styles.heading}>Timeline </Text>
        </View>

        <View>
          {orders.map((order, index) => (
            <View key={index} style={styles.orderContainer}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('ArtistProfileStack', {
                    screen: 'ArtistWhyCancel',
                  })
                }>
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

                      <Text
                        style={{
                          fontFamily: fonts.robo_med,
                          color: '#0F2851',
                          marginVertical: 5,
                        }}>
                        SERVICES:
                      </Text>
                      {order.services.map((service, serviceIndex) => {
                        const maxServicesToShow = 1;

                        if (serviceIndex < maxServicesToShow) {
                          return <Text key={serviceIndex}>{service}</Text>;
                        } else if (serviceIndex === maxServicesToShow) {
                          const remainingServices =
                            order.services.length - maxServicesToShow;
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
                          color: '#84668C',
                          fontSize: 18,
                          fontFamily: fonts.hk_bold,
                          marginTop: 5,
                        }}>
                        Rs {order.serviceCost}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <View style={styles.orderDetails}>
                      <Text
                        style={{color: '#84668C', fontFamily: fonts.robo_med}}>
                        HOSTING
                      </Text>
                      <Image
                        source={order.imageLink}
                        style={styles.OrderImage}
                      />
                    </View>
                    <Text style={{color: '#29AAE2'}}>
                      3.5 kms{' '}
                      <Text style={{color: '#0F2851'}}>away for you </Text>{' '}
                    </Text>
                    <Text
                      style={{
                        color: '#0F2851',
                        fontFamily: fonts.robo_med,
                        marginVertical: 5,
                        textTransform:"uppercase"
                      }}>
                      Hosting at:
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={location}
                        style={{height: 15, width: 15, resizeMode: 'contain'}}
                      />
                      <Text style={{color: '#32aee3'}}>
                        {order.salonAddress}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.separator}></View>

        <FinishedOrderStep data={data} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistFinishedTimeline;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 40,
    marginLeft: widthToDp(4),
    fontFamily: fonts.hk_bold
  },
  textCenter: {
    color: '#67718C',
    textAlign: 'center',
    marginHorizontal: widthToDp(12),
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(7),
  },
  stepIndicatorContainer: {
    marginVertical: 20,
    paddingHorizontal: widthToDp(5),
    flexDirection: 'column', // Display the steps in a column layout
  },
  progressStepContainer: {
    alignItems: 'center',
  },
  stepContent: {
    alignItems: 'center',
    marginTop: 20,
  },
  orderContainer: {
    backgroundColor: 'white',
    // width: widthToDp(44),
    marginHorizontal: widthToDp(5),
    marginTop: 20,
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
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },
  indicatorView: {
    marginHorizontal: 24,
    marginTop: heightToDp(6),
    marginBottom: 20,
  },
  row: {flexDirection: 'row', alignItems: 'center'},

  headingName: {
    fontSize: 20,
    fontFamily: fonts.hk_bold,
    color: '#0F2851',
  },
  textBold: {
    fontWeight: 'bold',
  },
});
