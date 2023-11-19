import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, width, widthToDp, height } from '../../utils/Dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { GradientRadio } from '../../components';
import Row from './component/Row';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../redux/actions';
import { useState } from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
const beauty = require('../../assets/beauty_color.png');
const facebook = require('../../assets/facebook.png');
const instagram = require('../../assets/instagram.png');
const twitter = require('../../assets/twitter.png');
const idea = require('../../assets/idea.png');
const bug = require('../../assets/bug.png');
import faq from '../../assets/faq.png';

const kyanchiIcon = require('../../assets/profile_kyanchi.png');
const theme = useTheme();

const ArtistProfile = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalNavigation, setModalNavigation] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const profile = useSelector(state => state.auth.profile);
  console.log(profile, 'hg');
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  const openFeedbackModal = navigation => {
    console.log('navigate', navigation);
    setModalVisible(true);
    setModalNavigation(navigation); // Save the navigation object in the state
  };

  const socialMediaIcons = [
    { title: 'Facebook', source: facebook },
    { title: 'Instagram', source: instagram },
    { title: 'Twitter', source: twitter },
  ];

  const PAYMENTS = [
    {
      icon: <Ionicons name={'wallet-outline'} style={{ fontSize: 20, color: theme.primary }} />,
      title: 'My Wallet',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistMyWallet',
        }),
    },
    {
      icon: <FontAwesome name={'credit-card'} style={{ fontSize: 19, color: theme.primary }} />,
      title: 'Payment methods',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistPaymentMethods',
        }),
    },
  ];

  const MYKAYNCHI = [
    {
      icon: <AntDesign name={'questioncircleo'} style={{ fontSize: 18, color: theme.primary }} />,
      title: 'Help Center',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistHelp',
        }),
    },
    {
      icon: (
        <Ionicons
          name={'ios-information-circle-outline'} // Use the information icon
          style={{ fontSize: 20, color: theme.primary }}
        />
      ),
      title: 'About',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistAbout',
        }),
    },
    {
      icon: <Icon name={'message-text-outline'} style={{ fontSize: 18, color: theme.primary }} />,
      title: 'Give us feedback',
      onPress: () => openFeedbackModal(props.navigation), // Pass the navigation prop
    },
    {
      icon: (
        <Image
          source={require('../../assets/logout.png')}
          style={{
            width: widthToDp(4.5),
            height: heightToDp(4.5),
            resizeMode: 'cover',
          }}
        />
      ),
      title: 'Log out',
      onPress: () => dispatch(signout()),
    },
    // {
    //   icon: (
    //     <Image
    //       source={require('../../assets/logout.png')}
    //       style={{
    //         width: widthToDp(4.5),
    //         height: heightToDp(4.5),
    //         resizeMode: 'cover',
    //       }}
    //     />
    //   ),
    //   title: 'Continue as a artist',
    //   onPress: () => gotoArtist(),
    // },
  ];

  const MAIN = [
    {
      icon: (
        <Image
          source={require('../../assets/orderList.png')}
          style={{
            width: widthToDp(4.5),
            height: heightToDp(4.5),
            resizeMode: 'cover',
          }}
        />
      ),
      title: 'Order Settings',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistOrderSetting',
        }),
    },
    {
      icon: <SimpleLineIcons name={'location-pin'} style={{ fontSize: 18, color: theme.primary }} />,
      title: 'Your saved addresses',
      // onPress: () => props.navigation.navigate('ArtistSavedAddresses'),
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistSavedAddresses',
        }),
    },
    {
      icon: <SimpleLineIcons name={'bell'} style={{ fontSize: 18, color: theme.primary }} />,
      title: 'Notifications',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistNotifications',
        }),
    },
    {
      icon: (
        <Image
          source={require('../../assets/globe.png')}
          style={{
            width: widthToDp(4.5),
            height: heightToDp(4.5),
            resizeMode: 'cover',
          }}
        />
      ),
      title: 'Language',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistLanguage',
        }),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: heightToDp(25) }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: widthToDp(4),
            marginTop: heightToDp(5.2),
          }}>
          <Image source={kyanchiIcon} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                color: '#84668C',
                fontSize: 16,
                fontFamily: fonts.robo_reg,
              }}>
              Switch to client
            </Text>
            <ToggleSwitch
              isOn={isEnabled}
              style={{ height: 20, marginRight: 10, marginLeft: 5 }}
              value={isEnabled}
              onColor="#84668C"
              offColor="#9A9A9A"
              size="small"
              onToggle={toggleSwitch}
            />
          </View>
        </View>

        <View style={styles.userProfileView}>
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate('ArtistProfileStack', {
                screen: 'ArtistYourProfile',
              });
            }}>
            {user.profile_image_url ? (
              <Image source={{ uri: user.profile_image_url }} style={styles.userImg} />
            ) : (
              <Image source={require('../../assets/profile.png')} style={styles.userImg} />
            )}
          </TouchableWithoutFeedback>
          <View style={styles.userDetailsView}>
            <Text style={styles.userName}>{user?.name}</Text>
            <View style={styles.centerDiv}>
              <Image
                source={beauty}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <View style={[styles.centerDiv, { paddingTop: 5 }]}>
                <Text
                  // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
                  style={[styles.artistLocation]}>
                  {' ' + profile?.title + ' '}
                </Text>

                <View style={[styles.dotContainer]}>
                  <Text
                    // onTextLayout={e => setRatingWidth(e.nativeEvent.lines[0].width)}
                    style={[styles.artistRating, { color: theme.primary }]}>
                    {'.'}
                  </Text>
                </View>
                <Text
                  // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
                  style={[styles.artistLocation]}>
                  {' ' + profile?.level}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                props.navigation.navigate('ArtistProfileStack', {
                  screen: 'ArtistProfileSaved',
                })
              }
              style={{ padding: heightToDp(2.9) }}>
              <Icon
                name={'pencil'}
                style={[styles.icon, { backgroundColor: '#EEEEEE', padding: 5, borderRadius: 20 }]}
              />
            </TouchableOpacity>
          </View>
        </View>

        <GradientRadio
          source={require('../../assets/marketpreview.png')}
          containerStyle={{
            height: heightToDp(12.2),
            marginVertical: heightToDp(6.7),
            width: width * 0.91,
            alignItems: 'center',
            paddingVertical: 0,
            paddingHorizontal: 0,
            justifyContent: 'center',
            borderRadius: 41,
            alignSelf: 'center',
            flexDirection: 'row',
          }}
          title={'Your marketplace preview'}
          gradients={['#84668C', '#84668C']}
          gradientEnd={{ x: 0, y: 1 }}
          gradientStart={{ x: 0, y: 0 }}
          titleStyle={{ marginTop: 0, marginLeft: widthToDp(2), fontFamily: fonts.robo_med }}
          imgStyle={{ width: widthToDp(4.5), height: heightToDp(4.5) }}
        />
        <GradientRadio
          source={require('../../assets/mail.png')}
          containerStyle={{
            height: heightToDp(12.2),
            // marginVertical: heightToDp(1.7),
            marginBottom: 15,
            width: width * 0.91,
            alignItems: 'center',
            paddingVertical: 0,
            paddingHorizontal: 0,
            justifyContent: 'center',
            borderRadius: 41,
            alignSelf: 'center',
            flexDirection: 'row',
          }}
          title={'Invite friends & get 15% off'}
          gradients={['#668C6A', '#668C6A']}
          gradientEnd={{ x: 0, y: 1 }}
          gradientStart={{ x: 0, y: 0 }}
          titleStyle={{ marginTop: 0, marginLeft: widthToDp(2), fontFamily: fonts.robo_med }}
          imgStyle={{ width: widthToDp(4.5), height: heightToDp(4.5) }}
          onPress={() =>
            props.navigation.navigate('ArtistProfileStack', {
              screen: 'ArtistInviteFriends',
            })
          }
        />
        <View style={styles.btnView}>
          {MAIN.map((item, index) => {
            return (
              <View style={{ marginTop: index > 0 ? heightToDp(4.5) : 0 }} key={item.title}>
                <Row icon={item.icon} title={item.title} onPress={item.onPress} />
              </View>
            );
          })}
        </View>
        <Text style={styles.heading}>{'Payments'}</Text>
        <View style={styles.btnView}>
          {PAYMENTS.map((item, index) => {
            return (
              <View style={{ marginTop: index > 0 ? heightToDp(4.5) : 0 }} key={item.title}>
                <Row icon={item.icon} title={item.title} onPress={item.onPress} />
              </View>
            );
          })}
        </View>
        <Text style={styles.heading}>{'My Kaynchi'}</Text>
        <View style={styles.btnView}>
          {MYKAYNCHI.map((item, index) => {
            return (
              <View style={{ marginTop: index > 0 ? 16 : 0 }} key={item.title}>
                <Row onPress={item.onPress} icon={item.icon} title={item.title} />
              </View>
            );
          })}
        </View>

        <View
          style={{
            marginHorizontal: widthToDp(2),
            paddingTop: 5,
          }}>
          <Text style={styles.heading}>Follow us</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {socialMediaIcons.map((icon, index) => (
              <View
                key={index}
                style={{
                  borderColor: theme.primary,
                  borderWidth: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 38,
                  borderRadius: 20,
                }}>
                <Image source={icon.source} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <Modal
        coverScreen={false}
        isVisible={modalVisible}
        style={{ flex: 1, margin: 0, justifyContent: 'flex-end' }}
        onSwipeComplete={() => setModalVisible(!modalVisible)}
        swipeDirection={['down']}>
        <View style={styles.modalMainView}>
          <TouchableOpacity
            onPress={() =>
              modalNavigation.navigate('ArtistProfileStack', {
                screen: 'ArtistShareIdea',
              })
            }>
            <View style={styles.feedbackContainer}>
              <Image source={idea} style={styles.ideaimage} />
              <View>
                <Text style={{ fontWeight: '700', color: '#2F3A58' }}>Share an idea</Text>
                <Text style={{ color: theme.darkModeText, width: '90%' }}>I have a suggestion or feature request</Text>
              </View>
              <Image source={faq} style={styles.faqimage} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              modalNavigation.navigate('ArtistProfileStack', {
                screen: 'ArtistReportBug',
              })
            }>
            <View style={styles.feedbackContainer}>
              <Image source={bug} style={styles.ideaimage} />
              <View>
                <Text style={{ fontWeight: '700', color: '#2F3A58' }}>Report a bug</Text>
                <Text style={{ color: theme.darkModeText, width: '90%' }}>Something isn't working as expected</Text>
              </View>
              <Image source={faq} style={styles.faqimage} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: '#677790',
              marginHorizontal: widthToDp(9),
              marginTop: 15,
            }}>
            For help resolving issues related to an order, please contect{' '}
            <Text style={{ color: '#84668C' }}>Customer Support</Text>
          </Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ideaimage: { width: 24, height: 26, resizeMode: 'contain' },
  feedbackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 20,
    paddingVertical: 20,
    marginHorizontal: widthToDp(5),
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  you: {
    fontFamily: fonts.hk_bold,
    fontSize: 32,
    lineHeight: 34,
    color: theme.darkBlue,
    marginTop: heightToDp(23.9),
    marginLeft: widthToDp(6.7),
  },
  faqimage: { width: 12, height: 12, resizeMode: 'contain' },

  modalMainView: {
    // height: height * 0.55,
    backgroundColor: '#F7F7F7',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 15,
  },
  userProfileView: {
    marginTop: heightToDp(2.2),
    paddingLeft: widthToDp(6.7),
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.91,
    alignSelf: 'center',
    height: 93,
    backgroundColor: theme.background,
    borderRadius: 10,
  },
  centerDiv: { flexDirection: 'row', alignItems: 'center' },
  artistName: {
    color: theme.background,
    fontSize: 32,
    fontFamily: fonts.hk_bold,
    lineHeight: 38.41,
  },
  artistLocation: {
    color: theme.primary,
    fontSize: 14,
    fontFamily: fonts.robo_reg,
    lineHeight: 16.41,
  },
  dotContainer: {
    width: 5, // Adjust the size of the dot
    height: 5, // Adjust the size of the dot
    borderRadius: 5, // Make it a circle
    backgroundColor: theme.primary, // Set the desired color for the dot
  },
  artistRating: {
    color: theme.primary,
    fontSize: 16,
    fontFamily: fonts.segoi,
    lineHeight: 21.28,
    marginLeft: 16,
    marginRight: 8.67,
  },
  icon: {
    fontSize: 20,
    color: theme.primary,
  },
  btnView: {
    width: width * 0.91,
    backgroundColor: theme.background,
    padding: 16,
    borderRadius: 10,
    alignSelf: 'center',
  },
  userImg: {
    width: widthToDp(12.8),
    height: heightToDp(12.8),
    resizeMode: 'cover',
    borderRadius: heightToDp(12.8) / 2,
  },
  userDetailsView: {
    flex: 1,
    marginLeft: widthToDp(5),
    marginRight: widthToDp(2.2),
  },
  userName: {
    fontFamily: fonts.robo_bold,
    fontSize: 20,
    lineHeight: 26,
    color: theme.darkBlack,
  },
  userContact: {
    fontFamily: fonts.gothic_regular,
    fontSize: 14,
    lineHeight: 20,
    color: theme.profileBlueText,
  },
  inviteBtn: {
    backgroundColor: theme.inviteBtnBlue,
    marginVertical: heightToDp(4.5),
  },
  inviteBtnIcon: {
    fontSize: 20,
    color: theme.background,
    marginRight: widthToDp(2.2),
  },
  heading: {
    fontFamily: fonts.robo_med,
    fontSize: 14,
    lineHeight: 16.41,
    color: theme.counterGrey,
    marginLeft: widthToDp(4.5),
    marginTop: heightToDp(6.7),
    marginBottom: heightToDp(2, 2),
  },
});

export default ArtistProfile;
