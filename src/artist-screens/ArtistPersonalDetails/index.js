import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput } from '../../components';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp } from '../../utils/Dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileDetails, updateUserDetail } from '../../redux/actions';
import { getCurrentLocation } from '../../utils/helper';
import makeStyle from './artistPersonalDetails.styles';

const currentlocation = require('../../assets/currentlocation.png');

export default function ArtistPersonalDetails(props) {
  const theme = useTheme();
  const styles = makeStyle(theme);

  const { userProfileDetails } = useSelector(state => state.auth);

  const { currentLocation } = useSelector(state => state.common);

  const [name, setName] = useState(userProfileDetails.name);
  const [email, setEmail] = useState(userProfileDetails.email);
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(userProfileDetails.phone_number);
  const [defaultAddress, setDefaultAddress] = useState(userProfileDetails.default_address);

  const dispatch = useDispatch();

  const saveClickHandler = async () => {
    const data = {
      name,
      email,
      phone_number: phoneNumber,
      default_address: defaultAddress,
      longitude: currentLocation?.longitude,
      latitude: currentLocation?.latitude,
    };

    await updateUserDetail(data);
    dispatch(getUserProfileDetails());
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
          <TouchableOpacity
            onPress={() => {
              getCurrentLocation({ dispatch });
            }}>
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
          {defaultAddress?.length}/200
        </Text>
        <Button title="Save" btnStyle={[styles.btn, { marginTop: heightToDp(10) }]} onPress={saveClickHandler} />
      </ScrollView>
    </SafeAreaView>
  );
}
