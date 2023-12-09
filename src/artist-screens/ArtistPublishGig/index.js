import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { width, heightToDp, widthToDp, height } from '../../utils/Dimensions';
import { ConsumerSubCatCard, Button, Tabs } from '../../components';

import SliderComponent from '../../components/Slider';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getCertificates, getExperiences, getPortfolio } from '../../redux/actions/commonActions';
const beauty = require('../../assets/beautician.png');
const share = require('../../assets/share.png');
const ondemand = require('../../assets/ondemand.png');
const booking = require('../../assets/booking.png');

const favourites = require('../../assets/favourites.png');
const star = require('../../assets/star.png');
const LocationAway = require('../../assets/LocationAway.png');

const theme = useTheme();

const headerHeight = heightToDp(57.5);
const headerFinalHeight = heightToDp(25);

const ArtistPublishGig = () => {
  const [tabsData, setTabsData] = useState([]);
  const [subHeading, setSubHeading] = useState('');

  const [sliderValue, setSliderValue] = useState(33);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { services, categories } = useSelector(state => state.common);
  const auth = useSelector(state => state.auth);

  const { followers, title, level, rating, rating_count, bio, hosting_mood, travel_mood, availability_status } =
    auth.profile;
  const { name } = auth.user;

  const handleSliderChange = newValue => {
    setSliderValue(newValue);
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  const offset = headerHeight - headerFinalHeight;

  const opacity = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -offset],
    extrapolate: 'clamp',
  });

  // const opacityHeader = scrollY.interpolate({
  //   inputRange: [0, offset],
  //   outputRange: [0, offset],
  //   extrapolate: 'clamp',
  // });

  const translateYOffset = 0; // Adjust this value to control the space from the top

  const translateName = scrollY.interpolate({
    inputRange: [0, offset / 2, offset],
    outputRange: [0, translateYOffset, -widthToDp(5)], // Add translateYOffset
    extrapolate: 'clamp',
  });

  const scaleName = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, 0.8],
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

  const updateHandler = () => {
    navigation.navigate('ArtistUpdateProfile', { title, bio });
  };

  const handleGoToHome = () => {
    dispatch({ type: 'SIGN_UP_SUCCESS_TOKEN_SET' });
  };

  const handleTabButtonClick = txt => {
    setSubHeading(txt);
    const filtered = services.filter(_ => txt.includes(_.category_name));

    const data = filtered[0]?.category_services?.map(_ => {
      const d = {
        name: _.name,
        price: _.amount,
        time: _.duration,
        details: _.description,
        discountPercentage: _.discount_percentage,
        discountedPrice: _.discounted_price,
        isDiscount: _.is_discount,
        isHosting: _.is_hosting,
        isTravelling: _.is_travelling,
        id: _.id,
        catName: _.category.name,
      };

      return d;
    });

    data ? setTabsData(data) : setTabsData([]);
  };

  useEffect(() => {
    dispatch(getCertificates(auth.userDetails.token));
    dispatch(getExperiences(auth.userDetails.token));
    dispatch(getPortfolio(auth.userDetails.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    services.length > 0 && handleTabButtonClick(categories[0].name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

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

        <TouchableOpacity activeOpacity={0.7} style={styles.followBtn}>
          <Text style={styles.follow}>View Profile</Text>
        </TouchableOpacity>
        <View style={styles.headerMain}>
          <View style={styles.centerDiv}>
            <Animated.Text
              style={[styles.artistName, { transform: [{ translateX: translateName }, { scale: scaleName }] }]}>
              {name}
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
              <Animated.Text style={[styles.artistLocation, { transform: [{ translateY: opacity }] }]}>
                {' ' + title + ' '}
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
                {' ' + level}
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
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    {availability_status === 'on_demand' && (
                      <View style={[styles.imageContainer, { backgroundColor: theme.brown }]}>
                        <Image source={ondemand} style={styles.orderSummaryImage} />
                      </View>
                    )}
                    {availability_status === 'booking_only' && (
                      <View style={[styles.imageContainer, { backgroundColor: theme.seaGreen }]}>
                        <Image source={booking} style={styles.orderSummaryImage} />
                      </View>
                    )}
                  </View>
                  <Text style={styles.bookingCount}>Avaiability</Text>
                  <Text
                    style={{
                      fontSize: 9,
                      color: '#747474',
                      fontFamily: fonts.robo_reg,
                      textAlign: 'center',
                    }}>
                    {name} is {availability_status === 'on_demand' ? 'On Demand' : 'Booking Only'}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View style={{ flexDirection: 'row', margin: widthToDp(3) }}>
                <View style={styles.OrderSummaryContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={[styles.imageContainer, { backgroundColor: hosting_mood ? theme.linkTxt : '#ebebeb' }]}>
                      <Image
                        source={hosting_mood ? require('../../assets/host.png') : require('../../assets/host_grey.png')}
                        style={styles.orderSummaryImage}
                      />
                    </View>
                    <View style={[styles.imageContainer, { backgroundColor: travel_mood ? theme.linkTxt : '#ebebeb' }]}>
                      <Image
                        source={travel_mood ? require('../../assets/car.png') : require('../../assets/car-grey.png')}
                        style={styles.orderSummaryImage}
                      />
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
                    {name} will {hosting_mood ? 'host you' : travel_mood ? 'visit you' : 'either host or visit you'}
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
                        {followers ?? 20}
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
                        {rating ?? 0} ({rating_count ?? 0})
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

          <View
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              marginHorizontal: widthToDp(5),
              marginTop: heightToDp(5),
              backgroundColor: '#ffffff',

              borderRadius: 10,
            }}>
            <View>
              <TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{
                      fontFamily: fonts.hk_bold,
                      fontSize: 16,
                      color: '#2F3A57',
                      paddingBottom: widthToDp(4),
                    }}>
                    Suggested for you
                  </Text>
                </View>
              </TouchableOpacity>
              <Text style={{ fontFamily: fonts.robo_bold, color: '#333333' }}>Almost there! just two more things</Text>
            </View>
            {/* slider */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
              <SliderComponent
                min={0}
                max={100}
                value={sliderValue}
                onChange={handleSliderChange}
                colorSlider={theme.primary}
                radius={10}
              />

              <Text
                style={{
                  fontSize: 12,
                  color: '#2F3A58',
                  fontFamily: fonts.robo_reg,
                  marginLeft: 5,
                }}>
                1/3
              </Text>
            </View>
            <Text
              style={{
                color: '#67718C',
                fontSize: 12,
                fontFamily: fonts.robo_med,
              }}>
              {'Fill your profile and verify. You’re done!'}
            </Text>
            <TouchableOpacity onPress={updateHandler}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#1583D8',
                  fontSize: 16,
                  paddingVertical: heightToDp(5),
                  fontFamily: fonts.robo_reg,
                }}>
                Update profile
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.promotionalContainer}>
            <Text style={styles.promotionHeading}>Promotional Offers</Text>
            <Text style={styles.promotionaltxt}>Create more than one basic gig to activate promotional offers</Text>
            <Text style={styles.promotionalbtn} onPress={() => navigation.navigate('ArtistCreateGig')}>
              Make another gig
            </Text>
          </View>
        </View>

        <View style={{ borderBottomWidth: 1, borderColor: theme.inputText }}>
          <Tabs selectedTab={handleTabButtonClick} DATA={categories} />
        </View>

        <View style={{ marginTop: heightToDp(4.5) }}>
          {tabsData.length > 0 ? (
            tabsData.map((item, index) => {
              return (
                <>
                  <ConsumerSubCatCard
                    key={index}
                    cat={item.name}
                    price={item.price}
                    time={item.time}
                    details={item.details}
                    discountPercentage={item.discountPercentage}
                    discountedPrice={item.discountedPrice}
                    {...item}
                  />
                </>
              );
            })
          ) : (
            <Text style={{ color: theme.inputText }}>No Record Found</Text>
          )}
        </View>
        <Button
          title="Go to home"
          btnStyle={{ marginBottom: heightToDp(5.5), marginTop: heightToDp(3.5) }}
          onPress={handleGoToHome}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistPublishGig;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
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
    width: widthToDp(67),
    padding: widthToDp(6),
    fontFamily: fonts.robo_bold,
    textAlign: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  promotionaltxt: {
    backgroundColor: '#E7E7E7',
    color: '#2F3A58',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.robo_reg,
    width: widthToDp(67),
    padding: widthToDp(10),
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
  },
  starIcon: {
    fontSize: heightToDp(4.7),
    color: theme.yellow,
  },
  icon: {
    fontSize: heightToDp(5),
    color: theme.background,
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
    padding: 8,
    margin: 2,
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
    borderRadius: 10,
    paddingVertical: heightToDp(5),
    backgroundColor: 'white',
    // marginHorizontal: widthToDp(2),
    paddingHorizontal: widthToDp(2.8),
    width: widthToDp(28.8),
    flexDirection: 'column',
    alignItems: 'center',
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
    right: -210,
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
    width: 21,
    height: 21,
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
