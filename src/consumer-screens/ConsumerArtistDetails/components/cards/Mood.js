import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../styles/Mood.style';
import travel_white from '../../../../assets/travel_white.png';
import hosting_white from '../../../../assets/hosting_white.png';
const Mood = ({ travel_mood, hosting_mood, name }) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.iconContainer]}>
        {hosting_mood && (
          <View style={[styles.moodIconBg, styles.marginRight5]}>
            <Image style={[styles.moodIcon]} source={hosting_white} />
          </View>
        )}
        {travel_mood && (
          <View style={[styles.moodIconBg]}>
            <Image style={[styles.moodIcon]} source={travel_white} />
          </View>
        )}
      </View>
      <View>
        <Text
          style={[
            styles.fontSize18,
            styles.colorBlack,
            styles.fontWeightSemiBold,
            styles.marginTop5,
            ,
            styles.textCenter,
          ]}>
          Mood
        </Text>
        <Text style={[styles.textLightGray, styles.textCenter]}>{name} will either visit or host you</Text>
      </View>
    </View>
  );
};

export default Mood;
