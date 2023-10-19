import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const theme = useTheme();

const index = props => {
  const { DATA, onPress } = props;

  return DATA ? (
    <FlatList
      data={DATA}
      keyExtractor={({ item, index }) => index}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.cardView}>
            <View style={styles.imgView}>
              {item.popular && <Image source={require('../../assets/popularBadge.png')} style={styles.popular} />}
            </View>
            <View style={styles.rightView}>
              <View>
                <View style={styles.firstRow}>
                  <View style={styles.straightRow}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.straightRow}>
                      <FontAwesome name={'star'} style={styles.starIcon} />
                      <Text style={styles.rating}>{item.rating}</Text>
                      <Text style={styles.address}>
                        {'('}
                        {item.totalReviews}
                        {')'}
                      </Text>
                    </View>
                    {/* {item.popular && (
                      <Image
                        source={require('../../assets/popularBadge.png')}
                        style={styles.popular}
                      />
                    )} */}
                  </View>
                  <View style={styles.straightRow}>
                    <Text style={styles.distance}>{item.distance}</Text>
                    <View
                      style={[
                        styles.dot,
                        {
                          backgroundColor:
                            item.availability == '24/7'
                              ? theme.primary
                              : item.availability == 'booking only'
                              ? theme.green
                              : item.availability == 'not available'
                              ? theme.red
                              : null,
                        },
                      ]}
                    />
                  </View>
                </View>
                <View style={[styles.straightRow, { marginLeft: widthToDp(1) }]}>
                  <Fontisto name={'map-marker-alt'} style={styles.icon} />
                  <Text style={styles.address}>{item.address}</Text>
                </View>
              </View>
              <View style={[styles.straightRow, { alignSelf: 'flex-end' }]}>
                <Image
                  source={require('../../assets/travelling.png')}
                  style={[
                    styles.travelling,
                    {
                      tintColor: item.status == 'travelling' ? theme.primary : theme.genderGrey,
                    },
                  ]}
                />
                <Image
                  source={require('../../assets/hosting.png')}
                  style={[
                    styles.hosting,
                    {
                      tintColor: item.status == 'hosting' ? theme.primary : theme.genderGrey,
                    },
                  ]}
                />
              </View>
            </View>
            <View style={styles.rightLine} />
          </TouchableOpacity>
        );
      }}
    />
  ) : null;
};

export default index;

const styles = StyleSheet.create({
  cardView: {
    width: width * 0.91,
    height: heightToDp(28.9),
    borderRadius: 10,
    backgroundColor: theme.background,
    alignSelf: 'center',
    marginBottom: heightToDp(4.5),
    flexDirection: 'row',
  },
  imgView: {
    height: heightToDp(28.9),
    width: widthToDp(27.2),
    backgroundColor: theme.inputText,
    borderRadius: 10,
  },
  rightView: {
    flex: 1,
    justifyContent: 'space-between',
    padding: heightToDp(2.5),
    paddingRight: widthToDp(4.5),
  },
  name: {
    fontFamily: fonts.segoi,
    fontSize: 16,
    lineHeight: 21.28,
    color: theme.lightBlack,
    maxWidth: widthToDp(25),
  },
  distance: {
    fontFamily: fonts.myriad,
    fontSize: 12,
    lineHeight: 14.4,
    color: theme.lightBlack,
  },
  address: {
    fontFamily: fonts.robo_reg,
    fontSize: 12,
    lineHeight: 14.06,
    color: theme.genderGrey,
  },
  rating: {
    fontFamily: fonts.myriad,
    fontSize: 16,
    lineHeight: 19.2,
    color: theme.yellow,
    marginLeft: widthToDp(2),
    marginRight: 2,
  },
  reviews: {
    fontFamily: fonts.myriad,
    fontSize: 14,
    lineHeight: 16.8,
    color: theme.genderGrey,
  },
  icon: {
    fontSize: heightToDp(4.5),
    marginRight: widthToDp(2.6),
    color: theme.genderGrey,
  },
  starIcon: {
    fontSize: heightToDp(4),
    marginLeft: 11,
    color: theme.yellow,
  },
  popular: {
    marginLeft: widthToDp(2.2),
    width: widthToDp(4),
    height: heightToDp(5.15),
    resizeMode: 'cover',
    position: 'absolute',
    right: widthToDp(4.5),
    top: -heightToDp(5.15) / 2,
  },
  dot: {
    height: heightToDp(1.3),
    width: widthToDp(1.3),
    borderRadius: 5 / 2,
    marginLeft: widthToDp(2.2),
    backgroundColor: theme.genderGrey,
  },
  hosting: {
    marginLeft: widthToDp(4.5),
    width: widthToDp(4.7),
    height: heightToDp(4.7),
    resizeMode: 'cover',
  },
  travelling: {
    width: widthToDp(4.4),
    height: heightToDp(4),
    resizeMode: 'cover',
  },
  lastRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: widthToDp(1),
  },
  straightRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: heightToDp(2),
  },
  rightLine: {
    height: heightToDp(18.5),
    backgroundColor: theme.seaGreen,
    width: 1,
    marginTop: 12,
  },
});
