import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header } from '../../components';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons, you can change it to any other supported icon library.

import { useSelector } from 'react-redux';

const whatsappphone = require('../../assets/whatsappphone.png');
const theme = useTheme();

export default function ArtistProfileSaved(props) {

  const auth = useSelector(state => state.auth);

  const { email, name, phone_number } = auth.user;

  const editClickHandler = () => {
    props.navigation.navigate('ArtistPersonalDetails');

  const [skills, setSkills] = useState([]);
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.auth.user);
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
        <Text style={styles.heading}>Personal Details</Text>
        <View style={styles.personalMain}>
          <View style={styles.personalContainer}>
            <View style={{ paddingLeft: widthToDp(4) }}>
              <Text style={styles.subheading}>Name</Text>
         <Icon name={'pencil'} style={styles.icon} />

              <Text style={{ color: theme.greyText }}>{user.name}</Text>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate('ArtistProfileStack', {
                    screen: 'ArtistPersonalDetails',
                  })
                }
                style={{ padding: heightToDp(2.9) }}>
                <Icon
                  name={'pencil'}
                  color={theme.primary}
                  size={16}
                  style={[styles.icon, { backgroundColor: '#eee', padding: 8, borderRadius: 20 }]}
                />

              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.personalContainer}>
            <View style={{ paddingLeft: widthToDp(4) }}>
              <Text style={styles.subheading}>Email</Text>

              <Text style={{ color: theme.greyText }}>{user.email}</Text>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate('ArtistProfileStack', {
                    screen: 'ArtistPersonalDetails',
                  })
                }
                style={{ padding: heightToDp(2.9) }}>
                <Icon
                  name={'pencil'}
                  color={theme.primary}
                  size={16}
                  style={[styles.icon, { backgroundColor: '#eee', padding: 8, borderRadius: 20 }]}
                />

              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.personalContainer}>
            <View style={{ paddingLeft: widthToDp(4) }}>
              <Text style={styles.subheading}>Mobile Number</Text>
              {/* // TODO: Phone number */}
              {/* <Text style={{ color: theme.greyText }}>{user.phone_number}</Text> */}
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate('ArtistProfileStack', {
                    screen: 'ArtistPersonalDetails',
                  })
                }
                style={{ padding: heightToDp(2.9) }}>
                <Icon
                  name={'pencil'}
                  color={theme.primary}
                  size={16}
                  style={[styles.icon, { backgroundColor: '#eee', padding: 8, borderRadius: 20 }]}
                />

              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.personalContainer}>
            <View style={{ paddingLeft: widthToDp(4) }}>
              <Text style={[styles.subheading]}>Your default address</Text>

              <Text style={{ width: widthToDp(54), color: theme.greyText }}>
                House B91, Street 2, DHA Phase VI, Ithehad commercial Lane 8 Karachi
              </Text>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate('ArtistProfileStack', {
                    screen: 'ArtistPersonalDetails',
                  })
                }
                style={{ padding: heightToDp(2.9) }}>
                <Icon
                  name={'pencil'}
                  color={theme.primary}
                  size={16}
                  style={[styles.icon, { backgroundColor: '#eee', padding: 8, borderRadius: 20 }]}
                />

              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.headingtxt}>
          To update your email address please contact Kaynchi customer support and they will help you out.
        </Text>

        <Button
          title={'Whatsapp Kyanchi'}
          btnStyle={[styles.btn, { marginTop: heightToDp(10), backgroundColor: '#668C6A' }]}
          image={whatsappphone}
          imageStyle={styles.iconStyles}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  btn: {
    marginBottom: heightToDp(3.5),
    color: '#668C6A',
  },
  genTxt: {
    fontFamily: fonts.robo_reg,
    fontSize: 14,
    lineHeight: 16.41,
    color: theme.background,
  },
  infoText: {
    color: theme.dark,
  },
  icon: { backgroundColor: '#EEEEEE', padding: 14, borderRadius: 50, color: theme.primary, fontSize: 18 },
  genView: {
    width: width * 0.91,
    alignSelf: 'center',
    marginTop: heightToDp(4.5),
  },
  iconStyles: {
    width: 25,
    height: 25,
    marginRight: 10,
    resizeMode: 'contain',
  },
  headingtxt: {
    color: '#677790',
    fontSize: 12,
    marginHorizontal: widthToDp(4),
    fontFamily: fonts.robo_reg,
  },
  personalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(5),
    marginRight: widthToDp(4),
    alignItems: 'center',

  },
  personalMain: {
    backgroundColor: 'white',
    marginHorizontal: widthToDp(4),
    paddingVertical: 10,
    marginVertical: 15,
    borderRadius: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },
  heading: {
    fontSize: 40,
    color: theme.darkBlue,
    paddingLeft: widthToDp(4),
    fontFamily: fonts.hk_bold,
  },
  subheading: {
    color: theme.primary,
    fontSize: 16,
    paddingTop: 10,
    fontFamily: fonts.robo_bold,
  },

})