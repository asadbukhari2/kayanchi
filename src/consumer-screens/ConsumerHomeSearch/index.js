import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, HomeCard, SearchBox } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import ArtistItem from '../../components/ArtistItem';
import HorizantalStepIndicator from '../../components/HorizantalStepIndicator';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { Fetch } from '../../utils/APIservice';
import CardSkeleton from './components/CardSkeleton';
// import CardSkeleton from './components/Skelton';
// import api from '../../utils/APIservice';

const hair = require('../../assets/HairDark.png');
const face = require('../../assets/FaceDark.png');
const waxing = require('../../assets/BodyDark.png');
const Massages = require('../../assets/SpaDark.png');
const Botox = require('../../assets/TreatDark.png');
const booking = require('../../assets/booking.png');
const beauty_color = require('../../assets/beauty_color.png');
const topOffer = require('../../assets/topOffer.png');
const Mask_group = require('../../assets/Mask_group.png');
const popular_image = require('../../assets/popular_image.png');
const ondemandSearch = require('../../assets/ondemandSearch.png');
const People_flying = require('../../assets/People_flying.png');
const bookingSearch = require('../../assets/bookingSearch.png');
const theme = useTheme();


const DATA = [
  {
    name: 'Top',
    imageLink: topOffer,
  },
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
const data = ['Cart', 'Delivery Address', 'Order Summary', 'Payment Method', 'Track'];

const ConsumerHomeSearch = props => {
  const { searchKeyword: searchText, category } = props.route.params;
  const auth = useSelector(state => state.auth);
  console.log('token', auth);
  const [searchKeyword, setSearchKeyword] = useState(searchText);
  const [searchCategory, setSearchCategory] = useState(category);
  const [isLoading, setIsLoading] = useState(false)
  // const [clickedIndex, setClickedIndex] = useState(0);
  const [artistData, setArtistData] = useState([]);
  useEffect(() => {
    setSearchKeyword(searchText);
    setSearchCategory(category)
    filterdData(auth.userDetails?.token, category.length > 0 ? category.length : 'Top');
    console.log('auth.userDetails---->', auth.userDetails.token);
  }, [props.route])

  useEffect(() => {
    filterdData(auth.userDetails?.token, searchCategory);
    console.log('this is the seaech category', searchCategory);
  }, [searchCategory])
  const filterdData = async (token, cat) => {
    try {
      setIsLoading(true)
      let res = await Fetch.get(`/api/search?keyword=&coords={"longitude": 24.823916, "latitude": 67.141875}&filter=${cat}&distance=5516`, token);
      let resData = await res.json();
      setArtistData(resData);
      setIsLoading(false)
      console.log('this is the resData', resData);
      return resData;
    } catch (error) {
      setIsLoading(false)
      console.log('Network request failed. Error:', error);

      throw error;
    }
  };

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
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => setSearchCategory(item.name)}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: searchCategory === item.name ? '#5EAC66' : '#EEEEEE',
      }}>
      <Image source={item.imageLink} style={{ width: 12.5, height: 16, resizeMode: 'cover', marginRight: 5 }} />
      <Text
        style={{
          color: searchCategory === item.name ? 'white' : '#0F2851',
          fontFamily: fonts.robo_med,
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 90 }}>
        <Header backBtn title="Serach" />
        <SearchBox
          value={searchKeyword}
          onChange={txt => setSearchKeyword(txt)}
          placeholder={'Haircut'}
          onSearch={() => props.navigation.navigate('HomeStack', { screen: 'Search' })}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: widthToDp(5),
            marginTop: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#84668C',
              paddingVertical: heightToDp(5),
              borderWidth: 1,
              paddingHorizontal: widthToDp(7),
              borderColor: '#67506D',
              borderRadius: 25,
            }}>
            <Image source={ondemandSearch} style={{ height: 40, width: 36 }} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: fonts.robo_med,
                color: '#FAE5FF',
              }}>
              On-Demand
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: heightToDp(5),
              borderWidth: 1,
              paddingHorizontal: widthToDp(7.4),
              borderColor: '#84668C',
              borderRadius: 25,
            }}>
            <Image source={bookingSearch} style={{ height: 38, width: 29, marginRight: 10 }} />
            <Text
              style={{
                color: '#0F2851',
                fontSize: 15,
                fontFamily: fonts.robo_med,
              }}>
              Booking
            </Text>
          </View>
        </View>

        <View style={{ marginLeft: widthToDp(5) }}>
          <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.name} horizontal />
        </View>

        {/* <HorizantalStepIndicator data={data} /> */}

        {/* <FlatList
          data={artistData}
          renderItem={({item}) => <ArtistItem {...item} />}
          keyExtractor={(item, index) => index.toString()}
        /> */}
        {isLoading ? (<CardSkeleton />) : artistData.length > 0 && artistData?.map(item => (
          <ArtistItem item={item} />
        ))}
        <View style={styles.inviteContainer}>
          <View style={styles.InviteFriend}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontFamily: fonts.hk_bold,
              }}>
              Invite a friend & get 15% off right now!
            </Text>
            <Text style={{ color: '#D8B29B', fontSize: 13, paddingVertical: 10 }}>{'Learn more   >'}</Text>
          </View>
          <View>
            <Image source={People_flying} style={{ height: 94, width: 94, resizeMode: 'cover' }} />
          </View>
        </View>
      </ScrollView>
      {/* <Button
        title={'Continue'}
        btnStyle={styles.btn}
        onPress={() => props.navigation.navigate('Search')}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
    paddingTop: heightToDp(4),
  },
  discover: {
    backgroundColor: 'white',
    width: width * 0.42,
    borderRadius: 10,
    height: heightToDp(40),
  },
  chart: {
    backgroundColor: 'white',
    width: width * 0.45,
    borderRadius: 10,
    flex: 1,
    alignItems: 'stretch',
    paddingLeft: 10,
  },
  InviteFriend: {
    backgroundColor: '#67506D',
    width: widthToDp(65),
    padding: 10,
    borderRadius: 10,
  },
  inviteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: widthToDp(5),
    backgroundColor: 'white',
  },
  containerContent: {
    width: width * 0.93,
    flexDirection: 'row',
    height: heightToDp(40),
    marginHorizontal: widthToDp(4),
    borderRadius: 10,
    overflow: 'hidden', // Ensure content doesn't overflow the container
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    height: heightToDp(31),
    padding: 5,
  },
  distance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  explorContainer: { flexDirection: 'row', marginHorizontal: widthToDp(4) },
  logoView: {
    flexDirection: 'row',
    height: heightToDp(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buzzTxt: {
    fontSize: 20,
    color: '#2F3A58',
    marginLeft: widthToDp(5),
    marginVertical: 10,
  },
  images: { width: widthToDp(33), height: heightToDp(37), resizeMode: 'cover' },
  text: {
    backgroundColor: '#587c5c',
    color: 'white',
    padding: 5,
    fontSize: 11,
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
    fontFamily: fonts.hk_medium,
    fontSize: 20,
    lineHeight: 24,
    color: theme.lightBlack,
    // width: width * 0.868,
    alignSelf: 'center',
    marginVertical: heightToDp(1.5),
  },
});

export default ConsumerHomeSearch;
