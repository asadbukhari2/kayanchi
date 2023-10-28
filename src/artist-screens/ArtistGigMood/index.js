import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';

import back from '../../assets/back.png';
import travelling from '../../assets/travelling.png';
import galleryBig from '../../assets/galleryBig.png';
import ImageCropPicker from 'react-native-image-crop-picker';

import TravelMoodImage from '../../assets/travel.png';
import HostMoodImage from '../../assets/car-front.png';

import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const theme = useTheme();
const modeData = [
  {
    id: 'travel',
    image: HostMoodImage,
    heading: 'Travel',
    desc: "to client's",
  },
  {
    id: 'host',
    image: TravelMoodImage,
    heading: 'Host',
    desc: 'the client',
  },
];
const ArtistGigMood = () => {
  const [image, setImage] = useState();
  const [isPrivate, setIsPrivate] = useState(false);
  const [gigMood, setGigMood] = useState('');
  const [travelFee, setTravelFee] = useState(0);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const user = useSelector(state => state.auth);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const gotoArtist = async () => {
    // dispatch(saveToken({token: 'anyvalue'}));
    navigation.navigate('ArtistVerification');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: widthToDp(5),
            width: widthToDp(90),
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} />
          </TouchableOpacity>
          <View style={{ marginLeft: -20 }}>
            <Header title={'Gig mood'} />
          </View>
        </View>
        <Text style={styles.gigVersionAsk}>For this gig - would you like to</Text>
        <View style={styles.gigVersion}>
          <Text style={styles.title}>{'Travel, host or both?'}</Text>
        </View>

        <Text style={styles.warning}>Choose between travelling, hosting or both mood(s) for this gig.</Text>
        <Text style={styles.warning2}>Learn more about traveling and hosting moods.</Text>

        <View style={styles.parentMood}>
          <View style={styles.mood}>
            {modeData.map(mood => {
              return (
                <TouchableOpacity onPress={() => setGigMood(mood.id)}>
                  <LinearGradient
                    colors={gigMood === mood.id ? ['#86C0E9', '#2764AE'] : ['#696969', '#AEAEAE']}
                    style={styles.childMood}
                    start={{ x: 1, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}>
                    <Image source={mood.image} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
                    <Text style={styles.childMoodHead}>{mood.heading}</Text>
                    <Text style={styles.childMoodBody}>{mood.desc}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.serviceDuration}>
          <Text style={styles.title2}>{'Default Travelling cost'}</Text>
          <Image source={travelling} />
          <View style={styles.childServiceDuration} />
        </View>

        <Text style={styles.warning}>
          {'Budget your travel cost within the city. Offer travel for free, to get more orders.'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}>
          <Text style={styles.warning}>{'Offer free travel'}</Text>
          <View style={styles.switchContainer}>
            <ToggleSwitch
              isOn={isPrivate}
              style={{ height: 20, marginRight: 10 }}
              value={isPrivate}
              onColor="#84668C"
              offColor="#9A9A9A"
              size="small"
              onToggle={isOn => setIsPrivate(isOn)}
            />
          </View>
        </View>

        <View style={styles.parentPrice}>
          <TextInput
            style={styles.priceField}
            editable={!isPrivate}
            value={travelFee}
            keyboardType="number-pad"
            onChangeText={e => setTravelFee(e)}
            placeholder="100-1000"
          />
        </View>

        <View style={styles.gigVersion}>
          <Text style={styles.title}>Upload pictures of your hosting spot</Text>
        </View>
        <Text style={styles.warning}>Kaynchi needs to verify your hosting spot before processing your order.</Text>

        <TouchableOpacity
          onPress={() => {
            ImageCropPicker.openPicker({
              cropping: true,
            }).then(img => {
              setImage(img);
            });
          }}
          activeOpacity={0.9}
          style={styles.parentUpload}>
          {image ? (
            <Image
              source={{ uri: image.path }}
              style={{
                elevation: 1,
                width: widthToDp(90),
                height: 160,
                borderRadius: 10,
                resizeMode: 'cover',
              }}
            />
          ) : (
            <View>
              <View style={styles.upload}>
                <Image source={galleryBig} />
                <Text style={styles.uploadText}>Upload</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>

        <Text style={styles.warning2}>Terms and conditions.</Text>

        <Button title="Publish Gig" btnStyle={styles.btn} onPress={gotoArtist} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistGigMood;

const styles = StyleSheet.create({
  gigVersionAsk: {
    marginLeft: widthToDp(5),
    fontSize: 20,
    fontFamily: fonts.robo_reg,
    marginTop: 30,
    lineHeight: 22,
    color: '#2F3A58',
  },
  parentMood: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
    // borderColor: "blue",
    // borderWidth: 1,
    width: width * 0.425,
    // height:40,
    backgroundColor: 'blue',
    flex: 0,
    // justifyContent:"center",
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 15,
  },
  childMoodHead: {
    fontFamily: fonts.robo_med,
    fontSize: 14,
    // lineHeight: 16,
    color: 'white',
    marginTop: 8,
  },
  childMoodBody: {
    fontFamily: fonts.robo_light,
    fontSize: 14,
    // lineHeight: 16,
    color: 'white',
    marginTop: 4,
  },

  parentUpload: {
    marginTop: 10,
    marginHorizontal: widthToDp(5),
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upload: {
    elevation: 1,
    backgroundColor: '#FFFFFF',
    width: widthToDp(90),
    height: 160,
    borderRadius: 10,
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    textAlign: 'center',

    fontSize: 14,
    // marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    marginTop: 8,
    lineHeight: 22,
    color: '#1682D6',
  },
  gigVersion: {
    marginTop: 10,
  },
  warning: {
    fontSize: 16,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: theme.darkGray,
    marginTop: 8,
    lineHeight: 18.75,
  },
  warning2: {
    fontSize: 14,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: theme.blue,
    marginTop: 8,
    marginBottom: 20,
    lineHeight: 18.75,
  },
  parentPrice: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#EBE8EC',
    borderRadius: 8,
    marginLeft: widthToDp(5),
    marginRight: widthToDp(5),
    // marginTop: 10,
    marginBottom: 10,
  },
  pkr: {
    width: widthToDp(20),
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 17,
    fontFamily: fonts.robo_med,
    color: '#9A9A9A',
    lineHeight: 22,
    opacity: 0.3,
  },
  priceField: {
    backgroundColor: '#DFDEDF',
    width: widthToDp(90),
    // marginLeft: widthToDp(5),
    borderRadius: 8,
    // paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    // marginHorizontal: 24,
    fontFamily: fonts.robo_med,
    color: '#8D8A94',
    lineHeight: 22,
  },
  inputField: {
    backgroundColor: 'white',
    width: widthToDp(90),
    marginLeft: widthToDp(5),
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginHorizontal: 24,
    fontFamily: fonts.robo_med,
    color: '#8D8A94',
    lineHeight: 22,
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
    marginTop: 40,
    // position: 'absolute',
    bottom: heightToDp(5.5),
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  switch: {
    marginRight: 10,
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
    color: '#67718C',
  },
  title: {
    fontSize: 34,
    marginHorizontal: 18,
    fontFamily: fonts.hk_bold,
    color: theme.lightBlack,
    // marginTop: 23,
    // lineHeight: 28.13,
  },
  title2: {
    fontSize: 20,
    marginHorizontal: 24,
    fontFamily: '700',
    // marginTop: 23,
    lineHeight: 24,
    color: '#2F3A58',
  },
  serviceDuration: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  childServiceDuration: {
    height: 40,
    marginLeft: 10,
  },
});
