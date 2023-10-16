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
  ArtistSubCatCard,
  Button,
  GradientRadio,
  Header,
  PromotionOfferCard,
  Tabs,
} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Modal from 'react-native-modal';

const theme = useTheme();

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
  },
  {
    name: 'Face',
  },
  {
    name: 'Skin Care',
  },
  {
    name: 'Spa',
  },
  {
    name: 'Hand Care',
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
const headerFinalHeight = heightToDp(20);

const Artist = props => {
  const [preferenceStatus, setPreferenceStatus] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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

  const translateName = scrollY.interpolate({
    inputRange: [0, offset / 2, offset],
    outputRange: [0, -10, -widthToDp(10) + headerFinalHeight],
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
          top: -getStatusBarHeight(),
          zIndex: 100000,
        }}
      />
      <Animated.View
        style={[
          styles.header,
          {height: headerHeight, transform: [{translateY: opacity}]},
        ]}>
        <Animated.View style={[{transform: [{translateY: opacityHeader}]}]}>
          <Header backBtnWhite />
        </Animated.View>
        <TouchableOpacity activeOpacity={0.7} style={styles.followBtn}>
          <Text style={styles.follow}>{'Follow'}</Text>
        </TouchableOpacity>
        <View style={styles.headerMain}>
          {/* <Text style={styles.artistLocation}>{'3.2 kms away from you'}</Text> */}
          <Animated.Text
            // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
            style={[
              styles.artistLocation,
              {transform: [{translateY: opacity}]},
            ]}>
            {'3.2 kms away from you'}
          </Animated.Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Animated.Text
              // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
              style={[
                styles.artistName,
                {transform: [{translateX: translateName}, {scale: scaleName}]},
              ]}>
              {'Narmeen Iqbal'}
            </Animated.Text>
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
              {'4.5'}
            </Animated.Text>
            <AntDesign name={'star'} style={styles.starIcon} />
          </View>
        </View>
        <View style={styles.locationPinView}>
          <Fontisto name={'map-marker-alt'} style={styles.icon} />
        </View>
      </Animated.View>
      <ScrollView
        scrollEventThrottle={10}
        style={{height: height}}
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}>
        <View style={{marginTop: headerHeight}}>
          <Tabs selectedTab={txt => setSubHeading(txt)} DATA={DATA} />
        </View>
        <View style={{marginTop: heightToDp(6.7)}}>
          <View style={styles.PromotionTxtRow}>
            <Text style={styles.promotionTxt}>{'Promotional Offers'}</Text>
            <Text style={styles.linkTxt}>{'View all'}</Text>
          </View>
          <FlatList
            data={DATA1}
            style={{marginTop: heightToDp(4.5), marginLeft: widthToDp(4.5)}}
            horizontal
            keyExtractor={({item, index}) => index}
            renderItem={({item, index}) => {
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
        <View style={styles.btnView}>
          <View style={styles.subHeadingView}>
            <Text style={styles.subHeading}>{subHeading}</Text>
          </View>
        </View>
        <View style={{marginTop: heightToDp(4.5)}}>
          {DATA2.map((item, index) => {
            return (
              <ArtistSubCatCard
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
          btnStyle={{marginBottom: heightToDp(5.5), marginTop: heightToDp(3.5)}}
          onPress={() => setModalVisible(true)}
        />
      </ScrollView>
      <Modal
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
            title={'Continue'}
            btnStyle={{position: 'absolute', bottom: heightToDp(5.5)}}
            onPress={() =>
              props.navigation.navigate('ProfileStack', {screen: 'Address'})
            }
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Artist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },
  follow: {
    fontSize: 12,
    fontFamily: fonts.robo_reg,
    lineHeight: 14.06,
    color: theme.background,
  },
  followBtn: {
    height: heightToDp(6.7),
    width: widthToDp(23.5),
    borderRadius: 30,
    position: 'absolute',
    borderWidth: 1,
    top: heightToDp(5.9),
    right: widthToDp(4.7),
    borderColor: theme.lightGreen,
    backgroundColor: theme.green,
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
