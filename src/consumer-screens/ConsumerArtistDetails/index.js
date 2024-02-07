/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style.js';
import { useNavigation } from '@react-navigation/native';
import ArtistDetailHeader from './components/header/index.js';
import AvailablityStatus from './components/cards/AvailablityStatus.js';
import Mood from './components/cards/Mood.js';
import Socials from './components/cards/Socials.js';
import PromotionalCard from './components/cards/PromotionalCard.js';
import face_promo from '../../assets/face_promo.png';
import girl_hair from '../../assets/girl_hair.png';
import { FlatList } from 'react-native';
import NavigationTabs from './components/NavigationTabs.js';
import ServiceDetiailCard from './components/cards/ServiceDetiailCard.js';
import Modal from 'react-native-modal';

import HostAndTravel from './components/cards/HostAndTravel.js';
import hosting from '../../assets/hosting_white.png';
import travel from '../../assets/travel_white.png';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../redux/actions/commonActions.js';
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

const ModalData = [
  {
    id: '1',
    icon: travel,
    title: 'Travel to their studio',
  },
  {
    id: '2',
    icon: hosting,
    title: 'Host them at your place',
  },
];

const ConsumerArtistDetails = props => {
  console.log('this is the params in the artist details', props.route.params.id);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cart = useSelector(state => state.common.cart);
  const artistServices = useSelector(state => state.common.artistServices);
  const [openModal, setOpenModal] = useState(false);
  const [navCategory, setNavCategory] = useState('Hair');
  const [serviceData, setServiceData] = useState([]);
  const handleCLoseModal = () => {
    setOpenModal(prev => !prev);
    console.log('close and open');
  };

  useEffect(() => {
    dispatch(getServices(props.route.params.id));
  }, [props.route.params.i]);

  useEffect(() => {
    setOpenModal(prev => !prev);
  }, [cart]);

  useEffect(() => {
    handleCategoryFilter(artistServices);
    console.log('change---->', navCategory);
  }, [navCategory]);

  const calculateCartTotal = cartItem => {
    let total = 0;
    for (let i = 0; i < cartItem.length; i++) {
      const element = cartItem[i];
      // if (element.discount_price > 0) {
      //     total += (element.discount_price - element.price)
      // } else {

      total += element.price * element.quantity;
      // }
    }
    return total;
  };
  const handleCategoryFilter = ser => {
    console.log('hi--->', ser.services['basic services'][0].category_name);
    setServiceData([]);
    ser.services['basic services'].filter(data => {
      console.log(
        'data.category_name === navCategory',
        data.category_name,
        navCategory,
        data.category_name === navCategory,
      );
      if (data.category_name === navCategory) {
        console.log('data__equal', data.category_services);
        setServiceData(data.category_services);
      } else {
        setServiceData([]);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <View>
          <ArtistDetailHeader />
        </View>
        <View
          style={[
            styles.flex,
            styles.flexDirectionRow,
            styles.justifyContentBetween,
            styles.paddingVertical15,
            styles.paddingHorizontal0,
          ]}>
          <AvailablityStatus status={artistServices.availability} />
          <Mood travel_mood={artistServices.travel_mood} hosting_mood={artistServices.hosting_mood} />
          <Socials
            followers={artistServices?.followers}
            rating_count={artistServices?.rating_count}
            rating={artistServices?.rating}
          />
        </View>
        {artistServices.services['promotional services'].length > 0 && (
          <View style={[styles.paddingleftl0]}>
            <View style={[styles.marginBottom10]}>
              <Text style={[styles.cardHeading]}>Promotional offers</Text>
            </View>
            <ScrollView horizontal contentContainerStyle={{ paddingBottom: 10 }}>
              <FlatList
                horizontal
                data={DATA}
                renderItem={({ item }) => <PromotionalCard {...item} />}
                keyExtractor={item => item.id}
              />
            </ScrollView>
          </View>
        )}

        <View>
          <View style={[styles.borderBottom1, styles.borderBottomColorLightGray]}>
            <NavigationTabs navCategory={navCategory} setNavCategory={setNavCategory} />
          </View>
          <View style={[styles.paddingleftl0]}>
            <FlatList
              data={serviceData}
              renderItem={({ item }) => <ServiceDetiailCard {...item} />}
              keyExtractor={item => item.id}
            />
            <Text>{serviceData.length <= 0 && 'No record found'}</Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.marginTop30]}>
          {cart.length > 0 ? (
            <Button
              onPress={() =>
                navigation.navigate('ConsumerHomeStack', {
                  screen: 'ConsumerCart',
                })
              }
              title={`View your cart Rs ${calculateCartTotal(cart)}`}
            />
          ) : (
            <View />
          )}
        </TouchableOpacity>
      </ScrollView>
      <Modal
        // coverScreen={false}
        isVisible={openModal}
        // animationType={'fade'}
        // transparent={true}
        style={[
          styles.flex1,
          styles.marginTop500,
          styles.marginHorizontal0,
          styles.marginBottom0,
          styles.backGroundWhite,
          styles.releative,
          styles.borderRadiusTop,
        ]}
        onSwipeComplete={false}
        swipeDirection={'down'}
        onSwipeCancel={() => handleCLoseModal()}>
        <View
          style={[
            styles.heightFull,
            styles.flex,
            styles.justifyContentBetween,
            styles.alignItemsCenter,
            styles.padding10,
          ]}>
          <TouchableOpacity activeOpacity={1} onPress={() => handleCLoseModal()}>
            <View style={{ width: 60, height: 5, borderRadius: 3, backgroundColor: '#c4c4c4' }} />
          </TouchableOpacity>
          <View style={[styles.flex, styles.flexDirectionRow, styles.justifyContentCenter]}>
            <FlatList
              contentContainerStyle={[
                styles.justifyContentCenter,
                styles.alignItemsCenter,
                styles.flex,
                styles.marginLeftAuto,
              ]}
              data={ModalData}
              renderItem={({ item }) => <HostAndTravel {...item} />}
              keyExtractor={item => item.id}
              horizontal
            />
          </View>
          <Button title="Add to cart" />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ConsumerArtistDetails;
