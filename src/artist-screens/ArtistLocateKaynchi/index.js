import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import { TextInput } from '../../components';
import googlemap from '../../assets/googlemap.png';
import Geolocation from '@react-native-community/geolocation';
import { saveAddress } from '../../redux/actions';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyAsi4Nryu5-nDSa8i-zcqkv6AQqsxrkV8I');

const theme = useTheme();

const ArtistLocateKaynchi = props => {
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [floor, setFloor] = useState('');

  const [userLocation, setUserLocation] = useState(null);

  const handleGeocode = async () => {
    try {
      const response = await Geocoder.from(address);
      const { lat, lng } = response.results[0].geometry.location;

      setLocation({ latitude: lat, longitude: lng });
    } catch (error) {
      console.error('Error during geocoding:', error);
    }
  };

  useEffect(() => {
    // Get user's current location
    Geolocation.getCurrentPosition(
      position => {
        // console.log(position);
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

  const handleMarkerPress = async e => {
    const { coordinate } = e.nativeEvent;

    try {
      const response = await Geocoder.from(coordinate.latitude, coordinate.longitude);
      const address = response.results[0]?.formatted_address;
      const placeId = response.results[0]?.place_id;

      // Check if the response contains address details
      if (address && placeId) {
        console.log('Place ID:', placeId);
        console.log('Address:', address);
      } else {
        console.log('Latitude:', coordinate.latitude);
        console.log('Longitude:', coordinate.longitude);
      }
    } catch (error) {
      console.error('Error during reverse geocoding:', error);
    }
  };

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
        provider={'google'}
        initialRegion={{ latitude: 31.5497, longitude: 74.3436, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
        style={{ flex: 1 }}
        customMapStyle={map_style}
        onPress={e => handleMarkerPress(e)}>
        {userLocation && (
          <MapView.Marker coordinate={{ latitude: 31.5497, longitude: 74.3436 }} image={googlemap}>
            <MapView.Callout tooltip />
          </MapView.Marker>
        )}
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
