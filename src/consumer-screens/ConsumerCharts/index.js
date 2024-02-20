import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, HomeCard, SearchBox } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
// import api from '../../utils/APIservice';

const waxing = require('../../assets/Waxing.png');
const hair = require('../../assets/HairDark.png');
const face = require('../../assets/FaceDark.png');
const Massages = require('../../assets/Massages.png');
const TreatDark = require('../../assets/TreatDark.png');
const glowing_star = require('../../assets/glowing_star.png');
const fire = require('../../assets/fire.png');
const beautician = require('../../assets/beauty_color.png');
const favourite = require('../../assets/favourite.png');
const theme = useTheme();

const DATA = [
  {
    name: 'Hair',
    imageLink: hair,
    image2: fire,
    text: 'Most Ordered',
    screen: 'ConsumerGigDetailHair',
  },
  {
    name: 'Face',
    imageLink: face,
    image2: glowing_star,
    text: 'Most Rated',
    screen: 'ConsumerPromoDetailsPage',
  },
  {
    name: 'Treatment',
    imageLink: TreatDark,
    screen: 'ConsumerTreatmentCharts',
  },
  {
    name: 'Spa',
    imageLink: Massages,
    screen: 'ConsumerGigDetailPage',
  },
  {
    name: 'Body',
    imageLink: waxing,
    screen: 'ConsumerGigGlowMakeup',
  },
];
// navigate('ConsumerHomeStack', { screen: ConsumerGigDetailHair })}
const ConsumerCharts = props => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('ConsumerHomeStack', { screen: item.screen })}>
      <View style={styles.item}>
        <Image source={item.imageLink} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
        {item.image2 && item.text && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#668C6A',
              padding: 5,
              borderRadius: 20,
              width: widthToDp(26),
            }}>
            <Image source={item.image2} style={{ height: 15, width: 13, marginRight: 5 }} />
            <Text style={{ color: 'white', fontSize: 9 }}>{item.text}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 90 }}>
        <Header backBtn />

        <Text
          style={{
            color: '#193356',
            fontSize: 40,
            fontFamily: fonts.hk_bold,
            marginHorizontal: widthToDp(5),
          }}>
          Charts
        </Text>
        <Text
          style={{
            color: '#67718C',
            fontSize: 16,
            fontFamily: fonts.robo_reg,
            marginLeft: widthToDp(5),
            marginRight: widthToDp(25),
          }}>
          Meet the trend setters of this week.{' '}
        </Text>
        <FlatList data={DATA} renderItem={item => renderItem(item)} keyExtractor={item => item.name} numColumns={2} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
    paddingTop: heightToDp(4),
  },
  item: {
    width: width * 0.44,
    margin: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    // paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  text: {
    marginTop: 10,
    fontFamily: fonts.robo_med,
    color: '#0F2851',
    // fontWeight: 'bold',
    fontSize: 23,
  },
});

export default ConsumerCharts;
