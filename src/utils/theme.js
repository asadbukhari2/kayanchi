import React from 'react';
import { Appearance } from 'react-native';
import { useSelector } from 'react-redux';
import { store } from '../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const backgroundLight = '#1b0830';
export const backgroundDark = '#020005';
export const foregroundLight = '#744ab4';
export const foregroundDark = '#4b12a0';
export const buttonLight = '#f5e194';
export const buttonDark = '#eed056';

export const fonts = {
  hk_regular: 'hk-grotesk.regular',
  hk_medium: 'hk-grotesk.medium',
  hk_semiBold: 'hk-grotesk.semibold',
  hk_bold: 'hk-grotesk.bold',
  gothic_regular: 'CenturyGothic',
  robo_med: 'Roboto-Medium',
  robo_reg: 'Roboto-Regular',
  robo_bold: 'Roboto-Bold',
  robo_light: 'Roboto-Light',
  myriad: 'MyriadProRegular',
  sans_reg: 'DMSans-Regular',
  sans_bold: 'DMSans-Bold',
};

const darkTheme = {
  primary: '#FFFFFF',
  secondary: '#B13AE6',
  accent: '#FDE10D',
  background: '#292E3F',
  backgroundBright: '#383F55',
  backgroundLight: 'rgba(220, 220, 255, 0.06)',
  backgroundLightGrey: '#373C4E',
  card: '#656565',
  c12: '#4B5166',
  green: '#36D397',
  red: '#D93F3F',
  textColor: '#FFF',
  wCardColor: '#000',
  c3: '#FDE10D',
  iconColor: '#FFF',
  connectCard: '#323748',
  iconBackgroundContainer: '#3B4050',
  buttonPrimaryColor: '#323748',
  graphTxt: '#A3A5AC',
  graphLine: '#FFE30E',
  statTxt: '#FDE10D',
  txtGrey: '#707173',
  walletGrey: '#3B4050',
};

const lightTheme = {
  primary: '#84668C',
  lightPrimary: '#e7befa',
  background: '#FFFFFF',
  darkBlack: '#333333',
  lightBlack: '#2F3A58',
  backIcon: '#67718C',
  linkTxt: '#1583D8',
  inputBottom: '#C4C4C4',
  inputText: '#9A9A9A',
  orSeperator: '#707070',
  genderGrey: '#9A9A9A',
  brown: '#A77246',
  lightBrown: '#D8B29B',
  homeBackground: '#F7F7F7',
  greyText: '#747474',
  green: '#668C6A',
  lightGreen: '#4CD964',
  yellow: '#FF9D2B',
  darkBlue: '#0F2851',
  counterGrey: '#677790',
  profileBlueText: '#193356',
  inviteBtnBlue: '#2764AE',
  profileForwardGrey: '#A1AAB9',
  dark: '#000',
  red: '#B95656',
  seaGreen: '#008274',
  heartRed: '#B00020',
  msgUnReadBadge: '#E7DB47',
  addressHeadings: '#A4ADBC',
  blue: '#29AAE2',
  darkModeText: '#1a1a1a',
  purple: '#84668c',
};

// export const themeAtom = atom({
//   key: 'theme',
//   default: isDarkTheme ? darkTheme : lightTheme,
// });
export const images = {
  //   circle_light: require('../assets/circles-light.png'),
  tabKaynchiIcon: require('../assets/tab_kaynchi.png'),
  tabLocationIcon: require('../assets/tab_locate.png'),
  tabProfileIcon: require('../assets/tab_profile.png'),
  tabHomeIcon: require('../assets/homeIcon.png'),
  tabOrderIcon: require('../assets/orderIcon.png'),

  tabConsumerProfileIcon: require('../assets/person.png'),
  tabConsumerHomeIcon: require('../assets/Home.png'),
  tabConsumerDocumentIcon: require('../assets/document.png'),
  CreateGig: require('../assets/gigColor.png'),
  CreatePromo: require('../assets/promoColor.png'),
};

export const useTheme = isDark => {
  return isDark ? darkTheme : lightTheme;
  // return lightTheme;
};
