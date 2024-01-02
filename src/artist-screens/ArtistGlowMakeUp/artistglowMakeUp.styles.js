import { StyleSheet } from 'react-native';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.homeBackground,
    },
    backgroundImage: {
      height: heightToDp(90),
      backgroundColor: '#FAE5FF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerButtonContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
    },
    images: {
      width: 25,
      height: 25,
    },
    indicatorView: {
      marginHorizontal: widthToDp(5),
      marginTop: heightToDp(3),
      marginBottom: 15,
    },
    row: { flexDirection: 'row', alignItems: 'center' },

    separator: {
      height: 1,
      backgroundColor: '#EEEEEE',
      marginVertical: 5,
    },
    priceTxt: {
      marginTop: 8,
      color: '#84668C',
      fontSize: 24,
      fontFamily: fonts.hk_bold,
    },
    discountPrice: {
      color: '#9A9A9A',
      fontSize: 10,
      fontFamily: fonts.hk_medium,
      textDecorationLine: 'line-through',
      marginTop: heightToDp(2),
      marginLeft: 5,
    },
  });

  return styles;
};

export default makeStyle;
