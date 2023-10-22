import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { height, heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
import iButton from '../../assets/ibutton.png';
import TravelMoodImage from '../../assets/travel.png';
import HostMoodImage from '../../assets/host.png';
import LinearGradient from 'react-native-linear-gradient';

const theme = useTheme();

const ArtistCreateGig = props => {
  const [selected, setSelected] = useState('basic');
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Create gig'} />
      <View style={styles.gigVersion}>
        <Text style={styles.title}>{'Greetings Farrukh!'}</Text>
      </View>
      <Text style={styles.txt}>{'Time to create your first gig and showcase your skills at Kaynchi.'}</Text>
      <Image style={styles.img} source={require('../../assets/onBoarding.png')} />

      <View style={styles.parentMood}>
        <View style={styles.mood}>
          <View style={styles.moodIbutton}>
            <Image style={{ marginBottom: 20 }} source={iButton}></Image>
            <TouchableOpacity onPress={() => setSelected('basic')}>
              <LinearGradient
                colors={selected == 'basic' ? ['#86C0E9', '#2764AE'] : ['#696969', '#AEAEAE']}
                style={styles.childMood}>
                <Image source={HostMoodImage}></Image>
                <Text style={styles.childMoodHead1}>Create basic gig</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.moodIbutton}>
            <Image style={{ marginBottom: 20 }} source={iButton}></Image>
            <TouchableOpacity onPress={() => setSelected('promotion')}>
              <LinearGradient
                colors={selected == 'promotion' ? ['#86C0E9', '#2764AE'] : ['#696969', '#AEAEAE']}
                style={styles.childMood}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}>
                <Image source={TravelMoodImage}></Image>
                <Text style={styles.childMoodHead2}>Create Promotional gig</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Button
        title={'Continue'}
        btnStyle={styles.btn}
        onPress={() => {
          navigation.navigate('ArtistBasicGig');
        }}
      />
    </SafeAreaView>
  );
};

export default ArtistCreateGig;

const styles = StyleSheet.create({
  moodIbutton: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  parentMood: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  mood: {
    // borderColor: "red",
    // borderWidth: 1,
    width: width * 0.9,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:"s"
  },
  childMood: {
    height: 130,
    // borderColor: "blue",
    // borderWidth: 1,
    width: width * 0.425,
    // height:40,
    backgroundColor: 'blue',
    flex: 0,
    // justifyContent:"center",
    // alignItems:"center",
    paddingVertical: 20,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  childMoodHead1: {
    fontFamily: fonts.robo_med,
    fontSize: 14,
    lineHeight: 16,
    color: 'white',
    marginTop: 25,
  },
  childMoodHead2: {
    fontFamily: fonts.robo_med,
    fontSize: 14,
    lineHeight: 16,
    color: 'white',
    marginTop: 20,
  },
  childMoodBody: {
    fontFamily: fonts.robo_light,
    fontSize: 14,
    lineHeight: 16,
    color: 'white',
    marginTop: 10,
  },

  parentGigVersion: {
    marginTop: 25,
  },
  gigVersion: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 23,
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
    backgroundColor: theme.white,
  },
  skipView: {
    position: 'absolute',
    bottom: heightToDp(23),
    alignSelf: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
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
    color: theme.darkBlack,
    marginTop: 8,
    lineHeight: 18.75,
  },
  title: {
    fontSize: 24,
    marginHorizontal: 24,
    fontFamily: fonts.robo_med,
    color: theme.lightBlack,
    // marginTop: 23,
    lineHeight: 28.13,
  },
});
