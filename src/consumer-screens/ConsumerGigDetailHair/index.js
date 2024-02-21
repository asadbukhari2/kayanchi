import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { Header } from '../../components';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getCartItems, getServiceById } from '../../redux/actions/commonActions';
import AvailablityAndCategoryBtn from './components/AvailablityAndCategoryBtn';

const clockcolor = require('../../assets/clockcolor.png');
const ondemand = require('../../assets/ondemand.png');
const bookingOnly = require('../../assets/booking.png');
const hostingBlue = require('../../assets/hostingBlue.png');
const travelBlue = require('../../assets/travelBlue.png');

const hair = require('../../assets/hair.png');
const hairStyle = require('../../assets/hairStyle.png');
const theme = useTheme();

const data = [
  {
    name: 'on Demand',
    imageLink: ondemand,
  },
  {
    name: 'Hair',
    imageLink: hair,
  },
];

export default function ConsumerGigDetailHair(props) {
  console.log('this is the ConsumerGigDetailHair', props.route.params.id);
  const artistServices = useSelector(state => state.common.artistServices);
  const dispatch = useDispatch();
  const [service, setService] = useState(null);
  const token = useSelector(state => state.auth.token);
  const cart = useSelector(state => state.common.cart);
  const addToCartLoading = useSelector(state => state.common.addToCartLoading);
  const getService = async () => {
    let res = await dispatch(getServiceById(props.route.params.id, token));
    setService(res);
  };

  useEffect(() => {
    dispatch(getCartItems(token));
    console.log('this is the cart getCartItems', cart, addToCartLoading);
  }, []);
  useEffect(() => {
    getService();
  }, [props.route.params.id]);
  const handleAddToCart = () => {
    const sampleData = {
      quantity: 1,
      service_id: props.route.params.id,
    };
    dispatch(addToCart(sampleData, token));
  };
  console.log('service?.service_images[0]', artistServices);
  let isTravel = artistServices?.travel_mood === true;
  let isHost = artistServices?.hosting_mood === true;
  let isHostTravel = artistServices?.travel_mood === true && artistServices?.hosting_mood === true;
  return (
    <SafeAreaView style={styles.container}>
      {service ? (
        <ImageBackground source={{ uri: service?.service_images[0] }} style={styles.backgroundImage}>
          <View style={styles.headerButtonContainer}>
            <Header backBtnWhite />
          </View>
        </ImageBackground>
      ) : (
        <View>
          <Text>No record found</Text>
        </View>
      )}

      {service ? (
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            marginHorizontal: widthToDp(5),
            top: heightToDp(60),
            borderRadius: 20,
            paddingVertical: 20,
          }}>
          <Text
            style={{
              color: '#333333',
              fontSize: 20,
              fontFamily: fonts.robo_med,
              // fontWeight: '500',
              marginHorizontal: widthToDp(5),
            }}>
            {service?.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: widthToDp(5),
              marginVertical: 5,
            }}>
            <Text style={{ fontFamily: fonts.robo_reg, color: '#67718C', fontSize: 16 }}>
              Takes {service?.duration} min
            </Text>
            <Image source={clockcolor} style={{ width: 23, height: 17, marginLeft: 5 }} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: widthToDp(5),
            }}>
            {artistServices.availability === 'booking_only' ? (
              <AvailablityAndCategoryBtn name={'Booking Only'} image={bookingOnly} />
            ) : (
              <AvailablityAndCategoryBtn name={'on Demand'} image={ondemand} />
            )}
            <AvailablityAndCategoryBtn name={'Hair'} image={hair} />
          </View>
          <View style={styles.separator}></View>
          <Text style={{ marginHorizontal: widthToDp(5), fontSize: 14, color: '#67718C', fontFamily: fonts.robo_reg }}>
            {service?.description}
          </Text>
          <View style={styles.separator}></View>

          <View style={styles.rowCenter}>
            <Text style={{ color: '#84668C', fontSize: 24, fontFamily: fonts.hk_bold }}>Rs {service?.amount}</Text>
            <TouchableOpacity disabled={addToCartLoading} onPress={() => handleAddToCart()}>
              {addToCartLoading ? (
                <ActivityIndicator />
              ) : (
                <Feather
                  name="plus"
                  size={24}
                  color="white"
                  style={{
                    padding: widthToDp(2),
                    backgroundColor: '#84668C',
                    borderRadius: 10,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.separator}></View>
          {isHost && !isTravel ? (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: widthToDp(5),
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{ width: widthToDp(60), fontFamily: fonts.robo_reg }}>
                  {artistServices?.artist} can only host you{' '}
                </Text>
                <Image source={hostingBlue} style={styles.images} />
              </View>
            </View>
          ) : isTravel && !isHost ? (
            <View>
              <View style={styles.rowCenter}>
                <Text style={{ width: widthToDp(60), fontFamily: fonts.robo_reg }}>
                  {artistServices?.artist} can only travel to you{' '}
                </Text>
                <Image source={travelBlue} style={styles.images} />
              </View>
            </View>
          ) : isHostTravel ? (
            <View>
              <View style={styles.rowCenter}>
                <Text style={{ width: widthToDp(60), fontFamily: fonts.robo_reg }}>
                  {artistServices?.artist} can either host or travel you{' '}
                </Text>
                <View style={styles.rowCenter}>
                  <Image source={hostingBlue} style={styles.images} />
                  <Image source={travelBlue} style={styles.image1} />
                </View>
              </View>
            </View>
          ) : (
            <></>
          )}
        </View>
      ) : (
        <View>
          <Text>No record found</Text>
        </View>
      )}
      <View
        style={{
          position: 'absolute',
          bottom: heightToDp(5),
          marginHorizontal: widthToDp(5),
        }}>
        {/* <Button title="Continue" /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },
  rowCenter: {
    flexDirection: 'row',
    marginHorizontal: widthToDp(5),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundImage: {
    height: heightToDp(80),
    width: '100%',
    resizeMode: 'cover',
    opacity: 0.7,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  headerButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Ensure the header button is above the image
  },
  images: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 5,
  },
  image1: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
  },
  indicatorView: {
    marginHorizontal: widthToDp(5),
    marginTop: heightToDp(3),
    marginBottom: 15,
  },
  row: { flexDirection: 'row', alignItems: 'center' },

  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },
});
