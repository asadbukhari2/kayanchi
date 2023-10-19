import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { heightToDp, widthToDp, height } from '../../utils/Dimensions';
import { Button } from '../../components';
const grooming = require('../../assets/groomingdone.png');
const carBrown = require('../../assets/car_brown.png');
const location = require('../../assets/Path.png');
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import Feather from 'react-native-vector-icons/Feather';
import { fonts, useTheme } from '../../utils/theme';

const theme = useTheme();
const orders = [
  {
    name: 'John Doe',
    serviceCost: 30000,
    services: ['3x Foot Massage', 'Haircut', 'Manicure'],
    salonAddress: ' North Nazmabad',
    arrivalTime: '50-60 mins',
    imageLink: carBrown,
    status: 'wants to TRAVEL',
  },
];

export default function ArtistGroomingDone(props) {
  const [modalVisible, setModalVisible] = useState(true);
  const [rating, setRating] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  const onClose = () => {
    setModalVisible(false);
  };

  const handleRating = rating => {
    setSelectedRating(rating);
  };
  const openFeedbackModal = navigation => {
    setModalVisible(true);
  };

  const groomingDoneHandler = () => {
    props.navigation.navigate('ArtistHomeStack');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={grooming} style={styles.image} />
        </View>
        <View>
          <Text style={styles.heading}>Grooming done</Text>
          <Text style={{ color: '#67718C', textAlign: 'center', marginBottom: 10 }}>
            Great work! Off to the next one!{' '}
          </Text>
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

                      <Text style={styles.textBold}>SERVICES:</Text>
                      {order.services.map((service, serviceIndex) => {
                        const maxServicesToShow = 1;

                        if (serviceIndex < maxServicesToShow) {
                          return <Text key={serviceIndex}>{service}</Text>;
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
                      <Text style={{ color: '#84668C' }}>Rs {order.serviceCost}</Text>
                    </View>
                  </View>

                  <View>
                    <View style={styles.orderDetails}>
                      <Text>
                        was
                        <Text style={{ color: '#84668C' }}> HOSTING</Text>
                      </Text>

                      <Image source={order.imageLink} style={styles.OrderImage} />
                    </View>
                    <Text style={{ color: '#29AAE2' }}>
                      3.5 kms <Text style={{ color: '#0F2851' }}>away for you </Text>{' '}
                    </Text>
                    <Text style={styles.textBold}>Hosting at:</Text>
                    <View style={{ flexDirection: 'row' }}>
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

      <Modal
        coverScreen={false}
        isVisible={modalVisible}
        style={{ flex: 1, margin: 0, justifyContent: 'flex-end' }}
        onSwipeComplete={() => setModalVisible(!modalVisible)}
        swipeDirection={['down']}>
        <View style={styles.modalMainView}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setModalVisible(false)}
            style={{ padding: heightToDp(4.5), position: 'absolute', right: 0 }}>
            <Feather name={'x'} style={{ fontSize: 20, color: theme.backIcon }} />
          </TouchableOpacity>
          <Text style={styles.title}>Rate This client</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {[1, 2, 3, 4, 5].map(rating => (
              <TouchableOpacity
                key={rating}
                style={[styles.ratingButton, selectedRating === rating && styles.selectedRating]}
                onPress={() => handleRating(rating)}>
                <Icon
                  name={selectedRating >= rating ? 'star' : 'star-o'}
                  size={30}
                  color={selectedRating >= rating ? '#FF9D2B' : 'gray'}
                />
              </TouchableOpacity>
            ))}
          </View>
          {selectedRating !== null && <Text style={styles.selectedRatingText}>{selectedRating}</Text>}
          <View style={styles.btnTxt}>
            <Button title="Back to home" onPress={groomingDoneHandler} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(7),
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  btnTxt: { marginVertical: 15 },
  selectedRatingText: { textAlign: 'center', color: '#747474', fontFamily: fonts.hk_bold },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: heightToDp(55),
    width: widthToDp(69),
    marginTop: heightToDp(20),
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.hk_bold,
    color: '#0F2851',
    textAlign: 'center',
    marginTop: heightToDp(15),
    marginBottom: 15,
  },
  ratingButton: { flexDirection: 'row', marginRight: 10 },
  heading: {
    fontFamily: fonts.hk_bold,
    fontSize: 28,
    color: '#0F2851',
    textAlign: 'center',
    marginTop: 10,
  },

  modalMainView: {
    backgroundColor: '#F7F7F7',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  feedbackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 20,
    paddingVertical: 20,
    marginHorizontal: widthToDp(5),
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  clockImage: {
    width: 28,
    height: 21,
    resizeMode: 'contain',
  },
  orderContainer: {
    backgroundColor: 'white',
    // width: widthToDp(44),
    marginHorizontal: widthToDp(5),
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
    fontSize: 18,
    fontFamily: fonts.robo_bold,
  },
  textBold: {
    fontWeight: 'bold',
  },
});
