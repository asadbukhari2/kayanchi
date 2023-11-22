import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Switch, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { height, heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
import back from '../../assets/back.png';
const carBrown = require('../../assets/car_brown.png');
const host_green = require('../../assets/host_green.png');
const information = require('../../assets/information.png');
const location = require('../../assets/Path.png');

const theme = useTheme();

const orders = [
  {
    name: 'John Doe',
    serviceCost: 30000,
    services: ['3x Foot Massage', 'Haircut', 'Manicure'],
    salonAddress: 'North Nazimabad',
    arrivalTime: '50-60 mins',
    imageLink: carBrown,
    status: 'wants to TRAVEL',
  },
  {
    name: 'Jane Smith',
    serviceCost: 25000,
    services: ['1x Facial', 'Pedicure'],
    salonAddress: 'North Nazimabad',
    arrivalTime: '30-40 mins',
    imageLink: host_green,
    status: 'wants to HOST',
  },
];
const ArtistCancelOrder = props => {
  const [name, setName] = useState('');

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
          <View style={{ marginLeft: 0 }}>
            <Header backBtn />
          </View>
        </View>

        <View>
          <Text style={styles.heading}>Select Order </Text>
        </View>
        <Text style={{ marginLeft: widthToDp(5), marginBottom: 10, color: theme.greyText }}>
          {"It's very sad  that you have cancel :("}
        </Text>

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
                          color: '#0F2851',
                          fontFamily: fonts.robo_med,
                          marginVertical: 5,
                        }}>
                        SERVICES:
                      </Text>
                      {order.services.map((service, serviceIndex) => {
                        const maxServicesToShow = 1;

                        if (serviceIndex < maxServicesToShow) {
                          return (
                            <Text key={serviceIndex} style={{ color: theme.greyText }}>
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
                          color: '#84668C',
                          fontFamily: fonts.hk_bold,
                          fontSize: 18,
                        }}>
                        Rs {order.serviceCost}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <View style={styles.orderDetails}>
                      <Text
                        style={{
                          color: '#84668C',
                          fontFamily: fonts.robo_med,
                          marginRight: widthToDp(15),
                        }}>
                        TRAVELLING
                      </Text>
                      <Image source={order.imageLink} style={styles.OrderImage} />
                    </View>
                    <Text style={{ color: '#29AAE2', marginVertical: 3 }}>
                      3.5 kms <Text style={{ color: '#0F2851' }}>away for you </Text>{' '}
                    </Text>
                    <Text
                      style={{
                        color: '#0F2851',
                        marginVertical: 4,
                        fontFamily: fonts.robo_bold,
                        textTransform: 'uppercase',
                      }}>
                      Hosting at:
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image source={location} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
                      <Text style={{ color: '#32aee3' }}>{order.salonAddress}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistCancelOrder;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 40,
    marginLeft: widthToDp(4),
    fontFamily: fonts.hk_bold,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(7),
  },
  orderContainer: {
    backgroundColor: 'white',
    // width: widthToDp(44),
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
  headingName: {
    fontSize: 20,
    fontFamily: fonts.hk_bold,
    color: '#0F2851',
  },
  textBold: {
    fontWeight: 'bold',
  },
});
