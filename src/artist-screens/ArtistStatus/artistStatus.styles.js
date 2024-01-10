import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 24,
      fontFamily: fonts.robo_reg,
      lineHeight: 28.13,
      color: theme.lightBlack,
    },
    txt: {
      fontSize: 16,
      fontFamily: fonts.robo_med,
      lineHeight: 18.75,
      color: theme.darkBlack,
      marginTop: heightToDp(4.5),
    },
    center: {
      width: width * 0.868,
      alignSelf: 'center',
    },
  });

  return styles;
};

export default makeStyle;
