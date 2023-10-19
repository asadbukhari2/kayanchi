import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
  ScrollView,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { width, heightToDp, widthToDp, height } from '../../utils/Dimensions';
import { ConsumerSubCatCard, Button, Header, Tabs } from '../../components';
import ConsumerProfileSubCatCard from '../../components/ConsumerProfileSubCatCard';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';
const beauty = require('../../assets/beautician.png');
const share = require('../../assets/share.png');
const ondemand = require('../../assets/ondemand.png');
const carfront = require('../../assets/car-front.png');
const host = require('../../assets/host.png');
const favourites = require('../../assets/favourites.png');
const star = require('../../assets/star.png');
const LocationAway = require('../../assets/LocationAway.png');
import { PromotionOfferCard, ArtistSubCatCard } from '../../components';
const theme = useTheme();
import LinearGradient from 'react-native-linear-gradient';

const hair = require('../../assets/HairDark.png');
const car = require('../../assets/car.png');
const face = require('../../assets/FaceDark.png');
const waxing = require('../../assets/BodyDark.png');
const Massages = require('../../assets/SpaDark.png');
const Botox = require('../../assets/TreatDark.png');

const DATA1 = [
  {
    title: 'Personality Girl Event',
    dateFrom: 'June 10',
    dateTo: 'June 25',
    price: 'Rs 2500',
  },
  {
    title: 'Personality Girl Event',
    dateFrom: 'June 10',
    dateTo: 'June 25',
    price: 'Rs 2500',
  },
];

const DATA2 = [
  {
    cat: 'Hair cut',
    price: '1500',
    time: 'Takes 2-3 hours',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit enim eget libero dictumeuismod. Proin vel sem eget diam scelerisque tristique. Pellentesque nec dolor .',
  },
  // {
  //   cat: 'Hydra facial',
  //   price: 'Pkr 1500',
  //   time: 'Takes 2-3 hours',
  //   details:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit enim eget libero dictumeuismod. Proin vel sem eget diam scelerisque tristique. Pellentesque nec dolor .',
  // },
  // {
  //   cat: 'Hydra facial',
  //   price: 'Pkr 1500',
  //   time: 'Takes 2-3 hours',
  //   details:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit enim eget libero dictumeuismod. Proin vel sem eget diam scelerisque tristique. Pellentesque nec dolor .',
  // },
  // {
  //   cat: 'Hydra facial',
  //   price: 'Pkr 1500',
  //   time: 'Takes 2-3 hours',
  //   details:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit enim eget libero dictumeuismod. Proin vel sem eget diam scelerisque tristique. Pellentesque nec dolor .',
  // },
];
const gradientColors = ['#AEAEAE', '#696969'];

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

const ConsumerYourProfile = props => {
  const [subHeading, setSubHeading] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [itemsAddedToCart, setItemsAddedToCart] = useState(false);

  const [selectedItems, setSelectedItems] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [buttonText, setButtonText] = useState('Continue');
  const [buttonTextFlag, setButtonTextFlag] = useState(false);

  const handleAddToCart = () => {
    if (selectedItems > 0) {
      console.log('selecteditem', selectedItems);
      setButtonTextFlag(true);
      setButtonText(`                          View Your Cart         Rs. ${totalCost}`);
      props.navigation.navigate('ConsumerHomeStack', {
        screen: 'ConsumerAddToCart',
      });
      setModalVisible(false);
    } else {
      console.log('selecteditem', selectedItems);
      // setModalVisible(true);
      setModalVisible(false);

      setButtonText('Continue');
    }
  };
  const handleCartNavigation = () => {
    setModalVisible(!modalVisible);
  };

  // useEffect(() => {
  //   if (selectedItems > 0) {
  //     console.log('selecteditem', selectedItems)
  //     setButtonText(`Total: ${selectedItems} items - Rs ${totalCost}`);
  //   } else {
  //     console.log('selecteditem', selectedItems)
  //     setButtonText('Continue');
  //   }
  // }, [selectedItems, totalCost]);

  const updateCountAndPrice = (newCount, totalPrice) => {
    // Update the count and total price state here
    setSelectedItems(newCount);
    setTotalCost(totalPrice);
  };

  const handleSelect = option => {
    setSelected(option);
  };
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
    outputRange: [0, translateYOffset, -widthToDp(10)], // Add translateYOffset
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
      <View
        style={{
          height: getStatusBarHeight(),
          backgroundColor: '#000',
          // position: 'absolute',
          // top: -getStatusBarHeight(),
          zIndex: 100000,
        }}
      />

      <Animated.View style={[styles.header, { height: headerHeight, transform: [{ translateY: opacity }] }]}>
        {/* <View
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
          <Image source={require('../../assets/profile.png')} />
        </View>
         */}
        <Animated.View style={[{ transform: [{ translateY: opacityHeader }] }]}>
          <Header backBtnWhite />
        </Animated.View>

        <TouchableOpacity activeOpacity={0.7} style={styles.followBtn}>
          <Text style={styles.follow}>{'View Profile'}</Text>
        </TouchableOpacity>
        <View style={styles.headerMain}>
          {/* <Text style={styles.artistLocation}>{'3.2 kms away from you'}</Text> */}
          <View style={styles.centerDiv}>
            <Animated.Text
              // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
              style={[styles.artistName, { transform: [{ translateX: translateName }, { scale: scaleName }] }]}>
              {'Rizwan Noor'}
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
                {' Barber '}
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
                {' Expert'}
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
                    style={{
                      fontSize: 9,
                      color: '#747474',
                      fontFamily: fonts.robo_reg,
                      textAlign: 'center',
                    }}>
                    Narmeen is taking orders on-demand
                  </Text>
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
                    style={{
                      fontSize: 9,
                      textAlign: 'center',
                      fontFamily: fonts.robo_reg,
                      color: '#747474',
                    }}>
                    Narmeen will either host or visit you
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: heightToDp(3),
                  alignItems: 'center',
                }}>
                <View style={styles.OrderSummaryContainer2}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ paddingRight: 7 }}>
                      <Image source={favourites} style={{ width: 21, height: 20, resizeMode: 'cover' }} />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 9,
                          fontFamily: fonts.robo_med,
                          color: '#84668C',
                        }}>
                        Follower
                      </Text>
                      <Text
                        style={{
                          fontSize: 9,
                          fontFamily: fonts.robo_med,
                          color: '#2F3A58',
                        }}>
                        0
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: heightToDp(2.7),
                      alignItems: 'center',
                    }}>
                    <View style={{ paddingRight: 7 }}>
                      <Image source={star} style={{ width: 21, height: 20, resizeMode: 'cover' }} />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 9,
                          fontFamily: fonts.robo_med,
                          color: '#84668C',
                        }}>
                        Ratings
                      </Text>
                      <Text
                        style={{
                          fontSize: 9,
                          fontFamily: fonts.robo_med,
                          color: '#2F3A58',
                        }}>
                        0 (0)
                      </Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ paddingRight: 7 }}>
                      <Image source={LocationAway} style={{ width: 21, height: 20, resizeMode: 'cover' }} />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 9,
                          fontFamily: fonts.robo_reg,
                          color: '#747474',
                        }}>
                        0.1 kms
                      </Text>
                      <Text
                        style={{
                          fontSize: 9,
                          fontFamily: fonts.robo_reg,
                          color: '#747474',
                        }}>
                        away
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: heightToDp(6.7) }}>
            <View style={styles.PromotionTxtRow}>
              <Text style={styles.promotionHeading}>{'Promotional Offers'}</Text>
            </View>
            <FlatList
              data={DATA1}
              style={{
                marginTop: heightToDp(4.5),
                marginLeft: widthToDp(4.5),
                marginBottom: 10,
              }}
              horizontal
              keyExtractor={({ item, index }) => index}
              renderItem={({ item, index }) => {
                return (
                  <PromotionOfferCard
                    title={item.title}
                    dateFrom={item.dateFrom}
                    dateTo={item.dateTo}
                    price={item.price}
                  />
                );
              }}
            />
          </View>
          <Tabs selectedTab={txt => setSubHeading(txt)} DATA={DATA} />
        </View>

        <View style={{ marginTop: heightToDp(4.5) }}>
          {DATA2.map((item, index) => {
            return (
              <ConsumerProfileSubCatCard
                key={index}
                cat={item.cat}
                price={item.price}
                time={item.time}
                details={item.details}
                onPress={() => handleItemSelection(item)}
                onCountChange={updateCountAndPrice}
              />
            );
          })}
        </View>
        {buttonTextFlag && (
          <View>
            <Text
              style={{
                color: 'white',
                position: 'absolute',
                bottom: widthToDp(-13.5),
                left: widthToDp(11),
                borderWidth: 1,
                borderColor: 'white',
                paddingHorizontal: 7,
                paddingVertical: 2,
                borderRadius: 50,
                zIndex: 100,
                fontFamily: fonts.robo_bold,
              }}>
              {selectedItems}
            </Text>
          </View>
        )}
        <Button
          title={buttonText}
          btnStyle={{ marginBottom: heightToDp(5.5), marginTop: heightToDp(3.5) }}
          onPress={handleCartNavigation}
        />
      </ScrollView>
      <Modal visible={modalVisible} style={{ flex: 1, margin: 0, justifyContent: 'flex-end' }} animationType="slide">
        <View style={styles.modalContent}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => handleSelect('travel')}>
              <LinearGradient
                colors={selected === 'travel' ? ['#84668C', '#67506D'] : ['#696969', '#AEAEAE']}
                style={styles.childMood}>
                <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
                  <Image source={car} style={{ width: 30, height: 30, marginBottom: 10 }} />
                  <Text
                    style={{
                      color: 'white',
                      lineHeight: 20,
                      fontSize: 16,
                      fontFamily: fonts.robo_med,
                    }}>
                    Travel to{'\n'} their studio
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelect('host')}>
              <LinearGradient
                colors={selected === 'host' ? ['#84668C', '#67506D'] : ['#696969', '#AEAEAE']}
                style={styles.childMood}>
                <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
                  <Image source={host} style={{ width: 30, height: 30, marginBottom: 10 }} />
                  <Text
                    style={{
                      color: 'white',
                      lineHeight: 20,
                      fontSize: 16,
                      fontFamily: fonts.robo_med,
                    }}>
                    Host them{'\n'} at your place
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.btnText}>
            <Button title="Add to cart" onPress={handleAddToCart} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ConsumerYourProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },
  btnText: { marginTop: 10 },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: widthToDp(5),
  },
  modalContainer: {
    flexDirection: 'row',
    // paddingHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  follow: {
    fontSize: 12,
    fontFamily: fonts.robo_reg,
    lineHeight: 14.06,
    color: '#1583D8',
  },
  followBtn: {
    height: heightToDp(6.7),
    width: widthToDp(23.5),
    borderRadius: 30,
    position: 'absolute',
    borderWidth: 1,
    top: heightToDp(5.9),
    right: widthToDp(4.7),
    backgroundColor: theme.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childMood: { borderRadius: 10, width: width * 0.43 },
  artistName: {
    color: theme.background,
    fontSize: 32,
    fontFamily: fonts.hk_bold,
    lineHeight: 38.41,
  },
  artistLocation: {
    color: theme.background,
    fontSize: 14,
    fontFamily: fonts.robo_reg,
    lineHeight: 16.41,
  },
  promotionalContainer: { marginHorizontal: widthToDp(5) },
  promotionHeading: {
    color: '#2F3A58',
    fontSize: 20,
    fontFamily: fonts.hk_bold,
    paddingVertical: 10,
  },
  promotionalbtn: {
    backgroundColor: theme.primary,
    color: '#ffffff',
    width: widthToDp(57),
    padding: 20,
    textAlign: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  promotionaltxt: {
    backgroundColor: '#E7E7E7',
    width: widthToDp(57),
    padding: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  artistRating: {
    color: theme.background,
    fontSize: 16,
    fontFamily: fonts.segoi,
    lineHeight: 21.28,
    marginLeft: 16,
    marginRight: 8.67,
    marginRight: 5,
  },
  starIcon: {
    fontSize: heightToDp(4.7),
    color: theme.yellow,
  },
  icon: {
    fontSize: heightToDp(5),
    color: theme.background,
  },
  linkTxt: {
    fontSize: 16,
    fontFamily: fonts.robo_reg,
    lineHeight: 18.75,
    color: theme.linkTxt,
  },
  promotionTxt: {
    fontSize: 20,
    fontFamily: fonts.hk_medium,
    lineHeight: 24,
    color: theme.lightBlack,
  },

  OrderSummaryContainer2: {
    // paddingTop: heightToDp(5),
    borderRadius: 10,
    paddingVertical: heightToDp(3.5),
    backgroundColor: 'white',
    // marginHorizontal: widthToDp(2),
    paddingHorizontal: widthToDp(2.8),
    width: widthToDp(28.8),
    flexDirection: 'column',
    alignItems: 'center',
  },
  PromotionTxtRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: width * 0.868,
  },
  locationPinView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthToDp(12.2),
    height: heightToDp(12.2),
    borderRadius: heightToDp(12.2) / 2,
    backgroundColor: theme.primary,
    position: 'absolute',
    right: widthToDp(2.8),
    bottom: -heightToDp(6.1),
  },
  dotContainer: {
    width: 5, // Adjust the size of the dot
    height: 5, // Adjust the size of the dot
    borderRadius: 5, // Make it a circle
    backgroundColor: '#ffffff', // Set the desired color for the dot
  },
  headerMain: {
    position: 'absolute',
    left: widthToDp(7.2),
    bottom: heightToDp(7.2),
  },
  header: {
    width: width,
    backgroundColor: '#000',
    position: 'absolute',
    top: getStatusBarHeight(),
    zIndex: 1,
  },
  linkTxt: {
    fontSize: 16,
    fontFamily: fonts.robo_reg,
    lineHeight: 18.75,
    color: theme.linkTxt,
  },
  imageContainer: {
    borderRadius: 50,
    // width: widthToDp(12.5),
    padding: 8,
    justifyContent: 'center',
  },
  promotionTxt: {
    fontSize: 20,
    fontFamily: fonts.hk_medium,
    lineHeight: 24,
    color: theme.lightBlack,
  },
  PromotionTxtRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: width * 0.868,
  },
  centerDiv: { flexDirection: 'row', alignItems: 'center' },
  modalNormalTxt: {
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 18.75,
    color: theme.darkBlack,
  },
  modalTitle: {
    marginBottom: 8,
    fontFamily: fonts.hk_bold,
    fontSize: 20,
    lineHeight: 24,
    color: theme.lightBlack,
  },
  modalTxtView: {
    marginHorizontal: widthToDp(6.7),
    marginTop: heightToDp(6.7),
  },

  OrderSummaryContainer: {
    // paddingTop: heightToDp(5),
    borderRadius: 20,
    paddingVertical: heightToDp(5),
    backgroundColor: 'white',
    // marginHorizontal: widthToDp(2),
    paddingHorizontal: widthToDp(2.8),
    width: widthToDp(28.8),
    flexDirection: 'column',
    alignItems: 'center',
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OrderImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  bookingCount: {
    fontSize: 14,
    color: '#333333',
    marginTop: 6,
    lineHeight: 16,
    // fontWeight: 'bold',
    fontFamily: fonts.robo_med,
  },
  radioOuterCircle: {
    marginRight: 17,
    width: 18,
    height: 18,
    backgroundColor: theme.homeBackground,
    borderWidth: 1.5,
    borderColor: '#736F7B33',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioTxt: {
    fontFamily: fonts.robo_reg,
    fontSize: 17,
    lineHeight: 18.75,
    color: theme.darkBlack,
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.primary,
  },
  imageShare: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 50,
    position: 'absolute',
    right: -110,
    bottom: 0,
  },
  modalMainView: {
    height: height * 0.55,
    backgroundColor: theme.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: width * 0.868,
    position: 'absolute',
    alignSelf: 'center',
    bottom: heightToDp(25),
  },
  hostingImg: {
    width: widthToDp(10.5),
    height: heightToDp(10.5),
    resizeMode: 'cover',
    marginBottom: heightToDp(2.5),
  },
  travellingImg: {
    width: widthToDp(9),
    height: heightToDp(8),
    resizeMode: 'cover',
    marginBottom: heightToDp(2.8),
  },
  modalImg: {
    resizeMode: 'cover',
    alignSelf: 'center',
    height: heightToDp(47.5),
    width: widthToDp(53.7),
    marginTop: -heightToDp(23.75),
  },
  btnView: {
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 21,
    height: 50,
    borderColor: theme.inputText,
  },
  orderSummaryImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  subHeading: {
    fontSize: 17,
    fontFamily: fonts.hk_bold,
    lineHeight: 20.7,
    color: theme.darkBlack,
  },
  subHeadingView: {
    borderBottomColor: theme.primary,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 9,
    borderBottomWidth: 1,
  },
});
