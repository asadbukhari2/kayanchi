import React, {useState, useRef} from 'react';
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
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fonts, useTheme} from '../../utils/theme';
import {width, heightToDp, widthToDp, height} from '../../utils/Dimensions';
import {
  ConsumerSubCatCard,
  Button,
  GradientRadio,
  Header,
  PromotionOfferCard,
  Tabs,
} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Modal from 'react-native-modal';
import SliderComponent from '../../components/Slider';
const beauty = require('../../assets/beautician.png');
const share = require('../../assets/share.png');
const ondemand = require('../../assets/ondemand.png');
const carfront = require('../../assets/car-front.png');
const host = require('../../assets/host.png');
const favourites = require('../../assets/favourites.png');
const star = require('../../assets/star.png');
const LocationAway = require('../../assets/LocationAway.png');

const theme = useTheme();

const hair = require('../../assets/HairDark.png');
const face = require('../../assets/FaceDark.png');
const waxing = require('../../assets/BodyDark.png');
const Massages = require('../../assets/SpaDark.png');
const Botox = require('../../assets/TreatDark.png');
const orderSummary = [
  {
    bookingCount: 5,
    status: 'Bookings Pending',
    imageSource: share,
  },
  {
    bookingCount: 5,
    status: 'Bookings Confirmed',
    imageSource: share,
  },
  {
    bookingCount: 5,
    status: 'Bookings Completed',
    imageSource: share,
  },
];

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

const DATA = [
  {
    name: 'Hair',
    imageLink: hair
  },
  {
    name: 'Face',
    imageLink: face
  },
  {
    name: 'Body',
    imageLink: waxing
  },
  {
    name: 'Spa',
    imageLink: Massages

  },
  {
    name: 'Treat',
    imageLink: Botox

  },
];

const STATUS_RADIO = [
  {
    source: require('../../assets/hosting4.png'),
    title: "I'm hosting",
  },
  {
    source: require('../../assets/travelling4.png'),
    title: "I'm travelling",
  },
];

const headerHeight = heightToDp(57.5);
const headerFinalHeight = heightToDp(25);

const ConsumerPublishGig = props => {
  const [preferenceStatus, setPreferenceStatus] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

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
      <StatusBar
        animated={true}
        backgroundColor="#000"
        barStyle={'light-content'}
        showHideTransition={'fade'}
      />
      <View
        style={{
          height: getStatusBarHeight(),
          backgroundColor: '#000',
          // position: 'absolute',
            // top: -getStatusBarHeight(),
          zIndex: 100000,
        }}
      />
      <Animated.View
        style={[
          styles.header,
          {height: headerHeight, transform: [{translateY: opacity}]},
        ]}>
        <Animated.View style={[{transform: [{translateY: opacityHeader}]}]}>
          {/* <Header backBtnWhite /> */}
        </Animated.View>
        <TouchableOpacity activeOpacity={0.7} style={styles.followBtn}>
          <Text style={styles.follow}>{'View Profile'}</Text>
        </TouchableOpacity>
        <View style={styles.headerMain}>
          {/* <Text style={styles.artistLocation}>{'3.2 kms away from you'}</Text> */}
          <View style={styles.centerDiv}>
            <Animated.Text
              // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
              style={[
                styles.artistName,
                {transform: [{translateX: translateName}, {scale: scaleName}]},
              ]}>
              {'Narmeen Iqbal'}
            </Animated.Text>
          </View>
          <View style={styles.centerDiv}>
            <Animated.View  style={{
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
            <View style={[styles.centerDiv, {paddingTop: 5}]}>
              <Animated.Text
                // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
                style={[
                  styles.artistLocation,
                  {transform: [{translateY: opacity}]},
                ]}>
                {'  Beautician '}
              </Animated.Text>

              <Animated.View style={[styles.dotContainer, { transform: [{ translateY: opacity }] }]}>
                <Animated.Text
                  // onTextLayout={e => setRatingWidth(e.nativeEvent.lines[0].width)}
                  style={[
                    styles.artistRating,
                    {
                      transform: [
                        {translateX: translateRating},
                        {scale: scaleRating},
                      ],
                    },
                  ]}>
                  {'.'}
                </Animated.Text>
              </Animated.View>
              <Animated.Text
                // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
                style={[
                  styles.artistLocation,
                  {transform: [{translateY: opacity}]},
                ]}>
                {' New Artist'}
              </Animated.Text>
            </View>

            <Animated.View style={[styles.imageShare,{ transform: [{ translateY: opacity }] }]}>
              <Image
                source={share}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            </Animated.View>
          </View>
        </View>
      </Animated.View>

      <ScrollView
        scrollEventThrottle={10}
        style={{height: height}}
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}>
        <View style={{marginTop: headerHeight}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: heightToDp(3),
                  marginLeft: widthToDp(4),
                }}>
                <View style={styles.OrderSummaryContainer}>
                  <View
                    style={[
                      styles.imageContainer,
                      {backgroundColor: '#A77246'},
                    ]}>
                    <Image source={ondemand} style={styles.orderSummaryImage} />
                  </View>
                  <Text style={styles.bookingCount}>Avaiability</Text>
                  <Text style={{fontSize: 9}}>
                    Narmeen is taking orders on-demand
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <View style={{flexDirection: 'row', margin: widthToDp(3)}}>
                <View style={styles.OrderSummaryContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={[
                        styles.imageContainer,
                        {backgroundColor: '#1583D8'},
                      ]}>
                      <Image source={host} style={styles.orderSummaryImage} />
                    </View>
                    <View
                      style={[
                        styles.imageContainer,
                        {marginLeft: 5, backgroundColor: '#1583D8'},
                      ]}>
                      <Image
                        source={carfront}
                        style={[styles.orderSummaryImage]}
                      />
                    </View>
                  </View>
                  <Text style={styles.bookingCount}>Mood</Text>
                  <Text style={{fontSize: 9}}>
                    Narmeen will either host or visit you
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <View style={{flexDirection: 'row', marginTop: heightToDp(3)}}>
                <View style={styles.OrderSummaryContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{paddingRight: 9}}>
                      <Image
                        source={favourites}
                        style={{width: 25, height: 25, resizeMode: 'contain'}}
                      />
                    </View>
                    <View>
                      <Text style={{fontSize: 10}}>Follower</Text>
                      <Text style={{fontSize: 10}}>0</Text>
                    </View>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <View style={{paddingRight: 7}}>
                      <Image
                        source={star}
                        style={{width: 25, height: 25, resizeMode: 'contain'}}
                      />
                    </View>
                    <View>
                      <Text style={{fontSize: 10}}>Ratings</Text>
                      <Text style={{fontSize: 10}}>0 (0)</Text>
                    </View>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <View style={{paddingRight: 7}}>
                      <Image
                        source={LocationAway}
                        style={{width: 25, height: 25, resizeMode: 'contain'}}
                      />
                    </View>
                    <View>
                      <Text style={{fontSize: 10}}>0.1 kms</Text>
                      <Text style={{fontSize: 10}}>away</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 8,
              marginHorizontal: widthToDp(5),
              marginTop: heightToDp(5),
              backgroundColor: '#ffffff',
              borderRadius: 10,
            }}>
            <View>
              <TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: '#2F3A57',
                      paddingBottom: 4,
                    }}>
                    Suggested for you
                  </Text>
                </View>
              </TouchableOpacity>
              <Text style={{fontWeight: 'bold'}}>
                Almost there! just a few most things
              </Text>
            </View>
            {/* slider */}
            <View style={{marginVertical: heightToDp(2)}}>
              <SliderComponent
                min={0}
                max={100}
                value={sliderValue}
                onChange={handleSliderChange}
                colorSlider={theme.primary}
                radius={10}
              />
            </View>
            <Text style={{color: '#67718C', fontSize: 12}}>
              Complete 2 more steps to finish your profile
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#1583D8',
                  fontSize: 16,
                  paddingVertical: heightToDp(3),
                }}>
                Update profile
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.promotionalContainer}>
            <Text style={styles.promotionHeading}>Promotional Offers</Text>
            <Text style={styles.promotionaltxt}>
              Create more than one basic gig to activate promotional offers
            </Text>
            <Text style={styles.promotionalbtn}>Make another gig</Text>
          </View>
          <Tabs selectedTab={txt => setSubHeading(txt)} DATA={DATA} />
        </View>

        {/* <View style={styles.btnView}>
          <View style={styles.subHeadingView}>
            <Text style={styles.subHeading}>{subHeading}</Text>
          </View>
        </View> */}
        {/* Avaiability */}

        <View style={{marginTop: heightToDp(4.5)}}>
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
          title={'Go to home'}
          btnStyle={{marginBottom: heightToDp(5.5), marginTop: heightToDp(3.5)}}
          onPress={() => setModalVisible(true)}
          
        />
      </ScrollView>
      {/* <Modal
        coverScreen={false}
        isVisible={modalVisible}
        style={{flex: 1, margin: 0, justifyContent: 'flex-end'}}
        onSwipeComplete={() => setModalVisible(!modalVisible)}
        swipeDirection={['down']}>
        <View style={styles.modalMainView}>
          <Image
            source={require('../../assets/onBoarding.png')}
            style={styles.modalImg}
          />

          <View style={styles.modalTxtView}>
            <Text style={styles.modalTitle}>Travelling or hosting?</Text>
            <Text style={styles.modalNormalTxt}>
              Please choose Hosting or Travelling to conitnue with the order
              process
            </Text>
          </View>

          <View style={styles.radioContainer}>
            {STATUS_RADIO.map((item, index) => {
              return (
                <GradientRadio
                  key={index}
                  title={item.title}
                  source={item.source}
                  onPress={() => setPreferenceStatus(item.title)}
                  titleStyle={
                    preferenceStatus == item.title
                      ? null
                      : {color: theme.lightBlack}
                  }
                  imgStyle={
                    preferenceStatus == item.title
                      ? null
                      : {tintColor: theme.lightBlack}
                  }
                  containerStyle={
                    preferenceStatus == item.title
                      ? null
                      : {
                          borderWidth: 1,
                          borderColor: 'rgba(132, 102, 140, 0.15)',
                        }
                  }
                  gradients={
                    preferenceStatus == item.title
                      ? null
                      : ['rgba(0,0,0,0.1)', theme.background]
                  }
                />
              );
            })}
          </View>
          <Button
            title={'Go to Home'}
            btnStyle={{position: 'absolute', bottom: heightToDp(5.5)}}
            onPress={() =>
              props.navigation.navigate('ConsumerHomeStack', {screen: 'ConsumerGigMainPage'})
            }
          />
        </View>
      </Modal> */}
    </SafeAreaView>
  );
};

export default ConsumerPublishGig;

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
  promotionalContainer: {marginHorizontal: widthToDp(5)},
  promotionHeading: {
    color: '#2F3A58',
    fontSize: 20,
    fontWeight: 'bold',
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
  centerDiv: {flexDirection: 'row', alignItems: 'center'},
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
    fontWeight: 'bold',
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
