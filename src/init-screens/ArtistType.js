import React from 'react';
import { StyleSheet, Image, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightToDp, width } from '../utils/Dimensions';
import { fonts, useTheme } from '../utils/theme';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SET_IS_ARTIST } from '../redux/constants/constants';

const theme = useTheme();

export default function ArtistType(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function gotoArtist() {
    dispatch({ type: SET_IS_ARTIST });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.head}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signIn}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.signIn}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/artistType.png')} style={styles.img} resizeMode="contain" />
        <Text style={styles.heading}>Empower Yourself!</Text>
        <Text style={styles.txt}>
          So glad you made it! Now you can pick to either perform solo or go at it big with your studio and fleet of
          artists!
        </Text>
      </ScrollView>
      <View style={styles.bottomCardContainer}>
        <TouchableOpacity style={styles.bottomCard} onPress={gotoArtist}>
          <Image source={require('../assets/services.png')} style={styles.cardImg} resizeMode="contain" />
          <Text style={styles.bottomCardTitle}>Perform Solo</Text>
          <Text style={styles.desc}>You offer and perform grooming services through Gigs & Promos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomCard} onPress={gotoArtist}>
          <Image source={require('../assets/studioUp.png')} style={styles.cardImg} resizeMode="contain" />
          <Text style={styles.bottomCardTitle}>Become a Studio</Text>
          <Text style={styles.desc}>
            Salons or certain Artists can collaborate with each other & offer more diverse Gigs & Promos
          </Text>
        </TouchableOpacity>
      </View>
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
  head: {
    display: 'flex',
    marginTop: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  bottomCardContainer: {
    flexDirection: 'row',
    height: 260,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    justifyContent: 'space-around',
    backgroundColor: '#8D6997',
  },
  bottomCard: {
    borderColor: 'white',
    width: 170,
    borderWidth: 1,
    padding: 8,
    bottom: 32,
    borderRadius: 12,

    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottomCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 12,
    color: theme.dark,
  },
  cardImg: {
    width: 98,
    height: 84,
  },
  desc: {
    textAlign: 'center',
    color: theme.dark,
  },
  signIn: {
    padding: 16,
    fontSize: 16,
    color: '#1583D8',
  },
});
