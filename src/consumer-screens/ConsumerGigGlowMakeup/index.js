import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { Button, Header } from '../../components';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/commonActions';

const clinic_image = require('../../assets/clinic_image.png');
const clockcolor = require('../../assets/clockcolor.png');
const ondemand = require('../../assets/ondemand.png');
const treatment = require('../../assets/treatment.png');
const eye_face = require('../../assets/eye_face.png');
const hostingBlue = require('../../assets/hostingBlue.png');

const waxing = require('../../assets/body.png');
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

export default function ConsumerGigGlowMakeup() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.common.cart);
  console.log('this is the cart', cart);
  const handleAddToCart = () => {
    const sampleData = {
      id: 'glow_make_up',
      name: 'Glow Make up',
      title: 'body',

      category: 'Booking only',
      price: '5000',
      type: 'hosting',
    };
    dispatch(addToCart(sampleData));
    console.log('add to the cart');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={eye_face} style={styles.backgroundImage}>
        <View style={styles.headerButtonContainer}>
          <Header backBtnWhite />
        </View>
      </ImageBackground>

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
          GLow Make up
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: widthToDp(5),
            marginVertical: 5,
            alignItems: 'center',
          }}>
          <Text style={{ fontFamily: fonts.robo_reg, color: '#67718C', fontSize: 16 }}>Takes 2-3 hours</Text>
          <Image source={clockcolor} style={{ width: 23, height: 17, marginLeft: 5 }} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: widthToDp(5),
            marginVertical: 4,
          }}>
          {data.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                backgroundColor: item.name === 'Hair' ? '#84668C' : theme.brown,
                paddingVertical: heightToDp(2),
                paddingHorizontal: widthToDp(4),
                borderRadius: 20,
                marginRight: 10,
              }}>
              <Image
                source={item.imageLink}
                style={{
                  width: 15,
                  height: 15,
                  resizeMode: 'contain',
                  marginRight: 5,
                }}
              />
              <Text style={{ color: 'white', fontSize: 12 }}>{item.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.separator} />
        <Text
          style={{
            marginHorizontal: widthToDp(5),
            fontSize: 16,
            color: '#67718C',
            fontFamily: fonts.robo_reg,
            marginVertical: 12,
          }}>
          Unlock your radiant beauty with personalized Glow Makeup service. As a skilled makeup artist, I'll accentuate
          your unique features, giving you a captivating glow that enhances your natural charm. Get ready to stand out
          and feel confident.
        </Text>
        <View style={styles.separator} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: widthToDp(5),
            marginVertical: 12,
          }}>
          <Text style={{ color: '#84668C', fontSize: 24, fontFamily: fonts.hk_bold }}>Rs 5,000</Text>
          <TouchableOpacity onPress={() => handleAddToCart()}>

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
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: widthToDp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 12,
          }}>
          <Text style={{ width: widthToDp(60), fontFamily: fonts.robo_reg, color: theme.greyText }}>
            Rizwan can only host you{' '}
          </Text>
          <Image source={hostingBlue} style={styles.images} />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: heightToDp(5),
          marginHorizontal: widthToDp(5),
        }}>
        <Button title="Continue" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },
  backgroundImage: {
    height: heightToDp(80),
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
    width: 30,
    height: 30,
    marginRight: 6,
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
