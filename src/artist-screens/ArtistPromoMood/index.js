import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Switch, ScrollView } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { height, heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';

import back from '../../assets/back.png';
import travelling from '../../assets/travelling.png';
import galleryBig from '../../assets/galleryBig.png';
import ImageCropPicker from 'react-native-image-crop-picker';

import TravelMoodImage from '../../assets/travel.png';
import HostMoodImage from '../../assets/car-front.png';

import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

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
const ArtistPromoMood = props => {
  const [image, setImage] = useState();
  const [isPrivate, setIsPrivate] = useState(false);
  const [gigMood, setGigMood] = useState('');

  const user = useSelector(state => state.auth);
  useEffect(() => {
    console.log(user);
  }, [user]);

  const gotoArtist = async () => {
    // dispatch(saveToken({token: 'anyvalue'}));
    props.navigation.navigate('ArtistHomeStack', { screen: 'ArtistVerification' });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 0,
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: widthToDp(5),
          width: widthToDp(90),
        }}>
        <Image source={back} />
        <View style={{ marginLeft: -20 }}>
          <Header title={'Promo mood'} />
        </View>
      </View>
      <ScrollView>
        <Text style={styles.gigVersionAsk}>From this Promo - would you like to</Text>
        <View style={styles.gigVersion}>
          <Text style={styles.title}>Travel, host or both?</Text>
        </View>

        <Text style={styles.warning}>Choose between travelling, hosting or both mood(s) for this gig.</Text>
        <Text style={styles.warning2}>Learn more about traveling and hosting moods.</Text>

        <View style={styles.parentMood}>
          <View style={styles.mood}>
            {modeData.map(mood => {
              return (
                <TouchableOpacity onPress={() => setGigMood(mood.id)} key={mood.id}>
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
          <Text style={styles.title2}>Default Travelling cost</Text>
          <Image source={travelling} />
          <View style={styles.childServiceDuration} />
        </View>

        <Text style={styles.warning}>
          Budget your travel cost within the city. Offer travel for free, to get more orders.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}>
          <Text style={styles.warning}>Offer free travel</Text>
          <View style={styles.switchContainer}>
            <ToggleSwitch
              isOn={isPrivate}
              style={{ height: 20, marginRight: 10 }}
              onColor="#84668C"
              offColor="#9A9A9A"
              size="small"
              value={gigMood === 'host' ? false : isPrivate}
              disabled={gigMood === 'host'}
              onToggle={isOn => setIsPrivate(isOn)}
            />
          </View>
        </View>

        <View style={styles.parentPrice}>
          <TextInput
            style={styles.priceField}
            placeholder="100-1000"
            placeholderTextColor={'#8D8A94'}
            editable={gigMood !== 'host' && !isPrivate}
            keyboardType="number-pad"
          />
        </View>

        <View style={styles.gigVersion}>
          <Text style={styles.title}>{'Upload pictures of your hosting spot'}</Text>
        </View>
        <Text style={styles.warning}>{'Kaynchi needs to verify your hosting spot before processing your order.'}</Text>

        <TouchableOpacity
          onPress={() => {
            ImageCropPicker.openPicker({
              // width: width * 0.868,
              // height: heightToDp(43.2),
              cropping: true,
            }).then(image => {
              console.log(image);
              setImage(image);
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

        <Text style={styles.warning2}>{'Terms and conditions.'}</Text>

        <Button
          title={'Publish Promo'}
          btnStyle={styles.btn}
          onPress={() => {
            // navigation.navigate('gotoArtist');
            gotoArtist();
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistPromoMood;

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
  },
  mood: {
    width: width * 0.9,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    marginTop: 10,
  },
  childMoodBody: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
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
    color: theme.greyText,
    marginTop: 8,
    lineHeight: 18.75,
  },
  warning2: {
    fontSize: 14,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    marginTop: 8,
    marginBottom: 20,
    lineHeight: 18.75,
    color: '#1583D8',
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
    fontFamily: fonts.robo_reg,
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
    fontFamily: fonts.robo_reg,
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
    fontFamily: fonts.robo_reg,
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
    // marginTop: 4,
    // lineHeight: 18.75,
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
    fontFamily: fonts.hk_bold,
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
