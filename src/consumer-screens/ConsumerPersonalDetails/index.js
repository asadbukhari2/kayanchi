import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput } from '../../components';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image, ScrollView } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons, you can change it to any other supported icon library.
import { showMessage } from 'react-native-flash-message';

const currentlocation = require('../../assets/currentlocation.png');
const theme = useTheme();

const Gender = [
  {
    name: 'Hair',
    icons: [
      require('../../assets/Haircut.png'),
      require('../../assets/Haircolor.png'),
      require('../../assets/Styling.png'),
    ],
    message: ['Haircut', 'Hair Color', 'Styling'],
  },
  {
    name: 'Face',
    icons: [
      require('../../assets/Makeup.png'),
      require('../../assets/EyeLashes.png'),
      require('../../assets/Facials.png'),
    ],
    message: ['Makeup', 'EyeLashes', 'Facials'],
  },
  {
    name: 'Body',
    icons: [
      require('../../assets/Waxing.png'),
      require('../../assets/Pedicure.png'),
      require('../../assets/Medicure.png'),
    ],
    message: ['Waxing', 'Pedicure', 'Medicure'],
  },
  {
    name: 'Spa',
    icons: [
      require('../../assets/Massages.png'),
      require('../../assets/Oiling.png'),
      require('../../assets/Cupping.png'),
    ],
    message: ['Massages', 'Oiling', 'Cupping'],
  },
  {
    name: 'Treatments',
    icons: [require('../../assets/Botox.png'), require('../../assets/Fillers.png'), require('../../assets/Laser.png')],
    message: ['Botox', 'Fillers', 'Laser'],
  },
];

export default function ConsumerPersonalDetails(props) {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState('');

  const [loading, setLoading] = useState(false);

  const SkillsHandler = async () => {
    console.log('clicked');
    // navigation.navigate('ArtistOnBoardingWelcome');
    props.navigation.navigate('ArtistProfile');
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
        <Text style={styles.subheading}>Name</Text>
        <TextInput
          input={text => setName(text)}
          placeholder={'Rizwan Noor'}
          inputBoxStyle={{
            borderBottomColor: '#F1F1F1',
            backgroundColor: '#F1F1F1',
            borderRadius: 5,
            padding: 10,
            color: '#84668C',
          }}
          underlineColorAndroid="transparent"
          underlineColorIOS="transparent"
        />

        <View style={styles.emailcontaienr}>
          <Text style={{ color: '#84668C', fontSize: 16, paddingTop: 10 }}>Email</Text>
          <Text style={{ color: '#1583D8', paddingTop: 10, fontSize: 12 }}>Verify Email</Text>
        </View>
        <TextInput
          input={text => setName(text)}
          placeholder={'Enter your email'}
          inputBoxStyle={{
            borderBottomColor: '#F1F1F1',
            backgroundColor: '#F1F1F1',
            borderRadius: 5,
            padding: 10,
            color: '#84668C',
          }}
        />

        <Text style={styles.subheading}>Password</Text>

        <TextInput
          input={text => setName(text)}
          placeholder={'Set a Password'}
          inputBoxStyle={{
            borderBottomColor: '#F1F1F1',
            backgroundColor: '#F1F1F1',
            borderRadius: 5,
            padding: 10,
            color: '#84668C',
          }}
        />
        <Text style={styles.subheading}>Mobile Number</Text>

        <TextInput
          input={text => setName(text)}
          placeholder={'0335 5487845'}
          inputBoxStyle={{
            borderBottomColor: '#F1F1F1',
            backgroundColor: '#F1F1F1',
            borderRadius: 5,
            padding: 10,
            color: '#84668C',
          }}
        />

        <View style={styles.emailcontaienr}>
          <Text style={{ color: '#84668C', fontSize: 16, paddingTop: 10, fontFamily: fonts.robo_bold }}>
            Your default address
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={currentlocation} style={{ width: 12, height: 12 }} />
            <Text
              style={{
                color: '#1583D8',
                paddingTop: 10,
                fontSize: 12,
                paddingBottom: 10,
              }}>
              Current Location
            </Text>
          </View>
        </View>

        <TextInput
          input={text => setName(text)}
          placeholder={'This is your most used address'}
          inputBoxStyle={{
            borderBottomColor: '#F1F1F1',
            backgroundColor: '#F1F1F1',
            borderRadius: 5,
            padding: 10,
            color: '#84668C',
            height: heightToDp(35),
            textAlignVertical: 'top',
          }}
        />
        <Text
          style={{
            color: '#1583D8',
            paddingTop: 10,
            fontSize: 12,
            marginRight: 20,
            textAlign: 'right',
          }}>
          0/200
        </Text>
        <Button title={'Save'} btnStyle={[styles.btn, { marginTop: heightToDp(10) }]} onPress={SkillsHandler} />
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
  heading: {
    fontSize: 40,
    color: '#0F2851',
    paddingLeft: widthToDp(4),
    fontFamily: fonts.hk_bold,
  },
  subheading: {
    color: '#84668C',
    fontSize: 16,
    paddingTop: 10,
    fontFamily: fonts.robo_bold,
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
