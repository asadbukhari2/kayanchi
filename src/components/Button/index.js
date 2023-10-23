import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { heightToDp, width } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';

const theme = useTheme();

const Button = props => {
  const { btnStyle, titleStyle, title, onPress, disable, icon, image, imageStyle, loading } = props;
  console.log('title', title);
  return (
    <TouchableOpacity disabled={disable} activeOpacity={0.7} onPress={onPress} style={[styles.container, btnStyle]}>
      {/* {icon && <Icon name={icon} size={20}  color={blue} />} */}
      {image && <Image source={image} style={imageStyle} resizeMode="contain" />}
      <Text style={[styles.txt, titleStyle]}>{title}</Text>
    </TouchableOpacity>
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
  },
  txt: {
    fontSize: 14,
    lineHeight: 16.41,
    color: theme.background,
    fontFamily: fonts.robo_bold,
  },
});

export default Button;
