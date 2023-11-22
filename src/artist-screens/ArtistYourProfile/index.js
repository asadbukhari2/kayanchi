import React, { useState, useRef } from 'react';
import { Text, View, Animated, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../utils/theme';
import { width, heightToDp, widthToDp, height } from '../../utils/Dimensions';
import { ConsumerSubCatCard, Button, Header, Tabs } from '../../components';

import { useSelector } from 'react-redux';
import makeStyle from './artistyourprofile.styles';
const beauty = require('../../assets/beautician.png');
const share = require('../../assets/share.png');
const ondemand = require('../../assets/ondemand.png');
const carfront = require('../../assets/car-front.png');
const host = require('../../assets/host.png');
const favourites = require('../../assets/favourites.png');
const star = require('../../assets/star.png');
const LocationAway = require('../../assets/LocationAway.png');

const hair = require('../../assets/HairDark.png');
const face = require('../../assets/FaceDark.png');
const waxing = require('../../assets/BodyDark.png');
const Massages = require('../../assets/SpaDark.png');
const Botox = require('../../assets/TreatDark.png');

const DATA2 = [
  {
    cat: 'Hair cut',
    price: 'Pkr 1500',
    time: 'Takes 2-3 hours',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit enim eget libero dictumeuismod. Proin vel sem eget diam scelerisque tristique. Pellentesque nec dolor .',
  },
  {
    cat: 'Hydra facial',
    price: 'Pkr 1500',
    time: 'Takes 2-3 hours',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit enim eget libero dictumeuismod. Proin vel sem eget diam scelerisque tristique. Pellentesque nec dolor .',
  },
  {
    cat: 'Hydra facial',
    price: 'Pkr 1500',
    time: 'Takes 2-3 hours',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit enim eget libero dictumeuismod. Proin vel sem eget diam scelerisque tristique. Pellentesque nec dolor .',
  },
  {
    cat: 'Hydra facial',
    price: 'Pkr 1500',
    time: 'Takes 2-3 hours',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit enim eget libero dictumeuismod. Proin vel sem eget diam scelerisque tristique. Pellentesque nec dolor .',
  },
];
const DATA = [
  {
    name: 'Hair',
    imageLink: hair,
  },
  {
    name: 'Face',
    imageLink: face,
  },
  {
    name: 'Body',
    imageLink: waxing,
  },
  {
    name: 'Spa',
    imageLink: Massages,
  },
  {
    name: 'Treat',
    imageLink: Botox,
  },
];

const headerHeight = heightToDp(57.5);
const headerFinalHeight = heightToDp(25);

const ArtistYourProfile = props => {
  const [subHeading, setSubHeading] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const theme = useTheme();
  const styles = makeStyle(theme);
  const user = useSelector(state => state.auth.user);

  const scrollY = useRef(new Animated.Value(0)).current;

  const offset = headerHeight - headerFinalHeight;

  const opacity = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -offset],
    extrapolate: 'clamp',
  });

  const opacityHeader = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, offset],
    extrapolate: 'clamp',
  });

  const translateYOffset = -10; // Adjust this value to control the space from the top

  const translateName = scrollY.interpolate({
    inputRange: [0, offset / 2, offset],
    outputRange: [0, translateYOffset, widthToDp(10)], // Add translateYOffset
    extrapolate: 'clamp',
  });

  const scaleName = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  const scaleDistance = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const translateRating = scrollY.interpolate({
    inputRange: [0, offset / 2, offset],
    outputRange: [0, 10, -widthToDp(5) + headerFinalHeight],
    extrapolate: 'clamp',
  });

  const scaleRating = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, 1],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#000" barStyle={'light-content'} showHideTransition={'fade'} />
      <Animated.View style={[styles.header, { height: headerHeight, transform: [{ translateY: opacity }] }]}>
        <View
          style={{
            width: width, // Set width to 100% to cover the entire width
            height: headerHeight, // Make sure to set the height explicitly
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            resizeMode: 'cover',
            overflow: 'hidden',
          }}>
          <Image source={require('../../assets/profile.png')} style={{ width: '100%', height: '100%' }} />
        </View>

        <Animated.View style={[{ transform: [{ translateY: opacityHeader }] }]}>
          <Header backBtnWhite />
        </Animated.View>

        <TouchableOpacity activeOpacity={0.7} style={styles.followBtn}>
          <Text style={styles.follow}>View Profile</Text>
        </TouchableOpacity>
        <View style={styles.headerMain}>
          {/* <Text style={styles.artistLocation}>{'3.2 kms away from you'}</Text> */}
          <View style={styles.centerDiv}>
            <Animated.Text
              // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
              style={[styles.artistName, { transform: [{ translateX: translateName }, { scale: scaleName }] }]}>
              {user.name}
            </Animated.Text>
          </View>
          <View style={styles.centerDiv}>
            <Animated.View
              style={{
                transform: [{ translateY: opacity }],
              }}>
              <Image
                source={beauty}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
            </Animated.View>
            <View style={[styles.centerDiv, { paddingTop: 5 }]}>
              <Animated.Text
                // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
                style={[styles.artistLocation, { transform: [{ translateY: opacity }] }]}>
                Barber{' '}
              </Animated.Text>

              <Animated.View style={[styles.dotContainer, { transform: [{ translateY: opacity }] }]}>
                <Animated.Text
                  // onTextLayout={e => setRatingWidth(e.nativeEvent.lines[0].width)}
                  style={[
                    styles.artistRating,
                    {
                      transform: [{ translateX: translateRating }, { scale: scaleRating }],
                    },
                  ]}>
                  {'.'}
                </Animated.Text>
              </Animated.View>
              <Animated.Text
                // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
                style={[styles.artistLocation, { transform: [{ translateY: opacity }] }]}>
                {' '}
                Expert
              </Animated.Text>
            </View>

            <Animated.View style={[styles.imageShare, { transform: [{ translateY: opacity }] }]}>
              <Image source={share} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
            </Animated.View>
          </View>
        </View>
      </Animated.View>

      <ScrollView
        scrollEventThrottle={10}
        style={{ height: height }}
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}>
        <View style={{ marginTop: headerHeight }}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: heightToDp(3),
                  marginLeft: widthToDp(4),
                }}>
                <View style={styles.OrderSummaryContainer}>
                  <View style={[styles.imageContainer, { backgroundColor: '#A77246' }]}>
                    <Image source={ondemand} style={styles.orderSummaryImage} />
                  </View>
                  <Text style={styles.bookingCount}>Avaiability</Text>
                  <Text
                    style={[
                      styles.subCount,
                      { textAlign: 'center' },
                    ]}>{`${user.name} is taking orders on-demand`}</Text>
                </View>
              </View>
            </View>

            <View>
              <View style={{ flexDirection: 'row', margin: widthToDp(3) }}>
                <View style={styles.OrderSummaryContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.imageContainer, { backgroundColor: '#1583D8' }]}>
                      <Image source={host} style={styles.orderSummaryImage} />
                    </View>
                    <View style={[styles.imageContainer, { marginLeft: 5, backgroundColor: '#1583D8' }]}>
                      <Image source={carfront} style={[styles.orderSummaryImage]} />
                    </View>
                  </View>
                  <Text style={styles.bookingCount}>Mood</Text>
                  <Text
                    style={[
                      styles.subCount,
                      { textAlign: 'center' },
                    ]}>{`${user.name} will either host or visit you`}</Text>
                </View>
              </View>
            </View>

            <View>
              <View style={{ flexDirection: 'row', marginTop: heightToDp(3) }}>
                <View style={styles.OrderSummaryContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ paddingRight: 9 }}>
                      <Image source={favourites} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                    </View>
                    <View>
                      <Text style={styles.subCount}>Follower</Text>
                      <Text style={styles.subCount}>0</Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ paddingRight: 7 }}>
                      <Image source={star} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                    </View>
                    <View>
                      <Text style={styles.subCount}>Ratings</Text>
                      <Text style={styles.subCount}>0 (0)</Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ paddingRight: 7 }}>
                      <Image source={LocationAway} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                    </View>
                    <View>
                      <Text style={styles.subCount}>0.1 kms</Text>
                      <Text style={styles.subCount}>away</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <Tabs selectedTab={txt => setSubHeading(txt)} DATA={DATA} />
        </View>

        <View style={{ marginTop: heightToDp(4.5) }}>
          {DATA2.map((item, index) => {
            return (
              <ConsumerSubCatCard
                key={index}
                cat={item.cat}
                price={item.price}
                time={item.time}
                details={item.details}
              />
            );
          })}
        </View>
        <Button
          title={'Continue'}
          btnStyle={{ marginBottom: heightToDp(5.5), marginTop: heightToDp(3.5) }}
          onPress={() => setModalVisible(true)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistYourProfile;
