import { StyleSheet } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const makeStyle = theme => {
  const styles = StyleSheet.create({
    loading: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      marginTop: 50,
    },
    loadingText: {
      color: theme.dark,
    },
  });

  return styles;
};

export default makeStyle;
