import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
import Gallery from '../../assets/Gallery.png';
import back from '../../assets/back.png';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

const theme = useTheme();

const timeLimits = [
  { label: '30 mins +', value: '30' },
  { label: '1 hour +', value: '60' },
  { label: '2 hour +', value: '120' },
];

const ArtistGig2 = () => {
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [amount, setAmount] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  const { category_id, target_audience, name } = route.params;
  console.log(duration);
  const handleContinue = () => {
    if (
      description &&
      duration &&
      amount
      //&& image1 && image2 && image3
    ) {
      const service_images = [image1.path, image2.path, image3.path];
      console.log(service_images);
      console.log({ amount, duration, description, service_images });
      navigation.navigate('ArtistGigMood', {
        category_id,
        target_audience,
        name,
        amount,
        duration,
        description,
        service_images,
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
            <Header title="Basic gig info" />
          </View>
        </View>
        <View style={styles.gigVersion}>
          <Text style={styles.title}>Service description</Text>
        </View>

        <TextInput
          multiline={true}
          style={styles.inputField}
          value={description}
          onChangeText={e => setDescription(e)}
          maxLength={200}
          placeholder="Please tell use anything that may assist with the order..."
        />
        <Text style={styles.warning}>The description can not contain more than 200 letters.</Text>
        <View style={styles.gigVersion}>
          <Text style={styles.title}>Service duration</Text>
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
                <View
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
                    onPress={() => setDuration(item.value)}
                    style={{
                      fontSize: 14,
                      fontFamily: fonts.robo_reg,
                      color: 'white',

                      lineHeight: 16,
                    }}>
                    {item.label}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.gigVersion}>
          <Text style={styles.title}>Service amount</Text>
        </View>
        <Text style={styles.txt}>Price your service.</Text>
        <View style={styles.parentPrice}>
          <TextInput
            style={styles.priceField}
            value={amount}
            onChangeText={e => setAmount(e)}
            keyboardType="number-pad"
          />
          <Text style={styles.pkr}>Pkr</Text>
        </View>
        <View style={styles.gigVersion}>
          <Text style={styles.title}>Service pictures</Text>
        </View>
        <Text style={styles.txt}>Uplod pictures of your past work for this service from your gallery. (Optional)</Text>
        <View style={styles.parentUpload}>
          <TouchableOpacity
            onPress={() => {
              ImageCropPicker.openPicker({
                cropping: true,
              }).then(image => {
                console.log(image);
                setImage1(image);
              });
            }}
            activeOpacity={0.9}>
            {image1 ? (
              <Image source={{ uri: image1.path }} style={styles.upload} />
            ) : (
              <View style={styles.upload}>
                <Image source={Gallery} />
              </View>
            )}
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              ImageCropPicker.openPicker({
                cropping: true,
              }).then(image => {
                console.log(image);
                setImage2(image);
              });
            }}
            activeOpacity={0.9}>
            {image2 ? (
              <Image source={{ uri: image2.path }} style={styles.upload} />
            ) : (
              <View style={styles.upload}>
                <Image source={Gallery} />
              </View>
            )}
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              ImageCropPicker.openPicker({
                cropping: true,
              }).then(image => {
                console.log(image);
                setImage3(image);
              });
            }}
            activeOpacity={0.9}>
            {image3 ? (
              <Image source={{ uri: image3.path }} style={styles.upload} />
            ) : (
              <View style={styles.upload}>
                <Image source={Gallery} />
              </View>
            )}
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
        </View>

        <Button title={'Continue'} btnStyle={styles.btn} onPress={handleContinue} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistGig2;

const styles = StyleSheet.create({
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
    color: theme.darkGray,
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
    color: '#9A9A9A',
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
