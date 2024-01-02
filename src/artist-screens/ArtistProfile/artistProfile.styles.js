import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    ideaimage: { width: 24, height: 26, resizeMode: 'contain' },
    feedbackContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      marginTop: 20,
      paddingVertical: 20,
      marginHorizontal: widthToDp(5),
      paddingHorizontal: 20,
      borderRadius: 20,
    },
    you: {
      fontFamily: fonts.hk_bold,
      fontSize: 32,
      lineHeight: 34,
      color: theme.darkBlue,
      marginTop: heightToDp(23.9),
      marginLeft: widthToDp(6.7),
    },
    faqimage: { width: 12, height: 12, resizeMode: 'contain' },

    modalMainView: {
      backgroundColor: '#F7F7F7',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingBottom: 15,
    },
    userProfileView: {
      marginTop: heightToDp(2.2),
      paddingLeft: widthToDp(6.7),
      paddingRight: 8,
      flexDirection: 'row',
      alignItems: 'center',
      width: width * 0.91,
      alignSelf: 'center',
      height: 93,
      backgroundColor: theme.background,
      borderRadius: 10,
    },
    centerDiv: { flexDirection: 'row', alignItems: 'center' },
    artistName: {
      color: theme.background,
      fontSize: 32,
      fontFamily: fonts.hk_bold,
      lineHeight: 38.41,
    },
    artistLocation: {
      color: theme.primary,
      fontSize: 14,
      fontFamily: fonts.robo_reg,
      lineHeight: 16.41,
    },
    dotContainer: {
      width: 5, // Adjust the size of the dot
      height: 5, // Adjust the size of the dot
      borderRadius: 5, // Make it a circle
      backgroundColor: theme.primary, // Set the desired color for the dot
    },
    artistRating: {
      color: theme.primary,
      fontSize: 16,
      fontFamily: fonts.segoi,
      lineHeight: 21.28,
      marginLeft: 16,
      marginRight: 8.67,
    },
    icon: {
      fontSize: 20,
      color: theme.primary,
    },
    btnView: {
      width: width * 0.91,
      backgroundColor: theme.background,
      padding: 16,
      borderRadius: 10,
      alignSelf: 'center',
    },
    userImg: {
      width: widthToDp(12.8),
      height: heightToDp(12.8),
      resizeMode: 'cover',
      borderRadius: heightToDp(12.8) / 2,
    },
    userDetailsView: {
      flex: 1,
      marginLeft: widthToDp(5),
      marginRight: widthToDp(2.2),
    },
    userName: {
      fontFamily: fonts.robo_bold,
      fontSize: 20,
      lineHeight: 26,
      color: theme.darkBlack,
    },
    userContact: {
      fontFamily: fonts.gothic_regular,
      fontSize: 14,
      lineHeight: 20,
      color: theme.profileBlueText,
    },
    inviteBtn: {
      backgroundColor: theme.inviteBtnBlue,
      marginVertical: heightToDp(4.5),
    },
    inviteBtnIcon: {
      fontSize: 20,
      color: theme.background,
      marginRight: widthToDp(2.2),
    },
    heading: {
      fontFamily: fonts.robo_med,
      fontSize: 14,
      lineHeight: 16.41,
      color: theme.counterGrey,
      marginLeft: widthToDp(4.5),
      marginTop: heightToDp(6.7),
      marginBottom: heightToDp(2, 2),
    },
  });
  return styles;
};

export default makeStyle;
