import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
import MultiButton from '../../components/MultiButton';
const host_green = require('../../assets/host_green.png');
const car_brown = require('../../assets/car_brown.png');
const location = require('../../assets/Path.png');
const contact = require('../../assets/contact.png');
import VerticalStepIndicator from '../../components/VerticalStepIndicator';
import MapView from 'react-native-maps';

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
];

const DATA = [
  {
    title: 'Millineum Mall',
    description: 'this is millineum mall karachi',
    lat: 24.9012,
    long: 67.1155,
    img: require('../../assets/logo2.png'),
  },
];

const ArtistTimeline = props => {
  const GroomingHandler = () => {
    props.navigation.navigate('ArtistOrderStack', { screen: 'ArtistGrooming' });
  };
  const CancelHandler = () => {
    props.navigation.navigate('ArtistOrderStack', { screen: 'ArtistCancelledTimeline' });
  };

  const { order, id } = props.route.params;

  console.log('yolo----', props.route.params);

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
          <View style={{ marginLeft: 0 }}>
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
          <View style={styles.orderContainer}>
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
                    <Text style={styles.headingName}>{order.consumer.name}</Text>

                    <Text style={[styles.textBold, { marginVertical: 5 }]}>SERVICES:</Text>
                    {order.order_items.map((service, serviceIndex) => {
                      const maxServicesToShow = 2;

                      if (serviceIndex < maxServicesToShow) {
                        return (
                          <Text style={{ color: '#32aee3' }} key={serviceIndex}>
                            {service.quantity}X {service.service_name}
                          </Text>
                        );
                      } else if (serviceIndex === maxServicesToShow) {
                        const remainingServices = order.order_items.length - maxServicesToShow;
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
                      Rs {order.total_service_charges}
                    </Text>
                  </View>
                </View>

                <View>
                  {order.is_hosting ? (
                    <View style={styles.orderDetails}>
                      <Text style={{ color: '#84668C', fontFamily: fonts.robo_med }}>Is HOSTING</Text>
                      {order.order_availibity_status === 'On-Demand' ? (
                        <Image source={car_brown} style={styles.OrderImage} />
                      ) : (
                        <Image source={host_green} style={styles.OrderImage} />
                      )}
                    </View>
                  ) : (
                    <View style={styles.orderDetails}>
                      <Text style={{ color: '#84668C', fontFamily: fonts.robo_med }}>Is TRVELLING</Text>
                      {order.order_availibity_status === 'On-Demand' ? (
                        <Image source={car_brown} style={styles.OrderImage} />
                      ) : (
                        <Image source={host_green} style={styles.OrderImage} />
                      )}
                    </View>
                  )}

                  <Text style={{ color: '#29AAE2' }}>
                    3.5 kms <Text style={{ color: '#0F2851' }}>away for you </Text>
                  </Text>
                  <Text style={[styles.textBold, { textTransform: 'uppercase', marginTop: 5, marginBottom: 3 }]}>
                    {order.is_hosting ? 'HOSTING AT:' : 'TRVELLING TO:'}
                  </Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={location} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
                    {/* <Text style={{ color: '#32aee3' }}>{order.salonAddress}</Text> */}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.separator} />

        <VerticalStepIndicator data={data} />
        <View>
          <MapView
            initialRegion={{
              latitude: 24.8607,
              longitude: 67.0011,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{ height: heightToDp(50) }}
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

        <Text style={styles.textCenter}>You can start grooming once you’ve reached your client’s location.</Text>

        <View style={styles.indicatorView}>
          <View style={styles.row}>
            <MultiButton title={'Start Grooming'} btnStyle={{ backgroundColor: '#84668C' }} onPress={GroomingHandler} />
            <MultiButton title={'Contact client'} image={contact} btnStyle={{ backgroundColor: '#668C6A' }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistTimeline;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 40,
    marginLeft: widthToDp(4),
    fontFamily: fonts.hk_bold,
  },
  textCenter: {
    color: '#67718C',
    textAlign: 'center',
    fontFamily: fonts.robo_reg,
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
    alignItems: 'center',
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
  row: { flexDirection: 'row', alignItems: 'center' },

  headingName: {
    fontSize: 20,
    color: '#0F2851',
    fontFamily: fonts.hk_bold,
  },
  textBold: {
    // fontWeight: 'bold',
    color: '#0F2851',
    fontFamily: fonts.robo_med,
  },
});
