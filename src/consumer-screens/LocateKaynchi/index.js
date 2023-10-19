import React, { useRef, useState } from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Modalize } from 'react-native-modalize';
import { Button, GradientRadio, SearchBox } from '../../components';
import { height, heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import { DATA } from './Location';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import CustomCallout from '../../components/CustomCallOut';
import background_image from '../../assets/background_image.png';
const theme = useTheme();

const STATUS_RADIO = [
  {
    source: require('../../assets/hosting4.png'),
    title: "I'm hosting",
  },
  {
    source: require('../../assets/travelling4.png'),
    title: "I'm travelling",
  },
];

const hair = require('../../assets/HairDark.png');
const feedback = require('../../assets/feedback.png');
const feedback1 = require('../../assets/feedback1.png');
const face = require('../../assets/FaceDark.png');
const waxing = require('../../assets/BodyDark.png');
const Massages = require('../../assets/SpaDark.png');
const Botox = require('../../assets/TreatDark.png');
const dummyHome = require('../../assets/dummyHome.png');
const beauty_color = require('../../assets/beauty_color.png');
const diamond_home = require('../../assets/diamond_home.png');
const Mask_group = require('../../assets/Mask_group.png');
const popular_image = require('../../assets/popular_image.png');
const rose_gold = require('../../assets/rose_gold.png');
const googlemap = require('../../assets/googlemap.png');
import MultiButton from '../../components/MultiButton';

const DATA1 = [
  {
    name: 'Hair',
    imageLink: hair,
  },
  {
    name: 'Face',
    imageLink: face,
  },
  {
    name: 'Body',
    imageLink: waxing,
  },
  {
    name: 'Spa',
    imageLink: Massages,
  },
  {
    name: 'Treat',
    imageLink: Botox,
  },
];

const LocateKaynchi = props => {
  const modalizeRef = useRef(null);

  const [preferenceStatus, setPreferenceStatus] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#EEEEEE',
      }}>
      <Image source={item.imageLink} style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 10 }} />
      <Text>{item.name}</Text>
    </View>
  );

  const map_style = [
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
  ];

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
        {DATA.map((item, index) => {
          return (
            <MapView.Marker
              key={index}
              coordinate={{ latitude: item.lat, longitude: item.long }}
              title={item.title}
              description={item.description}
              image={item.img}>
              <MapView.Callout tooltip onPress={() => setModalVisible(true)}>
                <CustomCallout title={item.title} description={item.description} image={item.img} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </MapView>
      <View style={styles.bottomView}>
        <View style={styles.line} />
        <Text
          style={{
            fontFamily: fonts.hk_bold,
            fontSize: 20,
            lineHeight: 24,
            color: theme.lightBlack,
            marginLeft: widthToDp(6.7),
            marginTop: heightToDp(4),
          }}>
          {'Locate kaynchi'}
        </Text>
        <SearchBox
          onChange={txt => console.log(txt)}
          placeholder={'Locate your Kaynchi...'}
          containerView={styles.searchBox}
          onSearch={() => props.navigation.navigate('MapSearch')}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            width: width * 0.91,
            marginBottom: 32,
            alignSelf: 'center',
            marginTop: heightToDp(5.5),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* <FontAwesome
            name={'heart'}
            style={{fontSize: 20, color: theme.heartRed}}
          /> */}
          {/* <Text
            style={{
              fontFamily: fonts.robo_reg,
              fontSize: 16,
              lineHeight: 18.75,
              color: theme.linkTxt,
              marginLeft: widthToDp(2),
            }}>
            {'See saved locations'}
          </Text> */}
        </TouchableOpacity>
      </View>
      <Modal
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
          <FlatList data={DATA1} renderItem={renderItem} keyExtractor={item => item.name} horizontal />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 16,
              marginHorizontal: widthToDp(5),
            }}>
            <Image
              source={background_image}
              style={{
                width: 50,
                height: 50,
                borderRadius: 35,
                // resizeMode: 'contain',
              }}
            />
            <View>
              <Text style={styles.artistName}>{'Narmeen Iqbal'}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.artistRating}>4.5</Text>
                <AntDesign name={'star'} style={styles.starIcon} />
                <Text style={{ color: '#1583D8' }}>~$$</Text>
                <Text style={styles.modalDistanceTxt}>{'3.2 kms away from you'}</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginBottom: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            {/* <View style={styles.radioContainer}> */}
            {STATUS_RADIO.map((item, index) => {
              return (
                <GradientRadio
                  key={index}
                  title={item.title}
                  source={item.source}
                  onPress={() => setPreferenceStatus(item.title)}
                  titleStyle={preferenceStatus == item.title ? null : { color: theme.lightBlack }}
                  imgStyle={preferenceStatus == item.title ? null : { tintColor: theme.lightBlack }}
                  containerStyle={
                    preferenceStatus == item.title
                      ? null
                      : {
                          borderWidth: 1,
                          borderColor: 'rgba(132, 102, 140, 0.15)',
                        }
                  }
                  gradients={preferenceStatus == item.title ? null : ['rgba(0,0,0,0.1)', theme.background]}
                />
              );
            })}
            {/* </View> */}
          </View>
          <Button title={'Continue'} btnStyle={{ marginBottom: heightToDp(5.5) }} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default LocateKaynchi;

const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: theme.homeBackground,
    position: 'absolute',
    bottom: 0,
    width: width,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  line: {
    width: widthToDp(9),
    height: heightToDp(0.9),
    backgroundColor: theme.inputBottom,
    borderRadius: 9,
    alignSelf: 'center',
    marginTop: heightToDp(3.5),
  },
  searchBox: {
    elevation: 0,
    marginTop: heightToDp(6.7),
  },
  modalMainView: {
    // height: height * 0.515,
    backgroundColor: theme.homeBackground,
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
