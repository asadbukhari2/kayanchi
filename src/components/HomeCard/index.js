import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import location from '../../assets/location3.png';
import diamondhomecard from '../../assets/diamondhomecard.png';
const theme = useTheme();

const HomeCard = props => {
  const { imageLink, verified, mainText, subText, popular, style, onPress, rating, title, ratingCount } = props;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.container, style]}>
      {imageLink && <Image source={imageLink} style={styles.images} />}
      <View style={[styles.row, { marginBottom: 4 }]}>
        <Text style={styles.mainText}>{mainText} </Text>
        {verified && <MaterialIcons name={'verified'} style={{ fontSize: heightToDp(5), color: theme.green }} />}
      </View>
      <View style={styles.starContainer}>
        <Image source={require('../../assets/star_yellow.png')} style={styles.image} />
        <Text style={{ paddingHorizontal: 3, color: '#333333', fontFamily: fonts.robo_reg }}>{rating}.0</Text>
        <Text style={{ paddingHorizontal: 2, color: '#9A9A9A', fontFamily: fonts.robo_reg }}>({ratingCount})</Text>
        <Text style={{ color: '#1583D8', fontFamily: fonts.hk_regular, paddingLeft: 4 }}>~$$</Text>
      </View>
      <View style={[styles.row, { marginTop: 4 }]}>
        {title ? (
          <View style={styles.row}>
            <Image source={diamondhomecard} style={styles.icon} />
            <Text style={styles.subText}>{title}</Text>
          </View>
        ) : (
          <View style={styles.row}>
            <Image source={location} style={styles.icon} />
            <Text style={styles.subText}>{subText}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthToDp(37.7),
    height: heightToDp(51.4),
    backgroundColor: theme.background,
    borderRadius: 10,
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    overflow: 'hidden'

  },
  images: {
    width: widthToDp(37.7),
    height: heightToDp(27),
    resizeMode: 'cover',
  },

  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: heightToDp(2),
    marginBottom: 3,
  },
  mainText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: fonts.robo_reg,
    // lineHeight: 18.75,
    color: theme.lightBlack,
  },
  subText: {
    fontSize: 14,
    fontFamily: fonts.hk_regular,
    lineHeight: 16.8,
    color: theme.greyText,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: heightToDp(2.25),
  },
  // popular: {
  //   width: widthToDp(4),
  //   height: heightToDp(5),
  //   position: 'absolute',
  //   zIndex: 999,
  //   right: 9,
  //   top: -heightToDp(2.5),
  // },
  icon: {
    // fontSize: heightToDp(2),]
    width: 15,
    height: 12,
    resizeMode: 'contain',
    marginRight: widthToDp(1.5),
    color: theme.primary,
  },
  image: {
    width: 10,
    height: 10,
  }
});

export default HomeCard;
