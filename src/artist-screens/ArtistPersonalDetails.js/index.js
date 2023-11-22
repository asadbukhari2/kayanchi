import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput } from '../../components';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetail, updateUserDetail } from '../../redux/actions';

const currentlocation = require('../../assets/currentlocation.png');
const theme = useTheme();

export default function ArtistPersonalDetails(props) {
  const auth = useSelector(state => state.auth);

  const { name: nm, email: em, phone_number, id } = auth.user;

  const [name, setName] = useState(nm);
  const [email, setEmail] = useState(em);
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(phone_number);
  const [defaultAddress, setDefaultAddress] = useState('');

  const dispatch = useDispatch();

  const saveClickHandler = async () => {
    const data = { name, email, phone_number: phoneNumber, default_address: defaultAddress };
    await updateUserDetail(data);
    dispatch(getUserDetail(id));
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn titleShadow />
      <ScrollView>
        <Text style={styles.heading}>Personal Details</Text>
        <Text style={styles.subheading}>Name</Text>
        <TextInput
          style={styles.inputField}
          value={name}
          input={true}
          onChangeText={e => setName(e)}
          placeholder="Asad Bukhari"
          placeholderTextColor={'#8D8A94'}
        />

        <View style={styles.emailcontaienr}>
          <Text style={{ color: '#84668C', fontSize: 16, paddingTop: 10 }}>Email</Text>
          <TouchableOpacity>
            <Text style={{ color: '#1583D8', paddingTop: 10, fontSize: 12 }}>Verify Email</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.inputField}
          value={email}
          input={true}
          disable
          onChangeText={e => setEmail(e)}
          placeholder="test@kayanchi.com"
          placeholderTextColor={'#8D8A94'}
        />

        <Text style={styles.subheading}>Password</Text>

        <TextInput
          style={styles.inputField}
          value={password}
          input={true}
          onChangeText={e => setPassword(e)}
          placeholder="Set a Password"
          placeholderTextColor={'#8D8A94'}
        />
        <Text style={styles.subheading}>Mobile Number</Text>

        <TextInput
          style={styles.inputField}
          value={phoneNumber}
          input={true}
          onChangeText={e => setPhoneNumber(e)}
          placeholder="03xx xxxxxxxx"
          placeholderTextColor={'#8D8A94'}
        />

        <View style={styles.emailcontaienr}>
          <Text style={{ color: '#84668C', fontSize: 16, paddingTop: 10, fontFamily: fonts.robo_bold }}>
            Your default address
          </Text>
          <TouchableOpacity>
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
          </TouchableOpacity>
        </View>

        <TextInput
          multiline={true}
          style={[styles.inputField, { textAlignVertical: 'top' }]}
          value={defaultAddress}
          input={true}
          height={heightToDp(35)}
          onChangeText={e => setDefaultAddress(e)}
          maxLength={200}
          placeholder="This is your most used address"
          placeholderTextColor={'#8D8A94'}
        />

        <Text
          style={{
            color: '#1583D8',
            paddingTop: 10,
            fontSize: 12,
            marginRight: 20,
            textAlign: 'right',
          }}>
          {defaultAddress.length}/200
        </Text>
        <Button title="Save" btnStyle={[styles.btn, { marginTop: heightToDp(10) }]} onPress={saveClickHandler} />
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
  },
  genTxt: {
    fontSize: fonts.robo_reg,

    lineHeight: 16.41,
    color: theme.background,
  },
  genView: {
    width: width * 0.91,
    alignSelf: 'center',
    marginTop: heightToDp(4.5),
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
    height: heightToDp(9.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  emailcontaienr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  inputField: {
    // fontFamily: fonts.robo_med,
    width: '100%',
    borderBottomColor: '#F1F1F1',
    backgroundColor: '#F1F1F1',
    borderRadius: 5,
    padding: 10,
    color: '#84668C',
  },
});
