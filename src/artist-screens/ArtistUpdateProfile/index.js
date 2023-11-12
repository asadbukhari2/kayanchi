import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { width, heightToDp, widthToDp, height } from '../../utils/Dimensions';
import { Header, Tabs } from '../../components';
import back from '../../assets/back.png';
import EditableField from '../../components/EditableField';
import ContainerWorkCertificate from './Components/ContainerWorkCertificate';
import Gallery from '../../assets/Gallery.png';
import ImageCropPicker from 'react-native-image-crop-picker';

import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions';
import CertificationModalForm from '../../components/CertificationModalForm';
import WorkModalForm from '../../components/WrokModalForm';
import { getCertificates } from '../../redux/actions/commonActions';
import { useNavigation } from '@react-navigation/native';

const dummy = require('../../assets/dummy.png');
const beauty = require('../../assets/beautician.png');
const share = require('../../assets/share.png');
const hair = require('../../assets/HairDark.png');
const face = require('../../assets/FaceDark.png');
const waxing = require('../../assets/BodyDark.png');
const Massages = require('../../assets/SpaDark.png');
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

const DATATabs = [
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

const headerHeight = heightToDp(57.5);
const headerFinalHeight = heightToDp(25);

const ArtistUpdateProfile = () => {
  const [subHeading, setSubHeading] = useState('');
  const [isCertModalVisible, setIsCertModalVisible] = useState(false);
  const [isExpModalVisible, setIsExpModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isWrokEdit, setIsWorkEdit] = useState(false);
  const [data, setData] = useState(null);

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const navigation = useNavigation();
  const certLoading = useSelector(state => state.common.certLoading);
  const expLoading = useSelector(state => state.common.expLoading);
  const certificates = useSelector(state => state.common.certificates);
  const experience = useSelector(state => state.common.experience);

  const auth = useSelector(state => state.auth);
  const { title, level, bio } = auth.profile;
  const { name } = auth.user;

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

  const translateYOffset = 5;

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
        <Animated.View style={[{ transform: [{ translateY: opacityHeader }] }]}>
          {/* <Header backBtnWhite /> */}
        </Animated.View>
        <View style={styles.headerMain}>
          {/* <Text style={styles.artistLocation}>{'3.2 kms away from you'}</Text> */}
          <View style={styles.centerDiv}>
            <Animated.Text
              // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
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
          limitText="0/15"
        />

        <EditableField
          label="Description"
          value={description}
          isEditing={isEditingDescription}
          onEditPress={handleEditDescription}
          onChangeText={setDescription}
          onSavePress={handleSavePress}
          placeholder="For e.g Make up artist, Stylist, Barber"
          limitText="0/100"
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

        {/* <View style={styles.Diploma}>
          <View style={styles.gigContainer}>
            <Text style={styles.heading}>Certifications & Diploma</Text>
            <Image source={AddMore} style={{width: 20, height: 20}} />
          </View>
          <View style={styles.separator}></View>
          <View style={styles.DiplomaConatiner}>
            <Image
              source={dummy}
              style={{width: 50, height: 50, marginLeft: 10}}
            />
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={styles.subheading}>
                Diploma in Hair, Scalp & Color Science
              </Text>
              <Text>Loreal Paris</Text>
              <Text>Issued Date 2023</Text>
            </View>
            <View style={{marginRight: 10}}>
              <Feather style={{color: '#193356', fontSize: 18}} name="edit-2" />
            </View>
          </View>
        </View> */}
        {/* work experience */}
        {/* <View style={styles.Diploma}>
          <View style={styles.gigContainer}>
            <Text style={styles.heading}>Work Experience</Text>
            <Image source={AddMore} style={{width: 20, height: 20}} />
          </View>
          <View style={styles.separator}></View>
          <View style={styles.DiplomaConatiner}>
            <Image
              source={dummy}
              style={{width: 50, height: 50, marginLeft: 10}}
            />
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={styles.subheading}>Make Up artist and Founder </Text>
              <Text>A&I Studio</Text>
              <Text>Nov 2023 - present</Text>
              <Text>Lahore, Pakistan</Text>
            </View>
            <View style={{marginRight: 10}}>
              <Feather style={{color: '#193356', fontSize: 18}} name="edit-2" />
            </View>
          </View>
        </View> */}
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
          <Tabs selectedTab={txt => setSubHeading(txt)} DATA={DATATabs} />
        </View>

        <View style={styles.parentUpload}>
          <TouchableOpacity
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
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              ImageCropPicker.openPicker({
                cropping: false,
              }).then(image => {
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
                cropping: false,
              }).then(image => {
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistUpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },

  parentUpload: {
    width: widthToDp(90),
    marginLeft: widthToDp(5),
    marginTop: 10,
    marginHorizontal: 10,
    paddingBottom: 40,
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
    fontFamily: fonts.hk_bold,
    color: '#2F3A58',
  },
  Diploma: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: widthToDp(5),
    marginVertical: heightToDp(4),
    borderRadius: 10,
  },
  saveButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  saveButtonText: { color: '#84668C', fontSize: 12 },
  limitText: { fontSize: 12, paddingRight: 15, paddingLeft: 5, color: '#29AAE2' },
  saveButton: {
    borderWidth: 1,
    borderColor: '#84668C',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  titleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  input: { backgroundColor: 'red' },
  titleContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    marginHorizontal: widthToDp(4),
    paddingVertical: 10,
    borderRadius: 10,
  },
  title: { paddingLeft: 10, flex: 1 },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },
  follow: {
    fontSize: 12,
    fontFamily: fonts.robo_reg,
    lineHeight: 14.06,
    color: '#1583D8',
  },
  gigContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingRight: widthToDp(5),
    marginHorizontal: widthToDp(5),
  },
  heading: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    // paddingHorizontal: widthToDp(4),
    paddingVertical: heightToDp(3),
  },
  subheading: { fontSize: 16, color: '#333333', fontFamily: fonts.robo_bold },
  DiplomaConatiner: {
    width: width * 0.91,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  followBtn: {
    height: heightToDp(6.7),
    width: widthToDp(23.5),
    borderRadius: 30,
    position: 'absolute',
    borderWidth: 1,
    top: heightToDp(5.9),
    right: widthToDp(4.7),
    backgroundColor: theme.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artistName: {
    color: theme.background,
    fontSize: 32,
    fontFamily: fonts.hk_bold,
    lineHeight: 38.41,
  },
  artistLocation: {
    color: theme.background,
    fontSize: 14,
    fontFamily: fonts.robo_reg,
    lineHeight: 16.41,
  },
  artistRating: {
    color: theme.background,
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
  icon: {
    fontSize: heightToDp(5),
    color: theme.background,
  },
  dotContainer: {
    width: 5, // Adjust the size of the dot
    height: 5, // Adjust the size of the dot
    borderRadius: 5, // Make it a circle
    backgroundColor: '#ffffff', // Set the desired color for the dot
  },
  headerMain: {
    position: 'absolute',
    left: widthToDp(7.2),
    bottom: heightToDp(7.2),
  },
  header: {
    width: width,
    backgroundColor: '#000',
    position: 'absolute',
    top: getStatusBarHeight(),
    zIndex: 1,
  },
  imageShare: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: -200,
  },
  centerDiv: { flexDirection: 'row', alignItems: 'center' },

  subHeading: {
    fontSize: 17,
    fontFamily: fonts.hk_bold,
    lineHeight: 20.7,
    color: theme.darkBlack,
  },
});
