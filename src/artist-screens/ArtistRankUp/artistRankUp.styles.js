import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingTop: heightToDp(8),
    },
    welcomeTxt: {
      fontSize: 40,
      color: '#193356',
      fontFamily: fonts.hk_bold,
      paddingHorizontal: widthToDp(4),
    },
    seperator: {
      height: 2,
      backgroundColor: '#DEDEDE',
    },
    new: {
      paddingVertical: heightToDp(5),
      paddingHorizontal: widthToDp(4),
    },
  });

  return styles;
};

export default makeStyle;
