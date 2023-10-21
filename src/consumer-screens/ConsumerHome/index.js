import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, HomeCard, SearchBox } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import { useSelector } from 'react-redux';
// import api from '../../utils/APIservice';
import FeedBackModal from '../../components/FeedbackModal';

const hair = require('../../assets/HairDark.png');
const feedback = require('../../assets/feedback.png');
const feedback1 = require('../../assets/feedback1.png');
const face = require('../../assets/FaceDark.png');
const waxing = require('../../assets/BodyDark.png');
const Massages = require('../../assets/SpaDark.png');
const Botox = require('../../assets/TreatDark.png');
const dummyHome = require('../../assets/dummyHome.png');
const beauty_color = require('../../assets/beauty_color.png');
const diamond_home = require('../../assets/diamond_home.png');
const Mask_group = require('../../assets/Mask_group.png');
const popular_image = require('../../assets/popular_image.png');
const rose_gold = require('../../assets/rose_gold.png');
const moreImages = require('../../assets/moreImages.png');
const googlemap = require('../../assets/googlemap.png');
import LinearGradient from 'react-native-linear-gradient';

import MultiButton from '../../components/MultiButton';
const theme = useTheme();

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

const ModalData = [
  {
    title: 'will it easy to order?',
    image: feedback,
  },
];
const serviceData = [
  {
    name: 'Mark Removal',
    address_text: '123 Main St',
    location: googlemap,

    // verified: true,
    popular: true,
    imageLink: Mask_group,
  },
  // {
  //   name: 'Service 2',
  //   address_text: '456 Elm St',
  //   // verified: true,
  //   popular: false,
  //   imageLink: eye_face
  // },
];

const popularData = [
  {
    name: 'Rizwan Noor',
    location: diamond_home,

    address_text: 'Barber',
    // verified: true,
    popular: true,
    imageLink: popular_image,
  },
];

const artistData = [
  {
    name: 'Rose Gold',
    location: googlemap,
    subText: 'Gulshan Iqbal',
    // verified: true,
    popular: true,
    imageLink: rose_gold,
  },
];

const ALL = [
  {
    orderNumber: '#334758',
    address: 'itehad lane 8 DHA Phase 6...',
    date: '2 Dec, 2022',
    preference: 'Travelling',
    icon: require('../../assets/car-front.png'),
    status: 'new',
  },
  {
    orderNumber: '#334758',
    address: 'DHA Phase 6...',
    date: '2 Dec, 2022',
    preference: 'Travelling',
    icon: require('../../assets/car-front.png'),
    status: 'new',
  },
  {
    orderNumber: '#334758',
    address: 'DHA Phase 6...',
    date: '2 Dec, 2022',
    preference: 'Travelling',
    icon: require('../../assets/hosting.png'),
    status: 'new',
  },
  {
    orderNumber: '#334758',
    address: 'DHA Phase 6...',
    date: '2 Dec, 2022',
    preference: 'Travelling',
    icon: require('../../assets/hosting.png'),
    status: 'new',
  },
];

const ConsumerHome = props => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [feedbackModalVisible2, setFeedbackModalVisible2] = useState(false);
  const [feedbackModalVisible3, setFeedbackModalVisible3] = useState(false);

  const [service, setService] = useState([]);
  const [artist, setArtist] = useState([]);
  const user = useSelector(state => console.log(state.auth.token));
  // const getService = async () => {
  //   try {
  //     const res = await api.get('/api/service');

  //     console.log(res.data);
  //     setService(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getArtist = async () => {
  //   try {
  //     const res = await api.get('/api/users/artists');

  //     console.log(res.data);
  //     setArtist(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getService();
  //   getArtist();
  // }, []);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    // setFeedbackModalVisible2(true);
    setModalVisible(false);
  };
  const openModal2 = () => {
    setFeedbackModalVisible2(true);
  };

  const closeModal2 = () => {
    setFeedbackModalVisible2(false);
  };
  const openModal3 = () => {
    setFeedbackModalVisible2(true);
  };

  const closeModal3 = () => {
    setFeedbackModalVisible2(false);
  };
  const handleYesClick = () => {
    setFeedbackModalVisible2(true);
    setModalVisible(false);
    console.log('clicked');
  };

  const handleNoClick = () => {
    setModalVisible(false);
    console.log('clicked');
  };
  const handleYesClick2 = () => {
    setFeedbackModalVisible3(true);
    setFeedbackModalVisible2(false);
    console.log('clicked');
  };

  const handleNoClick2 = () => {
    setFeedbackModalVisible3(true);
    setFeedbackModalVisible2(false);
    console.log('clicked');
  };
  const handleYesClick3 = () => {
    setFeedbackModalVisible3(false);
  };

  const handleNoClick3 = () => {
    setFeedbackModalVisible3(false);
    console.log('clicked');
  };
  useEffect(() => {
    console.log('props.route.params', props.route.params);
    const shouldShowFeedbackModal = props.route.params?.showFeedbackModal;
    console.log('showFeedbackModal:', shouldShowFeedbackModal);
    if (shouldShowFeedbackModal) {
      setModalVisible(true);
    }
  }, [props.route.params]);

  const renderOfferingItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('ConsumerHomeStack', {
          screen: 'ConsumerOrderConfirm',
        })
      }>
      <View
        style={{
          width: width * 0.9,
          // backgroundColor:
          //   item.preference === 'Travelling' ? theme.primary : theme.background,
          // borderRadius: widthToDp(4),
          alignSelf: 'center',
          // padding: 16,
          marginVertical: 10,
          marginHorizontal: 10,
        }}>
        <LinearGradient
          colors={['#42275A', '#84668C']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderRadius: widthToDp(4),
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: item.preference === 'Travelling' ? theme.background : theme.darkBlack,
                fontFamily: fonts.robo_bold,
                fontSize: heightToDp(5.1),
                lineHeight: heightToDp(5.9),
              }}>
              {item.orderNumber}
            </Text>
            <View
              style={{
                width: widthToDp(24),
                flexDirection: 'row',
                justifyContent: 'space-between',
                // backgroundColor: 'red',
              }}>
              <Text
                style={{
                  fontFamily: fonts.hk_medium,
                  fontSize: 14,
                  lineHeight: heightToDp(5),
                  // marginRight: 10,
                  color: item.preference === 'Travelling' ? theme.background : theme.darkBlack,
                }}>
                {item.preference}
              </Text>
              <Image
                source={item.icon}
                style={{
                  width: 16,

                  height: 18,
                  tintColor: item.preference === 'Travelling' ? 'white' : 'black',
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 18,
            }}>
            <Text
              style={{
                fontFamily: fonts.robo_reg,
                fontSize: 14,
                marginTop: 10,
                lineHeight: heightToDp(4.3),
                color: item.preference === 'Travelling' ? theme.background : theme.darkBlack,
              }}>
              {item.address}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 9,
              width: widthToDp(50),
            }}>
            <Text
              style={{
                fontFamily: fonts.hk_medium,
                fontSize: 14,
                lineHeight: heightToDp(5),
                color: item.preference === 'Travelling' ? theme.background : theme.darkBlack,
              }}>
              {item.date}
            </Text>
            <Text
              style={{
                fontFamily: fonts.hk_medium,
                fontSize: 14,
                lineHeight: heightToDp(5),
                color: item.preference === 'Travelling' ? theme.background : theme.darkBlack,
              }}>
              {'7:30 - 8:30 AM'}
            </Text>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#EEEEEE',
      }}>
      <Image source={item.imageLink} style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 10 }} />
      <TouchableOpacity>
        <Text style={{ color: '#0F2851', fontFamily: fonts.robo_med }}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 90 }}>
        <View style={styles.logoView}>
          <Image source={require('../../assets/KAYNCHI.png')} style={styles.logo} />
          <Text style={styles.text}>Get 15% off</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: widthToDp(5),
          }}>
          <Text style={[styles.title]}>Your active orders</Text>
          <View>
            <TouchableOpacity>
              <Text style={{ color: '#32aee3' }}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={ALL}
          renderItem={renderOfferingItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />

        <SearchBox
          value={searchKeyword}
          onChange={txt => setSearchKeyword(txt)}
          placeholder={'Find your Artist, salon, or service…'}
          onSearch={() =>
            props.navigation.navigate('ConsumerHomeStack', {
              screen: 'ConsumerHomeSearch',
            })
          }
        />
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.name} horizontal />
        <Text style={styles.buzzTxt}>Explore what's Buzzing</Text>
        <View style={styles.explorContainer}>
          <View style={styles.discover}>
            <Image source={dummyHome} style={{ height: 150, width: 150, resizeMode: 'contain' }} />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('ConsumerHomeStack', {
                  screen: 'ConsumerDisocver',
                })
              }>
              <Text
                style={{
                  color: '#84668C',
                  // fontWeight: '500',
                  fontFamily: fonts.robo_med,
                  fontSize: 16,
                  textAlign: 'center',
                  paddingVertical: 10,
                }}>
                Discover
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.chart, { marginLeft: 10 }]}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('ConsumerHomeStack', {
                  screen: 'ConsumerCharts',
                })
              }>
              <View>
                <Image source={beauty_color} />
              </View>
              <View>
                <Text
                  style={{
                    color: '#84668C',
                    fontFamily: fonts.robo_med,
                    fontSize: 16,
                    marginTop: heightToDp(12),
                  }}>
                  Charts
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#333333',
                      fontFamily: fonts.robo_reg,
                      width: widthToDp(19),
                      // marginRight: widthToDp(17),
                    }}>
                    See who’s setting the trend
                  </Text>
                  <Image source={moreImages} style={{ height: 24, width: 57, marginRight: 10 }} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: widthToDp(5),
          }}>
          <Text style={[styles.title, { marginTop: heightToDp(8.5) }]}>Services you may like</Text>
          <View>
            <TouchableOpacity>
              <Text style={{ color: '#32aee3', fontWeight: fonts.robo_reg }}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={serviceData}
          horizontal
          style={{ marginLeft: widthToDp(4.5) }}
          contentContainerStyle={{ paddingVertical: heightToDp(3) }}
          keyExtractor={({ item, index }) => index}
          renderItem={({ item, index }) => {
            console.log({ item });
            return (
              <HomeCard
                onPress={() => props.navigation.navigate('ConsumerHomeStack', { screen: 'ConsumerGigDetailPage' })}
                style={{ marginRight: widthToDp(2.7) }}
                mainText={item.name}
                location={item.location}
                subText={item.address_text}
                verified={item.verified}
                popular={item.popular}
                imageLink={item.imageLink}
              />
            );
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: widthToDp(5),
          }}>
          <Text style={[styles.title, { marginTop: heightToDp(8.5) }]}>Popular artist in your city</Text>
          <View>
            <TouchableOpacity>
              <Text style={{ color: '#32aee3' }}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={popularData}
          horizontal
          style={{ marginLeft: widthToDp(4.5) }}
          contentContainerStyle={{ paddingVertical: heightToDp(3) }}
          keyExtractor={({ item, index }) => index}
          renderItem={({ item, index }) => {
            return (
              <HomeCard
                onPress={() => props.navigation.navigate('ConsumerHomeStack', { screen: 'Artist' })}
                style={{ marginRight: widthToDp(2.2) }}
                mainText={item.name}
                location={item.location}
                subText={item.address_text}
                verified={item.verified}
                popular={item.popular}
                imageLink={item.imageLink}
              />
            );
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: widthToDp(5),
          }}>
          <Text style={[styles.title, { marginTop: heightToDp(8.5) }]}>Studios around you</Text>
          <View>
            <TouchableOpacity>
              <Text style={{ color: '#32aee3' }}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={artistData}
          horizontal
          style={{ marginLeft: widthToDp(4.5) }}
          contentContainerStyle={{ paddingVertical: heightToDp(3) }}
          keyExtractor={({ item, index }) => index}
          renderItem={({ item, index }) => {
            console.log(item.name);
            return (
              <HomeCard
                style={{ marginRight: widthToDp(2.2) }}
                mainText={item.name}
                location={item.location}
                subText={item.subText}
                verified={item.verified}
                popular={item.popular}
                imageLink={item.imageLink}
              />
            );
          }}
        />
      </ScrollView>
      {/* <Button
        title={'Continue'}
        btnStyle={styles.btn}
        onPress={() => props.navigation.navigate('Search')}
      /> */}
      {/* <Modal
        coverScreen={false}
        isVisible={modalVisible}
        style={{flex: 1, margin: 0, justifyContent: 'flex-end'}}
        onSwipeComplete={() => setModalVisible(!modalVisible)}
        swipeDirection={['down']}>
        <View style={styles.modalMainView}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setModalVisible(false)}
            style={{padding: heightToDp(4.5), position: 'absolute', right: 0}}>
            <Feather name={'x'} style={{fontSize: 20, color: theme.backIcon}} />
          </TouchableOpacity>

          <Text style={styles.headingTxt}>Kaynchi values you!</Text>
          <Text style={styles.subHeadingTxt}>
            Your feedback matters to us. Help us improve Kaynchi.
          </Text>
          <View style={{alignItems: 'center'}}>
            <Image source={feedback} style={styles.imageModal} />
          </View>
          <Text
            style={{
              color: '#2F3A58',
              fontWeight: '500',
              marginHorizontal: widthToDp(5),
            }}>
            Was it easy to order?
          </Text>
          <View style={styles.indicatorView}>
            <View style={styles.row}>
              <MultiButton
                title={'Yes'}
                btnStyle={{backgroundColor: '#67506D'}}
              />
              <MultiButton
                title={'No'}
                btnStyle={{backgroundColor: '#9A9A9A'}}
              />
            </View>
          </View>
        </View>
      </Modal> */}
      <FeedBackModal
        isVisible={modalVisible}
        closeModal={closeModal}
        title="Kaynchi values you!"
        subtitle="Your feedback matters to us. Help us improve Kaynchi."
        imageSource={feedback}
        question="Was it easy to order?"
        onYesClick={handleYesClick}
        onNoClick={handleNoClick}
      />
      <FeedBackModal
        isVisible={feedbackModalVisible2}
        closeModal={closeModal2}
        title="Kaynchi values you!"
        subtitle="Your feedback matters to us. Help us improve Kaynchi."
        imageSource={feedback1}
        question="Did you find the “What’s New” feature on “Home Page” attractive?"
        onYesClick={handleYesClick2}
        onNoClick={handleNoClick2}
      />
      <FeedBackModal
        isVisible={feedbackModalVisible3}
        closeModal={closeModal3}
        title="Kaynchi values you!"
        subtitle="Your feedback matters to us. Help us improve Kaynchi."
        imageSource={feedback1}
        question="Is there something we need to improve?"
        onYesClick={handleYesClick3}
        onNoClick={handleNoClick3}
        textInput={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },
  indicatorView: {
    marginHorizontal: widthToDp(5),
    marginTop: heightToDp(3),
    marginBottom: 15,
  },
  row: { flexDirection: 'row', alignItems: 'center' },

  discover: { backgroundColor: 'white', width: width * 0.42, borderRadius: 10 },
  chart: {
    backgroundColor: 'white',
    width: width * 0.45,
    borderRadius: 10,
    flex: 1,
    // alignItems: 'stretch',
    paddingLeft: 10,
  },
  explorContainer: { flexDirection: 'row', marginHorizontal: widthToDp(4) },
  logoView: {
    flexDirection: 'row',
    height: heightToDp(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageModal: {
    height: heightToDp(70),
    width: widthToDp(70),
    resizeMode: 'contain',
  },
  buzzTxt: {
    fontSize: 20,
    color: '#2F3A58',
    marginLeft: widthToDp(5),
    fontFamily: fonts.hk_bold,
    marginVertical: 10,
  },
  headingTxt: {
    color: '#2F3A58',
    fontSize: 34,
    fontFamily: fonts.hk_bold,
    // fontWeight: '700',
    paddingTop: heightToDp(14),
    marginHorizontal: widthToDp(5),
    width: widthToDp(70),
  },
  subHeadingTxt: {
    color: '#67718C',
    width: widthToDp(70),
    marginHorizontal: widthToDp(5),
  },
  text: {
    backgroundColor: '#587c5c',
    color: 'white',
    fontFamily: fonts.robo_reg,
    paddingHorizontal: 7,
    paddingVertical: 4,
    fontSize: 10,
    borderRadius: 20,
    position: 'absolute',
    right: widthToDp(5),
    top: heightToDp(10),
  },
  logo: {
    width: widthToDp(29.5),
    height: heightToDp(7),
    marginTop: heightToDp(2),
    resizeMode: 'contain',
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
  inputBox: {
    flex: 1,
    fontSize: heightToDp(4.5),
    fontFamily: fonts.robo_reg,
    lineHeight: 18.75,
    color: theme.darkBlack,
    paddingLeft: widthToDp(6.5),
  },
  searchBar: {
    height: heightToDp(13.3),
    width: width * 0.91,
    backgroundColor: theme.background,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    fontSize: heightToDp(5),
    padding: heightToDp(4.5),
    color: theme.primary,
  },
  title: {
    fontFamily: fonts.hk_bold,
    fontSize: 20,
    lineHeight: 24,
    color: theme.lightBlack,
    // width: width * 0.868,
    alignSelf: 'center',
    marginVertical: heightToDp(1.5),
  },
});

export default ConsumerHome;
