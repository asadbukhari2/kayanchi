import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Header, TextInput } from '../../components';
import { useTheme, fonts } from '../../utils/theme';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import Gallery from '../../assets/Gallery.png';

import ImageCropPicker from 'react-native-image-crop-picker';
import { useRoute } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

const timeLimits = [
  { label: '30 mins +', value: '30' },
  { label: '1 hour +', value: '60' },
  { label: '2 hour +', value: '120' },
];

const theme = useTheme();
export default function ArtistPromoGig2(props) {
  const [duration, setDuration] = useState();
  const [amount, setAmount] = useState(0);
  const [images, setImages] = useState([null, null, null]);
  const route = useRoute();
  const { category_id, target_audience, name } = route.params;

  console.log(route.params);

  const handleImageSelection = index => {
    ImageCropPicker.openPicker({
      cropping: true,
    }).then(image => {
      console.log(image);
      const updatedImages = [...images];
      updatedImages[index] = image;

      setImages(updatedImages);
    });
  };

  const handleClick = () => {
    if (duration && amount) {
      props.navigation.navigate('ArtistPromoMood', {
        category_id,
        target_audience,
        name,
        amount,
        duration,
        service_images: images,
        ...route.params,
      });
    } else {
      showMessage({
        type: 'warning',
        message: 'Fill All fields',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn title="Promo gig info" />
      <ScrollView>
        <View style={styles.gigVersion}>
          <Text style={styles.title}>Promo duration</Text>
        </View>
        <Text style={styles.warning}>The estimated time of the service, from start to end.</Text>

        <View
          style={{
            flex: 0,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: widthToDp(90),
              flex: 0,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {timeLimits.map(item => {
              return (
                <TouchableOpacity
                  key={item.value}
                  onPress={() => setDuration(item.value)}
                  style={{
                    width: 100,
                    height: 35,
                    flex: 0,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 30,
                    backgroundColor: duration === item.value ? '#84668C' : '#9A9A9A',
                    marginRight: 7,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: fonts.robo_reg,
                      color: 'white',
                      lineHeight: 16,
                    }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.gigVersion}>
          <Text style={styles.title}>Promo amount</Text>
        </View>
        <Text style={styles.txt}>Price your promo.</Text>
        <View style={styles.parentPrice}>
          <TextInput
            style={styles.priceField}
            value={amount}
            input
            placeholder="500"
            placeholderTextColor={'#8D8A94'}
            onChangeText={e => setAmount(e)}
            keyboardType="number-pad"
          />
          <Text style={styles.pkr}>Pkr</Text>
        </View>

        <View style={styles.gigVersion}>
          <Text style={styles.title}>Promo pictures</Text>
        </View>
        <Text style={styles.txt}>Uplod pictures of your past work for this service from your gallery. (Optional)</Text>
        <View style={styles.parentUpload}>
          {images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => handleImageSelection(index)} activeOpacity={0.9}>
              {image ? (
                <Image source={{ uri: image.path }} style={styles.upload} />
              ) : (
                <View style={styles.upload}>
                  <Image source={Gallery} />
                </View>
              )}
              <Text style={styles.uploadText}>Upload</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ marginVertical: heightToDp(5) }}>
          <Button title="Continue" onPress={handleClick} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  parentUpload: {
    width: widthToDp(90),
    marginLeft: widthToDp(5),
    marginTop: 10,
    marginHorizontal: 10,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upload: {
    backgroundColor: '#FFFFFF',
    width: 100,
    height: 100,
    borderRadius: 10,
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
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
    marginTop: 30,
  },

  warning: {
    fontSize: 14,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: '#8D8A94',
    marginTop: 8,
    lineHeight: 18.75,
  },
  parentPrice: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#EBE8EC',
    borderRadius: 8,
    marginLeft: widthToDp(5),
    marginRight: widthToDp(5),
    marginTop: 10,
  },
  pkr: {
    width: widthToDp(20),
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 17,
    fontFamily: fonts.robo_med,
    color: '#242424',
    lineHeight: 22,
    opacity: 0.3,
  },
  priceField: {
    backgroundColor: '#EBE8EC',
    width: widthToDp(75),
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
    marginTop: 8,
    lineHeight: 18.75,
  },
  title: {
    fontSize: 24,
    marginHorizontal: 24,
    fontFamily: fonts.robo_med,
    color: theme.lightBlack,
  },
});
