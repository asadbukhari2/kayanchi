import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontFamily: fonts.robo_bold,
      fontSize: 16,
      lineHeight: 22,
      color: theme.counterGrey,
      marginLeft: 40,
    },
    icon: {
      fontSize: 20,
      color: theme.profileForwardGrey,
      position: 'absolute',
      right: 0,
    },
  });
  return styles;
};

export default makeStyle;
