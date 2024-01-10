import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { heightToDp, widthToDp } from '../../../utils/Dimensions';
import { fonts, useTheme } from '../../../utils/theme';
import makeStyle from './rankup.styles';
const theme = useTheme()
const Rankup = ({ title, heading, description, rating, total, imageLink }) => {
  const styles = makeStyle(theme)
  return (
    <View style={{ paddingVertical: heightToDp(7) }}>
      {title && (
        <Text
          style={[
            styles.title,
            { paddingHorizontal: widthToDp(5) },
            // { paddingTop: heightToDp(5)},
          ]}>
          {title}
        </Text>
      )}
      <View style={styles.containerDetail}>
        <View style={{ flex: 1 }}>{heading && <Text style={styles.heading}>{heading}</Text>}</View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {imageLink && <Image source={imageLink} style={{ height: 14, width: 15, resizeMode: 'contain' }} />}
          <View>
            {rating && (
              <Text style={[styles.rating, { fontFamily: fonts.robo_med }]}>
                {rating}
                <Text style={{ color: '#9A9A9A' }}>{total}</Text>
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: widthToDp(5), marginRight: widthToDp(28) }}>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </View>
  );
};



export default Rankup;
