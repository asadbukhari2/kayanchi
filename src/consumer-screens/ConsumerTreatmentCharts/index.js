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
import ArtistTreatmentCard from '../../components/ArtistTreatmentCard';
import { Button, Header, HomeCard, SearchBox } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
// import api from '../../utils/APIservice';

const star = require('../../assets/star_yellow.png');
const beauty_color = require('../../assets/beauty_color.png');
const background_image = require('../../assets/background_image.png');
const theme = useTheme();

const ConsumerTreatmentCharts = props => {
  const artistData = [
    {
      name: 'Dr. Farooq A',
      rating: '4.5',
      reviews: 8,
      expertise: 'Wellness Expert • Top',
      orders: 25,
      imageSource: background_image,
    },
    {
      name: 'Dr. Hina A',
      rating: '4.5',
      reviews: 8,
      expertise: 'Treatment Spe.. • New',
      orders: 80,
      imageSource: background_image,
    },
  ];
  const artistDiscovires = useSelector(state => state.common.artistDiscovires);
  console.log(artistDiscovires);
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
  const renderItem = ({ item }) => <ArtistTreatmentCard {...item} />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 90 }}>
        <Header backBtn title="Treatments" />

        <View style={styles.ImageContaier}>
          <Image source={beauty_color} />
        </View>
        <Text style={styles.TopArtist}>Top 10 Artists of the Week</Text>

        <FlatList data={artistDiscovires} renderItem={renderItem} keyExtractor={(item, index) => item.id} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
    // paddingTop: heightToDp(4),
  },
  ViewStyle: {
    backgroundColor: '#84668C',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    color: 'white',
  },
  ImageContaier: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  TopArtist: {
    color: '#668C6A',
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: fonts.robo_med,
  },
  ArtistContainer: { flexDirection: 'row', marginHorizontal: widthToDp(5) },
});

export default ConsumerTreatmentCharts;
