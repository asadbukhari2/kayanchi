import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: heightToDp(8),
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
      height: heightToDp(79.95),
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
      color: theme.darkBlack,
      marginTop: 8,
      marginRight: widthToDp(29),

      lineHeight: 18.75,
    },
    title: {
      fontSize: 24,
      marginHorizontal: 24,
      fontFamily: fonts.hk_bold,
      color: theme.lightBlack,
      marginTop: 23,
      lineHeight: 28.13,
    },
  });
  return styles;
};

export default makeStyle;
