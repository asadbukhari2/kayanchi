import React from 'react';
import { StyleSheet, Image, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { heightToDp, width } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';

import { useDispatch } from 'react-redux';
import { testUpdateIsArtist } from '../../redux/actions';
import { useNavigation } from '@react-navigation/native';

const theme = useTheme();

export default function InitScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  function gotoConsumer() {
    dispatch(testUpdateIsArtist({ isArtist: false, isConsumer: true }));
  }

  function gotoArtist() {
    navigation.navigate('ArtistType');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
        <Image source={require('../../assets/peopleAtSalon.png')} style={styles.img} resizeMode="contain" />
        <Text style={styles.heading}>Grooming Made Easy</Text>
        <Text style={styles.txt}>
          Choose to either join a community of over 500+ artists and studios or avail these services in your area and
          city!
        </Text>
      </ScrollView>
      <View style={styles.bottomCardContainer}>
        <TouchableOpacity style={styles.bottomCard} onPress={gotoConsumer}>
          <Image source={require('../../assets/services.png')} style={styles.cardImg} resizeMode="contain" />
          <Text style={styles.bottomCardTitle}>Find a Service</Text>
          <Text style={styles.desc}>You purchase grooming services on the Marketplace.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomCard} onPress={gotoArtist}>
          <Image source={require('../../assets/artist.png')} style={styles.cardImg} resizeMode="contain" />
          <Text style={styles.bottomCardTitle}>Become an Artist</Text>
          <Text style={styles.desc}>You offer and perform grooming services through Gigs & Promos</Text>
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
  },
  cardImg: {
    width: 84,
    height: 84,
  },
  desc: {
    textAlign: 'center',
  },
  signIn: {
    padding: 16,
    fontSize: 16,
    color: '#1583D8',
  },
});
