import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
import { useNavigation } from '@react-navigation/native';
const star = require('../../assets/star_yellow.png');

const ArtistTreatmentCard = ({ name, rating, reviews, expertise, orders, imageSource }) => {
  const navigation = useNavigation();

  const handleArtistProfileDetails = () => {
    // ConsumerArtistDetails
    navigation.navigate('ConsumerHomeStack', { screen: 'ConsumerArtistDetails' });
  };
  return (
    <View style={styles.artistContainer}>
      <Image source={imageSource} style={styles.artistImage} />
      <Text style={{ color: '#84668C', fontSize: 18, fontFamily: fonts.robo_bold, marginLeft: 7 }}>1</Text>
      <View style={styles.artistInfo}>
        <View style={styles.artistHeader}>
          <Text style={styles.artistName}>{name}</Text>
          <Image source={star} style={styles.starIcon} />
          <Text style={styles.artistRating}>{rating}</Text>
          <Text style={styles.artistReviews}>({reviews})</Text>
        </View>
        <Text style={styles.artistExpertise}>{expertise}</Text>
        <Text style={styles.artistOrders}>
          Completed {orders} orders{'\n'}with promos & discounts
        </Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.viewStyle}>View</Text>
        <Text onPress={() => handleArtistProfileDetails()} style={[styles.viewStyle, styles.profileLink]}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  artistContainer: { flexDirection: 'row', marginHorizontal: widthToDp(5), marginTop: 10 },
  artistImage: {
    height: 73,
    width: 71,
    borderRadius: 10,
  },
  artistInfo: {
    flex: 1,
    marginLeft: 7,
  },
  artistHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  artistName: {
    // fontWeight: '700',
    fontFamily: fonts.robo_bold,
    fontSize: 14,
    color: '#2F3A58',
  },
  starIcon: {
    height: 14,
    width: 13,
    marginLeft: 5,
  },
  artistRating: {
    color: '#333333',
    fontFamily: fonts.hk_regular,
    marginLeft: 5,
  },
  artistReviews: {
    color: '#9A9A9A',
    fontSize: 13,
    fontFamily: fonts.robo_reg,
  },
  artistExpertise: {
    fontSize: 14,
    color: '#67718C',
    marginBottom: 3,
    fontFamily: fonts.robo_med,
  },
  artistOrders: {
    fontSize: 12,
    color: '#67718C',
    fontFamily: fonts.robo_med,
  },
  //   viewContainer: {
  //     alignItems: 'flex-end',
  //   },
  viewStyle: {
    backgroundColor: '#84668C',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    color: 'white',
  },
  profileLink: {
    marginTop: 10,
  },
});

export default ArtistTreatmentCard;
