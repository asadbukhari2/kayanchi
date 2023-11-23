import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Animated, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { width, heightToDp, widthToDp, height } from '../../utils/Dimensions';
import { ConsumerSubCatCard, Button, Header, Tabs } from '../../components';

import { useSelector } from 'react-redux';
import makeStyle from './artistyourprofile.styles';
const beauty = require('../../assets/beautician.png');
const share = require('../../assets/share.png');
const ondemand = require('../../assets/ondemand.png');
const booking = require('../../assets/booking.png');
const favourites = require('../../assets/favourites.png');
const star = require('../../assets/star.png');
const LocationAway = require('../../assets/LocationAway.png');

const headerHeight = heightToDp(57.5);
const headerFinalHeight = heightToDp(25);

const ArtistYourProfile = props => {
  const [tabsData, setTabsData] = useState([]);
  const [subHeading, setSubHeading] = useState('');
  // const [modalVisible, setModalVisible] = useState(false);

  const theme = useTheme();
  const styles = makeStyle(theme);

  const { services, categories } = useSelector(state => state.common);
  const auth = useSelector(state => state.auth);
  const { name } = auth.user;
  const { followers, title, level, rating, rating_count, hosting_mood, travel_mood, availability_status } =
    auth.profile;

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

  console.log(services);
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

        <Animated.View style={[{ transform: [{ translateY: opacityHeader }] }]}>
          <Header backBtnWhite />
        </Animated.View>

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
                    {availability_status.includes('on_demand') && (
                      <View style={[styles.imageContainer, { backgroundColor: theme.brown }]}>
                        <Image source={ondemand} style={styles.orderSummaryImage} />
                      </View>
                    )}
                    {availability_status.includes('booking_only') && (
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
                    {name} is{' '}
                    {availability_status?.map((_, id) => {
                      return `${_.split('_').join(' ')}${availability_status.length - 1 !== id ? ', ' : ''}`;
                    })}
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
                <View style={styles.OrderSummaryContainer}>
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

          {/* <Tabs selectedTab={txt => setSubHeading(txt)} DATA={DATA} /> */}
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
        {/* <Button
          title={'Continue'}
          btnStyle={{ marginBottom: heightToDp(5.5), marginTop: heightToDp(3.5) }}
          onPress={() => setModalVisible(true)}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistYourProfile;
