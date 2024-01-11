import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { width, heightToDp, widthToDp, height } from '../../utils/Dimensions';
import { Tabs } from '../../components';
import back from '../../assets/back.png';
import EditableField from '../../components/EditableField';
import ContainerWorkCertificate from './Components/ContainerWorkCertificate';

import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions';
import CertificationModalForm from '../../components/CertificationModalForm';
import WorkModalForm from '../../components/WrokModalForm';

import { useNavigation } from '@react-navigation/native';
import makeStyle from './artistUpdateProfile.styles';

const dummy = require('../../assets/dummy.png');
const beauty = require('../../assets/beautician.png');
const share = require('../../assets/share.png');
const hair = require('../../assets/HairDark.png');
const face = require('../../assets/FaceDark.png');
const waxing = require('../../assets/BodyDark.png');
const Massages = require('../../assets/SpaDark.png');
const eye_face = require('../../assets/eye_face.png');
const Botox = require('../../assets/TreatDark.png');

const theme = useTheme();

const DATA = [
  {
    name: 'About',
  },
  {
    name: 'Reviews',
  },
];

const headerHeight = heightToDp(57.5);
const headerFinalHeight = heightToDp(25);

const dummyImages = [hair, face, waxing, Botox];

const ArtistUpdateProfile = () => {
  const styles = makeStyle(theme)
  const [subHeading, setSubHeading] = useState('');
  const [isCertModalVisible, setIsCertModalVisible] = useState(false);
  const [isExpModalVisible, setIsExpModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isWrokEdit, setIsWorkEdit] = useState(false);
  const [data, setData] = useState(null);

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const [images, setImages] = useState([hair, face, waxing, Botox]);
  const navigation = useNavigation();

  const certificates = useSelector(state => state.common.certificates);
  const experience = useSelector(state => state.common.experience);

  const auth = useSelector(state => state.auth);
  const { categories } = useSelector(state => state.common);
  const { title, level, bio } = auth.profile;
  const { name } = auth.user;
  const portfolio = auth.portfolio;

  const [inputValue, setInputValue] = useState(title);
  const [description, setDescription] = useState(bio);

  const [selectedTab, setSelectedTab] = useState(null);

  const dispatch = useDispatch();

  const handleTabSelection = tabData => {
    setSelectedTab(tabData);
  };
  const handleEditTitle = () => {
    setIsEditingTitle(!isEditingTitle);
  };

  const handleEditDescription = () => {
    setIsEditingDescription(!isEditingDescription);
  };
  const handleSavePress = () => {
    if (isEditingTitle) {
      dispatch(updateProfile({ title: inputValue }));
      setIsEditingTitle(false);
      setIsEditingDescription(false);
    } else {
      dispatch(updateProfile({ bio: description }));
      setIsEditingTitle(false);
      setIsEditingDescription(false);
    }
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  const offset = headerHeight - headerFinalHeight;

  const opacity = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -offset],
    extrapolate: 'clamp',
  });

  const opacityHeader = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, offset],
    extrapolate: 'clamp',
  });

  const translateYOffset = 0;

  const translateName = scrollY.interpolate({
    inputRange: [0, offset / 2, offset],
    outputRange: [0, translateYOffset, -widthToDp(5)],
    extrapolate: 'clamp',
  });

  const scaleName = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  const translateRating = scrollY.interpolate({
    inputRange: [0, offset / 2, offset],
    outputRange: [0, 10, -widthToDp(5) + headerFinalHeight],
    extrapolate: 'clamp',
  });

  const scaleRating = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, 1],
    extrapolate: 'clamp',
  });

  const toggleModal = () => {
    setData(null);
    setIsEdit(false);
    setIsCertModalVisible(!isCertModalVisible);
  };
  const toggleExperieceModal = () => {
    setData(null);
    setIsEdit(false);
    setIsExpModalVisible(!isExpModalVisible);
  };
  const editCertModal = e => {
    setData(e);
    setIsEdit(true);
    setIsCertModalVisible(!isCertModalVisible);
  };
  const editExpModal = e => {
    setData(e);
    setIsWorkEdit(true);
    setIsExpModalVisible(!isExpModalVisible);
  };

  const handleTabButtonClick = txt => {
    // console.log(txt);
    setSubHeading(txt);
    let arrayToMap = [];
    txt.forEach(_ => {
      const filtered = portfolio.find(obj => obj.hasOwnProperty(_));
      if (filtered) {
        arrayToMap = Object.values(filtered)[0];
      }
    });

    setImages(arrayToMap);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#000" barStyle={'light-content'} showHideTransition={'fade'} />
      <View
        style={{
          height: getStatusBarHeight(),
          backgroundColor: '#000',
          zIndex: 99,
        }}
      />

      <Animated.View style={[styles.header, { height: headerHeight, transform: [{ translateY: opacity }] }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 24, paddingVertical: 6 }}>
          <Image source={back} resizeMode="contain" />
        </TouchableOpacity>
        <Animated.View style={[{ transform: [{ translateY: opacityHeader }] }]} />
        <View style={styles.headerMain}>
          <View style={styles.centerDiv}>
            <Animated.Text
              style={[styles.artistName, { transform: [{ translateX: translateName }, { scale: scaleName }] }]}>
              {name ?? 'Narmeen Iqbal'}
            </Animated.Text>
          </View>
          <View style={styles.centerDiv}>
            <Animated.View
              style={{
                transform: [{ translateY: opacity }],
              }}>
              <Image
                source={beauty}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
            </Animated.View>
            <View style={[styles.centerDiv, { paddingTop: 5 }]}>
              <Animated.Text style={[styles.artistLocation, { transform: [{ translateY: opacity }] }]}>
                {' ' + title + ' ' ?? '  Beautician '}
              </Animated.Text>

              <Animated.View style={[styles.dotContainer, { transform: [{ translateY: opacity }] }]}>
                <Animated.Text
                  style={[
                    styles.artistRating,
                    {
                      transform: [{ translateX: translateRating }, { scale: scaleRating }],
                    },
                  ]}>
                  {'.'}
                </Animated.Text>
              </Animated.View>
              <Animated.Text style={[styles.artistLocation, { transform: [{ translateY: opacity }] }]}>
                {' ' + level + ' ' ?? ' New Artist'}
              </Animated.Text>
            </View>

            <Animated.View style={[styles.imageShare, { transform: [{ translateY: opacity }] }]}>
              <Image source={share} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
            </Animated.View>
          </View>
        </View>
        {/* </ImageBackground> */}
      </Animated.View>

      <ScrollView
        scrollEventThrottle={10}
        style={{ height: height }}
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}>
        <View style={{ marginTop: headerHeight, marginLeft: widthToDp(6) }}>
          <Tabs txtStyle={{ width: widthToDp(37), textAlign: 'center' }} selectedTab={handleTabSelection} DATA={DATA} />
        </View>

        <EditableField
          label="Title"
          value={inputValue}
          isEditing={isEditingTitle}
          onEditPress={handleEditTitle}
          onChangeText={setInputValue}
          onSavePress={handleSavePress}
          limitText={`${inputValue.length}/15`}
        />

        <EditableField
          label="Description"
          value={description}
          isEditing={isEditingDescription}
          onEditPress={handleEditDescription}
          onChangeText={setDescription}
          onSavePress={handleSavePress}
          placeholder="For e.g Make up artist, Stylist, Barber"
          limitText={`${description?.length}/15`}
        />

        <ContainerWorkCertificate
          title="Certifications & Diploma"
          imageSource={dummy}
          toggleModal={toggleModal}
          toggleEditModal={editCertModal}
          data={certificates}
          as={1}
        />

        <ContainerWorkCertificate
          title="Work Experience"
          imageSource={dummy}
          toggleModal={toggleExperieceModal}
          toggleEditModal={editExpModal}
          data={experience}
          as={2}
        />

        <CertificationModalForm
          isModalVisible={isCertModalVisible}
          toggleModal={toggleModal}
          modalHeading="Add diploma & Certificate"
          modalsubHeading="Complete your verification to activate your gig on the marketplace"
          modaltitle="Name"
          modaltitle2="Issuing Organization"
          edit={isEdit}
          data={data}
        />
        <WorkModalForm
          isModalVisible={isExpModalVisible}
          toggleModal={toggleExperieceModal}
          modalHeading="Add Experience"
          modalsubHeading="Complete your verification to activate your gig on the marketplace"
          modaltitle="Job Title"
          modaltitle2="Company Name"
          edit={isWrokEdit}
          data={data}
        />

        <View style={{ marginLeft: widthToDp(5) }}>
          <Text style={[styles.welcomeTxt, { paddingTop: 7 }]}>Portfolio</Text>
          <Text
            style={{
              color: '#67718C',
              fontFamily: fonts.robo_reg,
              fontSize: 14,
            }}>
            Check out {name}'s best work
          </Text>
        </View>
        <View>
          <Tabs selectedTab={handleTabButtonClick} DATA={categories} />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.parentUpload}>
          {images.length > 0
            ? images.map((image, index) => (
                <View key={index} style={styles.imageWrapper}>
                  <Image source={image} style={styles.image} />
                </View>
              ))
            : dummyImages.map((image, index) => (
                <View key={index} style={styles.imageWrapper}>
                  <Image source={image} style={styles.image} />
                </View>
              ))}
        </ScrollView>

        {/* <View style={styles.parentUpload}>
          <Tabs selectedTab={txt => setSubHeading(txt)} DATA={DATATabs} /> */}
        {/* <TouchableOpacity
            onPress={() => {
              ImageCropPicker.openPicker({
                cropping: false,
              }).then(image => {
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
          </TouchableOpacity> */}
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistUpdateProfile;


