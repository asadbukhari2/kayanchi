import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';

import travelling from '../../assets/travelling.png';
import ToggleSwitch from 'toggle-switch-react-native';

import TravelMoodImage from '../../assets/travel.png';
import HostMoodImage from '../../assets/car-front.png';
const information = require('../../assets/information.png');
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile, updateProfile } from '../../redux/actions';
import MultiButton from '../../components/MultiButton';
import makeStyle from './artistOrderSetting.style';

const booking = require('../../assets/booking.png');
const ondemand = require('../../assets/ondemand.png');

const theme = useTheme();

const avail = [
  {
    title: 'Booking Only',
    value: 'booking_only',
    icon: booking,
  },
  {
    title: 'On Demand',
    value: 'on_demand',
    icon: ondemand,
  },
];

const ArtistOrderSetting = props => {
  const styles = makeStyle(theme)
  const [availability, setAvailability] = useState([]);
  const [offerFreeTravel, setOfferTravel] = useState(false);
  const [travelMood, setTravelMood] = useState(false);
  const [hostMood, setHostMood] = useState(false);
  const [defaultTravelCost, setDefaultTravelCost] = useState(0);
  const [minOrderCost, setMinOrderCost] = useState(0);
  const [salesTax, setSalesTax] = useState(false);

  const profile = useSelector(state => state.auth.profile);

  useEffect(() => {
    setAvailability(profile.availability_status);
    setMinOrderCost(profile.minimum_order_cost);
    setOfferTravel(profile.offer_free_travel);
    setDefaultTravelCost(profile.default_travelling_cost);
    setTravelMood(profile.travel_mood);
    setHostMood(profile.hosting_mood);
    setSalesTax(profile.taxing_artist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFreeTravel = () => setOfferTravel(previousState => !previousState);
  const handleTax = () => setSalesTax(previousState => !previousState);
  const dispatch = useDispatch();

  const gotoArtist = async () => {
    props.navigation.goBack();

    dispatch(
      updateProfile({
        availability_status: availability,
        default_travelling_cost: offerFreeTravel ? 0 : defaultTravelCost,
        offer_free_travel: offerFreeTravel,
        minimum_order_cost: minOrderCost,
        travel_mood: travelMood,
        hosting_mood: hostMood,
        taxing_artist: salesTax,
      }),
    );
  };
  const handleAvailabilityClick = e => setAvailability(e.value);

  useEffect(() => {
    const focusHandler = props.navigation.addListener('focus', () => {
      dispatch(getMyProfile());
    });
    return focusHandler;
  }, [props.navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header backBtn title="Order Setting" />

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.heading}>Availability</Text>
          <Image
            source={information}
            style={{
              height: 15,
              width: 15,
              marginLeft: widthToDp(1),
              marginTop: 6,
            }}
          />
        </View>
        <Text style={{ fontSize: 16, color: '#67718C', marginLeft: widthToDp(4), fontFamily: fonts.robo_reg }}>
          Select how you are taking your order
        </Text>

        <View style={styles.indicatorView}>
          <View style={styles.row}>
            {avail.map(_ => {
              return (
                <MultiButton
                  key={_.title}
                  onPress={() => handleAvailabilityClick(_)}
                  title={_.title}
                  btnStyle={{ backgroundColor: availability === _.value ? '#008274' : '#9a9a9a' }}
                  image={_.icon}
                />
              );
            })}
          </View>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('ArtistBookingSlots')}>
          <Text
            style={{
              color: '#1583D8',
              marginLeft: widthToDp(4),
              marginBottom: 10,
              marginTop: 5,
            }}>
            Manage Booking slots
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.heading}>Mood</Text>
          <Image
            source={information}
            style={{
              height: 15,
              width: 15,
              marginLeft: widthToDp(1),
              marginTop: widthToDp(2),
            }}
          />
        </View>

        <Text style={styles.warning}>
          Choose between travelling to the client or having them at your place. You can do both.
        </Text>
        <View style={styles.parentMood}>
          <View style={styles.mood}>
            <TouchableOpacity onPress={() => setTravelMood(prev => !prev)}>
              <View
                style={[
                  styles.childMood,
                  travelMood ? { backgroundColor: theme.primary } : { backgroundColor: theme.greyText },
                ]}>
                <Image source={HostMoodImage} style={{ height: 40, width: 40, resizeMode: 'contain' }} />
                <Text style={styles.childMoodHead}>Travel</Text>
                <Text style={styles.childMoodBody}>to client’s</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setHostMood(prev => !prev)}>
              <View
                style={[
                  styles.childMood,
                  hostMood ? { backgroundColor: theme.primary } : { backgroundColor: theme.greyText },
                ]}>
                <Image source={TravelMoodImage} />
                <Text style={styles.childMoodHead}>Host</Text>
                <Text style={styles.childMoodBody}>the client</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {travelMood && (
          <View>
            <View style={styles.serviceDuration}>
              <Text style={styles.title2}>Default Travelling cost</Text>
              <Image source={travelling} resizeMode="contain" />
              <View style={styles.childServiceDuration} />
            </View>

            <Text style={styles.warning}>
              Budget your travel cost within the city. Offer travel for free, to get more orders.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                marginBottom: 10,
              }}>
              <Text style={styles.warning}>{'Offer free travel'}</Text>
              <View style={[styles.switchContainer, { marginRight: 10 }]}>
                <ToggleSwitch
                  isOn={offerFreeTravel}
                  style={{ height: 20, marginRight: 10 }}
                  value={offerFreeTravel}
                  onColor="#84668C"
                  offColor="#9A9A9A"
                  size="small"
                  onToggle={handleFreeTravel}
                />
              </View>
            </View>

            <View style={styles.parentPrice}>
              <TextInput
                style={styles.priceField}
                placeholder="100-1000"
                keyboardType="number-pad"
                disable={offerFreeTravel}
                placeholderTextColor={theme.genderGrey}
                value={offerFreeTravel ? '0' : defaultTravelCost.toString()}
                onChangeText={e => setDefaultTravelCost(e)}
              />
            </View>
          </View>
        )}
        <View style={styles.serviceDuration}>
          <Text style={styles.title2}>
            Minimum Order Value <Text style={{ fontFamily: fonts.robo_light }}>(MOV)</Text>
          </Text>
        </View>

        <Text style={styles.warning}>Set a minimum amount below which you won't accept order</Text>

        <View style={[styles.parentPrice, { marginTop: 10 }]}>
          <TextInput
            style={styles.priceField}
            value={minOrderCost.toString()}
            placeholder="500"
            placeholderTextColor={theme.genderGrey}
            onChangeText={e => setMinOrderCost(e)}
            keyboardType="number-pad"
            inputMode="numeric"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            marginBottom: 10,
          }}>
          <Text style={styles.title2}>
            Sales service tax <Text style={{ fontFamily: fonts.robo_light }}>(SST)</Text>
          </Text>

          <View style={[styles.switchContainer, { marginRight: 10 }]}>
            <ToggleSwitch
              isOn={salesTax}
              style={{ height: 20, marginRight: 10 }}
              value={salesTax}
              onColor="#84668C"
              offColor="#9A9A9A"
              size="small"
              onToggle={handleTax}
            />
          </View>
        </View>
        <Text style={styles.warning}>Only applicable if your annual revenue is more than 4M PKR.</Text>

        <Button
          title={'Confirm Settings'}
          btnStyle={styles.btn}
          onPress={() => {
            gotoArtist();
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistOrderSetting;


