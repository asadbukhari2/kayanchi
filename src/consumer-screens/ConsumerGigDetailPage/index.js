import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { Button, Header } from '../../components';
import Feather from 'react-native-vector-icons/Feather';

const clinic_image = require('../../assets/clinic_image.png');
const clockcolor = require('../../assets/clockcolor.png');
const booking = require('../../assets/booking.png');
const treatment = require('../../assets/treatment.png');
const carBlue = require('../../assets/carBlue.png');
const hostingBlue = require('../../assets/hostingBlue.png');

const waxing = require('../../assets/body.png');
const hair = require('../../assets/hair.png');
const face = require('../../assets/face.png');
const theme = useTheme();

const data = [
  {
    name: 'Booking Only',
    imageLink: booking,
  },
  {
    name: 'Treatments',
    imageLink: treatment,
  },
];

export default function ConsumerGigDetailPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={clinic_image} style={styles.backgroundImage}>
        <View style={styles.headerButtonContainer}>
          <Header backBtnWhite />
        </View>
      </ImageBackground>

      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          marginHorizontal: widthToDp(5),
          top: heightToDp(50),
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
          Mark Removal
        </Text>
        <View style={{ flexDirection: 'row', marginHorizontal: widthToDp(5), marginVertical: 5 }}>
          <Text style={{ fontFamily: fonts.robo_reg, color: '#67718C', fontSize: 16 }}>Takes 2-3 hours</Text>
          <Image source={clockcolor} style={{ width: 23, height: 17, marginLeft: 5 }} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: widthToDp(5),
          }}>
          {data.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                marginRight: 10,
                backgroundColor: '#84668C',
                paddingVertical: heightToDp(2),
                paddingHorizontal: widthToDp(4),
                borderRadius: 20,
              }}>
              <Image source={item.imageLink} style={{ width: 15, height: 15, resizeMode: 'contain' }} />
              <Text style={{ color: 'white', fontSize: 12 }}>{item.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.separator}></View>
        <Text style={{ marginHorizontal: widthToDp(5), fontSize: 14, color: '#67718C', fontFamily: fonts.robo_reg }}>
          Say goodbye to unwanted marks and embrace smooth, flawless skin. Our skilled professionals utilize
          state-of-the-art technology and safe procedures to effectively diminish scars, stretch marks, and other
          imperfections.
        </Text>
        <View style={styles.separator}></View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: widthToDp(5),
          }}>
          <Text style={{ color: '#84668C', fontSize: 24, fontFamily: fonts.hk_bold }}>Rs 5,000</Text>
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
        </View>
        <View style={styles.separator}></View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: widthToDp(5),
            justifyContent: 'space-between',
          }}>
          <Text style={{ width: widthToDp(60), fontFamily: fonts.robo_reg }}>
            Narmeen can either come to you or you may travel to them.
          </Text>
          <Image source={carBlue} style={styles.images} />
          <Image source={hostingBlue} style={styles.images} />
        </View>
      </View>
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
    width: 25,
    height: 25,
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
