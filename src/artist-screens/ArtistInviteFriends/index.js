import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput } from '../../components';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image, ScrollView } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons, you can change it to any other supported icon library.
import { showMessage } from 'react-native-flash-message';

const invitefriend = require('../../assets/invitefriend.png');
const theme = useTheme();

export default function ArtistInviteFriends({ navigation }) {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState('');

  const [loading, setLoading] = useState(false);

  const SkillsHandler = async () => {
    navigation.navigate('ArtistOnBoardingWelcome');
    // try {
    //   const res = await api.post('/api/users/verifypassword', {
    //     email,
    //     phone_number,
    //     password,
    //   });
    //   setLoading(true);
    //   console.log(email, password, res.data, 'EMAIL/PASSWORD');
    //   console.log(res.data);
    // if (res.status == 200) {
    //   dispatch(saveUserData(res.data));
    //   dispatch(saveToken(res.data));
    //   showMessage({
    //     message: 'Logged in successfully!',
    //     type: 'success',
    //   });
    //   navigation.navigate('OnBoardingWelcome');
    // } else {
    //   showMessage({
    //     message: res.data.message,
    //     type: 'danger',
    //   });
    // }
    // } catch (error) {
    //   showMessage({
    //     message: error?.message,
    //     type: 'warning',
    //   });
    //   console.log(error);
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn titleShadow />
      <ScrollView>
        <Text style={[styles.heading, { fontFamily: fonts.hk_bold }]}>Bring a friend &</Text>
        <Text style={[styles.subheading, { fontFamily: fonts.robo_reg }]}>
          Get <Text style={{ fontFamily: fonts.robo_bold }}>15% off</Text> on your next order
        </Text>
        <Text style={[styles.subheading, { fontFamily: fonts.robo_reg }]}>
          Your friend gets <Text style={{ fontFamily: fonts.robo_bold }}>10% off</Text> on their first order
        </Text>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <Image source={invitefriend} style={{ height: 250, width: 250, resizeMode: 'contain' }} />
        </View>

        <Button
          title={'Invite your friend'}
          btnStyle={[styles.btn, { marginTop: heightToDp(10) }]}
          onPress={SkillsHandler}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  btn: {
    marginBottom: heightToDp(3.5),
    // position: 'absolute',
    // bottom: heightToDp(1.5),
  },
  genTxt: {
    fontSize: fonts.robo_reg,
    fontSize: 14,
    lineHeight: 16.41,
    color: theme.background,
  },
  genView: {
    width: width * 0.91,
    alignSelf: 'center',
    marginTop: heightToDp(4.5),

    // marginTopightToDp(8.5),
  },
  heading: { fontSize: 40, color: '#0F2851', paddingLeft: widthToDp(4) },
  subheading: {
    color: '#677790',
    fontSize: 14,
    paddingTop: 10,
    paddingLeft: widthToDp(4),
  },
  genBtn: {
    //   width: widthToDp(27.5),
    height: heightToDp(9.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  emailcontaienr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthToDp(4),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.9, // Use the width of the parent view to adjust the icon container
    marginTop: heightToDp(4.5),
    marginBottom: heightToDp(4.5),
  },
  iconWrapper: {
    alignItems: 'center',
    flexDirection: 'column', // Ensure text appears below the icon
  },
  iconText: {
    textTransform: 'uppercase',
    marginTop: heightToDp(3),
  },
});
