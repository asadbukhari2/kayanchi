import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Button, Header } from '../../components';
import CartDetailCard from './component/CartDetailCard';
import hostborwn from '../../assets/hostborwn.png';
import OffersCard from './component/OffersCard';
import face_promo from '../../assets/face_promo.png';
import girl_hair from '../../assets/girl_hair.png';
import { useSelector } from 'react-redux';
import { getSavedAddresses } from '../../redux/actions/commonActions';

const DATA = [
  {
    id: '1',
    title: 'Face Pro Max',
    price: 2999,
    imageLink: face_promo,
  },
  {
    id: '2',
    title: 'Buy 3 get one free',
    price: 2500,
    imageLink: girl_hair,
  },
];
const ConsumerCart = () => {
  const navigation = useNavigation();
  const artistServices = useSelector(state => state.common.artistServices);
  const [address, setAddress] = useState(null);
  const consumerOrder = useSelector(state => state.common.consumerOrder);
  let token = useSelector(state => state.auth.token);
  const getAddress = async () => {
    try {
      const add = await getSavedAddresses(token);
      setAddress(add[0].address);
    } catch (error) {}
  };
  useEffect(() => {
    getAddress();
    console.log('this is the address', address);
  }, []);
  const handleOrderProceed = () => {
    console.log(artistServices.availability, artistServices.hosting_mood, consumerOrder.consumerMood);
    if (
      artistServices.availability === 'on_demand' &&
      artistServices.hosting_mood &&
      consumerOrder.consumerMood === 'traveling'
    ) {
      navigation.navigate('ConsumerHomeStack', {
        screen: 'ConsumerCashPayment',
      });
      // hosting;
    } else if (
      artistServices.availability === 'on_demand' &&
      artistServices.travel_mood &&
      consumerOrder.consumerMood === 'hosting'
    ) {
      // todo open the modal for setting the time slots
      navigation.navigate('ConsumerOrderStack', {
        screen: 'ConsumerHostingLocation',
      });
    } else if (
      artistServices.availability === 'booking_only' &&
      artistServices.hosting_mood &&
      consumerOrder.consumerMood === 'traveling'
    ) {
      // todo open the modal for setting the time slots
      navigation.navigate('ConsumerOrderStack', {
        screen: 'ConsumerBookingDate',
      });
    } else if (
      artistServices.availability === 'booking_only' &&
      artistServices.travel_mood &&
      consumerOrder.consumerMood === 'hosting'
    ) {
      // todo open the modal for setting the time slots
      navigation.navigate('ConsumerOrderStack', {
        screen: 'ConsumerBookingDate',
      });
    }
  };
  console.log('address', address);
  return (
    <ScrollView contentContainerStyle={{ padding: 15 }} style={[styles.container]}>
      <View>
        <Header backBtn />
      </View>
      <View>
        <Text style={[styles.colorDarkBlue, styles.font26, styles.fontBold]}>Your Cart</Text>
      </View>
      <View>
        <Text style={[styles.colorLightGray, styles.marginVertical8]}>Hosting Address</Text>
      </View>
      <View style={[styles.flex, styles.directionRow, styles.alignCenter, styles.justifyBetween]}>
        {address ? (
          <Text
            style={[styles.width50, styles.colorBlue]}>{`${address?.text} ${address.city} ,${address.country}`}</Text>
        ) : (
          <View />
        )}
        <Image style={[styles.icon]} source={hostborwn} />
      </View>
      <View>
        <CartDetailCard />
      </View>
      <View style={[styles.paddingHorizontal20, styles.marginVertical10]}>
        <Text style={[styles.colorBlue]}>+Add more services</Text>
      </View>
      {artistServices['promotional services'] && (
        <>
          <View>
            <Text style={[styles.heading]}>{artistServices?.artist} is also offering</Text>
          </View>
          <View>
            <FlatList
              horizontal
              data={DATA}
              renderItem={({ item }) => <OffersCard {...item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </>
      )}
      <View style={[styles.marginVertical10]}>
        <Button onPress={() => handleOrderProceed()} title="Proced to order" />
      </View>
    </ScrollView>
  );
};

export default ConsumerCart;
