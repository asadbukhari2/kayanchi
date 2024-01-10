import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../../utils/Dimensions';
import { fonts } from '../../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      width: width * 0.91,
      alignSelf: 'center',
      borderRadius: 16,
      padding: 16,
      marginTop: 16,
    },
    editTxt: {
      fontFamily: fonts.robo_bold,
      fontSize: 16,
      lineHeight: 22,
      color: theme.linkTxt,
    },
    area: {
      fontFamily: fonts.robo_bold,
      fontSize: 18,
      lineHeight: 22,
      letterSpacing: -0.3,
      color: theme.lightBlack,
    },
    heading: {
      fontFamily: fonts.robo_reg,
      fontSize: 14,
      lineHeight: 16,
      color: theme.addressHeadings,
      marginTop: heightToDp(6.7),
      marginBottom: 6,
    },
    value: {
      fontFamily: fonts.robo_reg,
      fontSize: 16,
      lineHeight: 22,
      color: theme.counterGrey,
    },
  });

  return styles;
};

export default makeStyle;
