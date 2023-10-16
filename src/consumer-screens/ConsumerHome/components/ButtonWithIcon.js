import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {heightToDp, width} from '../../../utils/Dimensions';
import {fonts, useTheme} from '../../../utils/theme';

const theme = useTheme();

const ButtonWithIcon = props => {
  const {btnStyle, titleStyle, title, onPress, disable, icon, url} = props;
  return (
    <LinearGradient
      style={[styles.container, btnStyle]}
      colors={['#84668C', '#42275A']}>
      <TouchableOpacity
        disabled={disable}
        activeOpacity={0.7}
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        onPress={onPress}>
        <Image
          style={{
            width: 24,
            height: 18,
            resizeMode: 'contain',
            marginRight: 10,
          }}
          source={url}
        />
        <Text style={[styles.txt, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    width: width * 0.91,
    height: heightToDp(13.5),
    borderRadius: 24.3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  txt: {
    fontSize: 14,
    lineHeight: 16.41,
    color: theme.background,
    fontFamily: fonts.robo_bold,
  },
});

export default ButtonWithIcon;
