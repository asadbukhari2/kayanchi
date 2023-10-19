import { StyleSheet } from 'react-native';
import { heightToDp, width } from './Dimensions';
import { fonts, useTheme } from './theme';

const theme = useTheme();

export const GLOBAL_STYLES = StyleSheet.create({
  stretch: {
    width: '100%',
    height: '100%',
  },
  flex: {
    flex: 1,
  },

  rowFlex: {
    flex: 1,
    flexDirection: 'row',
  },

  rowReverseFlex: {
    flex: 1,
    flexDirection: 'reverse-row',
  },
  columnFlex: {
    flex: 1,
    flexDirection: 'column',
  },
  centerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  centerTopFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  textShadow: {
    textShadowColor: '#000000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  containerWhite: {
    flex: 1,
    backgroundColor: theme.background,
  },
  containerHome: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },
  title: {
    marginTop: heightToDp(5.5),
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.hk_bold,
    fontSize: 34,
    lineHeight: 40.81,
    color: theme.lightBlack,
  },
});
