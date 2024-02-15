import React from 'react';
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
  const consumerOrder = useSelector(state => state.common.consumerOrder);

  const handleOrderProceed = () => {
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
    }
  };
  return (
    <ScrollView style={[styles.container]}>
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
        <Text style={[styles.width50, styles.colorBlue]}>
          House A9, Lane 14-C, Main Mina Bazzar Commercial, Block 6, Karachi
        </Text>
        <Image style={[styles.icon]} source={hostborwn} />
      </View>
      <View>
        <CartDetailCard />
      </View>
      <View style={[styles.paddingHorizontal20, styles.marginVertical10]}>
        <Text style={[styles.colorBlue]}>+Add more services</Text>
      </View>
      <View>
        <Text style={[styles.heading]}>Narmeen is also offering</Text>
      </View>
      <View>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => <OffersCard {...item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={[styles.marginVertical10]}>
        <Button onPress={() => handleOrderProceed()} title="Proced to order" />
      </View>
    </ScrollView>
  );
};

export default ConsumerCart;
