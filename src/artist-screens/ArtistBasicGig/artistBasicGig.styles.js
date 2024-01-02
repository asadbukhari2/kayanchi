import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    gigVersion: {
      marginTop: 30,
    },
    warning: {
      fontSize: 14,
      marginHorizontal: 24,
      fontFamily: fonts.robo_reg,
      color: '#8D8A94',
      marginTop: 8,
      lineHeight: 18.75,
    },
    inputField: {
      backgroundColor: 'white',
      width: widthToDp(90),
      alignSelf: 'center',
      borderRadius: 10,
      paddingHorizontal: 10,
      fontSize: 24,
      fontFamily: fonts.hk_medium,
      color: '#8D8A94',
      marginTop: 8,
    },
    container: {
      flex: 1,
      backgroundColor: theme.white,
    },
    skipView: {
      position: 'absolute',
      bottom: heightToDp(23),
      alignSelf: 'center',
    },
    btn: {
      position: 'absolute',
      bottom: heightToDp(5.5),
    },
    img: {
      resizeMode: 'cover',
      height: heightToDp(59.95),
      width: widthToDp(67.9),
      alignSelf: 'center',
      marginTop: heightToDp(6.7),
    },
    skip: {
      fontSize: 14,
      fontFamily: fonts.robo_reg,
      lineHeight: 16.41,
      color: theme.linkTxt,
    },
    txt: {
      fontSize: 16,
      marginHorizontal: 24,
      fontFamily: fonts.robo_reg,
      color: '#67718C',
      marginTop: 8,
      lineHeight: 18.75,
    },
    title: {
      fontSize: 34,
      marginHorizontal: 24,
      fontFamily: fonts.hk_bold,
      color: theme.lightBlack,
    },
  });

  return styles;
};

export default makeStyle;
