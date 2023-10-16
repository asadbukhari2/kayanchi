import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {heightToDp, widthToDp} from '../../../utils/Dimensions';
import {fonts} from '../../../utils/theme';

const Rankup = ({title, heading, description, rating, total, imageLink}) => {
  return (
    <View style={{paddingVertical: heightToDp(7)}}>
      {title && (
        <Text
          style={[
            styles.title,
            {paddingHorizontal: widthToDp(5)},
            // { paddingTop: heightToDp(5)},
          ]}>
          {title}
        </Text>
      )}
      <View style={styles.containerDetail}>
        <View style={{flex: 1}}>
          {heading && <Text style={styles.heading}>{heading}</Text>}
        </View>
        <View style={{flexDirection:"row", alignItems:"center"}}>
          {imageLink && (
            <Image
              source={imageLink}
              style={{height: 14, width: 15, resizeMode: 'contain'}}
            />
          )}
          <View>
            {rating && (
              <Text style={[styles.rating, {fontFamily: fonts.robo_med}]}>
                {rating}
                <Text style={{color: '#9A9A9A'}}>{total}</Text>
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: widthToDp(5), marginRight: widthToDp(28)}}>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   containerDetail: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     justifyContent: 'space-between',
  //     paddingHorizontal: 16,
  //     paddingVertical: 8,
  //     backgroundColor: '#FFFFFF',
  //     borderRadius: 8,
  //     marginVertical: 8,
  //   },
  containerDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthToDp(5),
  },
  title: {
    fontSize: 16,
    // fontWeight: 'bold',
    fontFamily: fonts.robo_med,
    color: '#0F2851',
  },
  heading: {
    color: '#668C6A',
    fontSize: 14,
    fontFamily: fonts.robo_med,
    paddingVertical: heightToDp(2),
  },
  description: {
    color: '#707993',
    fontSize: 12,
    fontFamily: fonts.robo_reg,
  },
  rating: {
    color: '#84668C',
    fontFamily: fonts.robo_me2,
    marginLeft: widthToDp(1),
  },
});

export default Rankup;
