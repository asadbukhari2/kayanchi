import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    imageContainer: {
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
    },
    btn: {
      marginVertical: widthToDp(5),
    },
    heading: {
      fontSize: 24,
      color: '#2F3A58',
      fontFamily: fonts.hk_bold,
      paddingHorizontal: widthToDp(4),
      paddingVertical: heightToDp(3),
    },
    description: {
      paddingHorizontal: widthToDp(4),
      marginRight: widthToDp(18),
      color: '#67718C',
      fontSize: 16,
      fontFamily: fonts.robo_reg,
    },
    gigContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: widthToDp(5),
    },
    text: {
      backgroundColor: '#D9D9D9',
      paddingVertical: 3,
      paddingHorizontal: 5,
      borderRadius: 10,
      fontSize: 12,
      marginRight: 15,
      color: theme.dark,
    },
    subHeading: {
      fontSize: 16,
      lineHeight: 18,
      color: '#ffffff',
      paddingTop: heightToDp(15),
      paddingBottom: 7,
    },

    Discount: {
      borderRadius: 10,
      width: 190,
      height: 130,
      marginHorizontal: widthToDp(1),
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginTop: 10,
    },

    percentTag: {
      backgroundColor: '#FAE5FF',
      color: '#000',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 20,
    },
  });

  return styles;
};

export default makeStyle;
