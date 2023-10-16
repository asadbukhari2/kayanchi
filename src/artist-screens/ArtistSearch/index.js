import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Button,
  ButtonList,
  Header,
  HomeCard,
  SearchCard,
} from '../../components';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';
import Feather from 'react-native-vector-icons/Feather';

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
          <Image
            source={require('../../assets/filter.png')}
            style={styles.filterIcon}
          />
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
      <SearchCard
        onPress={() => props.navigation.navigate('Artist')}
        DATA={CARD_DATA}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },
  inputBox: {
    flex: 1,
    fontSize: heightToDp(4.5),
    fontFamily: fonts.robo_reg,
    lineHeight: 18.75,
    color: theme.darkBlack,
  },
  searchBar: {
    flex: 1,
    height: heightToDp(13.3),
    backgroundColor: theme.background,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
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
  searchView: {
    width: width,
    paddingLeft: widthToDp(6.5),
    marginTop: heightToDp(5.5),
    flexDirection: 'row',
    alignSelf: 'center',
    height: heightToDp(13.3),
  },
  icon: {
    fontSize: heightToDp(5),
    padding: heightToDp(3.5),
    color: theme.darkBlack,
  },
  filterView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: widthToDp(6.5),
    paddingRight: widthToDp(5),
  },
  filterIcon: {
    width: widthToDp(3.7),
    height: heightToDp(5.1),
    resizeMode: 'cover',
  },
  buttonView: {
    marginTop: heightToDp(6.6),
    marginBottom: heightToDp(6.4),
    width: width * 0.868,
    alignSelf: 'center',
  },
});

export default ArtistSearch;
