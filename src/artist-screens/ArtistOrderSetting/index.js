import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Button} from '../../components';
import {height, heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {useTheme, fonts} from '../../utils/theme';
import iButton from '../../assets/ibutton.png';

import back from '../../assets/back.png';
import travelling from '../../assets/travelling.png';
import galleryBig from '../../assets/galleryBig.png';
import ImageCropPicker from 'react-native-image-crop-picker';
import ToggleSwitch from 'toggle-switch-react-native';

import TravelMoodImage from '../../assets/travel.png';
import HostMoodImage from '../../assets/car-front.png';
const information = require('../../assets/information.png');
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {saveToken} from '../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MultiButton from '../../components/MultiButton';

const booking = require('../../assets/booking.png');
const ondemand = require('../../assets/ondemand.png');

const theme = useTheme();

const ArtistOrderSetting = props => {
  const [image, setImage] = useState();
  const [isPrivate, setIsPrivate] = useState(false);

  const handlePrivateImage = () => {
    setIsPrivate(previousState => !previousState);
  };
  const {navigation, route} = props;
  // const {data} = route.params;

  // console.log(data);
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  useEffect(() => {
    console.log(user);
  }, [user]);

  const gotoArtist = async () => {
    // dispatch(saveToken({token: 'anyvalue'}));
    props.navigation.navigate('ArtistHomeStack', {
      screen: 'ArtistVerification',
    });
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
          <Header backBtn title="Order Setting" />
          {/* <Image source={back}></Image> */}
          <View style={{marginLeft: -20}}>
            <Header title={'Order Settings'} />
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.heading}>Avaliablity</Text>
          <Image
            source={information}
            style={{
              height: 15,
              width: 15,
              marginLeft: widthToDp(2),
            }}
          />
        </View>
        <Text
          style={{fontSize: 16, color: '#67718C', marginLeft: widthToDp(4), fontFamily: fonts.robo_reg}}>
          Select how you are taking your order
        </Text>

        <View style={styles.indicatorView}>
          <View style={styles.row}>
            <MultiButton
              title={'Booking Only'}
              btnStyle={{backgroundColor: '#008274'}}
              image={booking}
              disable
            />
            <MultiButton
              title={'On-Demand'}
              btnStyle={{backgroundColor: '#9A9A9A'}}
              image={ondemand}
              disable
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('ArtistProfileStack', {
              screen: 'ArtistBookingSlots',
            })
          }>
          <Text
            style={{
              color: '#1583D8',
              marginLeft: widthToDp(4),
              marginBottom: 10,
              marginTop: 5,
            }}>
            Manage Booking slots
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.heading}>Mood</Text>
          <Image
            source={information}
            style={{
              height: 15,
              width: 15,
              marginLeft: widthToDp(2),
            }}
          />
        </View>

        <Text style={styles.warning}>
          {
            'Choose between travelling to the client or having them at your place. You can do both.'
          }
        </Text>
        <View style={styles.parentMood}>
          <View style={styles.mood}>
            <LinearGradient
              colors={[theme.primary, theme.primary]}
              style={styles.childMood}
              start={{x: 1, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <Image
                source={HostMoodImage}
                style={{height: 30, width: 30, resizeMode: 'contain'}}></Image>
              <Text style={styles.childMoodHead}>Travel</Text>
              <Text style={styles.childMoodBody}>to client’s</Text>
            </LinearGradient>
            <LinearGradient
              colors={[theme.primary, theme.primary]}
              style={styles.childMood}
              start={{x: 1, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <Image source={TravelMoodImage}></Image>
              <Text style={styles.childMoodHead}>Host</Text>
              <Text style={styles.childMoodBody}>the client</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.serviceDuration}>
          <Text style={styles.title2}>{'Default Travelling cost'}</Text>
          <Image source={travelling}></Image>
          <View style={styles.childServiceDuration}></View>
        </View>

        <Text style={styles.warning}>
          {
            'Budget your travel cost within the city. Offer travel for free, to get more orders.'
          }
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            marginBottom: 10,
          }}>
          <Text style={styles.warning}>{'Offer free travel'}</Text>
          <View style={[styles.switchContainer, {marginRight: 10}]}>
          <ToggleSwitch
              isOn={false}
              style={{height: 20, marginRight: 10,
              }}
              value={isPrivate}
              onColor="#84668C"
              offColor="#9A9A9A"
              size="small"
              onToggle={handlePrivateImage}
            />
           
          </View>
        </View>

        <View style={styles.parentPrice}>
          <TextInput
            style={styles.priceField}
            placeholder="100-1000"></TextInput>
        </View>
        <View style={styles.serviceDuration}>
          <Text style={styles.title2}>
            {'Minimum Order Value'}{' '}
            <Text style={{fontWeight: fonts.robo_light}}>(MOV)</Text>
          </Text>
          <View style={styles.childServiceDuration}></View>
        </View>

        <Text style={styles.warning}>
          {"Set a minimum amount below which you won't accept order"}
        </Text>

        <View style={[styles.parentPrice, {marginTop: 10}]}>
          <TextInput style={styles.priceField} placeholder="0"></TextInput>
        </View>

        <View style={styles.serviceDuration}>
          <Text style={styles.title2}>
            {'Sales Service Tax'} <Text style={{fontFamily: fonts.robo_light}}>(SST)</Text>
          </Text>

          <View style={[styles.switchContainer, {marginRight: 10}]}>
          <ToggleSwitch
              isOn={false}
              style={{height: 20, marginRight: 10,
              }}
              value={isPrivate}
              onColor="#84668C"
              offColor="#9A9A9A"
              size="small"
              onToggle={handlePrivateImage}
            />
           
          </View>
          <View style={styles.childServiceDuration}></View>
        </View>

        <Text style={styles.warning}>
          {'Only avaiable if your annual revenue is more than 4M pkr.'}
        </Text>
        <Button
          title={'Confirm Settings'}
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

export default ArtistOrderSetting;

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
    flex: 1,
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
    marginTop: 15,
  },
  childMoodBody: {
    fontFamily: fonts.robo_light,
    fontSize: 14,
    // lineHeight: 16,
    color: 'white',
    marginTop: 10,
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
  heading: {color: '#0F2851', fontSize: 40, marginLeft: widthToDp(4), fontFamily: fonts.hk_bold},
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
    fontSize: 14,
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
    color: theme.darkGray,
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
    marginTop: 8,
    lineHeight: 22,
  },
  indicatorView: {marginHorizontal: 14, marginTop: heightToDp(6)},
  row: {flexDirection: 'row', alignItems: 'center'},

  container: {
    flex: 1,
    backgroundColor: theme.white,
    paddingTop: heightToDp(7),
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
    marginLeft: widthToDp(10),
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
    fontFamily: fonts.robo_med,
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
    alignItems: 'center',
    // justifyContent:"space-between",
    marginTop: 20,
  },
  childServiceDuration: {
    height: 40,
    marginLeft: 10,
  },
});
