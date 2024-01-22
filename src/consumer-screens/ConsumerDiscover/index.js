import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, HomeCard, SearchBox } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import ArtistItem from '../../components/ArtistItem';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import MultiButton from '../../components/MultiButton';
import DiscoverModal from '../../components/DiscoverModal';
// import api from '../../utils/APIservice';

const waxing = require('../../assets/body.png');
const hair = require('../../assets/hairDiscover.png');
const face = require('../../assets/FaceDark.png');
const clinic_image = require('../../assets/clinic_image.png');
const background_image = require('../../assets/background_image.png');
const beautician = require('../../assets/beautician.png');
const beauty_color = require('../../assets/beauty_color.png');
const favourite = require('../../assets/favourite.png');
const theme = useTheme();
const hair1 = require('../../assets/hair.png');
const face1 = require('../../assets/face.png');

const DATA = [
  {
    name: 'Hair',
    imageLink: hair1,
  },
  {
    name: 'Face',
    imageLink: face1,
  },
  {
    name: 'Body',
    imageLink: waxing,
  },
];

const ConsumerDisocver = props => {
  const [artistModalVisible, setArtistModalVisible] = useState(false);
  const [studioModalVisible, setStudioModalVisible] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [filter, setFilter] = useState('artist');
  const [dynamicData, setDynamicData] = useState([]);
  const artistDiscovires = useSelector(state => state.common.artistDiscovires);
  const studiosDiscovires = useSelector(state => state.common.studiosDiscovires);
  // const getService = async () => {
  //   try {
  //     const res = await api.get('/api/service');

  //     console.log(res.data);
  //     setService(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getArtist = async () => {
  //   try {
  //     const res = await api.get('/api/users/artists');

  //     console.log(res.data);
  //     setArtist(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getService();
  //   getArtist();
  // }, []);

  const openModal = (index, artistType) => {
    setClickedIndex(index);
    if (artistType === 'Beautician') {
      setArtistModalVisible(true);
      setStudioModalVisible(false);
    } else {
      setArtistModalVisible(false);
      setStudioModalVisible(true);
    }
  };
  useEffect(() => {
    // if filter type equal to the artist then set the data to artist else studio
    if (filter === 'artist') {
      setDynamicData(artistDiscovires);
    } else {
      setDynamicData(studiosDiscovires);
    }
  }, [artistDiscovires, studiosDiscovires, filter]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 90 }}>
        <Header backBtn />

        <Text
          style={{
            color: '#193356',
            fontFamily: fonts.hk_bold,
            fontSize: 40,
            marginHorizontal: widthToDp(5),
          }}>
          Discover
        </Text>
        <Text
          style={{
            color: '#67718C',
            fontSize: 16,
            fontFamily: fonts.robo_reg,
            marginLeft: widthToDp(5),
            marginRight: widthToDp(25),
          }}>
          Find the market’s favorites all under one roof -- Kaynchi.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginHorizontal: widthToDp(5),
          }}>
          <TouchableOpacity onPress={() => setFilter('artist')}>
            <Text style={[styles.btn, filter === 'artist' && styles.activeFilter]}>Artist</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilter('studio')}>
            <Text style={[styles.btn, filter === 'studio' && styles.activeFilter]}>Studio</Text>
          </TouchableOpacity>
        </View>

        {/* <DiscoverModal
          visible={artistModalVisible}
          closeModal={() => setArtistModalVisible(false)}
          background_image={background_image}
          name={dynamicData[clickedIndex]?.name}
          profession="Beautician"
          experience=" New Artist"
          knownFor="Known for something"
          // additionalInfo="Hi! I’m Narmeen, an experienced beautician with two years of expertise. I excel in facials, waxing and makeup application along with hair dos."
          // distance="1.1 Km away"
          dollars="~$$$"
          data={DATA}
          navigation={props.navigation}
        /> */}
        <DiscoverModal
          visible={studioModalVisible}
          closeModal={() => setStudioModalVisible(false)}
          background_image={clinic_image}
          name={dynamicData[clickedIndex]?.name}
          profession={dynamicData[clickedIndex]?.title}
          experience=" New Studio"
          knownFor="Known for something"
          additionalInfo={dynamicData[clickedIndex]?.bio ? dynamicData[clickedIndex]?.bio : "Welcome to Serene Wellness Clinic, Pakistan’s premier destination for face and skin treatments. We make sure you achieve natural well-being."}
          distance={dynamicData[clickedIndex]?.distance}
          dollars={
            dynamicData[clickedIndex]?.price_range_classified === 'low'
              ? '$'
              : dynamicData[clickedIndex]?.price_range_classified === 'medium'
                ? '$$'
                : dynamicData[clickedIndex]?.price_range_classified === 'high'
                  ? '$$$'
                  : ''
          }
          data={dynamicData[clickedIndex]?.known_for}
        />

        {dynamicData.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              openModal(index, item.artistType);
            }}>
            <ImageBackground source={clinic_image} resizeMode="cover" style={styles.backgroundImage}>
              <View key={index} style={styles.background_image}>
                <View style={styles.favouriteContainer}>
                  <Image source={favourite} style={{ width: 21, height: 20 }} />
                </View>
                <View style={styles.discoverContainer}>
                  <TouchableOpacity
                    // key={idx}
                    onPress={() => setClickedIndex(index)}
                    activeOpacity={0.7}
                    style={styles.dicoverImageContainer}>
                    <Image source={face} style={styles.dicoverImage} />
                    <Text style={{ color: '#0F2851', fontFamily: fonts.robo_med }}>{item.title}</Text>
                  </TouchableOpacity>
                </View>

                {item.name && (
                  <Text
                    style={{
                      fontSize: 34,
                      fontFamily: fonts.hk_bold,
                      color: 'white',
                      marginHorizontal: widthToDp(5),
                    }}>
                    {item.name}
                  </Text>
                )}
                <View style={styles.InfoContainer}>
                  <Image source={beautician} style={{ height: 13, width: 14, resizeMode: 'contain', marginRight: 5 }} />
                  <Text style={{ color: 'white', fontFamily: fonts.robo_med, fontSize: 14 }}>{item.artistType} •</Text>
                  <Text style={{ color: 'white', fontFamily: fonts.robo_med, fontSize: 14 }}>{item.level}</Text>
                  <Text style={{ color: '#1583D8', fontFamily: fonts.robo_med, fontSize: 14 }}>
                    {item.price_range_classified === 'low'
                      ? '$'
                      : item.price_range_classified === 'medium'
                        ? '$$'
                        : item.price_range_classified === 'high'
                          ? '$$$'
                          : ''}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* <Button
        title={'Continue'}
        btnStyle={styles.btn}
        onPress={() => props.navigation.navigate('Search')}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
    paddingTop: heightToDp(4),
  },

  indicatorView: {
    marginHorizontal: widthToDp(5),
    marginTop: heightToDp(3),
    marginBottom: 15,
  },
  row: { flexDirection: 'row', alignItems: 'center' },

  discoverContainer: {
    flexDirection: 'row',
    width: 'auto',
    flexGrow: 0,
    marginHorizontal: widthToDp(2),
    marginTop: heightToDp(46),
  },
  dicoverImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  dicoverImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    marginHorizontal: widthToDp(5),
    borderRadius: 10,
    opacity: 0.7,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    marginTop: 20,
  },
  background_image: {
    height: heightToDp(84),
  },
  favouriteContainer: {
    backgroundColor: '#FFFFFF66',
    padding: 10,
    position: 'absolute',
    right: 15,
    top: 25,
    borderRadius: 20,
  },
  InfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: widthToDp(5),
  },

  activeFilter: {
    backgroundColor: '#5EAC66',
    color: 'white',
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    fontFamily: fonts.hk_regular,
    color: '#193356',
    marginRight: 10,
  },
});

export default ConsumerDisocver;
