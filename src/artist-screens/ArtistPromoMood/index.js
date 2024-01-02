import React, { useState } from 'react';
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
import { useNavigation, useRoute } from '@react-navigation/native';
import { publishSimpleGig } from '../../redux/actions/gigActions';
import { showMessage } from 'react-native-flash-message';
import makeStyle from './artistPromoMood.styles';

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
  const theme = useTheme();
  const styles = makeStyle(theme);

  const [image, setImage] = useState();
  const [gigMood, setGigMood] = useState('');

  const [isFree, setIsFree] = useState(false);

  const [travelFee, setTravelFee] = useState(0);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  const auth = useSelector(state => state.auth);
  const loading = useSelector(state => state.gig.loading);

  function objectToFormData(data) {
    const formData = new FormData();

    for (const key in data) {
      const value = data[key];
      if (data.hasOwnProperty(key)) {
        if (key === 'service_images') {
          value.forEach(ele => {
            if (ele !== null) {
              const obj = {
                uri: ele?.path,
                type: 'image/jpg',
                name: ele?.path.split('/').pop(),
              };
              formData.append(key, obj);
            }
          });
        } else if (key === 'hosting_image' && value !== null) {
          formData.append(key, { uri: value.path, type: 'image/jpg', name: value.path.split('/').pop() });
        } else if (key === 'category_id' || key === 'duration' || key === 'amount') {
          formData.append(key, value);
        } else {
          formData.append(key, JSON.stringify(value));
        }
      }
    }

    return formData;
  }

  const gotoArtist = async () => {
    if (gigMood && image) {
      const data = {
        ...route.params,
        is_travelling: gigMood === 'travel',
        is_hosting: gigMood === 'host',
        offer_free_travel: gigMood === 'host' ? false : isFree,
        travelling_cost: isFree || gigMood === 'host' ? 0 : travelFee,
        hosting_image: image,
        is_discount: false,
        is_active: true,
        is_promotional: true,
        discount_percentage: 0,
        additional_services: [],
        target_audience: route.params.target_audience.splice(0, 1),
      };

      const formData = objectToFormData(data);

      dispatch(
        publishSimpleGig(
          formData,
          auth.userDetails.token,
          navigation,
          auth.isAllowedToMain ? 'ArtistHome' : 'ArtistVerification',
        ),
      );
    } else {
      showMessage({
        type: 'warning',
        message: 'Fill Form and verify inputs',
      });
    }
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
          <Text style={styles.title2}>{'Default Travelling cost'}</Text>
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
          <Text style={styles.warning}>{'Offer free travel'}</Text>

          <View style={styles.switchContainer}>
            <ToggleSwitch
              isOn={isFree}
              style={{ height: 20, marginRight: 10 }}
              value={gigMood === 'host' ? false : isFree}
              onColor="#84668C"
              offColor="#9A9A9A"
              size="small"
              disabled={gigMood === 'host'}
              onToggle={isOn => setIsFree(isOn)}
            />
          </View>
        </View>
        <View style={styles.parentPrice}>
          <TextInput
            style={styles.priceField}
            placeholderTextColor={'#8D8A94'}
            editable={gigMood !== 'host' && !isFree}
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
          title={!loading ? 'Publish Promo' : 'Loading...'}
          btnStyle={styles.btn}
          onPress={() => {
            gotoArtist();
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistPromoMood;
