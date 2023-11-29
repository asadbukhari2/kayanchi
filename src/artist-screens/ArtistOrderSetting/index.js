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
import { getAvailableDays, getBookingSlots, updateProfile } from '../../redux/actions';
import MultiButton from '../../components/MultiButton';

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
  const [availability, setAvailability] = useState([]);
  const [offerFreeTravel, setOfferTravel] = useState(false);
  const [travelMood, setTravelMood] = useState(false);
  const [hostMood, setHostMood] = useState(false);
  const [defaultTravelCost, setDefaultTravelCost] = useState(0);
  const [minOrderCost, setMinOrderCost] = useState(0);

  const profile = useSelector(state => state.auth.profile);

  useEffect(() => {
    setAvailability(profile.availability_status);
    setMinOrderCost(profile.minimum_order_cost);
    setOfferTravel(profile.offer_free_travel);
    setDefaultTravelCost(profile.default_travelling_cost);
    setTravelMood(profile.travel_mood);
    setHostMood(profile.hosting_mood);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFreeTravel = () => setOfferTravel(previousState => !previousState);

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
      }),
    );
  };
  const handleAvailabilityClick = e => {
    if (availability.includes(e.value)) {
      const f = availability.filter(itm => e.value !== itm);
      setAvailability(f);
    } else {
      setAvailability(prev => [...prev, e.value]);
    }
  };

  useEffect(() => {
    dispatch(getAvailableDays());
    dispatch(getBookingSlots());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  btnStyle={{ backgroundColor: availability.includes(_.value) ? '#008274' : '#9a9a9a' }}
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
            // defaultValue={minOrderCost}
            placeholder="500"
            placeholderTextColor={theme.genderGrey}
            onChangeText={e => setMinOrderCost(e)}
            keyboardType="number-pad"
            inputMode="numeric"
          />
        </View>

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

const styles = StyleSheet.create({
  gigVersionAsk: {
    marginLeft: widthToDp(5),
    fontSize: 20,
    fontFamily: fonts.robo_reg,
    marginTop: 30,
    lineHeight: 22,
    color: '#2F3A58',
  },
  parentMood: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  mood: {
    width: width * 0.9,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  childMood: {
    width: width * 0.425,
    flex: 0,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 15,
  },
  childMoodHead: {
    fontFamily: fonts.robo_med,
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
  childMoodBody: {
    fontFamily: fonts.robo_light,
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
  parentUpload: {
    marginTop: 10,
    marginHorizontal: widthToDp(5),
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upload: {
    elevation: 1,
    backgroundColor: '#FFFFFF',
    width: widthToDp(90),
    height: 160,
    borderRadius: 10,
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: { color: '#0F2851', fontSize: 40, marginLeft: widthToDp(4), fontFamily: fonts.hk_bold },
  uploadText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.robo_reg,
    marginTop: 8,
    lineHeight: 22,
    color: '#1682D6',
  },
  gigVersion: {
    marginTop: 10,
  },
  warning: {
    fontSize: 14,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: theme.darkModeText,
    marginTop: 8,
    lineHeight: 18.75,
  },
  warning2: {
    fontSize: 14,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: theme.darkGray,
    marginTop: 8,
    marginBottom: 20,
    lineHeight: 18.75,
  },
  parentPrice: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#EBE8EC',
    borderRadius: 8,
    marginLeft: widthToDp(5),
    marginRight: widthToDp(5),
    marginBottom: 10,
  },
  pkr: {
    width: widthToDp(20),
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 17,
    fontFamily: fonts.robo_reg,
    color: '#9A9A9A',
    lineHeight: 22,
    opacity: 0.3,
  },
  priceField: {
    width: widthToDp(90),
    borderRadius: 8,
    paddingHorizontal: 10,
    padding: 10,
    fontSize: 16,
    fontFamily: fonts.robo_reg,
    color: theme.darkModeText,
    lineHeight: 22,
  },
  inputField: {
    backgroundColor: 'white',
    width: widthToDp(90),
    marginLeft: widthToDp(5),
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: '#8D8A94',
    lineHeight: 22,
  },
  indicatorView: { marginHorizontal: 14, marginTop: heightToDp(2) },
  row: { flexDirection: 'row', alignItems: 'center' },

  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  skipView: {
    position: 'absolute',
    bottom: heightToDp(23),
    alignSelf: 'center',
  },
  btn: {
    marginTop: 40,
    // position: 'absolute',
    bottom: heightToDp(5.5),
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: widthToDp(10),
  },
  switch: {
    marginRight: 10,
  },

  img: {
    resizeMode: 'cover',
    height: heightToDp(59.95),
    width: widthToDp(67.9),
    alignSelf: 'center',
    marginTop: heightToDp(6.7),
  },
  skip: {
    fontSize: 14,
    fontFamily: fonts.robo_reg,
    lineHeight: 16.41,
    color: theme.linkTxt,
  },
  txt: {
    fontSize: 16,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: '#67718C',
  },
  title: {
    fontSize: 34,
    marginHorizontal: 18,
    fontFamily: fonts.robo_med,
    color: theme.lightBlack,
  },
  title2: {
    fontSize: 20,
    marginHorizontal: 24,
    fontFamily: fonts.hk_bold,
    lineHeight: 24,
    justifyContent: 'space-between',
    color: '#2F3A58',
  },
  serviceDuration: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  childServiceDuration: {
    height: 40,
    marginLeft: 50,
  },
});
