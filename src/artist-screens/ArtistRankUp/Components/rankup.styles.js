import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../../utils/Dimensions';
import { fonts } from '../../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    //   containerDetail: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     paddingHorizontal: 16,
    //     paddingVertical: 8,
    //     backgroundColor: '#FFFFFF',
    //     borderRadius: 8,
    //     marginVertical: 8,
    //   },
    containerDetail: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: widthToDp(5),
    },
    title: {
      fontSize: 16,
      // fontWeight: 'bold',
      fontFamily: fonts.robo_med,
      color: '#0F2851',
    },
    heading: {
      color: '#668C6A',
      fontSize: 14,
      fontFamily: fonts.robo_med,
      paddingVertical: heightToDp(2),
    },
    description: {
      color: '#707993',
      fontSize: 12,
      fontFamily: fonts.robo_reg,
    },
    rating: {
      color: '#84668C',
      fontFamily: fonts.robo_me2,
      marginLeft: widthToDp(1),
    },
  });

  return styles;
};

export default makeStyle;
