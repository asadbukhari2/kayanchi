import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import starYellow from '../../assets/star_yellow.png';
import hosting from '../../assets/hosting.png';
import travel from '../../assets/travelling.png';
import { fonts } from '../../utils/theme';
const popular_image = require('../../assets/popular_image.png');

const ArtistItem = ({ item }) => {
  console.log('this is an item', item);
  return (
    <View style={styles.containerContent}>
      <View>
        <Image source={popular_image} style={styles.images} />
      </View>
      <View style={styles.imageContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              color: '#2F3A58',
              fontFamily: fonts.hk_bold,
              fontSize: 16,
            }}>
            {item?.name}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={starYellow} style={{ height: 13, width: 14 }} />
            <Text style={{ paddingHorizontal: 3 }}>{item?.rating}</Text>
            <Text style={{ paddingHorizontal: 2 }}>({item?.rating_count})</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: '#9A9A9A',
              fontSize: 12,
              fontFamily: fonts.robo_reg,
              marginVertical: 3,
            }}>
            {item?.address_text}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: '#1583D8',
              fontSize: 13,
              marginTop: 2,
              fontFamily: fonts.hk_regular,
            }}>
            {item?.title} • {item?.level} <Text style={{ color: '#9A9A9A' }}>{item.price_range === 'low' ? '$' : item.price_range === 'medium' ? '$$' : item.price_range === 'high' ? '$$$' : ''}</Text>
          </Text>
        </View>
        <View style={styles.distance}>
          <Text
            style={{
              color: '#FFFFFF',
              backgroundColor: `${item.availability_status === 'booking_only' ? '#008274' : '#84668C'}`,
              borderRadius: 20,
              paddingVertical: 5,
              paddingHorizontal: 10,
              fontSize: 11,
              fontFamily: fonts.robo_reg,
              marginTop: 8,
            }}>
            {item?.radius_distance}
          </Text>
          <View style={[styles.flex, styles.flexRow, styles.itemsCenter, styles.gap5]}>

            {item.travel_mood && <Image source={travel} style={{ height: 17, width: 19, marginRight: 5, resizeMode: 'cover' }} />}
            {item.hosting_mood && <Image source={hosting} style={{ height: 20, width: 18, resizeMode: 'cover' }} />}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // marginVertical: 10,
    marginHorizontal: widthToDp(4),
    // borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5,
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    marginTop: 8,
    backgroundColor: 'white',
    height: heightToDp(34),
  },
  distance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
  },
  // images: {
  //   height:190,
  //   width: 100, // Ensure the image takes up the full width
  //   resizeMode: 'cover', // You can adjust the resizeMode as needed
  // },
  images: { width: widthToDp(33), height: 170 },
  flex: {
    display: 'flex',
  },
  flexRow: {
    flexDirection: 'row'
  },
  itemsCenter: {
    alignItems: 'center',
  },
  gap5: {
    gap: 8,
  }
});

export default ArtistItem;
