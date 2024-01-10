import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.homeBackground,
    },

    parentUpload: {
      marginTop: 10,
      paddingBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    // upload: {
    //   backgroundColor: '#FFFFFF',
    //   width: 100,
    //   height: 100,
    //   borderRadius: 10,
    //   flex: 0,
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   resizeMode: 'cover',
    // },
    // uploadText: {
    //   textAlign: 'center',

    //   fontSize: 14,
    //   // marginHorizontal: 24,
    //   fontFamily: fonts.robo_reg,
    //   marginTop: 8,
    //   lineHeight: 22,
    //   color: '#1682D6',
    // },
    imageWrapper: {
      marginHorizontal: 8,
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
      borderRadius: 8,
      borderWidth: 2,
      borderColor: '#ddd',
    },
    genRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width * 0.91,
      alignSelf: 'center',

      marginTop: heightToDp(4.5),
    },
    genView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width * 0.91,
      alignSelf: 'center',
      marginTop: heightToDp(4.5),
      color: '#ffffff',
    },
    genTxt: { color: '#ffffff', marginLeft: 6 },
    categoryItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    genBtn: {
      // flex: 1,
      width: widthToDp(27.5),
      height: heightToDp(9.7),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 24,
      color: '#ffffff',
    },
    welcomeTxt: {
      fontSize: 34,
      fontFamily: fonts.hk_bold,
      color: '#2F3A58',
    },
    Diploma: {
      backgroundColor: '#FFFFFF',
      marginHorizontal: widthToDp(5),
      marginVertical: heightToDp(4),
      borderRadius: 10,
    },
    saveButtonContainer: {
      alignItems: 'center',
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    saveButtonText: { color: '#84668C', fontSize: 12 },
    limitText: { fontSize: 12, paddingRight: 15, paddingLeft: 5, color: '#29AAE2' },
    saveButton: {
      borderWidth: 1,
      borderColor: '#84668C',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 5,
    },
    titleContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    input: { backgroundColor: 'red' },
    titleContainer: {
      marginTop: 10,
      backgroundColor: 'white',
      marginHorizontal: widthToDp(4),
      paddingVertical: 10,
      borderRadius: 10,
    },
    title: { paddingLeft: 10, flex: 1 },
    separator: {
      height: 1,
      backgroundColor: '#EEEEEE',
      marginVertical: 5,
    },
    follow: {
      fontSize: 12,
      fontFamily: fonts.robo_reg,
      lineHeight: 14.06,
      color: '#1583D8',
    },
    gigContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // paddingRight: widthToDp(5),
      marginHorizontal: widthToDp(5),
    },
    heading: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
      // paddingHorizontal: widthToDp(4),
      paddingVertical: heightToDp(3),
    },
    subheading: { fontSize: 16, color: '#333333', fontFamily: fonts.robo_bold },
    DiplomaConatiner: {
      width: width * 0.91,
      flexDirection: 'row',
      paddingVertical: 10,
    },
    followBtn: {
      height: heightToDp(6.7),
      width: widthToDp(23.5),
      borderRadius: 30,
      position: 'absolute',
      borderWidth: 1,
      top: heightToDp(5.9),
      right: widthToDp(4.7),
      backgroundColor: theme.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    artistName: {
      color: theme.background,
      fontSize: 32,
      fontFamily: fonts.hk_bold,
      lineHeight: 38.41,
    },
    artistLocation: {
      color: theme.background,
      fontSize: 14,
      fontFamily: fonts.robo_reg,
      lineHeight: 16.41,
    },
    artistRating: {
      color: theme.background,
      fontSize: 16,
      fontFamily: fonts.segoi,
      lineHeight: 21.28,
      marginLeft: 16,
      marginRight: 8.67,
    },
    starIcon: {
      fontSize: heightToDp(4.7),
      color: theme.yellow,
    },
    icon: {
      fontSize: heightToDp(5),
      color: theme.background,
    },
    dotContainer: {
      width: 5, // Adjust the size of the dot
      height: 5, // Adjust the size of the dot
      borderRadius: 5, // Make it a circle
      backgroundColor: '#ffffff', // Set the desired color for the dot
    },
    headerMain: {
      position: 'absolute',
      left: widthToDp(7.2),
      bottom: heightToDp(7.2),
    },
    header: {
      width: width,
      backgroundColor: '#000',
      position: 'absolute',
      top: getStatusBarHeight(),
      zIndex: 1,
    },
    imageShare: {
      backgroundColor: '#ffffff',
      padding: 10,
      borderRadius: 50,
      position: 'absolute',
      bottom: 0,
      right: -240,
    },
    centerDiv: { flexDirection: 'row', alignItems: 'center' },

    subHeading: {
      fontSize: 17,
      fontFamily: fonts.hk_bold,
      lineHeight: 20.7,
      color: theme.darkBlack,
    },
  });
  return styles;
};

export default makeStyle;
