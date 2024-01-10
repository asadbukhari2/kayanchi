import React, { useState, useRef } from 'react';
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
import { ArtistSubCatCard, Button, GradientRadio, Header, PromotionOfferCard, Tabs } from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Modal from 'react-native-modal';
import makeStyle from './artist.style';

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
  const styles = makeStyle(theme)
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
      <StatusBar animated={true} backgroundColor="#000" barStyle={'light-content'} showHideTransition={'fade'} />
      <View
        style={{
          height: getStatusBarHeight(),
          backgroundColor: '#000',
          // position: 'absolute',
          top: -getStatusBarHeight(),
          zIndex: 100000,
        }}
      />
      <Animated.View style={[styles.header, { height: headerHeight, transform: [{ translateY: opacity }] }]}>
        <Animated.View style={[{ transform: [{ translateY: opacityHeader }] }]}>
          <Header backBtnWhite />
        </Animated.View>
        <TouchableOpacity activeOpacity={0.7} style={styles.followBtn}>
          <Text style={styles.follow}>{'Follow'}</Text>
        </TouchableOpacity>
        <View style={styles.headerMain}>
          {/* <Text style={styles.artistLocation}>{'3.2 kms away from you'}</Text> */}
          <Animated.Text
            // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
            style={[styles.artistLocation, { transform: [{ translateY: opacity }] }]}>
            {'3.2 kms away from you'}
          </Animated.Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Animated.Text
              // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
              style={[styles.artistName, { transform: [{ translateX: translateName }, { scale: scaleName }] }]}>
              {'Narmeen Iqbal'}
            </Animated.Text>
            <Animated.Text
              // onTextLayout={e => setRatingWidth(e.nativeEvent.lines[0].width)}
              style={[
                styles.artistRating,
                {
                  transform: [{ translateX: translateRating }, { scale: scaleRating }],
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
        style={{ height: height }}
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}>
        <View style={{ marginTop: headerHeight }}>
          <Tabs selectedTab={txt => setSubHeading(txt)} DATA={DATA} />
        </View>
        <View style={{ marginTop: heightToDp(6.7) }}>
          <View style={styles.PromotionTxtRow}>
            <Text style={styles.promotionTxt}>{'Promotional Offers'}</Text>
            <Text style={styles.linkTxt}>{'View all'}</Text>
          </View>
          <FlatList
            data={DATA1}
            style={{ marginTop: heightToDp(4.5), marginLeft: widthToDp(4.5) }}
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
        <View style={styles.btnView}>
          <View style={styles.subHeadingView}>
            <Text style={styles.subHeading}>{subHeading}</Text>
          </View>
        </View>
        <View style={{ marginTop: heightToDp(4.5) }}>
          {DATA2.map((item, index) => {
            return (
              <ArtistSubCatCard key={index} cat={item.cat} price={item.price} time={item.time} details={item.details} />
            );
          })}
        </View>
        <Button
          title={'Continue'}
          btnStyle={{ marginBottom: heightToDp(5.5), marginTop: heightToDp(3.5) }}
          onPress={() => setModalVisible(true)}
        />
      </ScrollView>
      <Modal
        coverScreen={false}
        isVisible={modalVisible}
        style={{ flex: 1, margin: 0, justifyContent: 'flex-end' }}
        onSwipeComplete={() => setModalVisible(!modalVisible)}
        swipeDirection={['down']}>
        <View style={styles.modalMainView}>
          <Image source={require('../../assets/onBoarding.png')} style={styles.modalImg} />

          <View style={styles.modalTxtView}>
            <Text style={styles.modalTitle}>Travelling or hosting?</Text>
            <Text style={styles.modalNormalTxt}>
              Please choose Hosting or Travelling to conitnue with the order process
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
                  titleStyle={preferenceStatus === item.title ? null : { color: theme.lightBlack }}
                  imgStyle={preferenceStatus === item.title ? null : { tintColor: theme.lightBlack }}
                  containerStyle={
                    preferenceStatus === item.title
                      ? null
                      : {
                          borderWidth: 1,
                          borderColor: 'rgba(132, 102, 140, 0.15)',
                        }
                  }
                  gradients={preferenceStatus === item.title ? null : ['rgba(0,0,0,0.1)', theme.background]}
                />
              );
            })}
          </View>
          <Button
            title={'Continue'}
            btnStyle={{ position: 'absolute', bottom: heightToDp(5.5) }}
            onPress={() => props.navigation.navigate('ProfileStack', { screen: 'Address' })}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Artist;


