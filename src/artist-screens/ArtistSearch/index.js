import React, { useState } from 'react';
import { View, Image, StyleSheet, FlatList, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, ButtonList, Header, HomeCard, SearchCard } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import Feather from 'react-native-vector-icons/Feather';
import makeStyle from './artistSearch.styles';

const theme = useTheme();

const DATA = [
  {
    name: 'Top',
  },
  {
    name: '24/7',
  },
  {
    name: 'Booking',
  },
  {
    name: 'Booking',
  },
];

const CARD_DATA = [
  {
    name: 'Nabeelas',
    popular: false,
    distance: '4.5 km',
    address: 'DHA Ittehad commercial...',
    rating: 4.5,
    totalReviews: 3,
    status: 'travelling',
    availability: '24/7',
  },
  {
    name: 'Narmeens',
    popular: true,
    distance: '4.5 km',
    address: 'DHA Ittehad commercial...',
    rating: 4.5,
    totalReviews: 3,
    status: 'hosting',
    availability: '24/7',
  },
  {
    name: 'Rizwans',
    popular: false,
    distance: '4.5 km',
    address: 'DHA Ittehad commercial...',
    rating: 4.5,
    totalReviews: 3,
    status: 'travelling',
    availability: 'booking only',
  },
  {
    name: 'Mehaks',
    popular: false,
    distance: '4.5 km',
    address: 'DHA Ittehad commercial...',
    rating: 4.5,
    totalReviews: 3,
    status: 'hosting',
    availability: 'not available',
  },
  {
    name: 'Rizwans',
    popular: false,
    distance: '4.5 km',
    address: 'DHA Ittehad commercial...',
    rating: 4.5,
    totalReviews: 3,
    status: 'travelling',
    availability: '24/7',
  },
  {
    name: 'Mehaks',
    popular: false,
    distance: '4.5 km',
    address: 'DHA Ittehad commercial...',
    rating: 4.5,
    totalReviews: 3,
    availability: '24/7',
    status: 'hosting',
  },
  {
    name: 'Rizwans',
    popular: false,
    distance: '4.5 km',
    address: 'DHA Ittehad commercial...',
    rating: 4.5,
    totalReviews: 3,
    availability: '24/7',
    status: 'travelling',
  },
  {
    name: 'Mehaks',
    popular: false,
    distance: '4.5 km',
    address: 'DHA Ittehad commercial...',
    rating: 4.5,
    totalReviews: 3,
    availability: 'booking only',
    status: 'hosting',
  },
];

const ArtistSearch = props => {
  const [searchKeyword, setSearchKeyword] = useState('');
const styles = makeStyle(theme)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <Feather name={'search'} style={styles.icon} />
          </TouchableOpacity>
          <TextInput
            value={searchKeyword}
            onChangeText={txt => setSearchKeyword(txt)}
            style={styles.inputBox}
            placeholder={'search…'}
            placeholderTextColor={theme.darkBlack}
          />
        </View>
        <TouchableOpacity style={styles.filterView}>
          <Image source={require('../../assets/filter.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <ButtonList
          DATA={DATA}
          selectedBackgroundColor={theme.green}
          backgroundColor={theme.homeBackground}
          textColor={theme.genderGrey}
        />
      </View>
      <SearchCard onPress={() => props.navigation.navigate('Artist')} DATA={CARD_DATA} />
    </SafeAreaView>
  );
};



export default ArtistSearch;
