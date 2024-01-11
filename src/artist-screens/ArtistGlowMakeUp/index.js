import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { Button, Header } from '../../components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { convertMinutesToRange } from '../../utils/helper';
import { useSelector } from 'react-redux';
import makeStyle from './artistglowMakeUp.styles';

const clockcolor = require('../../assets/clockcolor.png');
const ondemand = require('../../assets/ondemand.png');
const eye_face = require('../../assets/eye_face.png');
const hair = require('../../assets/hair.png');
const hairgig = require('../../assets/hairgig.png');
const facegig = require('../../assets/facegig.png');
const treatmentsgig = require('../../assets/treatmentsgig.png');
const spagig = require('../../assets/spagig.png');
const bodygig = require('../../assets/bodygig.png');
const booking = require('../../assets/booking.png');

export default function ArtistGlowMakeUp() {
  const theme = useTheme();
  const styles = makeStyle(theme);

  const route = useRoute();
  const profile = useSelector(state => state.auth.profile);

  const navigation = useNavigation();
  const { price, details, cat, time, discountedPrice, isDiscount, catName } = route.params;

  const backgroundImage =
    catName === 'Face'
      ? facegig
      : catName === 'Spa'
      ? spagig
      : catName === 'Treatments'
      ? treatmentsgig
      : catName === 'Hair'
      ? hairgig
      : catName === 'Body'
      ? bodygig
      : eye_face;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundImage}>
        <View style={styles.headerButtonContainer}>
          <Header backBtnWhite />
        </View>
        <Image
          source={backgroundImage}
          style={{
            resizeMode: 'contain',

            top: '-10%',
          }}
        />
      </View>

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
              backgroundColor: profile.availability_status === 'booking_only' ? theme.primary : theme.brown,
              paddingVertical: heightToDp(2),
              paddingHorizontal: widthToDp(2),
              borderRadius: 20,
              marginRight: 10,
            }}>
            <Image
              source={profile.availability_status === 'booking_only' ? booking : ondemand}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                marginRight: 5,
              }}
            />
            <Text style={{ color: 'white', fontSize: 12 }}>
              {profile.availability_status === 'booking_only' ? 'Booking' : 'On-Demand'}
            </Text>
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
              source={catName === 'Body' && hair}
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
        </View>
        <View style={styles.separator} />
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
    </SafeAreaView>
  );
}
