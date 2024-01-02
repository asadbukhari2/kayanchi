import { StyleSheet } from 'react-native';
import { heightToDp, width } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    bottomTxt: {
      fontFamily: fonts.robo_reg,
      fontSize: 14,
      lineHeight: 22,
      color: theme.darkBlack,
    },
    bottomTxtView: {
      width: width * 0.868,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: heightToDp(7.8),
      marginTop: heightToDp(4.5),
      position: 'absolute',
      bottom: heightToDp(14),
    },
    btn: {
      position: 'absolute',
      bottom: heightToDp(5.5),
    },
  });
  return styles;
};

export default makeStyle;
