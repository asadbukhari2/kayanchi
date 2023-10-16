import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {useTheme, fonts} from '../../utils/theme';

const theme = useTheme();

const index = props => {
  const {
    onPress,
    containerStyle,
    gradients,
    source,
    title,
    titleStyle,
    imgStyle,
    gradientStart,
    gradientEnd,
  } = props;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <LinearGradient
        colors={gradients ? gradients : ['#86C0E9', '#2764AE']}
        start={gradientStart ? gradientStart : {x: 1, y: 0}}
        end={gradientEnd ? gradientEnd : {x: 0, y: 1}}
        style={[styles.statusBox, containerStyle]}>
        {source && <Image source={source} style={[styles.img, imgStyle]} />}
        <Text style={[styles.statusTxt, titleStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  statusBox: {
    width: widthToDp(41.51),
    height: heightToDp(31.1),
    borderRadius: 10,
    backgroundColor: theme.background,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  statusTxt: {
    fontFamily: fonts.robo_reg,
    fontSize: 14,
    lineHeight: 16.41,
    color: theme.background,
    marginTop: 11,
  },
  img: {
    width: widthToDp(10.7),
    height: heightToDp(10.5),
    tintColor: theme.background,
    resizeMode: 'cover',
  },
});

export default index;
