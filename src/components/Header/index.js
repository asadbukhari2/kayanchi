import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import { useNavigation } from '@react-navigation/native';
import {} from 'react-native-safe-area-context';

const theme = useTheme();

const index = props => {
  const navigation = useNavigation();
  const { headerStyle, titleStyle, title, titleShadow, skip, onSkip, backBtn, backBtnWhite, backBtnGrey } = props;

  return (
    <View style={[styles.container, headerStyle]}>
      {(backBtn || backBtnWhite || backBtnGrey) && (
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} style={[styles.backBtn, { left: 0 }]}>
          <Image
            source={require('../../assets/backArrow.png')}
            style={[
              styles.backImg,
              {
                tintColor: backBtnWhite ? theme.background : backBtnGrey ? theme.backIcon : theme.primary,
              },
            ]}
          />
        </TouchableOpacity>
      )}
      {title && titleShadow ? (
        <Text style={[styles.title, styles.textWithShadow, titleStyle]}>{title}</Text>
      ) : title ? (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      ) : null}
      {skip && (
        <TouchableOpacity activeOpacity={0.7} onPress={onSkip} style={[styles.backBtn, { right: 0 }]}>
          <Text style={styles.skip}>skip</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.91,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: heightToDp(14),
    justifyContent: 'center',
  },
  backBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    position: 'absolute',
  },
  backImg: {
    width: widthToDp(6.7),
    height: heightToDp(3.2),
    resizeMode: 'contain',
  },
  title: {
    fontFamily: fonts.hk_medium,
    fontSize: 20,
    lineHeight: 24,
    color: theme.darkBlack,
  },
  skip: {
    fontFamily: fonts.robo_reg,
    fontSize: 14,
    lineHeight: 16.41,
    color: theme.linkTxt,
  },
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },
});

export default index;
