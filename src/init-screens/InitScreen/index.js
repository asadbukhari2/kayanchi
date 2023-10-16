import React from 'react';
import {StyleSheet, Image, Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '../../components';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';

import {useDispatch} from 'react-redux';
import {testUpdateIsArtist} from '../../redux/actions';
const theme = useTheme();

export default function InitScreen() {
  const dispatch = useDispatch();

  function gotoConsumer() {
    dispatch(testUpdateIsArtist({isArtist: false, isConsumer: true}));
  }

  function gotoArtist() {
    dispatch(testUpdateIsArtist({isArtist: true, isConsumer: false}));
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Image
          source={require('../../assets/welcome.png')}
          style={styles.img}
        />
        <Text style={styles.heading}>
          Join <Text style={{color: theme.primary}}>Kaynchi</Text>
        </Text>
        <Text style={styles.txt}>lorem .</Text>
        <Button
          title={'Continue With Artist'}
          btnStyle={[styles.whiteBtn, {marginTop: heightToDp(6.8)}]}
          titleStyle={styles.blackText}
          onPress={() => gotoArtist()}
        />
        <Button
          title={'Continue with Consumer'}
          btnStyle={[styles.whiteBtn, {marginTop: heightToDp(4.5)}]}
          titleStyle={styles.blackText}
          onPress={() => gotoConsumer()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  img: {
    width: 299.02,
    height: 199,
    marginTop: 14,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  heading: {
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.robo_med,
    fontSize: 28,
    lineHeight: 32.81,
    color: theme.darkBlack,
    marginTop: heightToDp(6.75),
  },
  txt: {
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 18.75,
    color: theme.darkBlack,
    marginTop: heightToDp(2.2),
  },
  whiteBtn: {
    backgroundColor: theme.background,
    borderWidth: 1,
    borderColor: theme.primary,
  },
  blackText: {
    color: theme.darkBlack,
  },
  seperatorContainer: {
    width: width * 0.91,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightToDp(4.5),
  },
  seperator: {
    borderBottomColor: theme.orSeperator,
    borderBottomWidth: 1,
    flex: 1,
  },
});
