import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
// import Modal from 'react-native-modal';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Feather from 'react-native-vector-icons/Feather';
import { TextInput } from '../../components';
import googlemap from '../../assets/googlemap.png';
import Geolocation from '@react-native-community/geolocation';
import { saveAddress } from '../../redux/actions';

const theme = useTheme();

const ArtistLocateKaynchi = props => {
  const [floor, setFloor] = useState('');
  const [name, setName] = useState('');

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user's current location
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      error => console.log('Error getting location:', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  const map_style = [
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
  ];

  const handleMarkerPress = itm => {};
  const handleSavePress = () => {
    const data = {
      text: name + ' ' + floor,
      city: 'Lahore',
      country: 'Pakistan',
      ...userLocation,
    };

    saveAddress(data);
    // props.navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          latitude: 24.8607,
          longitude: 67.0011,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1 }}
        customMapStyle={map_style}>
        {/* {DATA.map((item, index) => { */}
        {/* return ( */}
        {userLocation && (
          <MapView.Marker
            // key={index}
            coordinate={{ latitude: userLocation?.latitude, longitude: userLocation?.longitude }}
            title={'My Location'}
            description={'You are here'}
            image={googlemap}
            onPress={e => handleMarkerPress(e)}>
            <MapView.Callout
              tooltip
              // onPress={() => {
              //   setModalVisible(true);
              //   console.log('polo');
              // }}
            />
          </MapView.Marker>
        )}
        {/* ); */}
        {/* })} */}
      </MapView>
      <View style={styles.bottomView}>
        <View style={styles.line} />
        <View style={styles.locationtxt}>
          <Image source={googlemap} style={{ width: 28, height: 28, resizeMode: 'contain' }} />
          <View style={{ marginLeft: widthToDp(3) }}>
            <Text
              style={{
                fontFamily: fonts.hk_bold,
                fontSize: 20,
                lineHeight: 24,
                color: theme.lightBlack,
              }}>
              A 39 Block 3 Gulshan e Iqbal
            </Text>
            <Text style={{ color: theme.greyText }}>Karachi</Text>
          </View>
        </View>
        <TextInput
          input={text => setName(text)}
          placeholder={'Line 1 address'}
          inputBoxStyle={{
            borderBottomColor: '#f3f0f3',
            backgroundColor: '#ECECEC',
            borderRadius: 5,
            padding: 10,
            marginBottom: heightToDp(1),
          }}
          underlineColorAndroid="transparent"
          underlineColorIOS="transparent"
        />
        <View style={styles.separator} />

        <TextInput
          input={text => setFloor(text)}
          placeholder={'Floor/Unit#'}
          inputBoxStyle={{
            borderBottomColor: '#f3f0f3',
            backgroundColor: '#ECECEC',
            borderRadius: 5,
            padding: 10,
            marginBottom: heightToDp(30),
          }}
          underlineColorAndroid="transparent"
          underlineColorIOS="transparent"
        />
      </View>
      <View style={styles.btn}>
        <Button title="Save" onPress={handleSavePress} />
      </View>
      {/* not using */}
      {/* <Modal
        coverScreen={false}
        isVisible={modalVisible}
        style={{ flex: 1, margin: 0, justifyContent: 'flex-end' }}
        onSwipeComplete={() => setModalVisible(!modalVisible)}
        swipeDirection={['down']}>
        <View style={styles.modalMainView}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setModalVisible(false)}
            style={{ padding: heightToDp(4.5), position: 'absolute', right: 0 }}>
            <Feather name={'x'} style={{ fontSize: 20, color: theme.backIcon }} />
          </TouchableOpacity>
          <View style={styles.line} />
          <Text style={styles.modalDistanceTxt}>{'3.2 kms away from you'}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <Text style={styles.artistName}>{'Narmeen Iqbal'}</Text>
            <Text style={styles.artistRating}>4.5</Text>
            <AntDesign name={'star'} style={styles.starIcon} />
          </View>
          <View
            style={{
              marginBottom: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            {STATUS_RADIO.map((item, index) => {
              return (
                <GradientRadio
                  key={index}
                  title={item.title}
                  source={item.source}
                  onPress={() => setPreferenceStatus(item.title)}
                  titleStyle={preferenceStatus === item.title ? null : { color: theme.lightBlack }}
                  imgStyle={preferenceStatus === item.title ? null : { tintColor: theme.lightBlack }}
                  containerStyle={
                    preferenceStatus === item.title
                      ? null
                      : {
                          borderWidth: 1,
                          borderColor: 'rgba(132, 102, 140, 0.15)',
                        }
                  }
                  gradients={preferenceStatus === item.title ? null : ['rgba(0,0,0,0.1)', theme.background]}
                />
              );
            })}
          </View>
          <TouchableOpacity style={{ alignSelf: 'center', marginBottom: 25 }}>
            <Text style={[styles.statusTxt, { color: theme.genderGrey }]}>Swipe to view profile</Text>
          </TouchableOpacity>
          <Button title={'Continue'} btnStyle={{ marginBottom: heightToDp(5.5) }} />
        </View>
      </Modal> */}
    </SafeAreaView>
  );
};

export default ArtistLocateKaynchi;

const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: theme.background,
    position: 'absolute',
    bottom: 0,
    width: width,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  locationtxt: { flexDirection: 'row', alignItems: 'center', marginLeft: widthToDp(4), marginVertical: 12 },
  line: {
    width: widthToDp(9),
    height: heightToDp(0.9),
    backgroundColor: theme.inputBottom,
    borderRadius: 9,
    alignSelf: 'center',
    marginTop: heightToDp(3.5),
  },
  btn: { marginVertical: 20 },
  searchBox: {
    elevation: 0,
    marginTop: heightToDp(6.7),
  },
  modalMainView: {
    // height: height * 0.515,
    backgroundColor: theme.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  artistName: {
    color: theme.lightBlack,
    fontSize: 32,
    fontFamily: fonts.hk_bold,
    lineHeight: 38.41,
    marginLeft: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },

  artistRating: {
    color: theme.greyText,
    fontSize: 16,
    fontFamily: fonts.segoi,
    lineHeight: 21.28,
    marginLeft: 16,
    marginRight: 8.67,
  },
  starIcon: {
    fontSize: heightToDp(4.7),
    color: theme.yellow,
  },
  modalDistanceTxt: {
    marginLeft: 20,
    fontFamily: fonts.robo_reg,
    fontSize: 14,
    lineHeight: 16.41,
    color: theme.greyText,
    marginTop: 8,
  },
  statusBox: {
    width: 149,
    height: 109,
    borderRadius: 10,
    backgroundColor: theme.background,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  statusTxt: {
    fontFamily: fonts.robo_reg,
    fontSize: 14,
    lineHeight: 16.41,
    color: theme.darkBlack,
    marginTop: 11,
  },
});
