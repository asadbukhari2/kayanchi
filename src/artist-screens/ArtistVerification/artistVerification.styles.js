import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    skipStyling: {
      // height: 100,
      marginVertical: heightToDp(5),
      width: widthToDp(100),
      flex: 0,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnText: { marginVertical: heightToDp(4) },
    filePicker: {
      marginTop: 20,
      height: 100,
      backgroundColor: 'white',
      borderRadius: 10,
      width: widthToDp(90),
      marginLeft: widthToDp(5),
      flex: 0,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fileText: {
      // backgroundColor: "red",
      color: '#1683D7',
      fontFamily: fonts.robo_reg,
      // fontWeight: 400,
      fontSize: 14,
    },
    imageContainer: {
      position: 'relative',
      width: widthToDp(90),
      height: 100,
      borderRadius: 10,
      overflow: 'hidden', // Make sure label doesn't overflow the container
    },
    pendingLabelContainer: {
      height: 100,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      width: widthToDp(90),
      position: 'absolute',
      top: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    approvalIcon: {
      width: 20,
      height: 20,
      marginRight: 5,
    },
    pendingLabelText: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 4,
      color: 'white',
      fontSize: 12,
    },

    parentGigVersion: {
      marginTop: 25,
    },
    gigVersion: {
      flex: 0,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    gigVersionText: {
      fontSize: 16,
      marginHorizontal: 24,
      fontFamily: fonts.robo_reg,
      color: theme.darkBlack,
      marginTop: 8,
      lineHeight: 18.75,
      width: width * 0.5,
    },
    container: {
      flex: 1,
      backgroundColor: theme.darkGray,
      paddingTop: heightToDp(7),
    },
    skipView: {
      position: 'absolute',
      bottom: heightToDp(23),
      alignSelf: 'center',
    },
    btn: {
      // position: 'absolute',
      // bottom: heightToDp(0),
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
      // color: theme.darkBlack,
      color: '#67718C',
      marginTop: 8,
      lineHeight: 18.75,
    },
    title: {
      fontSize: 34,
      marginHorizontal: 24,
      fontFamily: fonts.hk_bold,
      color: theme.lightBlack,
      // marginTop: 23,
      // lineHeight: 28.13,
    },
  });
  return styles;
};

export default makeStyle;
