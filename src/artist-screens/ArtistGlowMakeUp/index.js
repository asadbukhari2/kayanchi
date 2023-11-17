import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { Button, Header } from '../../components';

import { useNavigation, useRoute } from '@react-navigation/native';

import { convertMinutesToRange } from '../../utils/helper';

const clockcolor = require('../../assets/clockcolor.png');
const ondemand = require('../../assets/ondemand.png');

const eye_face = require('../../assets/eye_face.png');

const hair = require('../../assets/hair.png');

const theme = useTheme();

export default function ArtistGlowMakeUp() {
  const route = useRoute();

  const navigation = useNavigation();
  const { price, details, cat, time, discountedPrice, isDiscount, isTravelling, isHosting, id, catName } = route.params;

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
          width: '90%',
          top: heightToDp(60),
          borderRadius: 20,
          paddingVertical: 20,
        }}>
        <Text
          style={{
            color: '#333333',
            fontSize: 20,
            fontFamily: fonts.robo_med,
            marginHorizontal: widthToDp(5),
          }}>
          {cat}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: widthToDp(5),
            marginVertical: 5,
          }}>
          <Text style={{ fontFamily: fonts.robo_reg, color: '#67718C', fontSize: 16 }}>
            {convertMinutesToRange(time)}
          </Text>
          <Image source={clockcolor} style={{ width: 23, height: 17, marginLeft: 5 }} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: widthToDp(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#84668C',
              paddingVertical: heightToDp(2),
              paddingHorizontal: widthToDp(4),
              borderRadius: 20,
              marginRight: 10,
            }}>
            <Image
              source={ondemand}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                marginRight: 5,
              }}
            />
            <Text style={{ color: 'white', fontSize: 12 }}>OnDemand</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#84668C',
              paddingVertical: heightToDp(2),
              paddingHorizontal: widthToDp(4),
              borderRadius: 20,
              marginRight: 10,
            }}>
            <Image
              source={catName === 'hair' && hair}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                marginRight: 5,
              }}
            />
            <Text style={{ color: 'white', fontSize: 12 }}>{catName}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <Text
          style={{
            marginHorizontal: widthToDp(5),
            fontSize: 14,
            color: '#67718C',
            fontFamily: fonts.robo_reg,
          }}>
          {details}
        </Text>
        <View style={styles.separator} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: widthToDp(5),
          }}>
          <Text style={isDiscount ? styles.discountPrice : styles.priceTxt}>
            Rs {isDiscount ? discountedPrice : price}
          </Text>
          {/* <Feather
            name="plus"
            size={24}
            color="white"
            style={{
              padding: widthToDp(2),
              backgroundColor: '#84668C',
              borderRadius: 10,
            }}
          /> */}
        </View>
        <View style={styles.separator} />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: widthToDp(5),
            justifyContent: 'space-between',
          }}>
          {/* <Text style={{ width: widthToDp(60), fontFamily: fonts.robo_reg }}>Rizwan can only host you </Text> */}
          {/* <Image source={hostingBlue} style={styles.images} /> */}
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: heightToDp(5),
          marginHorizontal: widthToDp(5),
        }}>
        <Button
          title="Continue"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <Button title="Continue" />
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
  priceTxt: {
    marginTop: 8,
    color: '#84668C',
    fontSize: 24,
    fontFamily: fonts.hk_bold,
  },
  discountPrice: {
    color: '#9A9A9A',
    fontSize: 10,
    fontFamily: fonts.hk_medium,
    textDecorationLine: 'line-through',
    marginTop: heightToDp(2),
    marginLeft: 5,
  },
});
