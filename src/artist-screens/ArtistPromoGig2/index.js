import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Header, TextInput } from '../../components';
import { useTheme, fonts } from '../../utils/theme';
import { height, width, heightToDp, widthToDp } from '../../utils/Dimensions';
import Gallery from '../../assets/Gallery.png';
import back from '../../assets/back.png';
import ImageCropPicker from 'react-native-image-crop-picker';

const data = ['20% Commision', '5 Gigs', '2 Promos'];

const hair = require('../../assets/hair.png');
const face = require('../../assets/face.png');
const waxing = require('../../assets/body.png');
const Massages = require('../../assets/spa.png');
const Botox = require('../../assets/treatment.png');
const Gender = [
  {
    name: 'Female',
  },
  {
    name: 'Male',
  },
  {
    name: 'Non Binary',
  },
];

const Category = [
  {
    name: '30 mins +',
  },
  {
    name: '1 hour +',
  },
  {
    name: '2 hour +',
  },
];

const theme = useTheme();
export default function ArtistPromoGig2(props) {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const handleClick = () => {
    props.navigation.navigate('ArtistHomeStack', { screen: 'ArtistPromoMood' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn title="Promo gig info" />
      <ScrollView>
        <View>
          <Text style={[styles.welcomeTxt, { paddingTop: 7 }]}>Promo duration</Text>
          <Text style={styles.subheading}>The estimated time of the service, from start to end. </Text>
        </View>
        <View style={styles.genRow}>
          {Category.slice(0, 3).map(item => (
            <TouchableOpacity
              onPress={() => {
                console.log('Clicked:', item.name);

                setTime(item.name);
              }}
              activeOpacity={0.7}
              style={[
                styles.genBtn,
                {
                  backgroundColor: time === item.name ? theme.primary : theme.genderGrey,
                },
              ]}
              key={item.name}>
              <View style={styles.categoryItem}>
                <Text style={styles.genTxt}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View>
          <Text style={[styles.welcomeTxt, { paddingTop: widthToDp(4) }]}>Promo Price</Text>
          <Text style={styles.subheading}>Price your service.</Text>
          <TextInput
            input={text => setName(text)}
            placeholder={'5000'}
            inputBoxStyle={{
              backgroundColor: '#ebe8ec',
              borderBottomColor: '#ebe8ec',
              padding: 10,
              height: heightToDp(13),
              borderRadius: 10,
              textAlignVertical: 'top',
            }}
          />
          <Text
            style={{
              fontSize: 17,
              color: '#9A9A9A',
              fontFamily: fonts.robo_reg,
              position: 'absolute',
              bottom: 15,
              right: 35,
            }}>
            Pkr
          </Text>
        </View>

        <Text style={[styles.welcomeTxt, { paddingTop: widthToDp(4) }]}>Promo Pictures</Text>
        <Text style={styles.subheading}>
          Upload pictures of your past work for this service from your gallery. (Optional)
        </Text>
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
                <Image source={Gallery}></Image>
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
                <Image source={Gallery}></Image>
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
                <Image source={Gallery}></Image>
              </View>
            )}
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
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
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(8),
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

  genRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.91,
    alignSelf: 'center',

    marginTop: heightToDp(4.5),
  },
  genView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.91,
    alignSelf: 'center',
    marginTop: heightToDp(4.5),
    color: '#ffffff',
  },
  genTxt: { color: '#ffffff', marginLeft: 6 },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genBtn: {
    // flex: 1,
    width: widthToDp(27.5),
    height: heightToDp(9.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    color: '#ffffff',
  },
  welcomeTxt: {
    fontSize: 34,
    color: '#2F3A58',
    fontFamily: fonts.hk_bold,
    paddingHorizontal: widthToDp(7),
  },
  subheading: {
    color: '#67718C',
    paddingHorizontal: widthToDp(7),
    fontFamily: fonts.robo_reg,
    fontSize: 16,
  },
});
